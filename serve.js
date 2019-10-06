const handler = require('serve-handler');
const http = require('http');

const {
    DEPLOY_PORT = "3000"
} = process.env;

/**
 *
 * @param {module:http.IncomingMessage} request
 * @param {module:http.ServerResponse} response
 * @return {Promise<void|*>|void}
 */
function requestListener (request, response) {

    // eslint-disable-next-line no-console
    console.log('==== Request: ', request.url);
    if (request.url === '/api/hello') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello World!');
        response.end();
        return;
    }

    // You pass two more arguments for config and middleware
    // More details here: https://github.com/zeit/serve-handler#options
    return handler(request, response, {
        public: 'dist'
    });
}

const server = http.createServer(requestListener);

server.listen(DEPLOY_PORT, () => {
    // eslint-disable-next-line no-console
    console.log('Running at http://localhost:' + DEPLOY_PORT);
});
