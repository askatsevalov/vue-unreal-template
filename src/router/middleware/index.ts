import { RootState } from "@/store";
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { Store } from "vuex";

export type Middleware = ({ next, store }: MiddlewareContext) => void;

export interface MiddlewareContext {
  next: NavigationGuardNext;
  store: Store<RootState>;
  to: RouteLocationNormalized;
}

export default function middlewarePipeline(
  context: MiddlewareContext,
  middleware: Middleware[],
  index: number
): () => void {
  const nextMiddleware = middleware[index];
  if (!nextMiddleware) {
    return context.next;
  }
  return () => {
    const nextPipeline = middlewarePipeline(context, middleware, index + 1);
    nextMiddleware({ ...context, next: nextPipeline });
  };
}
