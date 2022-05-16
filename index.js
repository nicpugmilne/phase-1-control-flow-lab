function scuberGreetingForFeet(rideLength){
  let scuberGreeting
  if (rideLength <= 400){
    scuberGreeting = 'This one is on me!'
    return scuberGreeting;
  } 
    else if ((rideLength >400) && (rideLength <=2000)){
    scuberGreeting = 'That will be twenty bucks.'
    return scuberGreeting;
  } 
    else if ((rideLength >2000) && (rideLength <2500)){
      scuberGreeting = 'I will gladly take your thirty bucks.'
      return scuberGreeting;
  }
    else return scuberGreeting = 'No can do.';
}

function ternaryCheckCity(city){
  let scuberApproval
  if (city === 'NYC'){
    return scuberApproval = 'Ok, sounds good.';
  } else {
    return scuberApproval = 'No go.';
  }
}

function switchOnCharmFromTip(tip){
  let charm 
  if (tip === 'generous'){
    return charm = 'Thank you so much.';
  }
    else if (tip === 'not as generous'){
      return charm = "Thank you."  ;
    }
      else return charm = 'Bye.';
}