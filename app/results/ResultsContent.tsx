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
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {results.map((result: Result, index: number) => (
        <Card
          key={index}
          className='bg-white bg-opacity-70 backdrop-blur-sm shadow-lg border-0'
        >
          <CardHeader className='bg-indigo-100 bg-opacity-50'>
            <CardTitle className='text-lg font-semibold text-indigo-800'>
              Image {index + 1}
            </CardTitle>
            <CardDescription className='text-indigo-600'>
              Analysis Results
            </CardDescription>
          </CardHeader>
          <CardContent className='pt-4'>
            <ul className='space-y-2'>
              {result.levels.map((level: number, levelIndex: number) => (
                <li
                  key={levelIndex}
                  className='flex items-center justify-between'
                >
                  <span className='font-medium text-indigo-700'>
                    Level {levelIndex + 1}:
                  </span>
                  <div className='flex items-center gap-2'>
                    <div className='w-32 bg-gray-200 rounded-full h-2.5'>
                      <div
                        className='bg-indigo-600 h-2.5 rounded-full'
                        style={{ width: `${level * 100}%` }}
                      ></div>
                    </div>
                    <span className='text-sm text-indigo-800'>
                      {(level * 100).toFixed(2)}%
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
