
var charList = {
    paladin: {
    occupation: "paladin",
    healthPoints: 120,
    attackPower: 8,
    counterAttack: 15,
    },

    mage: { 
    occupation: "mage",
    healthPoints: 100,
    attackPower: 14,
    counterAttack: 5,
    },

    ranger: {
    occupation: "ranger",
    healthPoints: 150,
    attackPower: 8,
    counterAttack: 20,
    },

    berserker: {
    occupation: "berserker",
    healthPoints: 180,
    attackPower: 7,
    counterAttack: 25,
    },
}


// $("#paladin") = charList.paladin;
// $("#ranger") = charList.ranger;
// $("#berserker") = charList.berserker;
// $("mage") = charList.mage;
var currentCharacter;
var currentEnemy;

var attackPowerCounter; 
var winCounter = 0;
var startGame = false;

var keys = Object.keys(charList); 
var len = keys.length;


 
$(".character").on("click", function() {
    if(currentCharacter === undefined ){
            currentCharacter = $(this).attr("id");
            $(".screentext").text("Pick your opponent");
            $(this).css("transform", "scaleX(-1)");
            attackIncrement = charList[currentCharacter].attackPower
            console.log(currentCharacter);
        if(currentCharacter !== undefined && currentEnemy === undefined){
            $(".character").on("click", function(){
                currentEnemy = $(this).attr("id");
                $(this).css("transform", "scaleX(-1)");
                $(".screentext").html("Attack the " + currentEnemy);
                console.log(currentEnemy);
            }
            )}
    } return 0;
})



$(".attack").on("click",function(){
    $(".attackSound").get(0).play();
    charList[currentEnemy].healthPoints -= attackIncrement;
    charList[currentCharacter].healthPoints -= charList[currentEnemy].attackPower;
    $(".screentext").html("You hit " + currentEnemy + " for " + attackIncrement+"\n" + currentEnemy + " health " + charList[currentEnemy].healthPoints + "\n" + currentEnemy + " hit your for " + charList[currentEnemy].attackPower + "\nYour hp " + charList[currentCharacter].healthPoints);
    console.log(attackIncrement);
    attackIncrement += charList[currentCharacter].attackPower
    gameStatus();
})

function gameStatus (){
    if(charList[currentEnemy].healthPoints <= 0 && charList[currentCharacter].healthPoints > 0){
        $(".screentext").text("Pick another opponent!!");
        winCounter ++;
        currentSelect = undefined;    
    } 
    if(charList[currentCharacter].healthPoints <= 0 || winCounter === len-1){
        $(".screentext").text("GAME OVER!!");
        $(".attack").prop("disabled",true);
    }
}

$(".reset").on("click", function(){
    location.reload();
})

$(".music").on("click",function(){
    $(".attackMusic").get(0).play();
})