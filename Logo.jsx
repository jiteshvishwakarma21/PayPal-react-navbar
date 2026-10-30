function Logo() {
  return (
    <a href="#home" className="brand" aria-label="PayPal home">
      <svg
        viewBox="0 0 48 56"
        className="logo"
        role="img"
        aria-label="PayPal"
      >
        <path
          fill="#003087"
          d="M11 3h18c12 0 17 6 15 16-2 11-10 17-22 17h-5l-3 14H3z"
        />
        <path
          fill="#009cde"
          opacity=".85"
          d="M20 14h13c10 0 14 5 12 14-2 9-9 14-19 14h-4l-3 13H10z"
        />
      </svg>
    </a>
  );
}

export default Logo;