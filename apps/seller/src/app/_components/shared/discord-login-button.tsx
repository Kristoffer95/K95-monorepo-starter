'use client';

import { Button } from '@k95/shadcn/button';
import { signIn } from 'next-auth/react';

function DiscordLoginButton() {
  return <Button onClick={() => signIn('discord')}>Login</Button>;
}

export default DiscordLoginButton;
