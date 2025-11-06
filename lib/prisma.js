import { PrismaClient } from '../generated/client';

// Reuse PrismaClient instance across module reloads in development to avoid
// exhausting database connections (Next.js hot-reloads). See Prisma docs.

// Use globalThis.prisma at runtime (no TypeScript declaration needed in JS)

const prisma = global.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
export default prisma;
