/* 4 --- File System en Modo Asincronico c/ Callbacks + Async-Await --- */
import fs, { stat } from 'fs'

const mapaa = async filePath => {
    await new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf-8", (error, data) => {
            if (error) reject(error)
            fs.stat(filePath, (error, stat) => {
                if (error) reject(error)
                let info = {
                    contenidoStr: JSON.stringify(data, null, "\t"),
                    contenidoStrObj: JSON.parse(data),
                    size: stat.size
                }
                resolve(console.log(info))
                fs.writeFile("infoMapaa.txt", JSON.stringify(info,null,"\t"), error => {
                    reject(error)
                })
            })
        })
    })


    /* ---------con interfaz fs.promises----------
     let info = {
        contenidoStr: JSON.stringify(await fs.promises.readFile(filePath, "utf-8"), null, "\t"),
        contenidoObj: JSON.parse(await fs.promises.readFile(filePath)),
        size: (await fs.promises.stat(filePath)).size
    }
    await fs.promises.writeFile("infoMapaa.txt", JSON.stringify(info, null, "\t"))
 */
}

/* ------for quick test------
mapaa("../package.json")
 */
export default mapaa