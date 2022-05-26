import * as ss from 'simple-statistics' //ECMAScript modules, as no default feature
// is provided, we export everything
import crypto from 'crypto-js'
import  loggerFunction, {justIs, threshold} from "./logger.mjs"
import Car_class from "./car_class.mjs"
import Cypher, {encrypt, decrypt} from './Caesar_Cypher/caesar.mjs'
import RandomInt, {randomArrayOfIntegers, randomInt, randomStringGenerator} from "./randomGenerator.mjs";
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

/*let messageEncrypted = encrypt('let`s meet there', 3)
let messageDecrypted = decrypt(messageEncrypted, 3)

let encryptedInClass = new Cypher(2)
let messageEncryptedInClass = encryptedInClass.encrypt("treasure is here")
let messageDecryptedInClass = encryptedInClass.decrypt(messageEncryptedInClass)
loggerFunction(messageDecryptedInClass, 55)*/

let generateRandomInt = new RandomInt().getRandomInt()
let generateRandomArray = randomArrayOfIntegers(4)
let generateRandomSrting = randomStringGenerator(27)
console.log(generateRandomInt, randomInt, generateRandomArray, generateRandomSrting)
