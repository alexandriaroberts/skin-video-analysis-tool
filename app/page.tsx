'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-4 flex items-center justify-center'>
      <Card className='w-full max-w-md shadow-lg border-0'>
        <CardHeader className='bg-white bg-opacity-70 backdrop-blur-sm rounded-t-lg'>
          <CardTitle className='text-2xl font-bold text-indigo-800'>
            Skin Video Analysis Tool
          </CardTitle>
          <CardDescription className='text-indigo-600'>
            Welcome to your diagnostic test process. This application will guide
            you through capturing images of your test device.
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-6 bg-white bg-opacity-70 backdrop-blur-sm'>
          <Alert className='bg-blue-100 border-blue-300 text-blue-800'>
            <Info className='h-5 w-5 text-blue-500' />
            <AlertDescription>
              You will need to take 5 photos of your device under different
              lighting conditions for accurate results.
            </AlertDescription>
          </Alert>
          <div className='space-y-3 text-indigo-800'>
            <p className='font-semibold'>Before you begin, please ensure:</p>
            <ul className='list-disc list-inside space-y-2 pl-4'>
              <li>Your test device is on a flat, clean surface</li>
              <li>You have good lighting available</li>
              <li>Your phone camera is clean</li>
              <li>You can hold your phone steady</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className='bg-white bg-opacity-70 backdrop-blur-sm rounded-b-lg'>
          <Link href='/capture' className='w-full'>
            <Button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-300'>
              Begin Test Process
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
