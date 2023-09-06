// Iteration 1: Names and Input
const hacker1 = "Lidia";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Rino";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1Length>hacker2Length){
    console.log(`The driver has the longest name, it has ${hacker1Length} characters`);
  }
  else if (hacker1Length<hacker2Length){
    console.log(`The driver has the longest name, it has ${hacker1Length} characters`);
  }
  else if (hacker1Length === hacker2Length){
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`);
  }

// Iteration 3: Loops.
let driverCap =''

for (let i=0; i<hacker1Length; i++){
    if (i<hacker1Length-1){
      driverCap += hacker1[i].toUpperCase() + ' '
    }
    else if (i === hacker1Length-1) {
      driverCap += hacker1[i].toUpperCase()
    }
  }
  console.log(driverCap)


  if (hacker1Length > hacker2Length) {  /*To have the possibility to say the shorter name goes first if everything else is the same*/
    let i = 0;
    while (i<hacker2Length){
      if (hacker1[i]<hacker2[i]){
        console.log("The driver's name goes first.");
        break;
      }
      else if(hacker1[i]>hacker2[i]){
        console.log("Yo, the navigator goes first, definitely.");
        break;
      }
      else if (hacker1[i]===hacker2[i]){
        if(i===hacker2Length-1){
          console.log("Yo, the navigator goes first, definitely.")
          break;
        }
        i++;
      }
    }
  }
  
  if (hacker2Length > hacker1Length) { /*To have the possibility to say the shorter name goes first if everything else is the same*/
    let i = 0;
    while (i<hacker1Length){
      if (hacker1[i]<hacker2[i]){
        console.log("The driver's name goes first.");
        break;
      }
      else if(hacker1[i]>hacker2[i]){
        console.log("Yo, the navigator goes first, definitely.");
        break;
      }
      else if (hacker1[i]===hacker2[i]){
        if(i===hacker1Length-1){
          console.log("The driver's name goes first.")
          break;
        }
        i++;
      }
    }
  }
  
  if (hacker1Length === hacker2Length) {  /*Compare the same length*/
    let i = 0;
    while (i<hacker1Length){
      if (hacker1[i]<hacker2[i]){
        console.log("The driver's name goes first.");
        break;
      }
      else if(hacker1[i]>hacker2[i]){
        console.log("Yo, the navigator goes first, definitely.");
        break;
      }
      else if (hacker1[i]===hacker2[i]){    
        if(i===hacker1Length-1){
          console.log("What?! You both have the same name?");
          break;
        }
        i++;
      }
    }
  }


  // Bonus 1:

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper fringilla quam ultrices vestibulum. In pretium viverra urna, nec blandit dui faucibus non. Aenean tristique quis magna id finibus. Nullam et egestas leo. Aliquam eleifend porttitor ultrices. Duis eget porta odio. Nam venenatis urna eget ex cursus, id congue lacus commodo. \nMorbi commodo, sem vitae lobortis commodo, odio mauris tempor justo, et elementum tortor ipsum non enim. Nulla tristique risus id egestas imperdiet. Ut nibh libero, egestas sagittis risus ac, porttitor vestibulum nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque finibus a lorem sit amet vulputate. Maecenas eros mi, pulvinar eu ligula eu, iaculis elementum lacus. Vestibulum tincidunt arcu eget molestie pellentesque. Nulla facilisi. Donec at dolor consequat sapien sagittis convallis. Ut gravida ut quam sit amet pulvinar. \nNullam vitae pulvinar felis, ac lobortis est. Nunc sed mattis lectus. Vestibulum a nulla volutpat, malesuada mauris ac, aliquet elit. In sagittis tortor eget tellus venenatis aliquam. Morbi tincidunt, dolor eget viverra tempus, justo justo tincidunt erat, et venenatis elit nibh nec nisi. Mauris erat lacus, sollicitudin sed imperdiet vitae, pellentesque eu enim. Praesent facilisis sit amet nisl auctor laoreet. Nunc eleifend mi libero, laoreet lacinia urna fermentum accumsan. Phasellus quis leo sed tellus molestie tincidunt. Ut ornare felis erat, a imperdiet ex volutpat vel. Suspendisse commodo varius ultrices."

let count=0;
if(longText[longText.length-1]!==" "){
  count = 1;
}
for (i=0; i<longText.length;i++){
  if(longText[i+1] ===" "){
    count +=1;
  } 
}

console.log(count);

let count1=0;
if(longText[0]+longText[1]+longText[2]+longText[3]==="et "){
  count1+=1;
}
for (i=0; i<longText.length;i++){
  if(longText[i-1]+longText[i]+longText[i+1]+longText[i+2]===" et " || longText[i-1]+longText[i]+longText[i+1]+longText[i+2]===" et," || longText[i-1]+longText[i]+longText[i+1]+longText[i+2]===" et.")  {
  count1+=1;  
  }
}
console.log(count1);

//Bonus 2:

let phraseToCheck = "A man, a plan, a canal, Panama!";
let phraseToCheckClean = "";
let phraseToCheckRev = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i] === " " || phraseToCheck[i] === "," || phraseToCheck[i] === "." || phraseToCheck[i] === "!" || phraseToCheck[i] === "?") {
    continue;
  } 
  else {
    phraseToCheckClean += phraseToCheck[i].toLowerCase();
  }
}

//console.log(phraseToCheckClean);

for (let i = phraseToCheckClean.length - 1; i >= 0; i--) {
  phraseToCheckRev += phraseToCheckClean[i];
}

//console.log(phraseToCheckRev);

if (phraseToCheckClean === phraseToCheckRev) {
  console.log("This phrase is a Palindrome!");
}
else {
  console.log("This is a common phrase :(")
}