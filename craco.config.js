// craco.config.js
module.exports = {
    style: {
        postcss: {
            Plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
}