// lib/prisma.js
import { PrismaClient } from '@prisma/client';

// This ensures a single instance of PrismaClient is used
// in development, preventing connection pool exhaustion.
let prisma;

if (process.env.NODE_ENV !== 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
