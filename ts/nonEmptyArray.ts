/* 
type NonEmptyArray<T> = /* your type level code here 💪 
const a: NonEmptyArray<string> = [] // should be compilation error 🛑
const b: NonEmptyArray<string> = ['Hi TS'] // should be ok! 👌
 */

type NonEmptyArray<T> = [T, ...T[]]

const a: NonEmptyArray<String> = []; 
const b: NonEmptyArray<String> = ['hi']; 

type NonEmptyArray2<T> = T[] & { 0: T };