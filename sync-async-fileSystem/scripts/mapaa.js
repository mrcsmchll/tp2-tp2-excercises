/* 4 --- File System en Modo Asincronico c/ Callbacks + Async-Await --- */
import fs from 'fs'

const mapaa = async filePath => {
    let info = {
        contenidoStr: JSON.stringify(await fs.promises.readFile(filePath, "utf-8"), null, "\t"),
        contenidoObj: JSON.parse(await fs.promises.readFile(filePath)),
        size: (await fs.promises.stat(filePath)).size
    }
    console.log(info)
    await fs.promises.writeFile("infoMapaa.txt", JSON.stringify(info, null, "\t"))
}

// mapaa("../package.json")

export default mapaa