"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  clearStoredSession,
  getDemoAccountByRole,
  getLoginRouteForRole,
  getProtectedRouteForRole,
  readStoredSession,
  signInAsDemoRole,
  type DemoRole,
  type DemoSession,
} from "@/lib/auth-demo";

type UseDemoSessionOptions = {
  role: DemoRole;
  loginPath: string;
};

export function useDemoSession({ role, loginPath }: UseDemoSessionOptions) {
  const router = useRouter();
  const [session, setSession] = useState<DemoSession | null>(null);
  const [status, setStatus] = useState<"loading" | "ready">("loading");

  useEffect(() => {
    const stored = readStoredSession();

    if (!stored) {
      setSession(null);
      router.replace(loginPath);
      return;
    }

    if (stored.role !== role) {
      setSession(null);
      router.replace(getProtectedRouteForRole(stored.role));
      return;
    }

    setSession(stored);
    setStatus("ready");
  }, [loginPath, role, router]);

  const logout = (nextPath = loginPath) => {
    clearStoredSession();
    setSession(null);
    setStatus("loading");
    router.replace(nextPath);
  };

  const switchRole = (nextRole: DemoRole) => {
    if (nextRole === role) {
      router.replace(getProtectedRouteForRole(nextRole));
      return;
    }

    const account = signInAsDemoRole(nextRole);
    if (!account) {
      router.replace(getLoginRouteForRole(nextRole));
      return;
    }

    setSession({
      id: account.id,
      name: account.name,
      email: account.email,
      role: account.role,
      redirectUrl: account.redirectUrl,
      timestamp: Date.now(),
    });
    setStatus("loading");
    router.replace(account.redirectUrl);
  };

  const refreshSession = () => {
    const stored = readStoredSession();

    if (stored && stored.role === role) {
      setSession(stored);
      setStatus("ready");
      return;
    }

    setSession(null);
    setStatus("loading");
  };

  return {
    session,
    status,
    logout,
    refreshSession,
    switchRole,
    clearStoredSession,
    getDemoAccountByRole,
  };
}
