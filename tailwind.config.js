module.exports = {
  theme: {
    extend: {
      keyframes: {
        "logo-carousel": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 2rem))" },
        },
      },
      animation: {
        "logo-carousel": "logo-carousel 5s linear infinite",
      },
    },
  },
};