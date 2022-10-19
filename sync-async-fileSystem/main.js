import fs from "fs"


const ms = info => {

    info.contenidoStr = JSON.parse(info)
    info.contenidoObj = JSON.stringify( info, null, "\t")
}