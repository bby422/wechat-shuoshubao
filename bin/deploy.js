import fs from 'fs'
import path from 'path'
import article from '../src/data/article'
const content = {}

Object.entries(article).forEach(([k, v]) => {
    v.forEach(v2 => {
        const {name, title} = v2
        content[`${k}/${name}`] = fs.readFileSync(`src/data/article/${k}/${name}.md`).toString()
    })
})

fs.writeFileSync('src/data/content.js', 'export default ' + JSON.stringify(content, null, 4))
