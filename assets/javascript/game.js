
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
var $pal = $("#paladin"); 
var $mage = $("#mage");
var $berserker = $("#berserker");
var $ranger = $("#ranger");
var attackPowerCounter; 
var winCounter = 0;
var keys = Object.keys(charList);
var len = keys.length;
keys.length


$(".character").on("click", function(){
    if(currentCharacter === undefined && $(this).attr("id") == "paladin"){
        // $(this).attr("characterinfo", JSON.stringify(charList.paladin))
        // currentCharacter = charList.paladin;
        var currentChar = $(this).attr("id")

        console.log(charList[currentChar].healthPoints);
        $(this).css("transform", "scaleX(-1)");
        
    } else if(currentCharacter === undefined && $(this).attr("id") == "berserker"){
        currentCharacter = charList.berserker;
        $(this).css("transform", "scaleX(-1)");
        
    } else if(currentCharacter === undefined && $(this).attr("id") == "mage"){
        currentCharacter = charList.mage;
        $(this).css("transform", "scaleX(-1)");
        
    } else if(currentCharacter === undefined && $(this). attr("id") == "ranger"){
        currentCharacter = charList.ranger;
        $(this).css("transform", "scaleX(-1)");
 
    }
    battle();
})

var currentSelect = $(".character").on("click", function() {
    currentSelect = $(this).attr("id")
    $(this).css("transform", "scaleX(-1)")
    });
    

function battle (){
     console.log("current select", currentSelect)
    switch(currentSelect) {
        case "mage":
            if(currentSelect !== currentCharacter.occupation){
                currentEnemy = charList.mage;
                console.log(currentEnemy);
            } 
        break;
        case "paladin":
            if(currentSelect !== currentCharacter.occupation){
                currentEnemy = charList.paladin;
                console.log(currentEnemy);
            } 
        break;
        case "berserker":
            if(currentSelect !== currentCharacter.occupation){
                currentEnemy = charList.berserker;
                console.log(currentEnemy);
            } 
        break;
        case "ranger":
            if(currentSelect !== currentCharacter.occupation){
                currentEnemy = charList.ranger;
                console.log(currentEnemy);
            } 
        break;
    }   

}


$(".attack").on("click", function(){
    $(".attackSound").get(0).play()
    $(this).css({"transform": "translateX(50px)"});
    currentEnemy.healthPoints -= currentCharacter.attackPower;
    currentCharacter.healthPoints -= currentEnemy.attackPower;
    $(".initialPick").html("You hit enemy for " + currentCharacter.attackPower+"\nEnemy health " + currentEnemy.healthPoints + "\nEnemy hit your for " + currentEnemy.attackPower + "\nYour hp " + currentCharacter.healthPoints);
    

    currentCharacter.attackPower += 15;
    if(currentEnemy.healthPoints <= 0 && currentCharacter.healthPoints > 0){
        $(".initialPick").text("Pick another opponent to battle!!");
        winCounter++; 
        currentSelect = undefined;
        battle();   
    }     
    if(currentCharacter.healthPoints <= 0 || winCounter === len-1 ) {
        $(".initialPick").text("GAME OVER!!");
        $(".attack").prop("disabled",true);
    }
    
})

