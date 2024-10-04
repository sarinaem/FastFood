/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ["Vazir", "sans-serif"], // نام فونت باید vazirmatn باشد
      },
     
      letterSpacing: {
        "extra-wide": "3px", // فاصله بین حروف 3px
      },
      backgroundImage: {
        "header-bg": "url('./assets/images/header-background.jpg')", // پس‌زمینه هدر
      },
    },
  },
  plugins: [],
};



//  colors: {primary: "#ff69b4",