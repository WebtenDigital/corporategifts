import type { LinksFunction, MetaFunction } from "@remix-run/node";
import styles from "./styles/app.css"
import logo from "../../public/images/logo.png"


import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Corporate Gifts Limited",
  viewport: "width=device-width,initial-scale=1",
});

export const links:LinksFunction=()=>{
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: 'icon',
      href: "https://res.cloudinary.com/geminy/image/upload/v1654619027/Corporate%20Gifts/products/logo_oflmbg.png",
      type: "image/png",
    }
]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
