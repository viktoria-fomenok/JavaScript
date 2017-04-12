/**
 * Created by vikyf on 4/11/2017.
 */

function Kingdom(nameKingdom) {
    this.nameKingdom = nameKingdom;
    this.autotrophs = false;
    this.complex = true;
}

Kingdom.prototype.getKingdom = function() {
    return this.nameKingdom;
};

Kingdom.prototype.getInfoKingdom = function() {
    return this.nameKingdom + this.autotrophs + this.complex;
};

var kingdom = new Kingdom();

function ClassName(nameClass) {
    this.nameClass = nameClass;
}

ClassName.prototype = Object.create(Kingdom.prototype);
ClassName.prototype.constructor = ClassName;

ClassName.prototype.getClassName = function() {
    return this.nameClass;
};

ClassName.prototype.getInfoClassName = function() {
    return this.nameClass + "Kingdom: " + this.nameKingdom;
};

var className = new ClassName();

function Kind(/*nameKind, area, lifespan*/) {
    this.nameKind = nameKind;
    this.area = area;
    this.lifespan = lifespan;
    this.predator = true;
}

Kind.prototype = Object.create(ClassName.prototype);
Kind.prototype.constructor = Kind;

Kind.prototype.getKind = function() {
    return this.nameKind;
};

Kind.prototype.getInfoKind = function() {
    return "Kind: " + this.nameKind
        + "\nArea: " + this.area
        + "\nLifespan: " + this.lifespan
        + "\nPredator: " + this.predator
        + "\nClass: " + this.nameClass
        + "\nKingdom: " + this.nameKingdom;
};

var kind = new Kind();

kingdom.nameKingdom = "Медвежьи";
className.nameClass = "Медведь";
kind.nameKind = "Белый медведь"
kind.area = "Азия";
kind.lifespan = 25;
/*console.log(className.getInfoClassName());
console.log(kingdom.getInfoKingdom());
console.log(kind.getKind());
console.log(kingdom.getKingdom());
console.log(className.getClassName());*/
console.log(kind.getInfoKingdom());
