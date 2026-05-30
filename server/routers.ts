import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        phone: z.string().min(1),
        email: z.string().optional(),
        business: z.string().optional(),
        service: z.string().optional(),
        message: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const lines = [
          `Name: ${input.name}`,
          `Phone: ${input.phone}`,
          input.email ? `Email: ${input.email}` : null,
          input.business ? `Business: ${input.business}` : null,
          input.service ? `Service Interest: ${input.service}` : null,
          input.message ? `Message: ${input.message}` : null,
        ].filter(Boolean).join("\n");

        await notifyOwner({
          title: `New Lead: ${input.name} — ${input.phone}`,
          content: lines,
        });

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
