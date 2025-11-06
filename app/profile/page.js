import { checkUser } from '@/lib/checkUser';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns';

function AppointmentCard({ appointment, type }) {
  const person = type === 'patient' ? appointment.doctor : appointment.patient;

  return (
    <Card className='mb-4'>
      <CardContent className='pt-4'>
        <div className='flex items-center justify-between'>
          <div>
            <h4 className='font-semibold'>{person.name}</h4>
            <p className='text-sm text-muted-foreground'>
              {format(new Date(appointment.startTime), 'PPP')}
            </p>
            <p className='text-sm text-muted-foreground'>
              {format(new Date(appointment.startTime), 'p')} -{' '}
              {format(new Date(appointment.endTime), 'p')}
            </p>
          </div>
          <Badge
            variant={
              appointment.status === 'SCHEDULED' ? 'default' : 'secondary'
            }
          >
            {appointment.status}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

export default async function ProfilePage() {
  const user = await checkUser();

  if (!user) {
    return (
      <Card className='w-full max-w-2xl mx-auto mt-8'>
        <CardContent className='p-6'>
          <div className='flex items-center justify-center'>
            <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary'></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className='container mx-auto py-8 px-4'>
      <div className='max-w-7xl mx-auto space-y-8'>
        {/* Profile Header */}
        <Card>
          <CardContent className='pt-6'>
            <div className='flex flex-col md:flex-row items-center md:items-start gap-6'>
              <div className='relative'>
                {user.imageUrl ? (
                  <img
                    src={user.imageUrl}
                    alt={user.name}
                    className='w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-background'
                  />
                ) : (
                  <div className='w-24 h-24 md:w-32 md:h-32 rounded-full bg-muted flex items-center justify-center'>
                    <span className='text-4xl text-muted-foreground'>
                      {user.name[0]}
                    </span>
                  </div>
                )}
                <Badge
                  className='absolute bottom-0 right-0 capitalize'
                  variant={user.role === 'DOCTOR' ? 'default' : 'secondary'}
                >
                  {user.role.toLowerCase()}
                </Badge>
              </div>

              <div className='text-center md:text-left space-y-2 flex-1'>
                <h1 className='text-2xl font-bold'>{user.name}</h1>
                <p className='text-muted-foreground'>{user.email}</p>
                <div className='flex flex-wrap gap-2 justify-center md:justify-start'>
                  <Badge variant='outline' className='text-sm'>
                    {user.credits} Credits Available
                  </Badge>
                  {user.role === 'DOCTOR' && (
                    <Badge
                      variant={
                        user.verificationStatus === 'VERIFIED'
                          ? 'success'
                          : user.verificationStatus === 'REJECTED'
                          ? 'destructive'
                          : 'warning'
                      }
                    >
                      {user.verificationStatus}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue='profile' className='w-full'>
          <TabsList className='w-full justify-start'>
            <TabsTrigger value='profile'>Profile Details</TabsTrigger>
            <TabsTrigger value='appointments'>Appointments</TabsTrigger>
          </TabsList>

          <TabsContent value='profile'>
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  Your personal and professional details
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                {user.role === 'DOCTOR' && (
                  <>
                    <div className='space-y-2'>
                      <h3 className='font-semibold'>Specialty</h3>
                      <p className='text-muted-foreground'>
                        {user.specialty || 'Not specified'}
                      </p>
                    </div>
                    <Separator />
                    <div className='space-y-2'>
                      <h3 className='font-semibold'>Experience</h3>
                      <p className='text-muted-foreground'>
                        {user.experience
                          ? `${user.experience} years`
                          : 'Not specified'}
                      </p>
                    </div>
                    <Separator />
                    <div className='space-y-2'>
                      <h3 className='font-semibold'>Credentials</h3>
                      <p className='text-muted-foreground'>
                        {user.credentialUrl ? (
                          <a
                            href={user.credentialUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-primary hover:underline'
                          >
                            View Credentials
                          </a>
                        ) : (
                          'Not uploaded'
                        )}
                      </p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='appointments'>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>
                  Your scheduled{' '}
                  {user.role === 'DOCTOR' ? 'consultations' : 'appointments'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {user.role === 'DOCTOR' ? (
                  user.doctorAppointments?.length > 0 ? (
                    user.doctorAppointments.map((appointment) => (
                      <AppointmentCard
                        key={appointment.id}
                        appointment={appointment}
                        type='doctor'
                      />
                    ))
                  ) : (
                    <p className='text-muted-foreground text-center py-4'>
                      No upcoming consultations
                    </p>
                  )
                ) : user.patientAppointments?.length > 0 ? (
                  user.patientAppointments.map((appointment) => (
                    <AppointmentCard
                      key={appointment.id}
                      appointment={appointment}
                      type='patient'
                    />
                  ))
                ) : (
                  <p className='text-muted-foreground text-center py-4'>
                    No upcoming appointments
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
