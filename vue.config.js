// vue.config.js
module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "https://api.github.com",
                secure: false
            }
        }
    }
};
