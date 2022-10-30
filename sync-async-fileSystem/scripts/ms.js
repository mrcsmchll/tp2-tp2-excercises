/* 1 --- File System en Modo Sincronico --- */
import { info } from 'console'
import fs from 'fs'

export const infoObjCreation = filePath => {
    const info = {
        contenidoStr: JSON.stringify(fs.readFileSync(filePath, "utf-8"), null, "\t"),
        contenidoObj: JSON.parse(fs.readFileSync(filePath, "utf-8")),
        size: fs.statSync(filePath).size
    }
    return info
}

const ms = filePath => {
    try {

        let info = infoObjCreation(filePath)

        console.log(info)

        fs.writeFileSync("info.txt", JSON.stringify(info, null, "\t"))

    } catch (error) {
        console.error(error)
    }
}

export default ms
     

