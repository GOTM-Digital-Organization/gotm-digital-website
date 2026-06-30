import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";

async function sendWeb3FormsEmail(input: {
  name: string;
  phone: string;
  email?: string;
  business?: string;
  service?: string;
  message?: string;
}) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.warn("[Web3Forms] WEB3FORMS_ACCESS_KEY not set — skipping email delivery");
    return false;
  }

  const body = {
    access_key: accessKey,
    subject: `New Lead from GOTM Digital: ${input.name} — ${input.phone}`,
    from_name: "GOTM Digital Contact Form",
    name: input.name,
    phone: input.phone,
    email: input.email || "(not provided)",
    business: input.business || "(not provided)",
    service_interest: input.service || "(not provided)",
    message: input.message || "(not provided)",
  };

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json() as { success: boolean; message?: string };
    if (!data.success) {
      console.warn("[Web3Forms] Submission failed:", data.message);
      return false;
    }
    return true;
  } catch (err) {
    console.warn("[Web3Forms] Error submitting form:", err);
    return false;
  }
}

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

        // Send via Web3Forms (delivers to tom@gotmdigital.com)
        await sendWeb3FormsEmail(input);

        // Also send Manus owner notification as a backup
        await notifyOwner({
          title: `New Lead: ${input.name} — ${input.phone}`,
          content: lines,
        });

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
