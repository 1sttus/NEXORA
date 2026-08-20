"use client";

import { useEffect, useState } from "react";

import {
  DEMO_PORTFOLIO_STORAGE_KEY,
  getDemoPortfolioUserByEmail,
  readDemoPortfolioState,
  type DemoPortfolioState,
  type DemoPortfolioUser,
  updateDemoPortfolioUser,
  writeDemoPortfolioState,
} from "@/lib/demo-portfolio";

export function useDemoPortfolioState() {
  const [state, setState] = useState<DemoPortfolioState | null>(null);

  useEffect(() => {
    const syncState = () => setState(readDemoPortfolioState());

    syncState();

    const handleStorage = (event: StorageEvent) => {
      if (event.key === DEMO_PORTFOLIO_STORAGE_KEY) {
        syncState();
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const updateUser = (userId: string, updater: (user: DemoPortfolioUser) => DemoPortfolioUser) => {
    setState((current) => {
      const baseState = current ?? readDemoPortfolioState();
      const nextState: DemoPortfolioState = {
        users: baseState.users.map((user) => (user.id === userId ? updater(structuredClone(user)) : user)),
      };

      writeDemoPortfolioState(nextState);
      return nextState;
    });
  };

  const getUserByEmail = (email: string) => {
    if (!state) {
      return null;
    }

    return getDemoPortfolioUserByEmail(email, state);
  };

  return {
    state,
    isReady: state !== null,
    updateUser,
    getUserByEmail,
  };
}
