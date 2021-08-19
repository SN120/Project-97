var score1 = localStorage.getItem("score");

document.getElementById("score").innerHTML = score1;

if(score1 == 1){
    document.getElementById("q_or_qs").innerHTML = "question";
} else{
    document.getElementById("q_or_qs").innerHTML = "questions"
}