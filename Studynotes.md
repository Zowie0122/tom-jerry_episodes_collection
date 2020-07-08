# Set up

npx create-react-app your-app-name
yarn add typescript @types/node @types/react @types/react-dom
App.js 👉 App.tsx
index.js 👉 index.tsx
yarn start

# TypeScript Cheatsheet

Browser could not read TS, compile it with commands : tsc your_file.ts
Always import js file in index.html

// Data types
// boolean, number, string, array, tuple, enum, any, object

// Boolean
let isDone: boolean = false;

// Number
let myNum: number = 6;

// String
let color: string = "blue";

// Array
let list: number[] = [1, 2, 3];
let array: any[] = [1, "Zowie"];
let another_list: Array<number> = [1, 2, 3];

// Tuple - fixed length array
let x: [string, number];
x = ["hello", 2];

// 👻 push method is allowed to change the length of a tuple,but not assign
x.push("Zowie");

// enum is for declearing object with index ?
enum Color {
Red,
Green,
Blue,
}
let r = Color.Red;
let g = Color[1];

console.log(r, g);

// Union types - declear a variable can be in multiple types
function combine(input1: number | string, input2: number | string) {
if (typeof input1 === "number" && typeof input2 === "number") {
return input1 + input2;
}
return input1.toString() + input2.toString();
}

// Literal types

// Type Aliases - customize types
type Combinable = number | string;

// Function return types
// void - function does not return anything
function viodF(): void {
console.log("I am not returning anything");
}

// undefined - function return value : undefined 😰JS's undefined is wired
function undefinedF(): undefined {
return undefined;
}

// Another way to declear function return value
let combineFunction: (a: number, b: number) => number;

function sum(a: number, b: number): number {
return a + b;
}

sum(1, 2);
// error in ts 👉sum("1", 2);

const add_log = (num1: number, num2: number, cb: (sum: number) => void) => {
const result = num1 + num2;
cb(result);
};

add_log(1, 2, (sum) => {
console.log(sum);
});

// unknown - declear a variable as unknow first, but once it assigned later, the type will be fixed. Unlike any.
let myInput: unknown;
myInput = "zowie";
let myNumber = 22;

// will throw an error 👇
// myNumber = myInput;

// Different between void and never
// void 型は値がないことを指している。ただし、void 型には undefined が含まれる。JavaScript の関数で return を省略、または戻り値のない return をすると undefined が返される。
const hello_void = (name: string): void => {
console.log("hello", name);
return undefined; // or return
};

// never 型は発生し得ない値のことを指している。関数内部で例外を投げる場合や無限ループをする場合など、戻り値が得られないときにしか使えない。void 型と違い undefined も受け付けないため、戻り値の型に never を指定した場合は return することはできない。

// ↓ はコンパイルエラーになる
const hello_never = (name: string): never => {
console.log("hello", name);
// return が省略されている場合は undefined を返すため never 型にならない
};

// Q: is never more for excution another function inside and while loop ?

# TypeScript Compiler

Watch all files inside of the project :
run : $tsc --init, tsconfig.json will be generated
then to complile all the ts file, run : $tsc
run : $tsc -w or $tsc --watch to watch all the files

# Interface

// delear the set(options) in the object 👉 what should be included in the object.

interface SquareOptions {
width: number;
length: number;
}

function getSquare(input: SquareOptions) {
let width = input.width;
let length = input.length;
return width \* length;
}

getSquare({
width: 5,
length: 10,
});

# React.useReducer

const [data, dispatch] = useReducer(reducer, initialState)

function reducer(state,action ){
switch (action.type){
case 'ADD':
return ;
case 'DELETE':
return ;
}
}

onClick(()=>{
dispatch({type: , payload:{}})
})

# React.useContext

Share state within a component tree:
central storage of data(store) for front-end so that components can pass data easlier between each other. Similiar with Redux.

1. create Store.tsx and Store
   export const Store = createContext<IState | any>(initialState);

export function StoreProvider(props: any): JSX.Element {
const [state, dispatch] = React.useReducer(reducer, initialState);
return (
<Store.Provider value={{ state, dispatch }}>
{props.children}
</Store.Provider>
);
}

2. Wrap elements within <StoreProvider> in index.tsx

3. consume useContext
   import Store to the components that needs to access the data in React-context
   const { state } = useContext(Store);

# React.lazy and React.Suspense

When we don't need to load the content right away. use lazy import
Then wrap the lazy content inside of <Suspense>, which like a conditional rendering ?

# props.children

if something passed down from parents and the children has no content itself, the children will use it's own contenct.
Other way around, it will use its parents' props
