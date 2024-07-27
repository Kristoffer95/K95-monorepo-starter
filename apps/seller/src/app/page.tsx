import Image from 'next/image';
import { Button } from '@k95/shadcn/button';
import TestAlertDialog from './_components/test-alert-dialog';
import { api } from '@/trpc/server';

export default async function Home() {
  // const post = await api.posts.test();
  const posts = await api.posts.getAll();

  return (
    <main className='container border'>
      sfsfsdfs
      <div className='px-2'>
        sfs sfsf
        {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
        <pre>{JSON.stringify(posts, null, 2)}</pre>
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
