function Warrior (name, attack, defense, health) {
  // Properties
  this.name = name;
  this.attack = attack;
  this.defense = defense;
  this.health = health;

  // Methodes
  this.fight = function(warrior) {
    alert(this.name + " attacks " + warrior.name);
    warrior.health = warrior.health - this.attack;
    alert(warrior.name + " has " + warrior.health + " life left");
  };
}

var thor = new Warrior("Thor", 40, 50, 200);
var zeus = new Warrior("Zeus", 60, 30, 200);

thor.fight(zeus);
zeus.fight(thor);

function Wizzard (name, attack, defense, health, mana) {
// Properties
  this.name = name;
  this.attack = attack;
  this.defense = defense;
  this.health = health;
  this.mana = mana;

  // Methodes
  this.fight = function(warrior) {
    alert(this.name + " attacks " + warrior.name);
    warrior.health = warrior.health - this.attack;
    alert(warrior.name + " has " + warrior.health + " life left");
  };
  this.heal = function() {
    if (this.mana > 10) {
      alert(this.name + " try to heal himself ");
      this.health += 10;
      this.mana -= 10;
      alert(this.name + " has now " + this.health);
    }
    else {
      alert("Not enough mana");
    }
  };
}

var Gandalf = new Wizzard("Gandalf", 30, 40, 250, 40);

thor.fight(Gandalf);
zeus.fight(Gandalf);
Gandalf.heal();
Gandalf.fight(thor);
