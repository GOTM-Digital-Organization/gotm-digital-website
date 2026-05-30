/**
 * OG Meta Injection Middleware
 *
 * Social media crawlers and link-preview bots (WhatsApp, iMessage, Slack,
 * Twitter, Facebook, LinkedIn) request pages server-side and read the <head>
 * meta tags — they do NOT execute JavaScript.
 *
 * Because this is a React SPA, every route serves the same index.html.
 * This middleware intercepts requests from known bots and injects
 * page-specific OG/Twitter meta tags before sending the HTML.
 */

import { type Express, type Request, type Response, type NextFunction } from "express";
import fs from "fs";
import path from "path";

// Known bot user-agent substrings
const BOT_UA = [
  "facebookexternalhit",
  "twitterbot",
  "whatsapp",
  "slackbot",
  "linkedinbot",
  "telegrambot",
  "discordbot",
  "applebot",
  "googlebot",
  "bingbot",
  "rogerbot",
  "embedly",
  "quora link preview",
  "showyoubot",
  "outbrain",
  "pinterest",
  "developers.google.com/+/web/snippet",
  "vkshare",
  "w3c_validator",
  "redditbot",
  "iframely",
  "curl/",
  "wget/",
  "python-requests",
  "go-http-client",
  "node-fetch",
  "axios",
];

function isBot(ua: string): boolean {
  const lower = ua.toLowerCase();
  return BOT_UA.some((b) => lower.includes(b));
}

interface PageMeta {
  title: string;
  description: string;
  image: string;
  url: string;
}

const DEFAULT_META: PageMeta = {
  title: "GOTM Digital — Honest Digital Marketing",
  description:
    "No setup fees. No big promises. Just honest digital marketing that grows with your business. Starting at $100/month.",
  image:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/og-image-WnMAyKmKheRCNHRwRKBFie.png",
  url: "https://gotmdigital.com",
};

const PAGE_META: Record<string, PageMeta> = {
  "/flyer": {
    title: "GOTM Digital — Get Your Business On The Map",
    description:
      "Custom HTML websites, SEO, Google Business Profile & Google Ads for local service businesses. No setup fees. No contracts. Starting at $100/month.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/og-image-flyer-KdRezAbvSKYtPcKvizofzV.png",
    url: "https://gotmdigital.com/flyer",
  },
  "/services": {
    title: "GOTM Digital — Our Services",
    description:
      "Custom HTML websites, SEO & content, Google Business Profile management, and Google Ads for local service businesses. Starting at $100/month.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/og-image-WnMAyKmKheRCNHRwRKBFie.png",
    url: "https://gotmdigital.com/services",
  },
  "/portfolio": {
    title: "GOTM Digital — Our Work",
    description:
      "Real local businesses we've helped get on the map. See results from plumbers, HVAC, landscaping, roofing, and more.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/og-image-WnMAyKmKheRCNHRwRKBFie.png",
    url: "https://gotmdigital.com/portfolio",
  },
  "/contact": {
    title: "GOTM Digital — Contact Us",
    description:
      "Ready to get your business on the map? Call (941) 328-8891 or send a message. No setup fees, no contracts.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/og-image-WnMAyKmKheRCNHRwRKBFie.png",
    url: "https://gotmdigital.com/contact",
  },
};

function buildMetaTags(meta: PageMeta): string {
  return `
    <!-- OG / Twitter injected by server -->
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${meta.url}" />
    <meta property="og:image" content="${meta.image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="GOTM Digital" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="${meta.image}" />
    <title>${meta.title}</title>`;
}

export function registerOgMetaMiddleware(app: Express, indexHtmlPath: string) {
  app.use("*", (req: Request, res: Response, next: NextFunction) => {
    const ua = req.headers["user-agent"] || "";

    // Only intercept bots — regular browsers get the normal SPA flow
    if (!isBot(ua)) {
      return next();
    }

    const pathname = req.path.replace(/\/$/, "") || "/";
    const meta = PAGE_META[pathname] ?? DEFAULT_META;

    try {
      let html = fs.readFileSync(indexHtmlPath, "utf-8");

      // Remove the static OG tags already in index.html to avoid duplicates
      html = html.replace(
        /<!-- OG \/ Twitter injected by server -->[\s\S]*?(?=<link|<script|<\/head>)/,
        ""
      );

      // Strip existing og: and twitter: meta tags from index.html
      html = html.replace(/<meta\s+(?:property="og:[^"]*"|name="twitter:[^"]*")[^>]*\/>/g, "");
      // Strip existing <title> tag so we can replace it
      html = html.replace(/<title>[^<]*<\/title>/, "");

      // Inject our page-specific tags just before </head>
      html = html.replace("</head>", `${buildMetaTags(meta)}\n  </head>`);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      next(e);
    }
  });
}
