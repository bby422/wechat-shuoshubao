const fs = require('fs');
const glob = require('glob');
const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    wpyExt: '.wpy',
    build: {
        web: {
            htmlTemplate: path.join('src', 'index.template.html'),
            htmlOutput: path.join('web', 'index.html'),
            jsOutput: path.join('web', 'index.js')
        }
    },
    resolve: {
        alias: glob.sync('src/*')
            .filter(v => fs.statSync(v).isDirectory())
            .reduce((prev, cur) => {
                prev[cur.slice(4)] = path.join(__dirname, cur)
                return prev
            }, {}),
        modules: ['node_modules']
    },
    compilers: {
        less: {
            compress: false
        },
        babel: {
            sourceMap: true,
            presets: ['env'],
            plugins: [
                'transform-class-properties',
                'transform-decorators-legacy',
                'transform-object-rest-spread',
                'transform-export-extensions'
            ]
        }
    },
    plugins: {},
    appConfig: {
        noPromiseAPI: ['createSelectorQuery']
    }
};

if (isProduction) {
    delete module.exports.compilers.babel.sourcesMap;

    // 压缩less
    module.exports.compilers['less'] = { compress: true };

    // 压缩js
    module.exports.plugins = {
        uglifyjs: {
            filter: /\.js$/,
            config: {}
        }
    };
}
