import { PrismaClient } from "@prisma/client";

// TODO Remove the `{log: ["query"],}` option if the console gets too noisy

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
