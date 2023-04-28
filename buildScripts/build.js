import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from "chalk";

process.env.NODE_ENV = "production";

console.log(chalk.blue("make mini-field for production. Will take a moment...."));

webpack(webpackConfig).run((err, stats)=>{
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }

    if (jsonStats.hasWarnings) {
        console.log(chalk.yellow('Webpack generated the following warnings: '));
        jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
    }
    //if we got this far the build succeeded
    console.log(`Webpack stats: ${stats}`);

    return 0;
});