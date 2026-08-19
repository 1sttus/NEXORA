export type DemoRole = "user" | "admin";

export type DemoAccount = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: DemoRole;
  redirectUrl: string;
};

export const demoAccounts: DemoAccount[] = [
  {
    id: "user-demo",
    name: "Demo User",
    email: "demo@nexora.io",
    password: "Demo@123",
    role: "user",
    redirectUrl: "/dashboard",
  },
  {
    id: "admin-demo",
    name: "Admin User",
    email: "admin@nexora.io",
    password: "Admin@123",
    role: "admin",
    redirectUrl: "/admin",
  },
];

export function findDemoAccount(email: string, password: string) {
  const trimmedEmail = email.trim().toLowerCase();
  const account = demoAccounts.find((item) => item.email.toLowerCase() === trimmedEmail);

  if (!account) {
    return null;
  }

  return account.password === password ? account : null;
}

export function readStoredSession() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.localStorage.getItem("nexora-session");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function writeStoredSession(account: DemoAccount) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    "nexora-session",
    JSON.stringify({
      id: account.id,
      name: account.name,
      email: account.email,
      role: account.role,
      redirectUrl: account.redirectUrl,
      timestamp: Date.now(),
    }),
  );
}
