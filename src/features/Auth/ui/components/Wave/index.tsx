import "./index.css"
const Wave = () => {
  return (
    <svg
      className="login_waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="login_parallax">
        <use xlinkHref="#gentle-wave" x="48" y="5" fill="#115D36" />
        <use xlinkHref="#gentle-wave" x="48" y="3" fill="#115D36" />
      </g>
    </svg>
  );
}

export default Wave
