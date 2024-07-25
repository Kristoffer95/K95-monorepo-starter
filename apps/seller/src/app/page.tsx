import Image from 'next/image';
import { Button } from '@k95/shadcn/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@k95/shadcn/dialog';
import { Card } from '@k95/ui/card';

export default function Home() {
  return (
    <main className='container border'>
      sfsfsdfs
      <div className='px-2'>
        sfs sfsf
        <div className='bg-red-50'>hey...</div>
        <Button>Basic button</Button>
      </div>
      {/* <Card /> */}
      <Dialog>
        <DialogTrigger>
          <Button>Open</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
}
