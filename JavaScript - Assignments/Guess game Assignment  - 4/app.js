// let store a secret number
var SecretNo = 7;
var attempt = 0;
var guessNo;

while (true) {
  guessNo = parseFloat(prompt(" Hellow Guess a number between 1 - 09 \n (Attempts : " + (attempt + 1) + ")"));
  attempt++
  if (guessNo === SecretNo) {
    alert("🎯 Correct answer ! " + "  " + "[ Attempts: " + attempt + "]");
    break; //end game
  }

  else if (guessNo === 1) {
    alert("low guess hai")
  }
  else if (guessNo === 2) {
    alert("thoda sa or try karo")
  }
  else if (guessNo === 3) {
    alert("Thoda sa better guess")
  }
  else if (guessNo === 4) {
    alert("qareeb ho rahe ho")
  }
  else if (guessNo === 5) {
    alert("takreeban phnch gae hi answer pe but not exactly ")
  }
  else if (guessNo === 6) {
    alert("low guess hai")
  }
  else if (guessNo === 8) {
    alert("aas pas ho thorha sochooo")
  }
  else if (guessNo === 9) {
    alert(" Bohat aagey nikal gae ho ")
  }
  else {
    alert(" Plaese select between 1-09 ")
  }
}