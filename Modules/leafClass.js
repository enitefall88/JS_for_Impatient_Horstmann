import { Node } from "./tree.mjs";
export class Leaf extends Node {
constructor(value) {
super()
this.value = value
}
depth() {
return 1
}
}
