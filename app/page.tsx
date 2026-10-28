export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "24px",
        maxWidth: "480px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "2rem", lineHeight: 1.2 }}>Cabas</h1>
      <p style={{ fontSize: "1.125rem", lineHeight: 1.5 }}>
        Les courses de la semaine qui tiennent dans un budget.
      </p>
      <p style={{ color: "#555" }}>Bientôt en ligne.</p>
    </main>
  );
}
