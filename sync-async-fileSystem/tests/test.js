import ms from "../scripts/ms.js"
import mac from "../scripts/mac.js"
import maptc from "../scripts/maptc.js"
import mapaa from "../scripts/mapaa.js"

const path = "../package.json"

// /* -1- */
// try {
//     ms(path)
// } catch (error) {
//     console.error(error.message)
// }

// /* -2- */
// try {
//     mac(path)
// } catch (error) {
//     console.error(error)
// }

// /* -3- */
// maptc(path).then(data =>{
//     console.log(data)
// }).catch(error =>{
//     console.error(error)
// })

/* -4- */
try {
    mapaa(path)
} catch (error) {
    console.error(error)
}