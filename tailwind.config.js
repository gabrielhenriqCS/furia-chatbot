import { heroui } from '@heroui/theme';
/** @type {import('tailwindcss').Config} */
export const plugins = [heroui()];
export const content = [
    "./node_modules/@heroui/theme/dist/components/(radio|form).js",
    "./src/**/*.{js,jsx,ts,tsx}"
];
export const theme = {
    extend: {
        colors: {
            'furia-primary': '#000000',
        }
    },
};