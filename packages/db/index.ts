import { PrismaClient } from "./prisma/.generated/client";

export * from "./prisma/.generated/client";

function createPrismaClient() {
  return new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });
}
const globalForPrisma = globalThis as { prisma?: PrismaClient };

// establish connection (if not yet established)
// workaround from https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
