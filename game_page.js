player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML =  player1_score;
document.getElementById("player2_score"). innerHTML  =  player2_score;

document.getElementById("player_question"). innerHTML  =  "question turn" +  player1_name;
document.getElementById("player_answer"). innerHTML    =  "answer turn"   +  player2_name; 

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowercase = " + word);

    charat1 = word.charAt(1);
    console.log(charat1);

length_divide = Math.floor(word.length_divide/2);
charat2 = word.charAt(length_divide);
console.log(charat2);


length_minus = word.length - 1;
charat3 = word.charAt(length_minus);
console.log(charat3);

remove1 = word.replace(charat1,"_");
remove2 = remove1.replace(charat2,"_");
remove3 = remove2.replace(charat3,"_");
console.log(remove3);

question = "<h4 id = 'word_display'>Q." + remove3 + "</h4>";
input = "<br> answer: <input type = 'text' id = 'input_check' >";
check_button = "<br><br> <button class='btn btn-info' onclick='check()'>check</button>";
row = question + input + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
} 


questionturn = "player1";
answerturn = "player2";



function check(){
   get_answer = document.getElementById("input_check").value;
   answer = get_answer.toLowerCase();
   console.log("answerin lower case - " +answer);

   if(answer == word )
   {
       if (answerturn == "player1")
       {
           player1_score = player1_score + 1;
           document.getElementById("player1_score").innerHTML =  player1_score;

            
        }

        else
        {
           player2_score = player2_score + 1;
           document.getElementById("player2_score").innerHTML =  player2_score;

        }
   } 
   if(questionturn == "player1"){
      questionturn == "player2";
      document.getElementById("player_question").innerHTML = "question - " + player2_name;
   } 
 
   else{
      questionturn == "player1";
      document.getElementById("player_question").innerHTML = "question - " + player1_name;
   }

   if( answerturn == "player1"){
       answerturn == "player2";
      document.getElementById("player_answer").innerHTML = "Answer - " + player2_name;
   } 
 
   else{
      answerturn == "player1";
      document.getElementById("player_answer").innerHTML = "Answer - " + player1_name;
   }

 document.getElementById("output").innerHTML = "";

}

