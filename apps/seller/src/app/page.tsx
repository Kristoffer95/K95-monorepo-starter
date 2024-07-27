import Image from 'next/image';
import { Button } from '@k95/shadcn/button';
import TestAlertDialog from './_components/test-alert-dialog';
import { api } from '@/trpc/server';
import { getServerAuthSession } from '@k95/auth';
import DiscordLoginButton from './_components/shared/discord-login-button';
import Link from 'next/link';

export default async function Home() {
  // const post = await api.posts.test();
  const session = await getServerAuthSession();
  const posts = await api.posts.getAll();

  return (
    <main className='container border'>
      <div className='border p-5'>
        <h2>AUTH</h2>
        <pre>{JSON.stringify(session?.user, null, 2)}</pre>
        {session ? (
          <Button variant={'outline'} className='bg-black/0'>
            <Link href='/api/auth/signout'>Logout </Link>
          </Button>
        ) : (
          <DiscordLoginButton />
        )}
      </div>

      <div className='p-5 border'>
        <h2>TRPC</h2>
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
