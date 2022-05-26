import  { Node } from "./nodeClass.mjs";

export  { Node }  from './nodeClass.mjs'
export  { Leaf } from "./leafClass.js";
export { Parent } from './parentClass.js'



const myTree = Node.from('Adam',
Node.from('Cain', Node.from('Enoch')),
Node.from('Abel'),
Node.from('Seth', Node.from('Enos')))
console.log(myTree.depth())
