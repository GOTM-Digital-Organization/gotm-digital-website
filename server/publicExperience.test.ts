import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { PUBLIC_ROUTES } from "../client/src/routes";
import Home from "../client/src/pages/Home";
import EnterpriseServices from "../client/src/pages/EnterpriseServices";
import LocalServices from "../client/src/pages/LocalServices";

describe("premium public experience contract", () => {
  it("maps each core public URL to the intended route component", () => {
    expect(PUBLIC_ROUTES.find((route) => route.path === "/")?.component).toBe(Home);
    expect(PUBLIC_ROUTES.find((route) => route.path === "/enterprise")?.component).toBe(EnterpriseServices);
    expect(PUBLIC_ROUTES.find((route) => route.path === "/local-services")?.component).toBe(LocalServices);
    expect(PUBLIC_ROUTES.map((route) => route.path)).toEqual(expect.arrayContaining([
      "/", "/services", "/portfolio", "/contact", "/flyer", "/enterprise", "/local-services",
    ]));
  });

  it("publishes the approved premium social-share image to Open Graph and X metadata", () => {
    const html = readFileSync(resolve(import.meta.dirname, "../client/index.html"), "utf8");

    expect(html).toContain('/manus-storage/gotm-digital-systems-og_73fa00c9.png');
    expect(html).toContain('<meta property="og:image:width" content="1920" />');
    expect(html).toContain('<meta property="og:image:height" content="1080" />');
    expect(html).toContain('<meta name="twitter:image" content="/manus-storage/gotm-digital-systems-og_73fa00c9.png" />');
  });
});
