import { MiddlewareContext } from ".";

export default function auth({ next, store, to }: MiddlewareContext): void {
  if (store.state.auth?.loggedIn && to.path === "/login") {
    return next("/");
  }
  if (!store.state.auth?.loggedIn && to.path !== "/login") {
    return next("/login");
  }
  return next();
}
