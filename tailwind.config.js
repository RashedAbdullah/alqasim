/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true, // কন্টেন্ট সেন্টার করবে
        padding: "1rem", // মোবাইলে ১rem প্যাডিং
        screens: {
          sm: "100%", // ছোট স্ক্রিনে পুরোপুরি প্রসারিত
          md: "720px", // মিডিয়াম স্ক্রিনে 720px প্রস্থ
          lg: "960px", // লার্জ স্ক্রিনে 960px প্রস্থ
          xl: "1140px", // এক্সট্রা লার্জ স্ক্রিনে 1140px প্রস্থ
          "2xl": "1320px", // বিশাল স্ক্রিনে 1320px প্রস্থ
        },
      },
    },
  },
  plugins: [],
};
