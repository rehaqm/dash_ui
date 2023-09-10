import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./screens/dashboard/dashboard";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./screens/not-found/notFound";
import Billing from "./screens/account/billing/billing";
import Pricing from "./screens/account/pricing/pricing";
import Settings from "./screens/account/settings/settings";
import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            ></Route>
          );
        })}
        {/* <Route path="dashboard/project" element={<Dashboard />} />
        <Route path="account">
          <Route path="" element={<div>account</div>} />
          <Route path="billing" element={<Billing />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
