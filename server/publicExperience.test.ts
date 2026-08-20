import { describe, expect, it } from "vitest";
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
});
