import type { ComponentType } from "react";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Flyer from "./pages/Flyer";
import EnterpriseServices from "./pages/EnterpriseServices";
import LocalServices from "./pages/LocalServices";

export type PublicRoute = {
  path: string;
  component: ComponentType<any>;
};

export const PUBLIC_ROUTES: PublicRoute[] = [
  { path: "/", component: Home },
  { path: "/portfolio", component: Portfolio },
  { path: "/services", component: Services },
  { path: "/contact", component: Contact },
  { path: "/flyer", component: Flyer },
  { path: "/enterprise", component: EnterpriseServices },
  { path: "/local-services", component: LocalServices },
];
