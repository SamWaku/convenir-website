import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "service-img1":
          "url('/app/Assets/professional-architect-woman-standing-outdoors-NDAEJH5 (1).jpg')",
        "service-img2":
          "url('/app/Assets/crane-and-building-construction-site-on-background-BPZXL3M.png')",
        "service-img3":
          "url('/app/Assets/industrial-landscape-building-crane-against-the-bl-8T3EXGK.png')",
        "service-img4": "url('/app/Assets/new-build-houses-3HYUECX (1).png')",
      },
    },
  },
  plugins: [],
};
export default config;
