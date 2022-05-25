import * as ss from 'simple-statistics' //ECMAScript modules, as no default feature
// is provided, we export everything
import crypto from 'crypto-js'
import {logger as loggerFunction, justIs, threshold} from "./logger.mjs";
import Car_class from "./car_class.mjs";

//1.
let resultDeviation = ss.standardDeviation([3,4,5,6,7,8,9,10]) //using a certain function
let meanDeviation  = ss.mean([1,10])
console.log(resultDeviation, meanDeviation)

//2.
let encrypted = crypto.AES.encrypt('secret message', 'secret key 123').toString()
let decrypted = crypto.AES.decrypt(encrypted, 'secret key 123')
console.log(encrypted, decrypted.toString(crypto.enc.Utf8))

let logger = loggerFunction('sdsdsddsdsds', 5)
console.log(logger)

justIs()

let honda = new Car_class("honda")
console.log(honda.make)
