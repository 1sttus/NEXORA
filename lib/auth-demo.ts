export type DemoRole = "user" | "admin";

export type DemoAccount = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: DemoRole;
  redirectUrl: string;
};

export type DemoSession = Omit<DemoAccount, "password"> & {
  timestamp: number;
};

const SESSION_STORAGE_KEY = "nexora-session";

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

export function getDemoAccountByRole(role: DemoRole) {
  return demoAccounts.find((account) => account.role === role) ?? null;
}

export function getLoginRouteForRole(role: DemoRole) {
  return role === "admin" ? "/admin/login" : "/login";
}

export function getProtectedRouteForRole(role: DemoRole) {
  return role === "admin" ? "/admin" : "/dashboard";
}

export function findDemoAccount(email: string, password: string) {
  const trimmedEmail = email.trim().toLowerCase();
  const account = demoAccounts.find((item) => item.email.toLowerCase() === trimmedEmail);

  if (!account) {
    return null;
  }

  return account.password === password ? account : null;
}

function isDemoRole(value: unknown): value is DemoRole {
  return value === "user" || value === "admin";
}

function isDemoSession(value: unknown): value is DemoSession {
  if (!value || typeof value !== "object") {
    return false;
  }

  const session = value as Partial<DemoSession>;

  return (
    typeof session.id === "string" &&
    typeof session.name === "string" &&
    typeof session.email === "string" &&
    isDemoRole(session.role) &&
    typeof session.redirectUrl === "string" &&
    typeof session.timestamp === "number"
  );
}

export function readStoredSession() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(SESSION_STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw);
    return isDemoSession(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function writeStoredSession(account: DemoAccount) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    SESSION_STORAGE_KEY,
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

export function clearStoredSession() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(SESSION_STORAGE_KEY);
}

export function signInAsDemoRole(role: DemoRole) {
  const account = getDemoAccountByRole(role);

  if (!account) {
    return null;
  }

  writeStoredSession(account);
  return account;
}
