import Billing from "./screens/account/billing/billing";
import Pricing from "./screens/account/pricing/pricing";
import Settings from "./screens/account/settings/settings";
import Dashboard from "./screens/dashboard/dashboard";
import NotFound from "./screens/not-found/notFound";

export const routes = [
  { path: "dahboard/project", element: <Dashboard />, title: "project" },
  { path: "account/billing", element: <Billing />, title: "billing" },
  { path: "account/pricing", element: <Pricing />, title: "pricing" },
  { path: "account/settings", element: <Settings />, title: "settings" },
  { path: "*", element: <NotFound />, title: null },
];
