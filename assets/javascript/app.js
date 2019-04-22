// Can't disable other buttons by using the id as a reference
// Timer wont run on first click

$(document).ready(function () {
var rightAnswers = 0;
var wrongAnswers = 0;

    $(".form-check-input").on("click", function (event) {
        count();
    if ($(".form-check-input").attr("id") == "correct-answer1") {
        rightAnswers++;
        $("#correct-answer1").append(disabled);
        score();
    }

    if ($(".form-check-input").attr("id") == "incorrect-answer1") {
        wrongAnswers++;
        $("#incorrect-answer1").append(disabled);
        score();
    }

    if ($(".form-check-input").attr("id") == "correct-answer2") {
        rightAnswers++;
        $("#correct-answer2").append(disabled);
        score();
    }

    if ($(".form-check-input").attr("id") == "incorrect-answer2") {
        wrongAnswers++;
        $("#incorrect-answer2").append(disabled);
        score();
    }

    if ($(".form-check-input").attr("id") == "correct-answer3") {
        rightAnswers++;
        $("#correct-answer3").append(disabled);
        score();
    }

    if ($(".form-check-input").attr("id") == "incorrect-answer3") {
        wrongAnswers++;
        $("#incorrect-answer3").append(disabled);
        score();
    }

    if ($(".form-check-input").attr("id") == "correct-answer4") {
        rightAnswers++;
        $("#correct-answer4").append(disabled);
        score();
    }

    if ($(".form-check-input").attr("id") == "incorrect-answer4") {
        wrongAnswers++;
        $("#incorrect-answer4").append(disabled);
        score();
    }

    if ($(".form-check-input").attr("id") == "correct-answer5") {
        rightAnswers++;
        $("#correct-answer5").append(disabled);
        score();

    if ($(".form-check-input").attr("id") == "incorrect-answer5") {
        wrongAnswers++;
        $("#correct-answer5").append(disabled);
        score();
    }
   
};

});

function score(){
    if (rightAnswers + wrongAnswers == 5){
        alert("Thank for playing! You got " + rightAnswers + " correct and " + wrongAnswers + "incorrect.");
    }
}

function timer() {
    intervalId = setInterval(count, 1000);
};

function count() {
    var time = 0;
    time++;

    var converted = timeConverter(time);
    console.log(converted);

    $("#timeLeft").text("Time Left: " + converted);
}

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return seconds;
};
});