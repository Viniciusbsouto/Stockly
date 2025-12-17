/* eslint-disable no-unused-vars */
import { PrismaClient } from "@prisma/client";
const createPrismaClient = () => {
  return new PrismaClient()
};

type PrismaClientType = ReturnType<typeof createPrismaClient>;

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClientType | undefined;
}

let prisma: PrismaClientType;
if (process.env.NODE_ENV === "production") {
  prisma = createPrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = createPrismaClient();
  }
  prisma = global.cachedPrisma as PrismaClientType;
}

export const db = prisma;