let totalFriend = 0;

function generate_board() {

    //============================================================================
    // Task 1
    // Retrieve the friend name(s) from the 'friends' multi-select dropdown menu
    //============================================================================

    // Array to contain the names of user-selected friend(s)
    // For example, if the user selected 'Darryl' and 'Yin Kit',
    //   this array's value will be:
    //      [ 'darryl', 'yinkit' ]
    //
    let friends = []; // Initialize to empty

    // YOUR CODE GOES HERE
    let selectFriends = document.getElementById("friends").selectedOptions;
    for (option of selectFriends){
        friends.push(option.value);
    }

    // Display user's selection in Developer Tools --> Console.
    console.log(friends);
    totalFriend = friends.length;



    //============================================================================
    // Task 2
    // Given one or more selected friends and given 4 fruit names,
    //   generate a 'randomized' Array of finalized card names.
    // 
    // Card names are as follows:
    //    apple_brandon.png
    //    banana_brandon.png
    //    kiwi_brandon.png
    //    orange_brandon.png
    //
    // where 'brandon' can be replaced with another friend's name,
    // e.g.
    //    apple_nick.png
    // (and so on)
    //
    // Display all 4 fruit cards of one or more selected friends.
    //
    // NOTE: Each card must be displayed TWO and ONLY TWO times (thus, a "pair")
    //       (such that the user can attempt to 'match').
    //
    // Check out this utility function (declared at the bottom of this file)
    //   for randomizing the order of Array elements.
    //        shuffleArray()
    //============================================================================
    const fruits = [ 'apple', 'banana', 'kiwi', 'orange' ];

    // YOUR CODE GOES HERE
    let randomized = [];
    
    for(friend of selectFriends){
        randomized.push("cards/apple_" + friend.value + ".png");
        randomized.push("cards/banana_" + friend.value + ".png");
        randomized.push("cards/kiwi_" + friend.value + ".png");
        randomized.push("cards/orange_" + friend.value + ".png");
        randomized.push("cards/apple_" + friend.value + ".png");
        randomized.push("cards/banana_" + friend.value + ".png");
        randomized.push("cards/kiwi_" + friend.value + ".png");
        randomized.push("cards/orange_" + friend.value + ".png");
    }

    

    

    for(friend of randomized){
        let randomOne = Math.floor(Math.random() * randomized.length);
        let randomTwo = Math.floor(Math.random() * randomized.length);

        let randomFriend = randomized[randomOne];
        randomized.splice(randomOne, 1);
        randomized.splice(randomTwo, 0, randomFriend);
    }

    console.log(randomized);



    //============================================================================
    // Task 3
    // Display the cards in <div id="game-board">
    //
    // For this, we will make use of Template Literal (using backticks).
    //
    // NOTE: The game board will always have 4 columns and N rows, where N denotes
    //       (number of selected friends) x 2.
    //
    //       For example, if I chose 'Brandon', 'Darryl', and 'Nick' (3 friends),
    //         then the newly generated game board will be
    //         6 (rows) by 4 (columns).
    //============================================================================
    const num_cols = fruits.length;
    const num_rows = friends.length * 2;

    console.log("# of columns: " + num_cols)
    console.log("# of rows: " + num_rows);


    // YOUR CODE GOES HERE

    // You will need to rewrite the value of this result_str (String).
    let result_str = `
        <div style='color: red'>
            <p>This is a sample HTML code that will replace the parent div's innerHTML!</p>
            <p>Instead of paragraph texts, you will display cards here.</p>
        </div>
    `;

    let pictureStr ="<div>"
    let counter = 0;

    for (friend of randomized){
        counter += 1;
        if (counter % 4 == 0){
            // pictureStr = pictureStr + "<img src = 'cards/hidden.png' >";
            pictureStr = pictureStr + `<img id = "img` + counter + `" src = "cards/hidden.png" onclick = "imageSwap(this,'` + friend +`')"> </div> <div>`;
            // pictureStr = pictureStr + "<img src="+ friend + "> </div> <div>";
        }
        else{
            pictureStr = pictureStr + `<img  id = "img` + counter + `"src = "cards/hidden.png" onclick = "imageSwap(this,'` + friend +`')">`;
        }
    }

    


    result_str = pictureStr ;


    // DO NOT MODIFY THE FOLLOWING
    // Replace the innerHTML of <div id="game-board">
    //   with a newly prepared HTML string (result_str).
    document.getElementById('game-board').innerHTML = result_str;
}


// Utility Function
// DO NOT MODIFY
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}
let scorePoint = 0;
let bufferArray = [];

function imageSwap(imageElement, person){
    imageElement.src = person;

    bufferArray.push(imageElement);

    console.log(bufferArray);

    if(bufferArray.length == 2){

        console.log("step 1");

        if(bufferArray[0].id == bufferArray[1].id){
            bufferArray.pop();
        }

        else if(bufferArray[0].src == bufferArray[1].src){
            console.log("step 2a");
            bufferArray[0].style.opacity = 0.5;
            bufferArray[0].removeAttribute("onclick");
            bufferArray[1].style.opacity = 0.5;
            bufferArray[1].removeAttribute("onclick");
            bufferArray = [];
            scorePoint += 1;
            document.getElementById("total-score").innerHTML = "Total Score: " + scorePoint;

            
        }
        else{
            console.log("step 2b");
            bufferArray[0].src = "cards/hidden.png";
            bufferArray[1].src = "cards/hidden.png";
            bufferArray = [];

        }

    }

    console.log(scorePoint);
    console.log(totalFriend);

    if (totalFriend * 4 == scorePoint){
        document.getElementById("total-score").innerHTML = "All Matched, Congratulations!";
    }
}

// function imageSwap(imageElement, person){
//     imageElement.src = person;

//     bufferArray.push(imageElement);
//     console.log(bufferArray);

//     if(bufferArray.length == 2){
//         console.log("step 1");

//         if(bufferArray[0].src == bufferArray[1].src){
//             console.log("step 2a");
//             bufferArray[0].style.opacity = 0.5;
//             bufferArray[1].style.opacity = 0.5;
//             bufferArray = [];
//             scorePoint += 1;
//             console.getElementById("total-score").innerHTML = "Total Score: " + scorePoint;
//         }
//         else{
//             setTimeout(() => {
//                 console.log("step 2b");
//                 let hidden = "cards/hidden.png";
//             },2000);
//             bufferArray[0].src = hidden;
//             bufferArray[1].src = hidden;
//             bufferArray = [];

//         }

//     }
// }

// function imageChecker(bufferArray){
//     console.log("step 2b");
//     bufferArray[0].src = "cards/hidden.png";
//     bufferArray[1].src = "cards/hidden.png";
// }

//document.getElementById('img-test').src = 'cards/apple_brandon.png'"
