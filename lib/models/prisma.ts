import { PrismaClient } from "@prisma/client";

declare global {
  var db: PrismaClient;
}

let db;

if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
} else {
  if (!global.db) {
    global.db = new PrismaClient();
  }
  db = global.db;
}

export const prisma = db;
