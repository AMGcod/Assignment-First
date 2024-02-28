// More Guests Answer16


let MoreGuests:string[] = ["Ashraf","Saboor", "Sir Zia", "Sir Daniyal"];


let NewGuestStart = "NewGuestStart";

MoreGuests.unshift(NewGuestStart);


let NewGuestMiddle = "NewGuestMiddle";
MoreGuests.splice(3,0,NewGuestMiddle);


let NewGuestEnd ="NewGuestEnd";
MoreGuests.push(NewGuestEnd);

MoreGuests.forEach((more)=>{
    console.log(`Good news! We found a bigger dinner table.`);

    console.log(`Mr ${more} You are cordially invited to join me for dinner. 
    It would be an honor to spend an evening in your company.
    Date : [29-2-2024]
    Time : [8:00pm]
    Venue: [Governer House]
    Looking forward to your presence.
    Sincerely,
    [Abdul Moiz]`);
});



// Shrinking Guest List:  Answer17

console.log(`I have space for only two guests.`);

let ShrinkingGuests:string[] = ["Ashraf","Saboor", "Zia", " Daniyal"];


while(ShrinkingGuests.length > 2){
    let removeGuest = ShrinkingGuests.pop();
    console.log(`I am sorry i can't invite Sir ${removeGuest} to dinner.Because of some Reasons.`)
}

for(let i = 0; i < ShrinkingGuests.length; i++){
    console.log(`I have space for only two guests.But Sir ${ShrinkingGuests[i]} still invited`);
    console.log(` `);
};


// Seeing the World:   Answer18

let VisitedArea:string[] = ["Tokyo","Madina","Dubai","London"];

console.log("original order.", VisitedArea);

console.log("alphabetical order .", [...VisitedArea].sort());

console.log("original order.", VisitedArea);

console.log("alphabetical Reverse order .", [...VisitedArea].sort().reverse());

console.log("original order.", VisitedArea);

VisitedArea.reverse();

console.log("Original Reverse Order.", VisitedArea);

VisitedArea.reverse();

console.log("Original Order.", VisitedArea);

VisitedArea.sort();

console.log("Sort Alphabatic Order.", VisitedArea);

VisitedArea.sort((a,b) => b.localeCompare(a))

console.log("SortReverse Alphabatic Order.", VisitedArea);



// Dinner Guests:   Answer19



let DinnerGuests:string[] = ["Ashraf","Saboor", "Zia", " Daniyal"];

console.log(`I am inviting ${DinnerGuests.length} People to Dinner`);

while(DinnerGuests.length > 2){
    let removeDinnerGuest = DinnerGuests.pop();
    console.log(`I am sorry i can't invite Sir ${removeDinnerGuest} to dinner.Because of some Reasons.`);
};

for(let i = 0; i < DinnerGuests.length; i++){
    console.log(`I have space for only two guests.But Sir ${DinnerGuests[i]} still invited`);
};








// Think of something:   Answer20

const ListFavouriteThings:string[] = ["Mountain: K2","River: Indus", "Country: Pakistan", "City: Hyderabad", "Language: Urdu"];

console.log(`List Favourite Things`)

for(let i = 0; i < 5; i++){
    console.log(ListFavouriteThings[i]);
};






// TypeScript Object:   Answer21


let CreatObject = {
  Mountain: "K2",
  River: "Indus",
  Country: "Pakistan",
  City: "Hyderabad",
  Language: "Urdu"
};


console.log("CreatObject",CreatObject)





// Intentional Error::   Answer22

const IntentionalError:string[] = ["Ashraf","Saboor", "Zia", " Daniyal"];

// I want access "Daniyal"

// Wrong Method
console.log(IntentionalError[4]);

// Right Method
console.log(IntentionalError[3]);



// Intentional Error::   Answer23



// Test No 1
let Bikes:string = "Race";

console.log("Bikes == 'Race'? I Predict False");
console.log(Bikes == "race");


// Test No 2
let cake:string = "joker";

console.log("cake == 'joker'? I Predict True");
console.log(cake == "joker");


// Test No 3
let Box:string = "Boxer";

console.log("Box == 'saboor'? I Predict False");
console.log(Box === "Look");


// Test No 4
let cash:string = "Money";

console.log("cash == 'Money'? I Predict True");
console.log(cash == "Money");



// Test No 5
let coffee:string = "Milk";

console.log("cofee == 'Milk'? I Predict false");
console.log(coffee == "tea");



// Test No 6
let Loin:string = "Bird";

console.log("Loin == 'Bird'? I Predict True");
console.log(Loin === "Bird");



// Test No 7
let Parat:string = "animal";

console.log("Parat == 'animal'? I Predict False");
console.log(Parat == "sabaru");


// Test No 8
let cook:string = "Food";

console.log("cook == 'Food'? I Predict True");
console.log(cook == "Food");



// Test No 9
let cattle:string = "Farm";

console.log("cattle == 'Farm'? I Predict False");
console.log(cattle === "farm");


// Test No 10
let car:string = "sabaru";

console.log("car == 'sabaru'? I Predict True");
console.log(car == "sabaru");






// More Conditional Tests:   Answer24

// Test for equality
const Person1:string = "Moiz";
const Person2:string = "Asharf";

console.log("Test for equality with strings: I predict False.");
console.log(Person1 === Person2);


console.log("Test for inequality with strings: I predict True.");
console.log(Person1 !== Person2);


// using toLowerCase
const Name1:string = "HELLO";
const Name2:string = "hello";

console.log("Test using toLowerCase function: I predict True.");
console.log(Name1.toLowerCase() === Name2.toLowerCase())


// Numerical tests 

const Number1:number = 10;
const Number2:number = 5;

console.log("Numerical test for equality: I predict False");
console.log(Number1 === Number2);


console.log("Numerical test for inequality: I predict True");
console.log(Number1 !== Number2);


console.log("Numerical test for Greater than: I predict True");
console.log(Number1 > Number2);

console.log("Numerical test for Lesser than: I predict False");
console.log(Number1 < Number2);


console.log("Greater than or equal to test: I predict True");
console.log(Number1 >= Number2);


console.log("Lesser than or equal to test: I predict False");
console.log(Number1 <= Number2);


// Tests using "and" and "or" operators

const People1:boolean = true;
const People2:boolean = false;


console.log("Tests using 'and' operators: I predict False");
console.log(People1 && People2);

console.log("Tests using 'OR' operators: I predict True");
console.log(People1 || People2);






// Test whether an item is in an array
let fruits: string[] = ["apple", "banana", "orange"];

console.log("Test whether 'banana' is in the array: I predict True.");
console.log(fruits.indexOf("banana") !== -1);

// Test whether an item is not in an array
console.log("Test whether 'grape' is not in the array: I predict True.");
console.log(fruits.indexOf("grape") === -1);





// Alien Colors #1::   Answer25


// Version that passes the if test (Output: "Player earned 5 points!")
const AlienColors:string = "Green";

if(AlienColors === "Green"){
    console.log(`the player just earned 5 points.`);
}


// Version that fails the if test (No output)
const AlienColorsFail:string = "Red";

if(AlienColorsFail === "Green"){
console.log(`the player just earned 5 points.`)
}




// Alien Colors #2::   Answer26


// Version that runs the if block (Output: "Player earned 5 points for shooting the alien.")
const AlienColor2:string = "Red";

if(AlienColor2 === "Red"){
    console.log("The player just earned 5 points.")
}
else{
    console.log("The player just earned 10 points.")
}


// Version that runs the else block (Output: "Player earned 10 points.")
const Alien_Color2:string = "Red";

if( Alien_Color2 === "Green"){
    console.log("The player just earned 5 points.");
}
else{
    console.log("The player just earned 10 points.");
}



// Alien Colors #3: Answer27

const AlienColor3:string = "Red";


// Version for a red alien (Output: "Player earned 5 points.")
if(AlienColor3 === "Red"){
    console.log("The player just earned 5 points.")
}
else if(AlienColor3 === "Green"){
    console.log("The player just earned 10 points.")

}else if(AlienColor3 === "Yellow"){
    console.log("The player just earned 15 points.")
}


// Version for a green alien (Output: "Player earned 10 points.")
const Alien_Color3:string = "Green";

if(Alien_Color3 === "Red"){
    console.log("The player just earned 5 points.");
}
else if(Alien_Color3 === "Green"){
    console.log("The player just earned 10 points.");

}else if(Alien_Color3 === "Yellow"){
    console.log("The player just earned 15 points.");
}



// Version for a yellow alien (Output: "Player earned 15 points.")
const Alien_Color_3:string = "Yellow";

if(Alien_Color_3 === "Red"){
    console.log("The player just earned 5 points.");
}
else if(Alien_Color_3 === "Green"){
    console.log("The player just earned 10 points.");

}else if(Alien_Color_3 === "Yellow"){
    console.log("The player just earned 15 points.");
}




// Stages of Life: Answer28

const Age:number = 30;

if(Age < 2){
    console.log("the person is a baby.");
}
else if(Age >= 2 && Age < 4){
    console.log("the person is a toddler.");
}
else if(Age >= 4 && Age < 13){
    console.log("the person is a kid.");
}
else if(Age >= 13 && Age < 20){
    console.log("the person is a teenager."); 
}
else if(Age >= 20 && Age < 65){
    console.log("the person is a Adult.");
}
else if(Age >= 65){
    console.log("the person is a elder.");
}



// Favorite Fruit: Answer29


const FavoriteFruit:string[] = ["Oranges","Bananas","Grapes"];

if(FavoriteFruit.indexOf("Orange")){
    console.log(`You really like oranges!`);
}

if(FavoriteFruit.indexOf("Bananas")){
    console.log(`You really like Bananas!`);

}if(FavoriteFruit.indexOf("Grapes")){
    console.log(`You really like Grapes!`);

}if(FavoriteFruit.indexOf("Straberry") !== -1){
    console.log(`You really like Straberry!`);

}else{
    console.log(`Strabeery are not in your list of favorite fruits.`);
}

if(FavoriteFruit.indexOf("Mangos") !== -1){
    console.log(`You really like Mangos!`);
}else{
    console.log(`Mangos are not in your list of favorite fruits.`);
}






// Hello Admin: : Answer30

const AdminEl:string[] =["Sir Zia", "Sir Daniyal", "Sir Aleem", "Sir Qasim", "Sir Ashraf"];

for(let i = 0; i <AdminEl.length; i++){
    
    let CurrentAdminEl:string = AdminEl[i];

    if(CurrentAdminEl === "Sir Zia"){
    console.log(`Hello ${CurrentAdminEl}, would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${CurrentAdminEl}, thank you for logging in again.`);
    }
}



