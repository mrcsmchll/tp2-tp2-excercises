/* 1 --- File System en Modo Sincronico --- */
import fs from 'fs'

const ms = filePath => {
    try {

        let info = {
            contenidoStr: JSON.stringify(fs.readFileSync(filePath, "utf-8"), null, "\t"),
            contenidoObj: JSON.parse(fs.readFileSync(filePath, "utf-8")),
            size: fs.statSync(filePath).size
        }

        console.log(info)

        fs.writeFileSync("infoMs.txt", JSON.stringify(info, null, "\t"))

    } catch (error) {
        console.error(error.message)
    }

}

export default ms


