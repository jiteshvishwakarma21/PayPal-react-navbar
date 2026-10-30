function AuthButtons() {
  function handleSignup() {
    alert("Sign Up Created");
  }

  return (
    <div className="account-actions">
      <button type="button" className="button button-light">
        Log In
      </button>

      <button
        type="button"
        className="button button-dark"
        onClick={handleSignup}
      >
        Sign Up
      </button>
    </div>
  );
}

export default AuthButtons;