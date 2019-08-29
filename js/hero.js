class Hero{
	constructor(name, health, type, attack, manaHit, skill){	
	this.name = name;
	this.health = health;
	this.type = [];
	this.attack = attack;
	this.manaHit = manaHit;
	this.skill = skill;
	this.mana = 0;	
	}

	getCurrentMana(){
		this.mana += this.manaHit;
		return this.mana;
	}

	useSkill(){

		this.mana = 0;
	}

}
var heroArray = [];
var bloodelf_archer = new Hero("bloodelf_archer", 200, ["bloodelf", "archer"], 40, 20, "fleche_perçante");
var nightelf_mage = new Hero("nightelf_mage", 180, ["nightelf", "mage"], 50, 20, "fireball");

heroArray.push(bloodelf_archer);
heroArray.push(nightelf_mage);