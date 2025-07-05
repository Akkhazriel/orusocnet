/** @type {import('tailwindcss').Config} */
module.exports = {
  // Путь для Tailwind: где искать используемые классы
  content: [
    "./pages/**/*.{ts,tsx}",       // страницы Next.js
    "./components/**/*.{ts,tsx}",  // переиспользуемые компоненты
    "./features/**/*.{ts,tsx}",    // фичи/секции приложения
  ],

  theme: {
    extend: {
      // Кастомные цвета для палитры Oru
      colors: {
        primary: "#000000",       // основной текст и тёмные UI-элементы
        background: "#FFFFFF",    // фон сайта
        accent: "#FF9B20",        // акцентный (ползунки, ховеры, прогресс-бары)
        iconPrimary: "#FFE6CA",   // цвет для некоторых иконок
        iconSecondary: "#B9BFF8", // цвет для некоторых иконок
      },

      // Кастомный шрифт
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // основной шрифт
      },

      // Скругления для элементов в iOS-стиле
      borderRadius: {
        ios: "16px", // фиксированное скругление по твоему требованию
      },
    },
  },

  // Сюда можно добавить Tailwind-плагины по мере роста проекта
  plugins: [],
}
