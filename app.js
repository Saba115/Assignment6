// Chapter 21-25 ======= Question:1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + lastName;
// alert("Hey "+fullName);

// Chapter 21-25 ======== Question:2
// var mobModel = prompt("Enter your favourite mobile phone model: ");
// var lengthString = mobModel.length;
// document.write("My favorite phone is: "+mobModel+"<br>");
// document.write("Length of string: "+lengthString);


// Chapter 21-25 ========= Question:3
// var findN = "Pakistani";
// var indexF = findN.indexOf("n");
// document.write("String: "+findN+"<br>");
// document.write("Index of 'n': "+indexF);

// Chapter 21-25 ========= Question:4
// var findL = "Hello World";
// var indexLast = findL.lastIndexOf("l");
// document.write("String: "+findL+"<br>");
// document.write("Last index of 'l' :"+indexLast);

// Chapter 21-25 ========= Question:5
// var find3 = "Pakistani";
// var index3 = find3.charAt(3);
// document.write("String: "+find3+"<br>");
// document.write("Character at index 3: "+index3);

// Chapter 21-25 ========= Question:6
// var firstName = "Sabahat"
//  var lastName = "Zainab"
//  document.write(concat(firstName+lastName));
 

// Chapter 21-25 ========= Question:7
// var city = "Hyderabad";
// var replacement = city.replace("Hyder","Islam");
// document.write("City: "+city+"<br>");
// document.write("After replacement: "+replacement);

// Chapter 21-25 ======== Question:8
//var message = "Ali and Sami are best friends. They play cricket and football together.";
//document.write(message.replace(/and/g,"&"));

// Chapter 21-25 ======= Question:9
// var valueS = "472";
// document.write("Value: "+valueS+"<br>");
// document.write("Type: "+"String" +"<br>");
// var valueN = Number(472);
// document.write("Value: "+valueN+"<br>");
// document.write("Type: "+"Number" +"<br>");

// Chapter 21-25 ======== Question:10
// var input = prompt("Enter any word");
// var upperCase = input.toLocaleUpperCase();
// document.write("User input: " +input+"<br>");
// document.write("Upper case: "+upperCase);

// Chapter 21-25 ======== Question:11
// var userInput = prompt("Enter any word");
// var capitalF = userInput.slice(0,1);
// var smallL = userInput.slice(1);
// capitalF = capitalF.toLocaleUpperCase();
// smallL = smallL.toLocaleLowerCase();
// var title = capitalF+smallL;
// document.write("User input: "+userInput+"<br>");
// document.write("Title case: "+ title);

// Chapter 21-25 ========== Question:12
// var num = 35.36;
// number = num *100;
// document.write("Number: "+num +"<br>");
// document.write("Result: "+number.toString());

// Chapter 21-25 ========== Question:13
// var username = prompt("Enter your name");
// var length = username.length;
// var arr = ['!',',','.','@'];
// for (var i=0;i<arr.length;i++){
//     for(var j=0;j<length;j++){
// if(arr[i] === username[j]){
//         alert("Please enter valid username");
//     }
// }
// }

// Chapter 21-25 ========== Question:14
// var inputItem = prompt("Enter any item which you want?");
// inputItem = inputItem.toLocaleLowerCase();
// var A = ["cake","apple pie","cookie","chips","patties"];
// for(var i =0; i<A.length;i++){
//     if(A[i] === inputItem){
//         alert(A[i]+" has found at index "+i);
//         break;
//     }
//     }

// Chapter 21-25 =========== Question:16
// var university = "University of Karachi";
//  university.split("");
// for(var i=0;i<university.length;i++){
//     document.write(university[i]+"<br>");
// }

// Chapter 21-25 =========== Question:17
// var lastChar = prompt("Enter any word");
// for(var i=0;i<lastChar.length;i++){
//     if(i === ((lastChar.length)-1)){
//         document.write("User Input: "+lastChar+"<br>");
//         document.write("Last character of input: "+CharAt(i));
//     }
// }



//  Chapter 26-30 ========== Question:1
// var number = prompt("Enter a positive number");
//if(number>=0){
// document.write("number: "+number+"<br>");
// document.write("round off value: "+Math.round(number)+"<br>");
// document.write("floor value: "+Math.floor(number)+"<br>");
// document.write("ceil value: "+ Math.ceil(number)+"<br>");
//}


// Chapter 26-30 ========= Question:2
// var number = prompt("Enter a negative number");
// if(number<0){
// document.write("number: "+number+"<br>");
//  document.write("round off value: "+Math.round(number)+"<br>");
//  document.write("floor value: "+Math.floor(number)+"<br>");
//  document.write("ceil value: "+ Math.ceil(number)+"<br>");
// }


// Chapter 26-30 ========= Question:3
// var abs = +prompt("Enter any number");
// number = abs;
// if (number<0){
//     number = number * (-1);
// }
// document.write("The absolute value of "+abs +" is "+number)


// Chapter 26-30 ======== Question:4
// var dice;
// dice = Math.random();
// document.write("Random dice value : "+dice);

// Chapter 26-30 ======== Question:5
// var toss = Math.random() * 2;

// if(toss === 2 ){
//     document.write("2"+"<br>"+"random coin value: Heads <br>");
// }
// if(toss === 1 ){
//     document.write("1"+"<br>"+"random coin value: Tails");
// }

// Chapter 26-30 ======= Question:6
//var Num100 = Math.random() * 100;
//document.write("Random number between 1 and 100: "+Num100);


// Chapter 26-30 =========== Question:7
//var weigth = +prompt("Enter your weigth");
//document.write(parseFloat(weigth));


// Chapter 26-30 ======= Question:8
// var secretNum = 9;
// var enterNum = +prompt("Enter a number between 1 and 10");
// if( secretNum === enterNum){
//     alert("Congretulation! You enter correct number");
// }
// else{
//     alert("Try again!");
// }
    
// Chapter 31-34 ======== Question:1
//var date = new Date();
//document.write(date);

//  Chapter 31-34 ======== Question:2
// var arr =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var d = new Date();
// var currentMonth = d.getMonth();
// var nameOfMonth = arr[currentMonth];
// document.write("Current month: "+nameOfMonth);


// Chapter 31-34 ======== Question:3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// alert("Today is "+nameOfToday);

// Chapter 31-34 ======== Question:4
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// if(theDay === 0 || theDay === 6){
// alert("It's Fun Day");
// }

// Chapter 31-34 ======== Question:5
// var today = new Date();
// var todaysDate = today.getDate();
// if (todaysDate < 16){
//     alert("First fifteen days of the month");
// }
// else
// {
//     alert("Last days of the month");
// }

// Chapter 31-34 ======== Question:7
// var Current = new Date();
// var hours = Current.getHours();
// if(hours < 18){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }

// Chapter 31-34 ======= Question:8
// var Dt = new Date();
//   Dt.setFullYear(2020);
//   Dt.setMonth(11);
//   Dt.setDate(31);
//  document.write(Dt);


// Chapter 35-38 ======== Question:1
// function currentDate(){
//  var date = new Date();
//     document.write(date);
// }
// currentDate();


// Chapter 35-38 ======== Question:2
// function displayName(first,last){
//     var fullname = first+last;
//     alert("Hey "+fullname);
// }
// displayName("Sabahat","Zainab");


// Chapter 35-38 ========= Question:3
// var num1 = +prompt("Enter a number");
// var num2 = +prompt("Enter second number");
//  function add(first,second){
//      return first+second;
//  }
//  var addition = add(num1,num2);
//  document.write(addition);

// Chapter 35-38 ========= Question:4
// function calc(firstnum,oop,secondnum){
//     if(oop === '+'){
//         return firstnum+secondnum;
//     }
//     else if(oop === '-'){
//         return firstnum-secondnum;
//     }
//     else if(oop === '*'){
//         return firstnum*secondnum;
//     }
// }
// var result = calc(9,'+',3);
// document.write(result);

// Chapter 35-38 ========== Question:5
// function sqr(arg1){
//     return arg1 * arg1;
// }


// Chapter 35-38 ========== Question:6
// function fact(num){
//     for(var i=num-1;i=0;i--){
//         var res = res*i;
//     }
//     return res*num;
// }

// Chapter 35-38 ========= Question:7
// var start = +prompt("Enter starting number");
// var end = +prompt("Enter ending number");

// function counting(start,end){
//     for(var i=start;i<=end;i++){
//         document.write( i+"<br>");
//     }
// }
//  counting(start,end);

// Chapter 35-38 =========== Question:8
// function Outer(){
//     function Inner(base , perp ,hyp){
//         var Base = base*base;
//         var Perp = perp*perp;
//         var Hyp = hyp*hyp;
//         return 0
//     }
//     return Perp+Base;
// }

// var Result = Outer(Inner(2,2,4));
// document.write(Result);

// Chapter 35-38 =========== Question:9
// function Area(width=2,height=3){
//     return width*height;
// }

// function Area(width,height){
//     return width*height;
// }

//Chapter 35-38 =========== Question:10
// function Pal(word){
//     var check = "";
//     for(var i=word.length-1;i>=0;i--){
//         check +=word[i];
//     }
//     if(word === check){
//         return word + " is Palindrome word!"
//     }
//     else {
//         return "Not a Palindrome word"
//     }
// }
// var word = prompt("Enter a word");
// var check = Pal(word);
// document.write(check);

