"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  clearStoredSession,
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

const SESSION_BOOT_DELAY = 0;

export function useDemoSession({ role, loginPath }: UseDemoSessionOptions) {
  const router = useRouter();
  const [session, setSession] = useState<DemoSession | null>(null);
  const [status, setStatus] = useState<"loading" | "ready">("loading");

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const stored = readStoredSession();

      if (!stored) {
        router.replace(loginPath);
        return;
      }

      if (stored.role !== role) {
        router.replace(getProtectedRouteForRole(stored.role));
        return;
      }

      setSession(stored);
      setStatus("ready");
    }, SESSION_BOOT_DELAY);

    return () => window.clearTimeout(timeoutId);
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

    router.replace(account.redirectUrl);
  };

  return {
    session,
    status,
    logout,
    switchRole,
  };
}
