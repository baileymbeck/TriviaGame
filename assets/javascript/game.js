// ----- pseudo code -----
// 7 multi choice questions
// set timer for 60 seconds
//  when answer is selected it changes color and is saved (to be grade when the time finishes)

//  ---- when timer finishes ----
//  set function to determine correct answers
//  display correct answer in GREEN
// display fist bump image in top right

setTimeout( 1000 * 14);


function restart(){
    $("#start").on("click", function() {
        console.log(this);
        $("#start").css("display" , "none");
        $("img, .container").css("display" , "inherit");
        
    });

    
}

restart();

//the img buttons have generated random numbers with a value between 1 - 12 in each box 

// random number for each img box

    $(".btn").on("click", function() {
        var num = parseInt($(this).attr("data-number"));
        collectedNumber = collectedNumber + num;
        console.log(collectedNumber);
        $("#collectedNumber").text(collectedNumber);

        if(collectedNumber === randomNumber){
            wins++;
            $("#wins").text(wins);
            // append the modal
            restart()


        } else if(collectedNumber > randomNumber){
            losses++;
            $("#losses").text(losses);
            // append the modal
            restart()

        }

    });
