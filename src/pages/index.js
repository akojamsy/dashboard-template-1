import { lazy } from "react";
import { default as Overview } from "./dashboard/Overview";
import { default as Main } from "./dashboard/Main";
import { default as Wallet } from "./dashboard/Wallet";
import { default as Login } from "./authentication/Login";
import { default as NotFound } from "./NotFound";

// const Overview = lazy(() => import("./dashboard/Overview"));

export { Overview, Main, NotFound, Login, Wallet };
