import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../trpc';
// import { post } from '@/server/db/schema';
import { post } from '@k95/db/schema';

export const postRouter = createTRPCRouter({
  test: publicProcedure.query(() => {
    return 'TRPC is working! 🚀';
  }),

  // hello: publicProcedure
  //   .input(z.object({ text: z.string() }))
  //   .query(({ input }) => {
  //     return {
  //       greeting: `Hello ${input.text}`,
  //     };
  //   }),

  // create: publicProcedure
  //   .input(z.object({ name: z.string().min(1) }))
  //   .mutation(async ({ ctx, input }) => {
  //     // simulate a slow db call
  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     await ctx.db.insert(post).values({
  //       name: input.name,
  //     });
  //   }),

  // getLatest: publicProcedure.query(({ ctx }) => {
  //   return ctx.db.query.post.findMany();
  //   // return ctx.db.query.posts.findFirst({
  //   //   orderBy: (posts, { desc }) => [desc(posts.createdAt)],
  //   // });
  // }),
});
