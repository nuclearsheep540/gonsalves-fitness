const port = process.envPORT || 8000
const dbURI = 'mongodb://localhost/gf'
const secret = 'shh! not telling'

module.exports = { dbURI, port, secret }