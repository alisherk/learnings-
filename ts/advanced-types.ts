//how to map types for each type
type mappedType<T> = {
  [K in keyof T]: T[K];
};
type Props = 'propA' | 'propB';
type newMappedType1 = mappedType<Props>;
type newMappedType2 = mappedType<{ a: 'a'; b: 'b' }>;

function printProp(prop: newMappedType1) {
  console.log(prop);
}
const prop1 = 'propA';
const prop2 = 'propC';
printProp(prop1); //OK
//printProp(prop2); //Not

//what if you an onject with string literals e.g

const Messages = {
    en: 'hello', 
    ru: 'privet'
} as const

type MyMessage = keyof typeof Messages;

function printMessage(msg: MyMessage) {
  console.log(Messages[msg]);
}

printMessage('en')

//first arg T can be any value e.g obj = { a: 'a', b: 'b'}, second value Props will define key of this object
// in the body definition of this type we are looking into the keys in K in props and returns obj with that key T[K]
type Pick1<T, Props extends keyof T> = {
  [K in Props]: T[K];
};

type Pick = Pick1<{ a: 'a'; b: 'b' }, 'a'>;

// Recreate Record
//Record takes two params, first describes records keys and second describes values
/* type Record<K extends keyof any, T> = {
    [P in K]: T this allows us to create a property with type T
}
 */

//CONDITIONAL TYPES
type SomeType = number;
type ConditionalType = SomeType extends string ? string : null;
type ConditionalType2<T> = T extends boolean ? 'Type A' : T extends string ? 'Type B': T extends number ? 'Type C' : 'Type D';

function someFunc<T>(value: T) {

  const someOtherFunc = (someArg: T extends boolean ? 'Type A' : 'Type B'
  ) => {
      const a: 'Type A' | 'Type B' = someArg; 
  };
  return someOtherFunc;
}

const result = someFunc(true)

//DISTRIBUTIVE PROPERTY OF CONDITIONAL TYPE 

type StringOrNot<T> = T extends string ? string : never; 

type AUnion = string | boolean | never; 

//type Exclude<T, U> = T extends U ? never : T; 
type ResultType = Exclude<'a' | 'b' | 'c', 'a' | 'b' > //result is c
//if T which a | b | c can be assigned to U which is a | b  then exclude a | b. 

//callback patterns 

type ApiResponse<T> = (
    {
        status: 'success';
        data: T;
    } |
    {
        status: 'error';
        error: string;
    }
);

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

const users: User[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' }
];
  
  
  const requestAdmins = (callback: (response: ApiResponse<User[]>) => void) => {
        callback({status: 'success', data: users });
  }

requestAdmins((data) => console.log(data));

interface Params {
  error: string | null ; 
  sum: number; 
  message: string; 
}


type Callback = (params: Partial<Params>) => void; 


 const getSumAsync = (num1: number, num2: number, cb: Callback) => {
    if (!num1 || !num2) {
      cb(new Error('error'));
    }
    const sum = num1 + num2;
    const message = `Sum is ${sum}`
    cb({ error: null, sum, message});
  }

getSumAsync(1, 1, (data) => {
    console.log(data)
})

type MyType<T> = T extends string | number ? T : never; 
type MyResult = MyType<string | number>; //boolean is omitted because string boolean is not assigned to T

//INFERRING 
type InferSomething<T> = T extends infer U ? U : any; 
type InferredResult = InferSomething<'I am string'>; 

type InferSomething2<T> = T extends { a: infer A, b: number } ? A : any; 
type InferredResult2 = InferSomething2<{ a: 'hello', b: 1}>

type InferSomething3<T> = T extends { a: infer A; b: infer B } ? A & B : any; 
type InferredResult3 = InferSomething3<{ a: { propA: 1 }, b: { propB: 'b'}}>

//type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any; 
type MyFuncReturnValue = ReturnType<() => true>

function f1(): { a: number; b: string };

type ReturnTypeOfF1Func = ReturnType<typeof f1>;

type T3 = ReturnType<<T extends U, U extends number[]>() => T>;


//type for returning an object with new key and value
type ObjectWithNewProp<T, K extends string, V> = T & { [NK in K]: V };

export class ObjectManipulator<T> {
  constructor(protected obj: T) {}

  public set<K extends string, V>(key: K, value: V) {
    return new ObjectManipulator({
      ...this.obj,
      [key]: value,
    } as ObjectWithNewProp<T, K, V>);
  }

  public get<K extends keyof T>(key: K): T[K] {
    return this.obj[key];
  }

  public delete<K extends keyof T>(key: K): ObjectManipulator<Omit<T, K>> {
    const newObj = { ...this.obj };
    delete newObj[key];
    return new ObjectManipulator(newObj);
  }

  public getObject(): T {
    return this.obj;
  }
}
//initializing types
type Comparator<T> = (a: T, b: T) => number;
type GetIndex = <T>(input: T[], comparator: Comparator<T>) => number;
type getElement = <T>(input: T[], comparator: Comparator<T>) => T | null;
