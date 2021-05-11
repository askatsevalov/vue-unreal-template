import { MiddlewareContext } from ".";

export default function auth({ next, store }: MiddlewareContext): void {
  if (!store.state.auth?.loggedIn) {
    return next("/login");
  }
  return next();
}
