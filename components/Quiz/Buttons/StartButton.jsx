// Correct import statement
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import React from 'react';

const StartButton = () => {
  const router = useRouter();

  const handleOnClick = () => {
    router.replace('/quiz');
  };

  return (
    <Button className='bg-cyan-700 hover:bg-cyan-600 text-slate-100 text-lg font-semibold shadow-lg w-full' onClick={handleOnClick}>
      Start Quiz
    </Button>
  );
};

export default StartButton;
