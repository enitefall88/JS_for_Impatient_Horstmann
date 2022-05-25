export default class RandomInt {
  constructor(number) {
  this.number = number
  }
  getRandomInt(min = 1, max = 1000) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min)
  }
}

export let randomInt = new RandomInt().getRandomInt()

export function randomArrayOfIntegers(numberOfElements) {
  let resultArray = []
  for(let i = 0; i < numberOfElements; i+=1) {
    resultArray.push(new RandomInt().getRandomInt())
  }
  return resultArray
}

 function getRandomInt(min = 1, max = 43) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min)
  }

const randomString = (length) => {
  let result = ""
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for(let i = 0; i <= length; i+=1) {
    result += chars.charAt(getRandomInt())
  }
  return result
}

export {randomString as randomStringGenerator}
