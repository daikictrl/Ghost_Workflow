import { PrismaClient } from '@/app/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { withAccelerate } from '@prisma/extension-accelerate';

const databaseUrl = process.env.DATABASE_URL || '';

const globalForPrisma = globalThis as unknown as {
  prisma: any | undefined;
};

let prismaInstance: any;

if (databaseUrl.startsWith('prisma+postgres://')) {
  prismaInstance =
    globalForPrisma.prisma ??
    new PrismaClient({
      accelerateUrl: databaseUrl,
    }).$extends(withAccelerate());
} else {
  const adapter = new PrismaPg({
    connectionString: databaseUrl,
  });
  prismaInstance =
    globalForPrisma.prisma ??
    new PrismaClient({
      adapter,
    });
}

export const prisma = prismaInstance;

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
