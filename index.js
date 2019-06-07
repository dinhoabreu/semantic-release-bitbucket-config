const fs = require('fs')
const path = require('path')

const headerPartial = fs.readFileSync(path.join(__dirname, 'templates', 'header.hbs'), { encoding: 'utf8' })

module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    ['@semantic-release/release-notes-generator', { writerOpts: { headerPartial } }],
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git'
  ],
  preset: 'angular'
}
