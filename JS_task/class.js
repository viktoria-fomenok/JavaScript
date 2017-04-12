
/**
 * Created by vikyf on 4/11/2017.
 */


class Kingdom {

    constructor(name, autotrophs, complex) {
        this.name = name;
        this.autotrophs = false;
        this.complex = true;
    }

    getKingdom(){
        this.nameKingdom;
    };

    getInfoKingdom(){
        return this.nameKingdom + this.autotrophs + this.complex;
    };
}

class ClassName extends Kingdom {

    constructor(nameClass) {
        super("");
        this.nameClass = nameClass;
    }

    getClassName(){
        return "Class: " + this.nameClass + "\nKingdom: " + this.nameKingdom;
    };

    getInfoClassName(){
        return this.nameClass;
    }
}

class Kind extends ClassName{

    constructor(nameKind, area, lifespan) {
        super("");
        this.nameKind = nameKind;
        this.area = area;
        this.lifespan = lifespan;
        this.predator = true;
    }

    getKind(){
        return this.nameKind;
    };

    getInfoKind(){
        return "Kind: " + this.nameKind
            + "\nArea: " + this.area
            + "\nLifespan: " + this.lifespan
            + "\nPredator: " + this.predator
            + "\nClass: " + this.nameClass
            + "\nKingdom: " + this.nameKingdom
    };
}

let kind = new Kind();
kind.area = "Азия";
console.log(kind.getKind());
console.log(kind.getInfoKind());