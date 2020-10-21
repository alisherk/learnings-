type Config = {
  name: boolean;
  lastname: boolean;
};
type User = {
  name?: string;
  lastname?: string;
};

//declare function getUser(config: Config): User;

//create a type that returns User object based on boolean type
//assigned to the object; eg 

//const user = getUser({ name: true, lastname: false }); 
//user.lastname //should be error 
//user.name // should be okay

/* declare function getUser<
  C extends Config,
  _NamePart = C['name'] extends true ? Pick<Required<User>, 'name'> : {},
  _LastNamePart = C['lastname'] extends true ? Pick<Required<User>, 'lastname'> : {}
  >(
    config: C
): _NamePart & _LastNamePart; 

const user = getUser({ name: true, lastname: false}); 

user.name; 
user.lastname  */

//solution 2 overload 
declare function getUser(
    config: { name: true; lastname: false}
  ): Pick<Required<User>,'name'>;
  
  declare function getUser(
    config: { name: false; lastname: true}
  ): Pick<Required<User>,'lastname'>;
  
  declare function getUser(
    config: { name: false; lastname: false}
  ): {};
  
  declare function getUser(
    config: { name: true; lastname: true}
  ): Required<User>;

  //solution 3 conditional type

type KeysOfTrueValues<T> = Pick<T, { [K in keyof T]: T[K] extends true ? K : never }[keyof T]>;

type UserReturnType<T extends User, C extends Config> = Required<Omit<T, Exclude<keyof T, keyof KeysOfTrueValues<C>>>>;

declare function getUser<T extends User, C extends Config>(
     config: C
): UserReturnType<T, C>;

const user = getUser({ name: false, lastname: true }); 
user.lastname; 
user.name;

//empty object 
type EmptyObject = {
    [K in PropertyKey]: never
}

function getEmptyObject({}: EmptyObject) {
    return {}; 
}; 

getEmptyObject({a: 'a'})

type Exclusive<T1, T2 extends T1> = {
    [K in keyof T2]: K extends keyof T1 ? T2[K] : never 
}
function takeSomeTypeOnly<T extends string>(x: Exclusive<string, T>) { return x }

takeSomeTypeOnly('a');
takeSomeTypeOnly({ a: 'a'})



