
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



// $("#ranger") = charList.ranger;
// $("#berserker") = charList.berserker;
// $("mage") = charList.mage;
var currentCharacter;
var currentEnemy;

var attackPowerCounter; 
var winCounter = 0;
var startGame = false;

var keys = Object.keys(charList); // Didnt know how to get the lenght of Object this so i did this
var len = keys.length;


 
$(".character").on("click", function() {
    if(currentCharacter === undefined ){
            currentCharacter = $(this).attr("id");
            $(".screentext").text("Pick your opponent");
            $(this).css("transform", "scaleX(-1)");
            attackIncrement = charList[currentCharacter].attackPower // Had to initialize a global variable here, if i just added the  charList[currentCharacter].attackPower the number would be 2x
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


// calculation for health and attack
$(".attack").on("click",function(){
    animation();
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
        winCounter ++; // adds winning counter 
        currentSelect = undefined;    
    } 
    if(charList[currentCharacter].healthPoints <= 0 || winCounter === len-1){ // check if condition is meet to win the game
        $(".screentext").text("GAME OVER!!");
        $(".attack").prop("disabled",true);
    }
}
// some reason my animation only works for 1 character at a time
function animation(){ 
    if(currentCharacter == "paladin"){
        document.getElementById("paladin").className = "classname";
    } else if( currentCharacter == "mage"){
        document.getElementById("mage").className = "classname";
    } else if( currentCharacter == "ranger"){
        document.getElementById("ranger").className = "classname";
      }  else if( currentCharacter == "berserker"){
            document.getElementById("berserker").className = "classname";
    }
}

$(".reset").on("click", function(){ // reset button
    location.reload();
})

$("#music").on("click",function(){ // play button
    $(".attackMusic").get(0).play();
})

$("#pause").on("click",function(){ // pause button
    $(".attackMusic").get(0).pause();
})






/* ------- Many bugs below, tried using the Switch statement for apha version of this game------ */






// $(".character").on("click", function(){
//     if(currentCharacter === undefined ){
//         // $(this).attr("characterinfo", JSON.stringify(charList.paladin))
        
//         var currentChar = $(this).attr("id")

//         console.log(charList[currentChar].healthPoints);
//         $(this).css("transform", "scaleX(-1)");
        
//     } else if(currentCharacter === undefined && $(this).attr("id") == "berserker"){
//         currentCharacter = charList.berserker;
//         $(this).css("transform", "scaleX(-1)");
        
//     } else if(currentCharacter === undefined && $(this).attr("id") == "mage"){
//         currentCharacter = charList.mage;
//         $(this).css("transform", "scaleX(-1)");
        
//     } else if(currentCharacter === undefined && $(this). attr("id") == "ranger"){
//         currentCharacter = charList.ranger;
//         $(this).css("transform", "scaleX(-1)");
 
//     }
//     battle();
// })

// var currentSelect = $(".character").on("click", function() {
//     currentSelect = $(this).attr("id")
//     $(this).css("transform", "scaleX(-1)")
//     });
    

// function battle (){
//      console.log("current select", currentSelect)
//     switch(currentSelect) {
//         case "mage":
//             if(currentSelect !== currentCharacter.occupation){
//                 currentEnemy = charList.mage;
//                 console.log(currentEnemy);
//             } 
//         break;
//         case "paladin":
//             if(currentSelect !== currentCharacter.occupation){
//                 currentEnemy = charList.paladin;
//                 console.log(currentEnemy);
//             } 
//         break;
//         case "berserker":
//             if(currentSelect !== currentCharacter.occupation){
//                 currentEnemy = charList.berserker;
//                 console.log(currentEnemy);
//             } 
//         break;
//         case "ranger":
//             if(currentSelect !== currentCharacter.occupation){
//                 currentEnemy = charList.ranger;
//                 console.log(currentEnemy);
//             } 
//         break;
//     }   

// }


// $(".attack").on("click", function(){
//     $(".attackSound").get(0).play()
//     $(this).css({"transform": "translateX(50px)"});
//     currentEnemy.healthPoints -= currentCharacter.attackPower;
//     currentCharacter.healthPoints -= currentEnemy.attackPower;
//     $(".initialPick").html("You hit enemy for " + currentCharacter.attackPower+"\nEnemy health " + currentEnemy.healthPoints + "\nEnemy hit your for " + currentEnemy.attackPower + "\nYour hp " + currentCharacter.healthPoints);
    

//     currentCharacter.attackPower += 15;
//     if(currentEnemy.healthPoints <= 0 && currentCharacter.healthPoints > 0){
//         $(".initialPick").text("Pick another opponent to battle!!");
//         winCounter++; 
//         currentSelect = undefined;
//         battle();   
//     }     
//     if(currentCharacter.healthPoints <= 0 || winCounter === len-1 ) {
//         $(".initialPick").text("GAME OVER!!");
//         $(".attack").prop("disabled",true);
//     }
    
// })

