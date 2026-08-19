"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body style={{ margin: 0, background: "#0B0D10", color: "#F5F4EF", fontFamily: "sans-serif" }}>
        <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "2rem" }}>
          <div style={{ maxWidth: 540, width: "100%", border: "1px solid #1D242A", borderRadius: 24, background: "#0F1518", padding: "2rem" }}>
            <p style={{ margin: 0, letterSpacing: "0.24em", textTransform: "uppercase", color: "#A5ABB4", fontSize: 10 }}>Application error</p>
            <h2 style={{ margin: "1rem 0 0.5rem", fontSize: 32, lineHeight: 1.1 }}>Something went wrong.</h2>
            <p style={{ margin: 0, color: "#A5ABB4", lineHeight: 1.7 }}>
              The app hit an unexpected issue while rendering. Please refresh and try again.
            </p>
            <button
              type="button"
              onClick={() => reset()}
              style={{
                marginTop: "1.5rem",
                background: "#C9A96A",
                color: "#11161B",
                border: "none",
                borderRadius: 999,
                padding: "0.8rem 1.2rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            {process.env.NODE_ENV !== "production" && (
              <pre style={{ marginTop: "1.25rem", whiteSpace: "pre-wrap", color: "#D1B77E" }}>
                {error.message}
              </pre>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
