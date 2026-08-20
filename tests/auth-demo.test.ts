import { beforeEach, describe, expect, it } from "vitest";

import {
  clearStoredSession,
  getDemoAccountByRole,
  getLoginRouteForRole,
  getProtectedRouteForRole,
  readStoredSession,
  signInAsDemoRole,
  writeStoredSession,
} from "@/lib/auth-demo";

describe("demo auth helpers", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("maps each role to the correct routes and demo account", () => {
    expect(getLoginRouteForRole("user")).toBe("/login");
    expect(getLoginRouteForRole("admin")).toBe("/admin/login");
    expect(getProtectedRouteForRole("user")).toBe("/dashboard");
    expect(getProtectedRouteForRole("admin")).toBe("/admin");
    expect(getDemoAccountByRole("admin")?.email).toBe("admin@nexora.io");
  });

  it("stores, reads, and clears demo sessions", () => {
    const account = signInAsDemoRole("user");

    expect(account?.email).toBe("demo@nexora.io");
    expect(readStoredSession()?.role).toBe("user");

    clearStoredSession();
    expect(readStoredSession()).toBeNull();
  });

  it("ignores malformed session payloads", () => {
    window.localStorage.setItem("nexora-session", "{\"invalid\":true}");
    expect(readStoredSession()).toBeNull();

    writeStoredSession({
      id: "broken",
      name: "Broken",
      email: "broken@example.com",
      password: "secret",
      role: "user",
      redirectUrl: "/dashboard",
    });

    expect(readStoredSession()?.redirectUrl).toBe("/dashboard");
  });
});
