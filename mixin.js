const jsSkill = {
    knowsJS() {
        return true;
    }
}

const engDegree = {
    hasDegree() {
        return true;
    }
}

const backendSkill = {
    knowsBackend() {
        return true;
    }
}

const jsEngineer = Object.assign({}, jsSkill, engDegree); 
const fullStack = Object.assign({}, jsSkill, engDegree, backendSkill); 

console.log(jsEngineer); 
console.log(fullStack); 

