"use server";

import prisma from "@/lib/prismaClient";

interface Userquery {
  name: string;
  email: string;
  phoneno: string;
  query: string;
}
export async function createQuery(queryData: Userquery) {
  try {
    await prisma.query.create({
      data: {
        name: queryData.name,
        email: queryData.email,
        phoneno: queryData.phoneno,
        query: queryData.query,
      },
    });
  } catch (err) {
    console.log(err);
  }
}
