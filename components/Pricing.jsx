import { PricingTable } from '@clerk/nextjs';
import React from 'react';
import { Card, CardContent } from './ui/card';

const Pricing = () => {
  return (
    <Card className='border-indigo-900/30 shadow-lg bg-linear-to-b from-indigo-900/10 via-indigo-900/5 to-indigo-900/10'>
      <CardContent className='p-6 md:p-8'>
        <PricingTable
          checkoutProps={{
            appearance: {
              elements: {
                drawerRoot: {
                  zIndex: 200,
                },
              },
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export default Pricing;
