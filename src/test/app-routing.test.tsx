import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { getRouter, resolveBasepath } from "@/router";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});

describe("Subfolder hosting", () => {
  it("adds no basepath when the site is served from the domain root", () => {
    expect(resolveBasepath("/")).toBeUndefined();
    expect(resolveBasepath(undefined)).toBeUndefined();
    expect(getRouter().options.basepath).toBeUndefined();
  });

  it("uses the subfolder as basepath without a trailing slash", () => {
    expect(resolveBasepath("/portfolio/")).toBe("/portfolio");
    expect(resolveBasepath("/portfolio")).toBe("/portfolio");
    expect(resolveBasepath("/team/wst/")).toBe("/team/wst");
  });
});
