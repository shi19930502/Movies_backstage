var path = require("path");
module.exports = {
    entry: path.join(__dirname, "public/js/main.js"),
    output: {
        path: path.join(__dirname, "public/dist"),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
        ]
    },
    resolve: {
        root: path.join(__dirname, "public"),
        alias: {
            tools: "modules/common/tools",
            Reg: "modules/reg/Reg",
            Login: "modules/login/Login",
            Content: "modules/index/Content",
            Manage: "modules/manage/manage",
            Users: "modules/section/users/Users",
            Informations: "modules/section/informations/informations",
            Films: "modules/section/films/films",
            Screenings: "modules/section/screenings/screenings",
            FilmAndScreen: "modules/section/filmAndScreen/filmAndScreen",
            Show: "modules/section/show/show",
            Notshow: "modules/section/notshow/notshow",
            Hot: "modules/section/hot/hot",
        }
    }
}