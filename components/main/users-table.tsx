"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "@/types/collections";

interface UserTableProps {
  users: User[];
}

export function UserTable({ users }: UserTableProps) {
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const [searchQuery, setSearchQuery] = useState("");
  const [providerFilter, setProviderFilter] = useState<string>("all");
  const [confirmedFilter, setConfirmedFilter] = useState<string>("all");
  const [blockedFilter, setBlockedFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState<string>("all");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    let result = [...users];

    // Search filter
    if (searchQuery) {
      result = result.filter(
        (user) =>
          user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Provider filter
    if (providerFilter !== "all") {
      result = result.filter((user) => user.provider === providerFilter);
    }

    // Confirmed filter
    if (confirmedFilter !== "all") {
      result = result.filter((user) =>
        confirmedFilter === "confirmed" ? user.confirmed : !user.confirmed
      );
    }

    // Blocked filter
    if (blockedFilter !== "all") {
      result = result.filter((user) =>
        blockedFilter === "blocked" ? user.blocked : !user.blocked
      );
    }

    // Date filter
    if (dateFilter !== "all" && selectedDate) {
      const dateString = format(selectedDate, "yyyy-MM-dd");
      result = result.filter((user) => {
        const userDate =
          dateFilter === "created"
            ? user.createdAt.substring(0, 10)
            : dateFilter === "updated"
              ? user.updatedAt.substring(0, 10)
              : user.publishedAt.substring(0, 10);

        return userDate === dateString;
      });
    }

    setFilteredUsers(result);
  }, [
    users,
    searchQuery,
    providerFilter,
    confirmedFilter,
    blockedFilter,
    dateFilter,
    selectedDate,
  ]);

  const resetFilters = () => {
    setSearchQuery("");
    setProviderFilter("all");
    setConfirmedFilter("all");
    setBlockedFilter("all");
    setDateFilter("all");
    setSelectedDate(undefined);
  };

  const uniqueProviders = users
    .map((user) => user.provider)
    .filter((value, index, self) => self.indexOf(value) === index);

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by username or email..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Select value={providerFilter} onValueChange={setProviderFilter}>
              <>
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Providers</SelectItem>
                  {uniqueProviders.map((provider) => (
                    <SelectItem key={provider} value={provider}>
                      {provider}
                    </SelectItem>
                  ))}
                </SelectContent>
              </>
            </Select>

            <Select value={confirmedFilter} onValueChange={setConfirmedFilter}>
              <>
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Confirmed" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="unconfirmed">Unconfirmed</SelectItem>
                </SelectContent>
              </>
            </Select>

            <Select value={blockedFilter} onValueChange={setBlockedFilter}>
              <>
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Blocked" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="blocked">Blocked</SelectItem>
                  <SelectItem value="unblocked">Unblocked</SelectItem>
                </SelectContent>
              </>
            </Select>

            <Popover>
              <>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-[130px] justify-start text-left font-normal"
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    <span>
                      {dateFilter === "all"
                        ? "Date"
                        : `${dateFilter.charAt(0).toUpperCase() + dateFilter.slice(1)} Date`}
                    </span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <div className="p-2 border-b">
                    <Select value={dateFilter} onValueChange={setDateFilter}>
                      <>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select date type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Dates</SelectItem>
                          <SelectItem value="created">Created At</SelectItem>
                          <SelectItem value="updated">Updated At</SelectItem>
                          <SelectItem value="published">
                            Published At
                          </SelectItem>
                        </SelectContent>
                      </>
                    </Select>
                  </div>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    initialFocus
                  />
                </PopoverContent>
              </>
            </Popover>

            <Button variant="ghost" onClick={resetFilters} size="sm">
              Reset
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Updated At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.id}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{user.provider}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        {user.confirmed ? (
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                            Confirmed
                          </Badge>
                        ) : (
                          <Badge variant="outline">Unconfirmed</Badge>
                        )}
                        {user.blocked && (
                          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                            Blocked
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      {new Date(user.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      {new Date(user.updatedAt).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center">
                    No users found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
