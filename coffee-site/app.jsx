function App() {
  return (
    <main className="phone">
      <header className="hero">
        <div className="top-bar">
          <div className="dot" />
          <div className="pills">
            <button className="pill">SOLUTION</button>
            <button className="pill">PROCESS</button>
            <button className="pill">PROJECT</button>
          </div>
        </div>

        <h1 className="title">
          COFFEE
          <br />&amp;
          <br />GROWTH
        </h1>
        <p className="subtitle">
          Packaging that doesn&apos;t end as waste.
          <br />
          Made from coffee grounds. Designed to grow.
        </p>
      </header>

      <section className="section lead">
        <p>Material: coffee grounds + natural binders</p>
        <p>Function: stores and protects seeds</p>
        <p>After use: breaks down in the environment (soil / moist conditions)</p>
      </section>

      <section className="section">
        <div className="gallery">
          <span className="arrow">◀</span>
          <div className="pack">
            <div className="label">
              TOMATO
              <br />
              CRESTA
              <br />
              <br />
              seed card
            </div>
          </div>
          <div className="cone" />
          <span className="arrow">▶</span>
        </div>
      </section>

      <section className="section">
        <h2>What we did</h2>
        <ul className="list">
          <li>prepared coffee grounds as the base material</li>
          <li>tested multiple mixes and compared two main formulas</li>
          <li>modeled and refined the packaging shape and thickness</li>
          <li>checked how the material behaves in water and soil (breakdown over time)</li>
          <li>finalized a repeatable prototype ready for the next iteration</li>
        </ul>
      </section>

      <section className="section center">
        <h3>Our mission</h3>
        <p className="mission">
          no single-use plastic
          <br />
          simple planting flow
          <br />
          designed to break down naturally
        </p>

        <h3>Soil value</h3>
        <p className="value">
          As the coffee-based material decomposes,
          <br />
          it already acts as a mild organic soil additive.
          <br />
          The available version is designed to support plant
          <br />
          growth using natural, soil-friendly components.
        </p>

        <h3 className="footer-title">Developed with the BioLab</h3>
        <p className="value">
          We developed EcoSeed together with the Bio Lab,
          <br />
          testing different proportions and material mixes,
          <br />
          and refining the making method (mixing, molding,
          <br />
          thickness, and drying) until we reached a stable,
          <br />
          usable seed-packaging prototype.
        </p>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
