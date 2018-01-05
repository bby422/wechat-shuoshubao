import fs from 'fs-extra'
import path from 'path'
import article from '../src/data/article'

Object.entries(article).forEach(([k, v]) => {
    v.forEach(v2 => {
        const {name} = v2
        const content = fs.readFileSync(`src/data/article/node/fs.md`).toString()
        const toFilePath = `src/data/articleJS/${k}/${name}.js`
        fs.ensureFileSync(toFilePath)
        fs.writeFileSync(toFilePath, 'export default ' + JSON.stringify(content))
    })
})
