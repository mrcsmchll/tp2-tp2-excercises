/* 1 --- File System en Modo Sincronico --- */
import fs from 'fs'

const infoObjCreation = filePath => {
    return info = {
        contenidoStr: JSON.stringify(fs.readFileSync(filePath, "utf-8"), null, "\t"),
        contenidoObj: JSON.parse(fs.readFileSync(filePath, "utf-8")),
        size: fs.statSync(filePath).size
    }
}

const ms = filePath => {
    try {

        let info = infoObjCreation(filePath)

        console.log(info)

        fs.writeFileSync("info.txt", JSON.stringify(info, null, "\t"))

    } catch (error) {
        console.error(error.message)
    }

}

export  {
    ms,
    infoObjCreation
}

