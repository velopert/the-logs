import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import wpConfig from '../../../webpack.dev.config';
import config from '../../../config.js';

class DevServer {
    run() {
        let compiler = webpack(wpConfig);
        let server = new WebpackDevServer(compiler, wpConfig.devServer);
        server.listen(config.devPort, () => {
            console.log('webpack-dev-server is listening on port', config.devPort);
        });
    }
};

export default DevServer;
