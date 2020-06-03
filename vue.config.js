module.exports = {
    lintOnSave: false,
    devServer: {
        open: process.platform === 'production',
        host: '0.0.0.0',
        port: 2805, // CHANGE YOUR PORT HERE!
        https: true,
        hotOnly: false,
    },
    "transpileDependencies": [
        "vuetify"
    ]
}