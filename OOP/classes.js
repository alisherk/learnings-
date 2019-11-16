
class Char {
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon
    }
    attack() {
        return 'attack with ' + this.weapon; 
    }
}; 

class Elf extends Char {
    constructor(name, weapon, type){
        //calls the parent class
        super(name, weapon); 
        this.type = type;
    }

}

class Ogre extends Char {
    constructor(name, weapon, color){
        super(name, weapon); 
        this.color = color; 
    }
    makeFort(){
        return 'strongest fort made';
    }
}

const dolby = new Elf('dolby', 'cloth', 'house');
console.log(dolby.attack());

const shrek = new Ogre('Shrek', 'club', 'green'); 
console.log(shrek.makeFort());






