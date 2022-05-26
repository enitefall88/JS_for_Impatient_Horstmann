import {Leaf} from "./tree.mjs"
import {Parent} from "./tree.mjs"

export class Node {
static from(value, ...children) {
return children.length === 0 ? new Leaf(value)
: new Parent(value, children)
}
}

