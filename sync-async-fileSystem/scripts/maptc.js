/* 3 --- File System en Modo Asincronico c/ Promises + Then-Catch --- */

import fs from 'fs'

const maptc = filepath => {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, "utf-8", (err, data) => {
            if (err) reject(err)
            fs.stat(filepath, (err, stat) => {
                if (err) reject(err)
                let info = {
                    contenidoStr: JSON.stringify(data, null, "\t"),
                    contenidoObj: JSON.parse(data),
                    size: stat.size
                }
                fs.writeFile("infoMaptc.txt", JSON.stringify(info, null, "\t"), err => {
                    reject(err)
                })
                resolve(info)
            })
        })
    })
}

export default maptc


