var currentstep = 1;
var gradeCounter = 0;




function nextClick() {


    var div = document.getElementsByClassName("div" + currentstep)[0];
    div.classList.add("hidden")

    var answer = document.querySelector('input[name = "q' + currentstep + '"]:checked');
    if (answer.classList.contains("correct"))
        gradeCounter += 1;

    currentstep += 1
    var div = document.getElementsByClassName("div" + currentstep)[0];

    if (div == null) {
        var finalDiv = document.getElementsByClassName("finalScore")[0];
        finalDiv.innerHTML = "Your score is " + gradeCounter + "/10"
        var button = document.getElementById("btnNext");
        button.classList.add("hidden");
    }
    else {
        div.classList.remove("hidden")
    }


}
