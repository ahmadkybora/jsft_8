var path = require('path');

module.exports = () => {
  return {
      // این قسمت در اصل ادرس روت ماژول ها را مینویسیم
      // کگه ورودی همه از این قسمت میباشد
        entry: {
        main: "./src/main.js",
        },
        // اینجا هم ادرس فایلی است که باندل میشود
        output: {
            filename: "index.js",
            path: path.resolve(__dirname, "public"),
        },
        module: {
            rules: [
                { 
                    test: /\.txt$/, 
                    use: 'raw-loader' 
                },
                {
                  test: /\.html$/i,
                  use: ["html-loader"],
                },
            ],
        },
    }
}