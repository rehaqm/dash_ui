import React from "react";
import "./sidebar.css";
import { Link, Route } from "react-router-dom";
import { routes } from "../../routes";
export default function Sidebar() {
  return (
    <div className="sidebar-wrapper">
      <h1>Dash UI</h1>
      {routes.map((route) => {
        if (!route.title) {
          return;
        }
        return (
          <Link key={route.path} to={route.path}>
            {route.title}
          </Link>
        );
      })}
      {/* <Link to={"account"}>Account</Link>
      <Link to={"account/billing"}>billing</Link>
      <Link to={"account/settings"}>settings</Link> */}
    </div>
  );
}
