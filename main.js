
function Character(name, strength, health){
    this.name=name;
    this.strength=strength;
    this.health=health;

    this.attackBtn = document.querySelector(`#${this.name}-attack`)
    this.healthBtn = document.querySelector(`#${this.name}-make-health`)
    this.alive = document.querySelector(`#${this.name}-alive`)
    this.progress = document.querySelector(`.${this.name}-health span`)
}

Character.prototype.attack = function (opponent){
    if(opponent.health > 0){
        opponent.health -= this.strength;
        opponent.progress.style.width= `${opponent.health}%`;
    }
    else{
        opponent.attackBtn.remove()
        opponent.healthBtn.remove()
        opponent.alive.innerHTML =`${opponent.name} is died`
    }


}
// durum fonksiyonu
Character.prototype.status = function (){
    console.log(` Name: ${this.name}` )
    console.log(` Strength: ${this.strength}`)
    console.log(` Health: ${this.health}` )
}

Character.prototype.makeHealth = function (){
    if(this.health< 100){
        this.health+= 10;
        this.progress.style.width= `${this.health}%`;

    }
    if(this.health> 100){
        this.health= 100;
    }
}


let cat = new Character('cat',10,100);
let dog = new Character('dog',5,100);


cat.attackBtn.addEventListener('click',function(){
    cat.attack(dog);
})

dog.attackBtn.addEventListener('click',function(){
    dog.attack(cat);
})

cat.healthBtn.addEventListener('click',function(){
    cat.makeHealth()
})

dog.healthBtn.addEventListener('click',function(){
    dog.makeHealth()
})