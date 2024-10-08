/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./static/src/**/*.js",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {},
  },
  plugins: [
    
    require("flowbite/plugin")  
    
    ],
  variants: {
    extend: {
      boxShadow: {
        'custom': '10px 10px 20px rgba(0, 0, 0, 0.25)',  // Sombra para light theme
        'dark-custom': '10px 10px 20px rgba(255, 255, 255, 0.15)',  // Sombra más clara para dark theme
      }
    },
  
  safelist: [
    'bg-red-500',
    'hover:bg-red-700',
    'py-2',
    'px-4',
    'rounded',
    'text-white',
    'font-semibold',
    'text-sm',
    'text-center',
    'w-full',
  ],
}
}