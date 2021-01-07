const fs = require('fs')
const yaml = require('js-yaml')

fs.writeFileSync('www/libraryx.json', JSON.stringify(yaml.load(fs.readFileSync('../../assets/libraryx.yaml', 'utf8'))))
