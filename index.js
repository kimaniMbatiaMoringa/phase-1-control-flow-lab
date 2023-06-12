
//scuberGreetingForFeet(feetTravelled);

function scuberGreetingForFeet(feetTravelled){
  // Write your code here!
  if (feetTravelled < 400 || feetTravelled ==400){
    return 'This one is on me!';
  }

  else if (feetTravelled > 2000 && feetTravelled < 2500){
    return 'I will gladly take your thirty bucks.'
  }

  else if (feetTravelled > 2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(cityLocation){
  // Write your code here!
  if (cityLocation=='NYC'){
    return "Ok, sounds good."
  }
  else{
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return'Thank you so much.'

    case 'not as generous':
      return 'Thank you.'  

    default:
      return 'Bye.'
  }

}