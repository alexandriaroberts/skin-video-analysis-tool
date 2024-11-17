'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

type Result = {
  status: string;
  levels: number[];
};

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const [averageLevels, setAverageLevels] = useState<number[]>([]);

  useEffect(() => {
    const data = searchParams.get('data');
    if (data) {
      const results: Result[] = JSON.parse(decodeURIComponent(data));
      const levels = results.map((r) => r.levels);
      const averages = levels[0].map(
        (_, i) => levels.reduce((sum, curr) => sum + curr[i], 0) / levels.length
      );
      setAverageLevels(averages);
    }
  }, [searchParams]);

  return (
    <div className='min-h-screen bg-background p-4 flex items-center justify-center'>
      <Card className='w-full max-w-md'>
        <CardHeader>
          <CardTitle>Test Results</CardTitle>
          <CardDescription>
            Analysis of biomarker levels across all captured images
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <Alert>
            <Info className='h-4 w-4' />
            <AlertDescription>
              These results show the average levels detected across all 5 photos
            </AlertDescription>
          </Alert>

          <div className='space-y-4'>
            {averageLevels.map((level, index) => (
              <div key={index} className='space-y-2'>
                <div className='flex justify-between text-sm'>
                  <span>Biomarker {index + 1}</span>
                  <span>{(level * 100).toFixed(1)}%</span>
                </div>
                <div className='h-2 rounded-full bg-muted overflow-hidden'>
                  <div
                    className='h-full bg-primary transition-all duration-500 ease-in-out'
                    style={{ width: `${level * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
