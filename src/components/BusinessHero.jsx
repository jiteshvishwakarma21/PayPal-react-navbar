import { useState } from "react";

function BusinessHero() {
  const [selected, setSelected] = useState("Business");

  function handleSignup() {
    alert("Sign Up Created");
  }

  return (
    <main id="home" className="hero">
      <div className="toggle" role="group" aria-label="Account type">
        <button
          type="button"
          className={selected === "Personal" ? "selected" : ""}
          aria-pressed={selected === "Personal"}
          onClick={() => setSelected("Personal")}
        >
          Personal
        </button>

        <button
          type="button"
          className={selected === "Business" ? "selected" : ""}
          aria-pressed={selected === "Business"}
          onClick={() => setSelected("Business")}
        >
          Business
        </button>
      </div>

      <h1>PayPal Open</h1>

      <h2>One platform for your business needs</h2>

      <p className="description">
        PayPal Open unifies your PayPal business solutions to help you get
        paid, get growing, and get ahead.
      </p>

      <div className="hero-actions">
        <button
          type="button"
          className="button button-dark"
          onClick={handleSignup}
        >
          Sign Up
        </button>

        <button type="button" className="button button-light">
          Contact Sales
        </button>
      </div>
    </main>
  );
}

export default BusinessHero;