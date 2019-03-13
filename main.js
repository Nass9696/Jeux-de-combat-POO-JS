var fiche = createElement('div');
fiche.textContent = this.name;
console.log(Players);
//Create constructor of Warrior
function Warrior(name, attack, defence, healt){
  this.name = name;
  this.attack = attack;
  this.defence = defence;
  this.healt = healt;
  this.frappe = function(cible){
    cible.healt = cible.healt - this.attack;
    return text.textContent = cible.name + " perd : " + this.attack + " pv ";
  }
}

//Create constructor of Magician
function Magician(name, attack, defence, healt, mana){
  this.name = name;
  this.attack = attack;
  this.defence = defence;
  this.healt = healt;
  this.mana = mana;
  this.soin = function(){
    if(this.mana > 10){
    this.mana -= 10;
    this.healt += 10;
    }
    else {

    }
  }
}

//Instancie 2 Warrior
var Warrior1 = new Warrior("Anakin", 10, 100, 100);
var Warrior2 = new Warrior("ObiWan", 50, 100, 100);
//Instancie 1 Magician
var Magician1 = new Magician("Imani", 50, 100, 100, 100);
