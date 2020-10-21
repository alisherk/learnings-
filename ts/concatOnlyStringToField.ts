const concatToField = <T extends Record<K, string>, K extends keyof T >(obj: T, key: K, payload: string): T => {
    const prop = obj[key];
    return { ...obj, [key]: prop.concat(payload) }; // works 👍
}

// tests
const test = { fieldStr: 'text', fieldNum: 1, fieldStr2: 'text' };
concatToField(test, 'fieldStr', 'test'); // should be ok 👌
concatToField(test, 'fieldNum', 'test'); // should be error fieldNum is not string field 🛑
concatToField(test, 'notExistingField', 'test'); // should be error - no such field 🛑
concatToField(test, 'fieldStr2', 'test'); // should be ok 👌