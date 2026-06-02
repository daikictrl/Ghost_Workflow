import { PrismaClient } from '@/app/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { withAccelerate } from '@prisma/extension-accelerate';
import dns from 'dns';

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
    lookup: (hostname, options, callback) => {
      if (hostname === 'pooled.db.prisma.io') {
        const isAll = options && (options as any).all;
        if (isAll) {
          return callback(null, [{ address: '217.69.3.105', family: 4 }] as any);
        }
        return callback(null, '217.69.3.105', 4);
      }
      return dns.lookup(hostname, options, callback);
    },
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
