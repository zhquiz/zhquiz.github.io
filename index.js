const fs = require('fs')
const yaml = require('js-yaml')
const ghPage = require('gh-pages')

fs.writeFileSync('www/libraryx.json', JSON.stringify(yaml.load(fs.readFileSync('../../assets/libraryx.yaml', 'utf8'))))

ghPage.publish('www')
