'use client';

import { useSearchParams } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Result = {
  levels: number[];
};

export default function ResultsContent() {
  const searchParams = useSearchParams();
  const data = searchParams.get('data');
  const results = data ? JSON.parse(data) : [];

  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {results.map((result: Result, index: number) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>Image {index + 1}</CardTitle>
            <CardDescription>Analysis Results</CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              {result.levels.map((level: number, levelIndex: number) => (
                <li key={levelIndex} className='mb-2'>
                  <span className='font-semibold'>Level {levelIndex + 1}:</span>{' '}
                  {(level * 100).toFixed(2)}%
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
