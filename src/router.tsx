import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Vite's BASE_URL comes from the build's `base` option and is "/" when the site is
// served from the domain root. TanStack Router expects a basepath with no trailing
// slash, and no basepath at all for root hosting, so normalize it here.
export const resolveBasepath = (baseUrl: string | undefined): string | undefined => {
  const trimmed = (baseUrl ?? "/").replace(/\/+$/, "");
  return trimmed === "" ? undefined : trimmed;
};

export const getRouter = () => {
  // One client per request: a module-level QueryClient leaks cached data between SSR requests.
  const queryClient = new QueryClient();

  const basepath = resolveBasepath(import.meta.env.BASE_URL);

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // Lets Query own freshness; set caching defaults on the QueryClient, not the router.
    defaultPreloadStaleTime: 0,
    // exactOptionalPropertyTypes: only pass basepath when a subfolder base is configured.
    ...(basepath ? { basepath } : {}),
  });

  return router;
};
