// Personal Message:Answer2

var Name2 = "Eric";

console.log(" Personal Message = ",`Hello ${Name2}, would you like to learn some Python today?`);

// Name Cases: Answer3


var Name3 = "AbdulMoiz";

console.log("toLower = ",Name3.toLowerCase());
console.log("toUpper = ",Name3.toUpperCase());


function ToTitleCase(str){

    return str.replace(/\w\S*/g, function(txt){
     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

console.log("titlecase = ",ToTitleCase(Name3))



// Answer4


var FamousPerson = "Albert Einstein";
var Quote = "A person who never made a mistake never tried any thing new";
console.log("Famous Quote = ",`${FamousPerson} once said, "${Quote}".`);



// Famous Quote 2: Answer5

var Famous_Person ="Albert Einstein";
var Quot_e =`, "A person who never made a mistake never tried any thing new".`;

var message = FamousPerson.concat(Quot_e);

console.log("Famous Quote 2 = ",message);





// Stripping Names:: Answer6



let white_Space:string = "     /tAbdulMoiz/n";

console.log(`Stripping Names, "${white_Space}"`);

let Stripping_Names:string = white_Space.trim();
console.log(`Stripping Names, "${Stripping_Names}"`);




// Number Eight::: Answer7

const Add = 4 + 4;
console.log(`4 + 4 = ${Add}`);


const Subtract = 12 - 4;
console.log(`12 - 4 = ${Subtract}`);


const Multiply = 4 * 2;
console.log(`4 * 2 = ${Multiply}`);


const Division = 16 / 2;
console.log(`16/2 = ${Division}`);





// Number Eight::: Answer9

const favouriteNumber:Number = 13;
const messagefavouriteNumber:string =`My Favourite Number is ${favouriteNumber}.`;

console.log(messagefavouriteNumber);


// Adding Comments: Answer10



// Write your favourite Number
 const   favouriteNumberEl:Number = 13;
 const   messagefavouriteNumberEl:string =`My Favourite Number is ${favouriteNumber}.`;
 console.log(messagefavouriteNumber);



//  Write Your Current Age 
const CurrentAge:Number = 19; 
console.log(`My Current Age is ${CurrentAge}`);





// Names: Answer11

const names:string[] = ["Ashraf","Sir Aleem", "Daniyal Nagoori", "Sir Zia"];

for(let i = 0; i < names.length ; i++){
    console.log(names[i]);
}




// Greetings: Answer12

const PrintMessage:string[] = ["Ashraf","Sir Aleem", "Daniyal Nagoori", "Sir Zia"];

for(let i = 0; i < PrintMessage.length; i++){
    console.log(`Happy Congratulations ${PrintMessage[i]}`);
}





 // our Own Array: Answer13

 let Favouritemodes:string[] = ["cvic","Alto","Carolla ","Eagle"];

 Favouritemodes.forEach((Favouritemode)=>{
    console.log(`“I would like to own a ${Favouritemode} motorcycle.”`);
 });




//  Guest List: Answer14


const GuestList:string[] = ["Ashraf","Saboor", "Sir Zia"];
GuestList.forEach(guest => {
    console.log(`Mr ${guest} You are cordially invited to join me for dinner. 
    It would be an honor to spend an evening in your company.
    Date : [29-2-2024]
    Time : [8:00pm]
    Venue: [Governer House]
    Looking forward to your presence.
    Sincerely,
    [Abdul Moiz]`)
});


//  Guest List: Answer15 


const GuestListChange:string[] = ["Ashraf","Saboor", "Sir Zia"];


const OldName = "Sir Zia";
const NewName = "Daniyal Nagoori";

let index = GuestList.indexOf(OldName);

if(index !== -1){
    GuestListChange.splice(index,1,NewName)
}

console.log(`Mr Sir Zia is not coming in my Dinner Because of some reasons ,So i invite my new  guest ${GuestListChange[2]}`)

GuestListChange.forEach(guest => {
   
 
    console.log(`Mr ${guest} You are cordially invited to join me for dinner. 
    It would be an honor to spend an evening in your company.
    Date : [29-2-2024]
    Time : [8:00pm]
    Venue: [Governer House]
    Looking forward to your presence.
    Sincerely,
    [Abdul Moiz]`);
});



