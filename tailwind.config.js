/** @type {import('tailwindcss').Config} */
import { uiBaseTheme } from './src/theme/ui-base-theme';
import {fontSizePlugin} from './src/theme/font-size-plugin';
import { uiDarkTheme } from './src/theme/ui-dark-theme';
import plugin from 'tailwindcss';

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      ...uiBaseTheme,
      dark:{
        uiDarkTheme
      }
    },
  },
  plugins: [plugin(fontSizePlugin)],
}