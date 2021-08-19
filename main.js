localStorage.removeItem("score");

var questions = ["What is the capital of Germany?", "Where is Corsica?", "What is the capital of Belgium?", "Where is Sicily?", "What is the capital of Canada?", "What is the largest river in the world?", "Where is Bolivia?", "What is Argentina named after?", "What is Zaire named now?", "Where was Htler Born?"];
var correct = ["Berlin", "France", "Brussels", "Italy", "Ottawa", "Amazon", "South America", "Silver", "Democratic Republic of Congo", "Austria"];
var wrong_a = ["Paris", "Italy", "Berlin", "France", "Toronto", "Nile", "Europe", "Gold", "Congo", "Germany"];
var wrong_b = ["London", "Morocco", "Dehli", "England", "Montreal", "Mississippi", "Asia", "Copper", "Zambia", "Poland"];
var wrong_c = ["Delhi", "England", "London", "Germany", "Vancouver", "Ganga", "Australia", "Nickel", "Gabon", "Russia"];

var width = "";

var answered = 1;
var answer = -1;

function start() {
    window.location = "page.html";
}

question();

function nextQuestion() {
    question();
}

function question() {
    if (answer == 9) {
        localStorage.setItem("score", answered);
        window.location = "won.html";
        document.getElementById("score1").innerHTML = answered;
        console.log("won = "+answered);
        console.log(answer);
    }else{
        answer = answer + 1;
        console.log("Q no. = "+answer);
    }
    console.log("score = "+answered);

    if (answer == 0) {
        document.getElementById("a").value = "correct";
        document.getElementById("b").value = "wrong";
        document.getElementById("c").value = "wrong";
        document.getElementById("d").value = "wrong";
        document.getElementById("a").innerHTML = correct[answer];
        document.getElementById("b").innerHTML = wrong_a[answer];
        document.getElementById("c").innerHTML = wrong_b[answer];
        document.getElementById("d").innerHTML = wrong_c[answer];
    }

    if (answer == 1) {
        document.getElementById("a").value = "wrong";
        document.getElementById("b").value = "correct";
        document.getElementById("c").value = "wrong";
        document.getElementById("d").value = "wrong";
        document.getElementById("b").innerHTML = correct[answer];
        document.getElementById("a").innerHTML = wrong_a[answer];
        document.getElementById("c").innerHTML = wrong_b[answer];
        document.getElementById("d").innerHTML = wrong_c[answer];
    }

    if (answer == 2) {
        document.getElementById("a").value = "wrong";
        document.getElementById("b").value = "wrong";
        document.getElementById("c").value = "correct";
        document.getElementById("d").value = "wrong";
        document.getElementById("c").innerHTML = correct[answer];
        document.getElementById("a").innerHTML = wrong_a[answer];
        document.getElementById("b").innerHTML = wrong_b[answer];
        document.getElementById("d").innerHTML = wrong_c[answer];
    }

    if (answer == 3) {
        document.getElementById("a").value = "wrong";
        document.getElementById("b").value = "wrong";
        document.getElementById("c").value = "wrong";
        document.getElementById("d").value = "correct";
        document.getElementById("d").innerHTML = correct[answer];
        document.getElementById("a").innerHTML = wrong_a[answer];
        document.getElementById("b").innerHTML = wrong_b[answer];
        document.getElementById("c").innerHTML = wrong_c[answer];
    }

    if (answer == 4) {
        document.getElementById("a").value = "correct";
        document.getElementById("b").value = "wrong";
        document.getElementById("c").value = "wrong";
        document.getElementById("d").value = "wrong";
        document.getElementById("d").innerHTML = wrong_a[answer];
        document.getElementById("a").innerHTML = correct[answer];
        document.getElementById("b").innerHTML = wrong_b[answer];
        document.getElementById("c").innerHTML = wrong_c[answer];
    }

    if (answer == 5) {
        document.getElementById("a").value = "correct";
        document.getElementById("b").value = "wrong";
        document.getElementById("c").value = "wrong";
        document.getElementById("d").value = "wrong";
        document.getElementById("a").innerHTML = correct[answer];
        document.getElementById("b").innerHTML = wrong_a[answer];
        document.getElementById("c").innerHTML = wrong_b[answer];
        document.getElementById("d").innerHTML = wrong_c[answer];
    }

    if (answer == 6) {
        document.getElementById("a").value = "wrong";
        document.getElementById("b").value = "correct";
        document.getElementById("c").value = "wrong";
        document.getElementById("d").value = "wrong";
        document.getElementById("b").innerHTML = correct[answer];
        document.getElementById("a").innerHTML = wrong_a[answer];
        document.getElementById("c").innerHTML = wrong_b[answer];
        document.getElementById("d").innerHTML = wrong_c[answer];
    }

    if (answer == 7) {
        document.getElementById("a").value = "wrong";
        document.getElementById("b").value = "wrong";
        document.getElementById("c").value = "correct";
        document.getElementById("d").value = "wrong";
        document.getElementById("c").innerHTML = correct[answer];
        document.getElementById("a").innerHTML = wrong_a[answer];
        document.getElementById("b").innerHTML = wrong_b[answer];
        document.getElementById("d").innerHTML = wrong_c[answer];
    }

    if (answer == 8) {
        document.getElementById("a").value = "wrong";
        document.getElementById("b").value = "wrong";
        document.getElementById("c").value = "wrong";
        document.getElementById("d").value = "correct";
        document.getElementById("d").innerHTML = correct[answer];
        document.getElementById("a").innerHTML = wrong_a[answer];
        document.getElementById("b").innerHTML = wrong_b[answer];
        document.getElementById("c").innerHTML = wrong_c[answer];
    }

    if (answer == 9) {
        document.getElementById("a").value = "correct";
        document.getElementById("b").value = "wrong";
        document.getElementById("c").value = "wrong";
        document.getElementById("d").value = "wrong";
        document.getElementById("d").innerHTML = wrong_a[answer];
        document.getElementById("a").innerHTML = correct[answer];
        document.getElementById("b").innerHTML = wrong_b[answer];
        document.getElementById("c").innerHTML = wrong_c[answer];
    }

    document.getElementById("question").innerHTML = questions[answer];
}
var value1 = "";
var value2 = "";
var value3 = "";
var value4 = "";
function a() {
    value1 = document.getElementById("a").value;
    if (value1 == "correct") {
        nextQuestion();
        answered = answered + 1;
        console.log("answered = "+answered);
    } else {
        window.location = "lost.html";
        localStorage.setItem("score", answered);
    }
}

function b() {
    value2 = document.getElementById("b").value;
    if (value2 == "correct") {
        nextQuestion();
        answered = answered + 1;
        console.log("answered = "+answered);
    } else {
        window.location = "lost.html";
        localStorage.setItem("score", answered);
    }
}

function c() {
    value3 = document.getElementById("c").value;
    if (value3 == "correct") {
        nextQuestion();
        answered = answered + 1;
        console.log("answered = "+answered);
    } else {
        window.location = "lost.html";
        localStorage.setItem("score", answered);
    }
}

function d() {
    value4 = document.getElementById("d").value;
    if (value4 == "correct") {
        nextQuestion();
        answered = answered + 1;
        console.log("answered = "+answered);
    } else {
        window.location = "lost.html";
        localStorage.setItem("score", answered);
    }
}