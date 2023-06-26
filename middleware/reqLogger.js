// Custom middleware for logging request types and paths to the server, each request is colour coded for clarity
const reqLogger = (req, res, next) => {
    switch (req.method) {
        case 'GET': {
            console.info(`\x1b[34m${req.method} request to ${req.path}\x1b[0m`)
            break
        }
        case 'POST': {
            console.info(`\x1b[32m${req.method} request to ${req.path}\x1b[0m`)
            break
        }
        case 'DELETE': {
            console.info(`\x1b[31m${req.method} request to ${req.path}\x1b[0m`)
            break
        }
        default:
            console.info(`\x1b[35m${req.method} request to ${req.path}\x1b[0m`)
    }

    next()
}

module.exports = reqLogger