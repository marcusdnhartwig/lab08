
alert ('tell me what you want?');

let question = prompt('what you really really want.');

if (question=='lover'){

    alert ('meet my friends');
}   else {
    alert ('friendship never ends');
    }



function mximagesprompter (){
    let whichprompt = prompt("would you like to see mx?");
    while (whichprompt !== "yes") {
        if (whichprompt == "no"){
            whichprompt = prompt("that's just too dang bad!");
        } else {
            whichprompt = prompt("would you like to see mx?");
        }
        
    }
    
} 
mximagesprompter();
//!!!UNSURE WHY THIS IS PROMPTING, BUT NOT RESPONDING!!!//
function helloprompt() {
    let hello = prompt('From 1 to 10 how bougie are you?');
    console.log('hello', typeof Number(hello));
    if (hello == 10) {
        Response = "YOU IS BOUGIE!";
    } else if (hello > 7) {
        Response = "Your bougie will make a fine addition to my collection";
    } else if (hello > 5) {
        Response = "I will accept your bougie, but only just.";
    } else if (hello > 3) {
        Response = "unacceptable lack of bougie, but you will learn.";
    } 

}
helloprompt();
