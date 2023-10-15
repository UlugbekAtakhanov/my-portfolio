module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-color": "#edf2f8",
                "secondary-color": "#313bac",
                "gray-color": "#6b7688",
                "black-color": "#030303",
            },
            boxShadow: {
                custom1: "0 0 20px rgba(0, 0, 0, 0.1)",
                custom2: "0 0 20px rgba(0, 0, 0, 0.4)",
            },
        },
    },
    plugins: [],
};
