import { Suspense } from 'react';
import ResultsContent from './ResultsContent';

export default function ResultsPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-4'>
      <div className='container mx-auto'>
        <h1 className='text-3xl font-bold mb-6 text-center text-indigo-800'>
          Analysis Results
        </h1>
        <Suspense
          fallback={
            <div className='text-center text-indigo-600'>
              Loading results...
            </div>
          }
        >
          <ResultsContent />
        </Suspense>
      </div>
    </div>
  );
}
