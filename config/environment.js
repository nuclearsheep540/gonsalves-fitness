const port = process.env.PORT || 8000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/gf'
const secret = 'shh! not telling'

module.exports = { dbURI, port, secret }