import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

interface Routes {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

type JSXComponent = () => JSX.Element;

const LazyLayaout = lazy(
  () =>
    import(
      /* webpackChunkName:'LazyLayaout' */ "../01-lazyload/layaout/LazyLayaout"
    )
);

export const routes: Routes[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    Component: LazyLayaout,
    name: "Lazy Layaout",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No lazy",
  },
];
