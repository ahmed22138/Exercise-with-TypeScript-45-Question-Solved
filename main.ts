// task 2
 let personName = "HELLO ERIC, would you like to learn some python today?";
 console.log(personName);


// task 3
// lower case
let person_Name:string="Muhammad Ahmed"
console.log('Lowercase:', personName.toLowerCase() );
// upper Case
console.log('UpperCase:', personName.toLocaleUpperCase());
// title Case
console.log('TitleCase:', personName.replace(/\bw/g,c => c.toUpperCase()));


// task 4
let quote:string="'A person who never made a mistake never tried anything new.'";
let author:string="Albert Einstein Once said,";
console.log("".concat(author).concat(quote));


// task 5
let quote2 = "“A person who never made a mistake never tried anything new.”";
let famousPerson = "Albert Einnstein Once said;";
let message = "".concat(famousPerson).concat(quote);
console.log(message);


// task 6
let personName2:string="\n\tMuhammad Ahmed\n\t";
console.log(personName)
let stripped:string=personName. trim();
console.log(stripped);


// task 7
console.log(5+3);   // Addition
console.log(11-3); // Subtraction
console.log(4*2);  // Multiplication
console.log(16/2); // Division


// task 9
let favNumber:string= '69';
let message1=favNumber;
console.log("My Favorite Number is:".concat(message));


// task 10
// program written by:Muhammad Ahmed
// Current Date:20.2.2024
//This program will writ by hello world  
console.log("hello world");


// task 11
let names :string[] =['Ahmed', 'Anas', 'Hasseb', 'Abbas'];
for (let i=0; i<names.length; i++) {
console.log(names[i]) ;
}


// task 12
let names1 :string[] =['Ahmed', 'Anas', 'Hasseb', 'Abbas'];
const message2 :string='Welcome to TyppeScript class: '
for (let i=0; i<names.length; i++) {
console.log(message + names[i]) ;
}


// task 13
let transportation=['Motercycle','car','Bus','cycle'];
for(let i=0; i<transportation.length; i++){
    console.log('I would like to own a ' + transportation [i]);
}


// task 14
let Guest_List=['Yasir','Abdullah','Dawood'];
for(let i=0; i<Guest_List.length; i++) {
console.log('Dear invite ' + Guest_List[i] +  ',\nIt is our pleasure to invite you in our party.\nThank you!\n');   
}


// task 15
let guest_List=['Yasir','Abdullah','Dawood'];
for(let i=0; i<guest_List.length; i++) {
 console.log('Dear invite ' + guest_List[i] +  ',\nIt is our pleasure to invite you in our party.\nThank you!\n');
}
let absent_Guest:string='Yasir';
let new_Guest:string= 'Hasseb';
 Guest_List[0]=new_Guest;
for(let i=0; i<Guest_List.length; i++) {
console.log('Dear invite ' + Guest_List[i] +  ',\nIt is our pleasure to invite you in our party.\nThank you!\n');
}
console.log('Mr. '.concat(absent_Guest) ,'is not coming to the party.' );


// task 16
import { gunzip } from "zlib";
let Guest_List1:string[]=['Yasir','Abdullah','Dawood'];
// for(let i=0; i<Guest_List.length; i++) {
//     console.log('Dear invite ' + Guest_List[i] +  ',\nIt is our pleasure to invite you in our party.\nThank you!\n');
// }
let absent_Guest1:string='Yasir';
let new_Guest1:string= 'Hasseb';
 Guest_List1[0]=new_Guest1;
for(let i=0; i<Guest_List.length; i++) {
console.log('Dear invite ' + Guest_List1[i] +  ',\nIt is our pleasure to invite you in our party.\nThank you!\n');
}
console.log('Mr. '.concat(absent_Guest1) ,'is not coming to the party.' );
 console.log('We find Big Table so we are inviting three more guests.');
 Guest_List1.unshift('Ahmed');
 Guest_List1.splice(2, 0, 'Anas');
 Guest_List1.push('Nasir');
 for(let i=0; i<Guest_List1.length; i++) {
    console.log('Dear invite ' + Guest_List1[i] +  ',\nIt is our pleasure to invite you in our party.\nThank you!\n');
}


// task 17
let guest_List2:string[]=['Yasir','Abdullah','Dawood'];
// for(let i=0; i<Guest_List.length; i++) {
//     console.log('Dear invite ' + Guest_List[i] +  ',\nIt is our pleasure to invite you in our party.\nThank you!\n');
// }
let absent_Guest2:string='Yasir';
let new_Guest2:string= 'Hasseb';
 guest_List2[0]=new_Guest2;
//  for(let i=0; i<guest_List.length; i++) {
//     console.log('Dear invite ' + guest_List[i] +  ',\nIt is our pleasure to invite you in our party.\nThank you!\n');
//  }
console.log('Mr. '.concat(absent_Guest2) ,'is not coming to the party.' );
  console.log('We find Big Table so we are inviting three more guests.');
 guest_List2.unshift('Ahmed');
  guest_List2.splice(2, 0, 'Anas');
  guest_List2.push('Nasir');
  for(let i=0; i<guest_List2.length; i++) {
  console.log('Dear invite ' + guest_List2[i] +  ',\nIt is our pleasure to invite you in our party.\nThank you!\n');
}
// Sorry message to guest for not invited.
 console.log('Sorry we can not arrange big table, Only Two peoples will  be invited,');
 do{
  let remove_Guest=guest_List2.pop();
   console.log(`Sorry Mr. ${remove_Guest} you are not invited to Diiner.`);
 }while(guest_List2.length>2)
// Hamare Bache howe 2 invited Guest.
 for(let i=0; i<guest_List2.length; i++) {
   console.log('Dear invite ' + guest_List2[i] +  ',\nYou are still invited.\nThank you!\n');
 }
 // Mene sare guest array se remove kar diya.
 guest_List2.splice(0, 2);
 console.log(guest_List);


 // task 18
 // Store the locations in a array. Make sure the array is not in alphabetical order.
let place:string[]=['Paris', 'Canada', 'America', 'Turkey', 'Dubai'];

// Print your array in its original order.
console.log('Original '+ place);

//  Print your array in alphabetical order without modifying the actual list.
console.log('copy ' + [...place].sort());

// Show that your array is still in its original order by printing it.
console.log('Original '+ place);

//  Print your array in reverse alphabetical order without changing the order of the original list
console.log('copy ' + [...place].sort().reverse());

// Show that your array is still in its original order by printing it again.
console.log('Original ' + place);

// Reverse the order of your list. Print the array to show that its order has changed.
console.log('Original ' + place.reverse());

// Reverse the order of your list again. print the list to show it's back to its original order.
console.log('Original ' + place.reverse());

// Sort your array so it's stored in alpabetical order. Print the array to show that its order has been changed.
console.log('original ' + place.sort());

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('Original ' + place.sort().reverse());



// task 19

let guest_List3:string[]=['Yasir','Abdullah','Dawood'];
// for(let i=0; i<Guest_List.length; i++) {
//     console.log('Dear invite ' + Guest_List[i] +  ',\nIt is our pleasure to invite you in our party.\nThank you!\n');
// }

let absent_Guest3:string='Yasir';
let new_Guest3:string= 'Hasseb';
 guest_List3[0]=new_Guest3;

//for(let i=0; i<guest_List.length; i++) {
//console.log('Dear invite ' + guest_List[i] +  ',\nIt is our pleasure to invite you in our party.\nThank you!\n');
//}

// console.log('Mr. '.concat(absent_Guest) ,'is not coming to the party.' );
//   console.log('We find Big Table so we are inviting three more guests.');

 guest_List3.unshift('Ahmed');
  guest_List3.splice(2, 0, 'Anas');
  guest_List3.push('Nasir');

//   for(let i=0; i<guest_List.length; i++) {
//   console.log('Dear invite ' + guest_List[i] +  ',\nIt is our pleasure to invite you in our party.\nThank you!\n');
// }

// Sorry message to guest for not invited.
//  console.log('Sorry we can not arrange big table, Only Two peoples will  be invited,');

while(guest_List3.length>2){
  let remove_List=guest_List3.pop();
  // console.log(`Sorry Mr. ${remove_List} you are not invited to Dinner.`);
}
// Hamare Bache howe 2 invited Guest.

 // Mene sare guest array se remove kar diya.
 guest_List3.splice(0, 2);
 console.log(guest_List);


 // Excerise 19.
 //print a message indicating the number of people you are inviting to dinner.
 console.log(`Total Number of Guest Are: ${guest_List3.length}`);


 // task 20
 //hink of something you could store in a array. 
let items:string[]=['Pakistan','Lahore','Islamabad'];
// write a program that creat a list contain these items.
let item2:string[]=[];
item2.push('London');
item2.push('Pakistan');
item2.push('Germany');
console.log(item2);


// task 21
// Write a program that creates Objects containing these items.
interface person {
    name:string;
    age:number;
    nationality:string;
    student:boolean;
}
let person= {
    name:'Ahmed',
    age:'19',
    nationality:'Pakistan',
    student:'true',
}
console.log(person);


// task 22
let days:string[]=['Monday', 'Tusday', 'wednesday', 'Thursday', 'Friday', 'Saterday', 'Sunday'];
// console.log(days[7]);
console.log(days[6]);


// task 23
let car="subaru";

 console.log("is car =='subaru'? I predict True.");
 console.log(car =='subaru');

 console.log("is car !=='honda city'? I predict True.");
 console.log(car !== 'honda city');

 console.log("is car=='subaru'&& car.length ==6? Predict True");
console.log( car=='subaru'&& car.length ==6);

console.log("is car.length !=='25'? Predict True");
console.log(car !=='25');

console.log("is car.length == 6? predict True");
console.log(car.length==6);

 console.log("is car =='Subaru'? I predict False");
 console.log(car =='Subaru');

  console.log("is car =='SUBARU'? I predict False");
  console.log(car =='SUBARU');

 console.log("is 10>20 ? Predict False");
 console.log(10>20);

 console.log("is 5 <= 4 ? Predict False");
 console.log(5<=4);

console.log("is 99<=83? Predict False ");
console.log(99<=83);



// task 24
let name_1:string='Ahmed'
let name_2:string='Ahmed Malik'
let name_3:string='Mr. Ahmed'
 if (name_1 == name_3){
     console.log('names are equal')
 }else {
     console.log('name are not equal')
}
 if(name_1 != name_2){
    console.log('name are equal')
 }
if(name_1 != name_3){
    console.log('name are equal')
}


// task 25
let alien_color="red"

if (alien_color =="red")
    console.log('you earn 5 pionts')

let alien_Color:string='green'

if (alien_Color =='yellow')
console.log('no output')



// task 26
//  let alien_color="red"

//  if (alien_color =="red")
//      console.log('you earn 5 pionts')

// let alien_Color:string='green'

// if (alien_Color =='yellow')
// console.log('no output')

// Excerise 26.
let alien_Color1='green'
if (alien_Color1=='green') {
    console.log('player just earned 5 points for shooting the alien.')
}else{
    console.log('player just earned 10 points')
}
let alien_Color2='red'
if (alien_Color2=='green'){
    console.log('player just earned 5 point for shooting the alin.')
}else{
    console.log('player just earned 10 points')
}


//task 27
let alien_Colors = 'green';
if (alien_Colors == 'green') {
    console.log('player earned 5 points');
}
else if (alien_Colors == 'yellow') {
    console.log(' player earned 10 points.');
}
else {
    console.log('player earned 15 points.');
}


// task 28
let  age='70'

if (age =='2'){
console.log('the person is a baby.');
} else if(age =='4'){
    console.log('the person is a toddler.');
} else if(age =='13'){
    console.log(' the person is a kid.');
} else if(age =='20'){
    console.log('the person is a teenager.');
} else if(age =='65'){
    console.log(' the person is an adult.');
}else {
    console.log('the person is an older.');
}


// task 29
let favorite_Fruit:string[]=['Mango','Apple','Orange','banana','kivi'];

if (favorite_Fruit.includes('Mango')){
    console.log('Mango');
}

if (favorite_Fruit.includes('Apple')){
    console.log('Apple');
}

if (favorite_Fruit.includes('Orange')){
    console.log('Orange');
}

if (favorite_Fruit.includes('banana')){
    console.log('You really like bananas!');
}



// task 30
//  Make a array of five or more usernames
let users:string[]=['Admin','Alexa','Eric','Malik','Zahid']

for(let user of users){
if (user ==='Admin'){
   console.log(`Helllo Admin, would you like to see a status report?`)
}else{
   console.log(`Hello ${user}, thank you for logging in again`)
}
}



// task 31
let users1 : string[]=['Admin','Alexa','Eric','Malik','Zahid'];

// if (users.length ===0){
//     console.log('We need to find some users!')
// }else {
//     for (let user of users){
//         if (user ==="Admin"){
//             console.log('Hello Admin, would you like to see a status report?')
//         }else {
//             console.log(`Hello ${user}, thank you for logging in again.`)
//         }
//     }
// }

users1 =[]
if (users1.length ===0){
    console.log('We need to find some users!')
}


// task 32
let current_users = ["admin", "eric", "Malik", "Alexa", "Zahid"];
let new_users = ["admin", "haseeb", "Anas", "Adullah", "Ammar"];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry ${new_user}, that name is taken`);
    }
    else {
        console.log(`Yes ${new_user}, is still in avaliable list`);
    }
}


// task 33
let numbers:number[]=[1,2,3,4,5,6,7,8,9]
for (let number of numbers)
if (number === 1 ){
    console.log(`${number}st`)// 1st
} else if (number === 2){
    console.log(`${number}nd`)// 2nd

}else if (number === 3){
    console.log(`${number}rd`)// 3rd

}else {
    console.log(`${number}th`)// 4th, 5th, 6th, 7th, 8th, 9th
}


// task 34
let favorite_pizza:string[]=['Cremy BBQ','Pepperoni','veg']
// for (let pizza of favorite_pizza){
//     console.log(pizza)
// }
// console.log('\n')
for (let pizza of favorite_pizza){
    console.log(`I really like ${pizza} pizza!`)
}
console.log("I Really Love Pizza!")


// task 35

let animals:string[]=['dog','cat', 'lion']

for(let animal of animals){
    console.log(animal)
}
console.log('\n')

for (let animal of animals){
    console.log(`A ${animal}, has a tail`)
}
console.log("\n All of these great pet!, But i love cat ")



// task 36
function make_Shirt(size:string, text: string): void {
    console.log(`\n you order a ${size} shirt that says ${text}`)
        
    }
    make_Shirt('large','i need a medium Shirt' )
    make_Shirt('Medium','i need a big Shirt')


    // task 37
    function make_Shirt1(size:string='large', text: string = 'i love typescript'): void {
        console.log(`\n you have order a ${size} shirt that says ${text}`)
        }
        make_Shirt1('Medium','i need a big Shirt')


        // task 38
        function describe_city(city:string, country:string ='Pakistan'): void{
            console.log(`${city}, ${country}`)
        }
        describe_city('Islamabad') //Defult sentence
        describe_city('Dubai','Paris')
        describe_city('Lahore','Quetta')



        // task 39
        function city_country(city:string, country:string): string{
            return `${city}, ${country}`
        }
        
        let c1=city_country('Lahore','Pakistan')
        let c2=city_country('Paris','France')
        let c3=city_country('Tokyo','Japan')
        
        console.log(c1)
        console.log(c2)
        console.log(c3)


        // task 40
        function make_album (artist:string, title:string): { artist:string; title:string } {
            const dictionaries ={
                artist: artist.charAt(0).toUpperCase() + artist.slice(1),
                title: title.charAt(0).toUpperCase() + title.slice(1)
            };
            return dictionaries;
            }
            
            let album = make_album('Zahid','Light')
            console.log(album)
            
             album=make_album('Ahmed','Gray wave')
             console.log(album)
            
             album=make_album('Haseeb','seenbreez')
             console.log(album)


             // task 41
             function show_magicians1(magicians:string[]): void{
    
                for (const magician of magicians ){
                    console.log(magician.charAt(0).toUpperCase() + magician.slice(1))
                }
            }
            const magician1:string[] =['ahmed','anas','abbas'];
            show_magicians(magician1)



            // task 42
            function show_magicians(magicians:string[]): void{
    
                for (const magician of magicians ){
                    console.log(magician.charAt(0).toUpperCase() + magician.slice(1))
                }
            }
            const magician:string[] =[];
            show_magicians(magician)
            
            
            function make_great(magicians:string[]): void {
                for (let i=0; i < magicians.length; i++){ // stand for index string
            magicians[i]= magicians[i] + ' the great'
                }
            }
            const magicians2:string[]=['ahmed','anas','abbas'];
            make_great(magicians2)
            show_magicians(magicians2)



            // task 43
            function show_magicians2(magicians:string[]): void{
    
                for (const magician of magicians ){
                    console.log(magician.charAt(0).toUpperCase() + magician.slice(1))
                }
            }
            const magician2:string[] =[];
            show_magicians2(magician2)
            
            
            
            function make_great2(magicians: string[]): string[] {
            const greatMagicians: string[]=[];
            for (let i=0; i<magicians.length; i++) {
            greatMagicians.push(magicians[i] +' the Great');
            }
            return greatMagicians;
            }
            const magicians3: string[] =['Ahmed','Anas','Abbas'];
            const greatMagicians2:string[] =make_great2(magicians3);
            show_magicians(magicians3);
            show_magicians(greatMagicians2);



            // task 44
            function sandWich(...items: string[]): void{
                console.log('snadwich order:')
            
                for (let i=0; i < items.length; i++){
                    console.log(` - ${items[i]}`)
                }
            }
            console.log("Enjoyed your sandwich Ahmed")
            
            sandWich('capsicum','tomato','chicken')
            sandWich('beef','chese')
            sandWich('mayo sauce')



            // task 45
            
type car ={
    manufacture:string
    model:string
    [key: string]: any;
}

function createCar(manufacture: string, model:string, optional:Record<string, any>): car {
return{
    manufacture,
    model,
    ...optional
}
}

const myCar: car =createCar('Honda','Civic', {color:'black', year:"2024"})
console.log(myCar)

            

















