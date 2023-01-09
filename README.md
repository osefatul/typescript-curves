# Typescript
Let's first understand what type is.
### Type:
Type is an easy way to refer to different properties + functions the value has. and value is anything we can assign to a variable, eg: strings, numbers, booleans... etc.
### Interface:
`interface` in TS is use to define the structure of an object.

`
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}
const todo = response.data as Todo;
`

#### Type Annotations:
We (developers) tell typescript what type of value a variable refer to.
#### Type Reference:
TS tries to figure out the type of the value refers to.