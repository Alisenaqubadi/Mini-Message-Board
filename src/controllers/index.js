import fs from "fs"
import path from "path"

const base = import.meta.dirname;
const jsonPath = path.join(base, "../Modules/data.json")

export default { 
    root: (req,res)=>{
        res.render('index', readJson(jsonPath))
        console.log(readJson(jsonPath))
    },
    save: (req,res)=>{
        addToJson(jsonPath,req.body.username,req.body.message)
        res.redirect('/')
    },
}

function readJson(filePath) {
 return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}

function addToJson(filePath,username,message) {
    const oldData = readJson(filePath);
    oldData.array.push({ user: username, message: message})
    fs.writeFileSync(filePath, JSON.stringify(oldData, null, 2))
}