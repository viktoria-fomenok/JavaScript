/**
 * Created by vikyf on 4/7/2017.
 */

function Kingdom(nameKingdom) {
        this.nameKingdom = nameKingdom;
        this.autotrophs = false;
        this.complex = true;

    this.getKingdom = function(){
        this.nameKingdom;
    };

    this.getInfoKingdom = function(){
        return this.nameKingdom + this.autotrophs + this.complex;
    };
}

var kingdom = new Kingdom();

function ClassName(nameClass) {
    Kingdom.apply(this, arguments);
    this.nameClass = nameClass;
    this.getClassName = function(){
        return this.nameClass;
    };

    this.getInfoClassName = function(){
        return "Class: " + this.nameClass + "\nKingdom: " + this.nameKingdom;
    };
}

var className = new ClassName();

function Kind(nameKind, area, lifespan) {
    ClassName.apply(this, arguments);
    this.nameKind = nameKind;
    this.area = area;
    this.lifespan = lifespan;
    this.predator = true;

    this.getKind = function(){
        return this.nameKind;
    };

    this.getInfoKind = function(){
        return "Kind: " + this.nameKind
            + "\nArea: " + this.area
            + "\nLifespan: " + this.lifespan
            + "\nPredator: " + this.predator
            + "\nClass: " + this.nameClass
            + "\nKingdom: " + this.nameKingdom;
    };
}

var kind = new Kind("Bear");
kingdom.nameKingdom = "Медвежьи";
className.nameClass = "Медведь";
kind.nameKind = "Белый медведь"
kind.area = "Азия";
kind.lifespan = 25;
/*console.log(className.getInfoClassName());
 console.log(kingdom.getInfoKingdom());
 console.log(kind.getKind());*/
 console.log(kingdom.getKingdom());
 //console.log(className.getClassName());
//console.log(kind.getInfoKind());
