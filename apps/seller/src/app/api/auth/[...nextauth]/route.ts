import NextAuth from 'next-auth';

import { authOptions } from '@k95/auth';

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
