import {
  Calendar,
  Video,
  CreditCard,
  User,
  FileText,
  ShieldCheck,
} from 'lucide-react';

// JSON data for features - Focusing on streamlined digital health
export const features = [
  {
    icon: <User className='h-6 w-6 text-indigo-500' />,
    title: 'Personalized Health Passport',
    description:
      'Set up your health profile and preferences to instantly match with the most relevant specialists and services.',
  },
  {
    icon: <Calendar className='h-6 w-6 text-indigo-500' />,
    title: 'Instant Provider Scheduling',
    description:
      'View real-time doctor availability and secure your slot with a few quick taps, avoiding phone tag and wait times.',
  },
  {
    icon: <Video className='h-6 w-6 text-indigo-500' />,
    title: 'High-Definition Tele-Visits',
    description:
      'Engage in crystal-clear virtual appointments with your doctor using our secure, encrypted video platform.',
  },
  {
    icon: <CreditCard className='h-6 w-6 text-indigo-500' />,
    title: 'Flexible Payment Options',
    description:
      'Manage billing, submit insurance details, and use HSA/FSA funds effortlessly for all consultations.',
  },
  {
    icon: <ShieldCheck className='h-6 w-6 text-indigo-500' />,
    title: 'HIPAA-Compliant Privacy',
    description:
      'Your personal health information is protected by industry-leading security and strict regulatory adherence.',
  },
  {
    icon: <FileText className='h-6 w-6 text-indigo-500' />,
    title: 'Integrated Prescription Refills',
    description:
      'Receive digital prescriptions directly, view your full medical history, and manage specialist referrals.',
  },
];

// JSON data for testimonials - New names and experiences
export const testimonials = [
  {
    initials: 'ML',
    name: 'Michael L.',
    role: 'New Parent',
    quote:
      'The ability to schedule a quick video visit for my child after hours without leaving home was incredibly stress-reducing. Highly recommend this service!',
  },
  {
    initials: 'DR. F',
    name: 'Dr. Fiona A.',
    role: 'Dermatologist',
    quote:
      'This platform has significantly increased my outreach. The scheduling system is intuitive, and the video quality allows for effective remote diagnosis.',
  },
  {
    initials: 'TR',
    name: 'Tanya R.',
    role: 'Student',
    quote:
      "Managing my appointments and prescriptions used to be a headache. Now, everything's in one place, making my health management simple and reliable.",
  },
];

// JSON data for subscription benefits - New financial and flexibility focus
export const creditBenefits = [
  "Premium access grants <strong class='text-indigo-500'>zero co-pay</strong> for follow-up visits",
  "Unlock exclusive access to <strong class='text-indigo-500'>specialized wellness programs</strong>",
  "Subscription includes <strong class='text-indigo-500'>one free initial specialist consultation</strong> per quarter",
  "Receive <strong class='text-indigo-500'>monthly health reports</strong> summarizing your engagement and progress",
];
