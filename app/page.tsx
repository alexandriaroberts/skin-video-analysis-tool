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
    <div className='min-h-screen bg-background p-4 flex items-center justify-center'>
      <Card className='w-full max-w-md'>
        <CardHeader>
          <CardTitle>Skin Video analysis tool</CardTitle>
          <CardDescription>
            Welcome to your diagnostic test process. This application will guide
            you through capturing images of your test device.
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <Alert>
            <Info className='h-4 w-4' />
            <AlertDescription>
              You will need to take 5 photos of your device under different
              lighting conditions for accurate results.
            </AlertDescription>
          </Alert>
          <div className='space-y-2 text-sm'>
            <p>Before you begin, please ensure:</p>
            <ul className='list-disc list-inside space-y-1'>
              <li>Your test device is on a flat, clean surface</li>
              <li>You have good lighting available</li>
              <li>Your phone camera is clean</li>
              <li>You can hold your phone steady</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Link href='/capture' className='w-full'>
            <Button className='w-full'>Begin Test Process</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
