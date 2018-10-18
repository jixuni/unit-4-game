// 1. need to complete layout for Pokemon game
// 2. need 4 playable pokemon 
// 3. Have each pokemon with different attribute, hp, atk power, atk power counter
// 4. After choosing pokemon select another pokemon to battle
// 5. The player pokemon will increase by x += x each tern
// 6. After defeating one, choose another to to battle, but the player keeps that attack strenght
// 7. End game when all pokemon are defeated
// 8. possibly add music to sound attach to teach pokemon


var paladin = {
    occupation: "Paladin",
    healthPoints: 300,
    attackPower: 15,
    counterAttack: 15,
}

var mage = {
    occupation: "mage",
    healthPoints: 150,
    attackPower: 30,
    counterAttack: 30,
}

var ranger = {
    occupation: "ranger",
    healthPoints: 200,
    attackPower: 20,
    counterAttack: 20,
}

var berserker = {
    occupation: "berserker",
    healthPoints: 250,
    attackPower: 25,
    counterAttack: 25,
}




var currentCharacter;
var currentEnemy;
var $pal = $("#paladin"); 
var $mage = $("#mage");
var attackPowerCounter; 

$pal.on("click", function(){
    currentCharacter = paladin;
    $pal.css("-webkit-transform", "scaleX(-1)");
    $pal.css("transform", "scaleX(-1)");
    $(".initialPick").text("Pick someone to rumble with!");
    //console.log("you pick paladin");

})

$mage.on("click", function(){
    currentEnemy = mage;
    $mage.css("-webkit-transform", "scaleX(-1)");
    $mage.css("transform", "scaleX(-1)");
    $(".initialPick").text("Your opponent is mage");
})

$(".attack").on("click", function(){
    
    currentEnemy.healthPoints -= currentCharacter.attackPower;
    currentCharacter.healthPoints -= currentEnemy.attackPower;
    $(".initialPick").html("You hit enemy for " + currentCharacter.attackPower+"\nEnemy health " + currentEnemy.healthPoints + "\nEnemy hit your for " + currentEnemy.attackPower + "\nYour hp " + currentCharacter.healthPoints);
    //console.log("You hit enemy for " + currentCharacter.attackPower);
    //console.log("enemy health " + currentEnemy.healthPoints);
    //console.log("Enemy hit your for " + currentEnemy.attackPower)
    //console.log("Your hp " + currentCharacter.healthPoints);

    currentCharacter.attackPower += 15;
    if(currentEnemy.healthPoints <= 0 && currentCharacter.healthPoints > 0){
        $(".attack").prop("disabled",true);
        $(".initialPick").text("Pick another opponent to battle!!");
        
        
    }
    
    
    
})









/* var game = {
    activeGame: false,
    currentCharacter: 0,
    currentEnemey: 0,
    newGame: function() {
        this.activeGame = true;
        var $pal = $("#paladin"); 
        var $mage = $("#mage");

        pal.on("click", function(){
            currentCharacter = paladin;
            $pal.css("-webkit-transform", "scaleX(-1)");
            $pal.css("transform", "scaleX(-1)");
            $(".initialPick").text("Pick someone to rumble with!")
            //console.log("you pick paladin");
        })
        
        $mage.on("click", function(){
            currentEnemey = mage;
        })
    }
}

game.newGame(); */