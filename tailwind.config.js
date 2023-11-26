/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    colors: {
      "primary-500": "#2D2F31",
      "violet-50": "#f5f3ff",
      "violet-100": "#ede9fe",
      "violet-200": "#ddd6fe",
      "violet-300": "#c4b5fd",
      "violet-400": "#a78bfa",
      "violet-500": "#8b5cf6",
      "violet-600": "#7c3aed",
      "violet-700": "#6d28d9",
      "violet-800": "#5b21b6",
      "violet-900": "#4c1d95",
      "violet-950": "#2e1065",
      "neutral-0": "#FFFFFF",
      "neutral-50": "#F9FAFB",
      "neutral-100": "#F3F4F6",
      "neutral-200": "#E5E7EB",
      "neutral-300": "#D1D5DB",
      "neutral-400": "#9CA3AF",
      "neutral-500": "#6B7280",
      "neutral-600": "#4B5563",
      "neutral-700": "#374151",
      "neutral-800": "#1F2937",
      "neutral-900": "#111827",
      "negative-500": "#FEF2F2",
      "negative-100": "#FEE2E2",
      "negative-200": "#FECACA",
      "negative-300": "#FCA5A5",
      "negative-400": "#F87171",
      "negative-500": "#EF4444",
      "negative-600": "#DC2626",
      "negative-700": "#B91C1C",
      "negative-800": "#991B1B",
      "negative-900": "#7F1D1D",
    },
  },
};
export const plugins = [];
