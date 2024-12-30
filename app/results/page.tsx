import { Suspense } from 'react';
import ResultsContent from '../results/ResultsContent';

export default function ResultsPage() {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Results</h1>
      <Suspense fallback={<div>Loading results...</div>}>
        <ResultsContent />
      </Suspense>
    </div>
  );
}
