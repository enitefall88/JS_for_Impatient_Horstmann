import {encrypt} from "./Caesar_Cypher/caesar.mjs"
//3. Implement a simple logging module that supports logging messages whose
// log level exceeds a given threshold. Export a log function, constants for
// the log level, and a function to set the threshold.
const threshold = 55

export default function logger(message, threshold) {
  if (message.length < threshold) {
    let encryptedLog = encrypt(message,2)
    console.log(message, encryptedLog)
  } else {console.log("the message length is too long")}
}



function justIs() {
  console.log("Here")
}

export  { threshold, justIs}
