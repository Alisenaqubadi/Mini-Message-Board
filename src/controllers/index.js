import fs from "fs"
import path from "path"

const base = import.meta.dirname;
const jsonPath = path.join(base, "../Modules/data.json")

export default { 
    root: (req,res)=>{
        res.render('index', readJson(jsonPath))
        console.log(readJson(jsonPath))
    },
}

function readJson(filePath) {
 return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}