/* 2 --- File System en Modo Asincronico c/ Callbacks --- */

import fs, { stat } from 'fs'

const mac = filePath => {
    try {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) throw new Error(`error en lectura de archivo ${err.message}`)
            let info = {
                contenidoStr: JSON.stringify(data, null, "\t"),
                contenidoObj: JSON.parse(data),
                size: null
            }
            fs.stat(filePath, (err, stat) => {
                if (err) throw new Error(`error en la obtencion del size: ${err.message}`)
                info.size = stat.size
                console.log(info)
            })

            fs.writeFile("infoMac.txt", JSON.stringify(info, null, "\t"), "utf-8", (err) => {
                if (err) throw new Error(`error al crear archivo txt: ${err.message}`)
            })

        }
        )
    } catch (err) {
        console.log(`Error en mac: ${err.message}`)
        }
    }

export default mac

