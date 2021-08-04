
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    console.log("config:", config)
    return {
        ...config,
        output: {
            filename: "static/js/my-widget.js",
            chunkFilename: "static/js/my-widget.[name].js",
            path: "C:\\Users\\harol\\Software_Projects\\Test\\Javascript\\ReactJS\\Pluggable\\pluggable\\build",
            pathinfo: false,
            futureEmitAssets: true,
            publicPath: "/",
            jsonpFunction: "webpackJsonmy-embeddable-widget",
            globalObject: "this",
            crossOriginLoading: "anonymous"
        }
    };
}


