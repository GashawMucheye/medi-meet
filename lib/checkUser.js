import { currentUser } from '@clerk/nextjs/server';
import db from './prisma';

export const checkUser = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      throw new Error('Authentication required');
    }

    // Try to find existing user with full profile data
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
      include: {
        transactions: {
          where: {
            type: 'CREDIT_PURCHASE',
            createdAt: {
              gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
            },
          },
          orderBy: {
            createdAt: 'desc',
          },
          take: 1,
        },
        patientAppointments: {
          where: {
            status: 'SCHEDULED',
          },
          include: {
            doctor: true,
          },
          take: 5,
        },
        doctorAppointments: {
          where: {
            status: 'SCHEDULED',
          },
          include: {
            patient: true,
          },
          take: 5,
        },
        availabilities: {
          where: {
            endTime: {
              gte: new Date(),
            },
          },
          orderBy: {
            startTime: 'asc',
          },
          take: 10,
        },
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    // Create new user if not found
    const name = `${user.firstName || ''} ${user.lastName || ''}`.trim();
    const email = user.emailAddresses[0]?.emailAddress;

    if (!email) {
      throw new Error('Email address is required');
    }

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name: name || 'Anonymous User',
        imageUrl: user.imageUrl || null,
        email: email,
        role: 'UNASSIGNED',
        transactions: {
          create: {
            type: 'CREDIT_PURCHASE',
            packageId: 'free_user',
            amount: 2, // Start with 2 credits as per schema default
          },
        },
      },
      include: {
        transactions: {
          take: 1,
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });

    return newUser;
  } catch (error) {
    console.error('CheckUser Error:', error);
    throw error; // Rethrow to handle in the UI layer
  }
};
