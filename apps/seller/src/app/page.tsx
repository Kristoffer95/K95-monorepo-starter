import Image from 'next/image';
import { Button } from '@k95/shadcn/button';
import TestAlertDialog from './_components/test-alert-dialog';

export default function Home() {
  return (
    <main className='container border'>
      sfsfsdfs
      <div className='px-2'>
        sfs sfsf
        <div>
          <TestAlertDialog />
        </div>
        <div className='bg-red-50'>hey...</div>
        <Button>Basic button</Button>
      </div>
      {/* <Card /> */}
    </main>
  );
}
