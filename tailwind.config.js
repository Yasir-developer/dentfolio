/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      textDecorationLine: {
        underline: "underline",
        "line-through": "line-through",
        // Add more custom decoration lines if needed
      },
      colors: {
        "custom-blue": "#0372E2",
        "custom-blue-dark": "#0056b3",
        "footer-blue": "#001323",
        "custom-grey-dark": "#c8bfc3",
        "custom-black": "#252525",

        "custom-grey-light": "#d5d3d8",
      },
    },
  },
  plugins: [],
};
