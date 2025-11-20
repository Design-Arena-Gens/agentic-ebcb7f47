import Link from "next/link";

const accentColor = "#38bdf8";

export default function Page() {
  return (
    <main
      style={{
        textAlign: "center",
        padding: "3rem",
        borderRadius: "24px",
        backdropFilter: "blur(18px)",
        backgroundColor: "rgba(15, 23, 42, 0.6)",
        border: `1px solid rgba(148, 163, 184, 0.3)`,
        maxWidth: "520px",
        width: "100%"
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "0.9rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#94a3b8",
          marginBottom: "1.5rem"
        }}
      >
        <span
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: accentColor,
            boxShadow: `0 0 12px ${accentColor}`
          }}
        />
        Siempre online
      </span>

      <h1
        style={{
          margin: "0 0 1rem 0",
          fontSize: "3rem",
          lineHeight: 1.05,
          fontWeight: 700
        }}
      >
        Hola, mundo<span style={{ color: accentColor }}>.</span>
      </h1>

      <p
        style={{
          color: "#94a3b8",
          fontSize: "1.1rem",
          lineHeight: 1.8,
          marginBottom: "2rem"
        }}
      >
        Esta es una tarjeta de bienvenida minimalista, diseñada para saludar con estilo y recordar que
        las grandes historias pueden comenzar con un simple “Hola”.
      </p>

      <div
        style={{
          display: "inline-flex",
          gap: "1rem",
          alignItems: "center"
        }}
      >
        <Link
          href="https://es.wikipedia.org/wiki/Hola"
          style={{
            padding: "0.85rem 1.8rem",
            borderRadius: "999px",
            border: "none",
            background: accentColor,
            color: "#0f172a",
            fontWeight: 600,
            textDecoration: "none",
            transition: "transform 160ms ease, box-shadow 160ms ease",
            boxShadow: `0 10px 25px -12px ${accentColor}`
          }}
        >
          Aprender más
        </Link>
        <Link
          href="mailto:hola@example.com"
          style={{
            padding: "0.85rem 1.8rem",
            borderRadius: "999px",
            border: `1px solid rgba(148, 163, 184, 0.4)`,
            color: "#cbd5f5",
            fontWeight: 600,
            textDecoration: "none",
            transition: "transform 160ms ease, border-color 160ms ease"
          }}
        >
          Di hola
        </Link>
      </div>
    </main>
  );
}
