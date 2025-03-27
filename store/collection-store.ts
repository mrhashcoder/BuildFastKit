// collectionStore.ts
import {
  atom,
  atomFamily,
  useRecoilState,
  useRecoilCallback,
  selectorFamily,
} from "recoil";
import axiosInstance from "@/lib/axios";
import { useEffect } from "react";

// Enum for tracking fetch states
export enum FetchState {
  IDLE = "idle",
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

// Interface for an entity's state
export interface EntityState<T> {
  data: T | null;
  status: FetchState;
}

// Base URL for your Strapi REST API (adjust accordingly)
const BASE_URL = "http://localhost:1337/api";

/**
 * Creates a store for a given collection.
 *
 * @param collectionName - A unique name for the collection (e.g. "users").
 * @param apiEndpoint - The API endpoint for the collection (e.g. "users").
 *
 * @returns An object containing:
 *   - entityAtomFamily: An atom family that stores each entity's state keyed by its ID.
 *   - useEntityStore: A hook for CRUD operations on a single entity.
 *   - addEntity: A function to create a new entity.
 *   - useFetchEntities: A hook to fetch all entities (global fetch) and update the family.
 *   - useFetchNextEntities: A hook to fetch the next page of entities (pagination) and update the family.
 */
export function createCollectionStore<T>(
  collectionName: string,
  apiEndpoint: string,
  responeToData: Function
) {
  // Atom family for individual entity state, keyed by entity ID.
  const entityAtomFamily = atomFamily<EntityState<T>, string | number>({
    key: `${collectionName}EntityAtom`,
    default: (_entityId: string | number) => ({
      data: null,
      status: FetchState.IDLE,
    }),
  });

  const entityIdsAtom = atom<(string | number)[]>({
    key: `${collectionName}EntityIds`,
    default: [],
  });

  const aggregatedEntitiesSelector = selectorFamily<T[], (string | number)[]>({
    key: `${collectionName}AggregatedEntitiesSelector`,
    get:
      (ids: (string | number)[]) =>
      ({ get }) => {
        return ids
          .map((id) => {
            const entityState = get(entityAtomFamily(id));
            return entityState.data as T;
          })
          .filter((item) => item !== null);
      },
  });

  /**
   * Custom hook for CRUD operations on an individual entity.
   *
   * @param entityId - The unique ID of the entity.
   * @returns An object containing the entity's state and functions to fetch, update, and delete the entity.
   */
  const useEntityStore = (entityId: string | number) => {
    const [entityState, setEntityState] = useRecoilState(
      entityAtomFamily(entityId)
    );

    // Fetch a single entity from Strapi.
    const fetchEntity = async (): Promise<void> => {
      setEntityState((prev) => ({ ...prev, status: FetchState.LOADING }));
      try {
        const response = await axiosInstance.get(
          `${BASE_URL}/${apiEndpoint}/${entityId}`
        );
        setEntityState({ data: response.data, status: FetchState.SUCCESS });
      } catch (error) {
        setEntityState({ data: null, status: FetchState.ERROR });
      }
    };

    // Update an existing entity on Strapi.
    const updateEntity = async (updateData: Partial<T>): Promise<void> => {
      try {
        await axiosInstance.put(
          `${BASE_URL}/${apiEndpoint}/${entityId}`,
          updateData
        );
        setEntityState((prev) => ({
          ...prev,
          data: prev.data ? { ...prev.data, ...updateData } : (updateData as T),
        }));
      } catch (error) {
        // Optionally handle error.
      }
    };

    // Delete an entity from Strapi.
    const deleteEntity = async (): Promise<void> => {
      try {
        await axiosInstance.delete(`${BASE_URL}/${apiEndpoint}/${entityId}`);
        setEntityState({ data: null, status: FetchState.IDLE });
      } catch (error) {
        // Optionally handle error.
      }
    };

    return { entityState, fetchEntity, updateEntity, deleteEntity };
  };

  // Create a new entity in the collection on Strapi.
  const useAddEntity = () => {
    return useRecoilCallback(
      ({ set }) =>
        async (newEntityData: T): Promise<T> => {
          try {
            const response = await axiosInstance.post(
              `${BASE_URL}/${apiEndpoint}`,
              newEntityData
            );

            const newEntity = response.data.data; // Ensure correct API response structure
            const newEntityId = (newEntity as any).id;

            set(entityAtomFamily(newEntityId), {
              data: newEntity,
              status: FetchState.SUCCESS,
            });

            set(entityIdsAtom, (prevIds) => [...prevIds, newEntityId]);

            return newEntity;
          } catch (error) {
            console.error("Error adding entity:", error);
            throw error;
          }
        },
      [entityIdsAtom]
    );
  };

  /**
   * Hook for performing a global fetch of all entities.
   * This hook returns a callback that, when called, fetches all entities from the API,
   * updates the atom family for each entity, and returns an array of their IDs.
   */
  const useFetchEntities = () => {
    return useRecoilCallback(
      ({ set }) =>
        async (): Promise<string[]> => {
          try {
            const response = await axiosInstance.get(
              `${BASE_URL}/${apiEndpoint}`
            );
            const entities: T[] = responeToData(response); // assuming API returns an array of entities
            // Use the entity's id as the key. Adjust if your id field differs.
            console.log(entities);
            const ids = entities.map((entity) => (entity as any).id);
            // Update each entity's state in the atom family.
            entities.forEach((entity) => {
              const id = (entity as any).id;
              set(entityAtomFamily(id), {
                data: entity,
                status: FetchState.SUCCESS,
              });
            });

            set(entityIdsAtom, ids);
            return ids;
          } catch (error) {
            throw error;
          }
        },
      []
    );
  };

  /**
   * Hook for fetching a paginated list of entities.
   * This hook returns a callback that accepts page and limit parameters,
   * fetches the next page of entities, updates the atom family,
   * and returns an array of the fetched entities' IDs.
   *
   * @param page - The page number to fetch.
   * @param limit - The number of entities per page.
   */
  const useFetchNextEntities = () => {
    return useRecoilCallback(
      ({ set }) =>
        async (page: number, limit: number): Promise<(string | number)[]> => {
          try {
            const response = await axiosInstance.get(
              `${BASE_URL}/${apiEndpoint}`,
              {
                params: { page, limit },
              }
            );
            const entities: T[] = responeToData(response);

            const ids = entities.map((entity) => (entity as any).id);
            entities.forEach((entity) => {
              const id = (entity as any).id;
              set(entityAtomFamily(id), {
                data: entity,
                status: FetchState.SUCCESS,
              });
            });
            return ids;
          } catch (error) {
            throw error;
          }
        },
      []
    );
  };

  const useEntityIds = () => {
    const [ids, setIds] = useRecoilState(entityIdsAtom);
    const fetchEntities = useFetchEntities();

    useEffect(() => {
      if (ids.length === 0) {
        fetchEntities().then((fetchedIds) => {
          if (fetchedIds.length > 0) {
            setIds(fetchedIds);
          }
        });
      }
    }, [ids, setIds]);

    return ids;
  };

  return {
    entityAtomFamily,
    useEntityStore,
    useAddEntity,
    useFetchEntities,
    useFetchNextEntities,
    aggregatedEntitiesSelector,
    useEntityIds,
  };
}

// --------------------------------------------------
// Example usage:
//
// import { createCollectionStore } from "./collectionStore";
// import { User } from "../types/user";
// import { Wallpaper } from "../types/wallpaper";
//
// // Create a store for the "users" collection.
// export const usersStore = createCollectionStore<User>("users", "users");
//
// // Create a store for the "wallpapers" collection.
// export const wallpapersStore = createCollectionStore<Wallpaper>("wallpapers", "wallpapers");
//
// In a component:
//
// import { useEffect, useState } from "react";
// import { usersStore } from "./collectionStore";
//
// function UsersList() {
//   // useFetchEntities returns a callback that fetches and updates all entity atoms,
//   // and returns a list of IDs. The component can store the list of IDs locally.
//   const fetchEntities = usersStore.useFetchEntities();
//   const [userIds, setUserIds] = useState<(string | number)[]>([]);
//
//   useEffect(() => {
//     fetchEntities().then((ids) => {
//       setUserIds(ids);
//     });
//   }, [fetchEntities]);
//
//   // Now you can map over the IDs and use the atom family to read individual states.
//   return (
//     <ul>
//       {userIds.map((id) => (
//         <UserItem key={id} userId={id} />
//       ))}
//     </ul>
//   );
// }
//
// function UserItem({ userId }: { userId: string | number }) {
//   const { entityState } = usersStore.useEntityStore(userId);
//   if (entityState.status === FetchState.LOADING) return <li>Loading...</li>;
//   if (entityState.status === FetchState.ERROR) return <li>Error loading user {userId}</li>;
//   return <li>{entityState.data ? (entityState.data as any).username : "No Data"}</li>;
// }
//
// Similarly, use useFetchNextEntities for pagination.
// --------------------------------------------------

// const addEntity = usersStore.useAddEntity(); // Hook must be called inside a React component

// const handleAddEntity = async () => {
//   const newUser = { name: "John Doe", email: "john@example.com" };
//   await addEntity(newUser);
// };
