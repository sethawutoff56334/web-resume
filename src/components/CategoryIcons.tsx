const common = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-4 w-4",
};

export function CodeIcon() {
  return (
    <svg {...common}>
      <path d="m8 6-5 6 5 6" />
      <path d="m16 6 5 6-5 6" />
    </svg>
  );
}

export function LayersIcon() {
  return (
    <svg {...common}>
      <path d="m12 2 9 5-9 5-9-5 9-5z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </svg>
  );
}

export function DatabaseIcon() {
  return (
    <svg {...common}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  );
}

export function QueueIcon() {
  return (
    <svg {...common}>
      <path d="M3 6h11" />
      <path d="M3 12h11" />
      <path d="M3 18h11" />
      <path d="m17 8 4 4-4 4" />
    </svg>
  );
}

export function CloudIcon() {
  return (
    <svg {...common}>
      <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.4-1.5A4.5 4.5 0 0 0 6.5 19h11z" />
    </svg>
  );
}

export function MobileIcon() {
  return (
    <svg {...common}>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  );
}
