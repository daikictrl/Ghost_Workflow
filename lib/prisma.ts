import { PrismaClient } from '@/app/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Pool } from 'pg';
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
  const poolConfig: any = {
    connectionString: databaseUrl,
  };

  // Only override DNS resolution when explicitly opted in via env var.
  // This is useful when the local DNS server cannot resolve pooled.db.prisma.io.
  if (process.env.PRISMA_FORCE_POOLED_IP) {
    poolConfig.lookup = (hostname: string, options: any, callback: any) => {
      if (hostname === 'pooled.db.prisma.io') {
        const isAll = options && options.all;
        if (isAll) {
          return callback(null, [{ address: '217.69.3.105', family: 4 }]);
        }
        return callback(null, '217.69.3.105', 4);
      }
      return dns.lookup(hostname, options, callback);
    };
  }

  const pool = new Pool(poolConfig);
  const adapter = new PrismaPg(pool);
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
