var age = 10;
if(age >= 65){
    console.log("You get your income from your pension");
}else if (age <= 65 && age >=18){
    console.log("Each month you get a salary")
}else if(age <=18){
    console.log("You get an allowance")
} else{
    console.log("The value of the age variable is not numerical")
}

var day = 'Sunday';
switch(day){
    case 'Monday':
        console.log("Do Something");
        break;
    case 'Tuesday':
        console.log("Do Something");
        break;
    case 'Wednesday':
        console.log("Do Something");
        break;
    case 'Thusdday':
        console.log("Do Something");
        break;
    case 'Friday':
        console.log("Do Something");
        break;
    case 'Saturday':
        console.log("Do Something");
        break;
    case 'Sunday':
        console.log("Do Something");
        break;
    default:
        console.log("There is no such day")
}