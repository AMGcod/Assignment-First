// No Users: : Answer31

let NoUser:string[] = [];


if(NoUser.length > 0)
{
    for(let i = 0; i < NoUser.length; i++){

        let adminNoUser = NoUser[i];
      
          if(adminNoUser === "admin"){
         console.log(`Hello admin, would you like to see a status report?`)
          }
          else{
              console.log(`Hello ${adminNoUser}, thank you for logging in again.`)
          }
          
      }
}

else{
    console.log(`We need to find some users!`)
}



// Checking Usernames: Answer32

let currentUserEl:string[] = ["moiz","ashraf","mudasir","abdullah","owas"];
let NewUserEl:string[] = ["Moiz", "sir daniyal", "sir zia", "sir qasim", "sir aleem"];

for(let i = 0; i < NewUserEl.length; i++){

    let New_UserEl:string = NewUserEl[i];
    let IsNew_UserEl:boolean = false;


    for(let j = 0; j < currentUserEl.length; j++){
      
    if(New_UserEl.toLowerCase() === currentUserEl[j].toLowerCase()){
     IsNew_UserEl = true;
     break;
    }
    }


    if(IsNew_UserEl){
        console.log(`Soory ${New_UserEl} the username is available.`)
    }else{
        console.log(`Thank you ${New_UserEl} to login Here`)
    }
}




// Ordinal Numbers: Answer33

let Ordinal_Numbers:number[] =[1,2,3,4,5,6,7,8,9];

for(let i = 0; i < Ordinal_Numbers.length; i++){

    let OrdinalNumbers = Ordinal_Numbers[i]
    if(OrdinalNumbers === 1){
        console.log(`1st`);
    };

    if(OrdinalNumbers === 2){
        console.log(`2nd`);
    };


    
    if(OrdinalNumbers === 3){
        console.log(`3rd`);
    };


      
    if(OrdinalNumbers > 3){
        console.log(`${OrdinalNumbers}th`);
    }
};



// Pizzas: Answer34

let Pizzas:string[] = ["pepperoni", "margherita",  "chicken supreme"];

for(let i = 0; i < Pizzas.length; i++){
    console.log(` I like ${Pizzas[i]} pizza.`)
}

console.log(`how much you like pizza.`);

console.log(`I really love pizza!`);
console.log(`This Pizza quality is really Good`)
console.log(`Pizza is the most Delicious Food in the World`)
console.log(`I eat Pizza in all time  `)




// Animals: Answer35

let Animal:string[] = ["Dog","Horse", "Cat"];

for(let i = 0; i < Animal.length; i++){
console.log(`A ${Animal[i]} would make a great pet`);
}

console.log(`Any of these animals would make a great pet!`);


// T-Shirt: Answer36

const T_Shirt = (size:string,message:string) => {
    if(size){
        console.log(`The size of the Shirt is ${size}inch and The Price of the shirt is ${message}`)
    }


}

T_Shirt("39","$23")




//Large Shirts: Answer37


const LargeShirt = (size:string ='large',message:string = 'I Love Typescript') => {
 console.log(`A ${size} shirt will be made with the message: "${message}"`)
}


// Creating a large shirt with the default message
LargeShirt();


// Creating a medium shirt with the default message
LargeShirt('Medium');



// Creating a shirt of any size with a different message
LargeShirt('small', `TYpescript is awsome`)



//Cities: Answer38

const Cities = (city:string, Country:string = "Pakistan") => {
    console.log(`${city} is in ${Country}`);
}


// Call the function for three different cities
Cities("Hyderabad");
Cities("Sukhar");
Cities("Lahoor");



//City Names: Answer39

const CityNames = (city:string, country:string) => { 
    console.log(`"${city} ,${country}"`);
};


CityNames("Lahore","Pakistan");
CityNames("Paris","France");
CityNames("newYork","USA");




//Album: : Answer40

const  Albumfunction = (artist:string, title:string, tracks?:number): {artist:string, title:string, tracks?:number} => {
let Album: {artist:string, title:string, tracks?:number} = {artist,title};

if(tracks !== undefined){
    Album.tracks = tracks;
}

return Album;

}



let Album1 = Albumfunction("Artist1","Album1");
let Album2 = Albumfunction("Artist2","Album2",3);
let Album3 = Albumfunction("Artist1","Album1",7);


console.log(Album1);
console.log(Album2);
console.log(Album3);




// Magicians Answer41

const Magicians:string[] = ["Elon","Mark","Jac"];

const MagiciansFuction = () => {

    Magicians.forEach((name)=> {
        console.log(name)
    });
};

MagiciansFuction();




// Great Magicians:  Answer42

const Great_Magicians:string[] = ["Elon","Mark","Jac"];

const GreatMagicians_function = () => {
    Great_Magicians.forEach((name) => {
     console.log(`The Great ${name}`)
    })
}


GreatMagicians_function();



// Unchanged Magicians:  Answer43


const showMagicians = (show) => {

    for(let i = 0; i < show.length; i++){
        console.log(show[i])
    }
}

// Define the make_great function using arrow function

const make_great = (make) => {



    // Creating a copy of the array to avoid modifying the original
    let makeCopyName = [...make];
    
    // Modifying the copied array by adding "the Great" to each magician's name
   
for(let i = 0; i < makeCopyName.length; i++){
    console.log(`The Great ${makeCopyName}`);
}

return makeCopyName;
}

// Array of magician's names
let magicianNames: string[] = ['David Copperfield', 'Houdini', 'Derren Brown', 'Penn Jillette', 'Teller'];

// Call make_great function with a copy of the array to avoid modifying the original

let CopemagicName:string[] = [...magicianNames];

// Call show_magicians function with each array to show the original and modified names

console.log("Orginal Name");

showMagicians(magicianNames);


console.log("Copy Name");

make_great(CopemagicName);





// Sandwiches:   Answer44

const Sandwiches = (...thing:string[]):void => {

console.log(`Sandwich Summmay`);

if(thing.length === 0){
console.log(`No items selected. Please choose some ingredients for your sandwich.`)
}
else{

    console.log("Ingredients " + thing.join(', '))
}

console.log("\n")
};



Sandwiches("Triple Creamy" , "With Potato");
Sandwiches("Double Creamy" , "With Meat");
Sandwiches();



// Cars: Answer45
function storeCarInfoEl(manufacturer: string, modelName: string, ...additionalInfo: { [key: string]: any }[]): { manufacturer: string, modelName: string, [key: string]: any } {
    let carInfo: { manufacturer: string, modelName: string, [key: string]: any } = {
        manufacturer,
        modelName
    };

    // Add additional information to the carInfo Object
    additionalInfo.forEach(info => {
        const key = Object.keys(info)[0];
        carInfo[key] = info[key];
    });

    return carInfo;
}

// Call the function with required information and two other name-value pairs
let carDetails = storeCarInfoEl('Toyota', 'Camry', {color: 'Silver', features: ['Navigation', 'Sunroof']} );

// Print the returned Object to check if the information was stored correctly
console.log(carDetails);


