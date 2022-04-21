// Questions that will be asked
const Questions = [{
    id: 0,
    q: "In general, how would your best friend describe you as a risk taker?",
    a: [{ text: "A real gambler", riskVal: 4 },
        { text: "Willing to take risks after completing adequate research", riskVal: 3 },
        { text: "Cautious", riskVal: 2 },
        { text: "A real risk avoider", riskVal: 1 }
    ]
},
{
    id: 1,
    q: "You are on a TV game show and can choose one of the following. Which would you take?",
    a: [{ text: "$1,000 in cash", riskVal: 1 },
        { text: "A 50% chance at winning %5,000", riskVal: 2 },
        { text: "A 25% chance at winning $10,000", riskVal: 3 },
        { text: "A 5% chance at winning $100,000", riskVal: 4 }
    ]
},
{
    id: 2,
    q: "You have just finished saving for a 'once-in-a-lifetime' vacation. Three weeks before you plan to leave, you lose your job. You would:",
    a: [{ text: "Cancel the vacation", riskVal: 1 },
        { text: "Take a much more modest vacation", riskVal: 2 },
        { text: "Go as scheduled, reasoning that you need the time to prepare for a job search", riskVal: 3 },
        { text: "Extend your vacation because this might be your last chance to go first-class", riskVal: 4 }
    ]
},
{
    id: 3,
    q: "If you unexpectedly reveived $20,000 to invest, what would you do?",
    a: [{ text: "Deposit it in a bank account, money market account, or an insured CD", riskVal: 1 },
        { text: "Invest it in a safe high quality bond or mutual funds", riskVal: 2 },
        { text: "Invest it in stocks or stock mutual funds", riskVal: 3 }
    ]
},
{
    id: 4,
    q: "In terms of experience, how comfortable are you investing in stocks or stock mutual funds?",
    a: [{ text: "Not at all comfortable", riskVal: 1 },
        { text: "Somewhat comfortable", riskVal: 2 },
        { text: "Very comfortable", riskVal: 3 }
    ]
},
{
    id: 5,
    q: "When you think of the word 'risk' which of the following words comes to mind first?",
    a: [{ text: "Loss", riskVal: 1 },
        { text: "Uncertainty", riskVal: 2 },
        { text: "Opportunity", riskVal: 3 },
        { text: "Thrill", riskVal: 4 }
    ]
},
{
    id: 6,
    q: "Some experts are predicting prices of assets such as gold, jewels, collectibles, and real estate (hard assets) to increase in value; bond prices may fall, however, experts tend to agree that government bonds are relatively safe. Most of your investment assets are now in high interest government bonds. What would you do?",
    a: [{ text: "Hold the bonds", riskVal: 1 },
        { text: "Sell the bonds, put half the proceeds into money market accounts, and the other half into hard assets", riskVal: 2 },
        { text: "Sell the bonds and put the total proceeds into hard assets", riskVal: 3 },
        { text: "Sell the bonds, put all the money into hard assets, and borrow additional money to buy more", riskVal: 4 }
    ]
},
{
    id: 7,
    q: "Given the best and worst case returns of the four investment choices below, which would you prefer?",
    a: [{ text: "$200 gain best case; $0 loss worst case", riskVal: 1 },
        { text: "$800 gain best case; $200 loss worst case", riskVal: 2 },
        { text: "$2,600 gain best case; $800 loss worst case", riskVal: 3 },
        { text: "$4,800 gain best case; $2,400 loss worst case", riskVal: 4 }
    ]
},
{
    id: 8,
    q: "In addition to whatever you own, you have been given $1,000. You are now asked to choose between:",
    a: [{ text: "A sure gain of $500", riskVal: 1 },
        { text: "A 50% chance to gain $1,000 and a 50% chance to gain nothing", riskVal: 3 }
    ]
},
{
    id: 9,
    q: "In addition to whatever you own, you have been given $2,000. You are now asked to choose between:",
    a: [{ text: "A sure loss of $500", riskVal: 1 },
        { text: "A 50% chance to lose $1,000 and a 50% chance to lose nothing", riskVal: 3 }
    ]
},
{
    id: 10,
    q: "Suppose a relative left you an inheritance of $100,000, stipulating in the will that you invest all the money in one of the following choices. Which would you select?",
    a: [{ text: "A savings account or money market mutual fund", riskVal: 1 },
        { text: "A mutual fund that owns stock and bonds", riskVal: 2 },
        { text: "A portfolio of 15 common stocks", riskVal: 3 },
        { text: "Commodities like gold, silver, and oil", riskVal: 4 }
    ]
},
{
    id: 11,
    q: "If you had to invest $20,000, which of the following investment choices would you find most appealing?",
    a: [{ text: "60% in low-risk investments, 30% in medium-risk investments, 10% in high-risk investments", riskVal: 1 },
        { text: "30% in low-risk investments, 40% in medium-risk investments, 30% in high-risk investments", riskVal: 2 },
        { text: "10% in low-risk investments, 40% in medium-risk investments, 50% in high-risk investments", riskVal: 3 }
    ]
},
{
    id: 12,
    q: "Your trusted friend and neighbor, and experienced geologist, is putting together a group of investors to fund an exploratory gold mining venture. The venture could pay back 50 to 100 times the investment if successful. If the mine is a bust, the enture investment is worthless. Your friend estimates the chance of success is only 20%. If you had the money, how much would you invest?",
    a: [{ text: "Nothing", riskVal: 1 },
        { text: "One month's salary", riskVal: 2 },
        { text: "Three month's salary", riskVal: 3 },
        { text: "Six month's salary", riskVal: 4 }
    ]
}] // End of Questions

function evaluateRisk(val){
    var result;
    if (val <= 18){
        result = "You have a low risk tolerance (ie. conservative investor)!";
    }else if(19 <= val && val <= 22){
        result = "You have a below-average risk tolerance!";
    }else if(23 <= val && val <= 28){
        result = "You have an average/moderate risk tolerance!";
    }else if(29 <= val && val <= 32){
        result = "You have a above-average risk tolerance!";
    }else if(33 <= val){
        result = "You have a high risk tolerance (ie. aggresive investor!";
    }
    // Return the string of result to be posted on page
    return result;
}

function nextFunc(){
    if (start){ // If currently at first scene ...
        start = false;
        // Hide: start-container
        start_container[0].style.display = 'none';
        // Show: form-container, restart button
        const form = document.getElementsByClassName('form-container');
        form[0].style.display = '';
        restart.style.display = '';
        // Update next button to say "Next"
        next.innerText = "Next";
        // Do first question
        iterate(0);
    }

    // Check to make sure an option is chosen
    const radioButtons = document.querySelectorAll('input[name="options"]');
    for (x in radioButtons) {
        if (radioButtons[x].checked) { // If an option is chosen ...
            // Get value and add to total
            x++;
            var opID = "op"+x;
            var selected = document.getElementById(opID);
           // riskValTotal += selected.value;
            riskValTotal.push(selected.value); //does not work reads push as error
            id++;
            // Go to next question
            iterate(id);
            break;
        }
    }

    if (id>=1){ // If past first question ...
        //Show: previous button
        previous.style.display = '';
    }

    if(id==(totalQues-1)){ // If on the last question ...
        // Hide: next button
        next.style.display = 'none';
        // Show: finish button
        finish.style.display = '';
    }
}

function previousFunc(){
    riskValTotal.pop(); //removes from array
    id = id -1; //to go back to previous ques
    iterate(id)  //goes to prev q's
}

function finishFunc(){
    // Evaluate last question
    const radioButtons = document.querySelectorAll('input[name="options"]');
    for (x in radioButtons) {
        if (radioButtons[x].checked) {
            x++;
            var opID = "op"+x;
            var selected = document.getElementById(opID);
        // riskValTotal += selected.value;
            riskValTotal.push(selected.value); //does not work reads push as error??
            break;
        }
    }

    //finding sum of array, no official js method
    let sum = 0;

    for (let i = 0; i < riskValTotal.length; i++) { 
        sum += riskValTotal[i];
    }
    // var resultText = evaluateRisk(riskValTotal);
    var resultText = evaluateRisk(sum);

    console.log(resultText);

    // Hide: form-container, finish button
    const form = document.getElementsByClassName('form-container');
    form[0].style.display = 'none';
    finish.style.display = 'none';
    start_container[0].style.display = 'none';
    previous.style.display = 'none';

    // Show: end-container
    const end = document.getElementsByClassName('end-container');
    end[0].style.display = '';
    const resultHeader = document.getElementById('resultHeader');
    
    // Edit end-container <p> to say user's results
    resultHeader.innerText = resultText;
    const riskScore = document.getElementById('riskScore');
   // riskScore.innerText = "Your score: "+riskValTotal;
   //created new let "sum" as the total for riskVal
    riskScore.innerText = "Your score: "+sum;


    // Prints the risk value explainations
    const ex1 = document.getElementById('explain1');
    const ex2 = document.getElementById('explain2');
    const ex3 = document.getElementById('explain3');
    const ex4 = document.getElementById('explain4');
    const ex5 = document.getElementById('explain5');
    ex1.innerText = "18 or below is low risk tolerance (ie. conservative investor)";
    ex2.innerText = "19-22 is below-average risk tolerance";
    ex3.innerText = "23-28 is average/modreate risk tolerance";
    ex4.innerText = "29-32 is above-average risk tolerance";
    ex5.innerText = "33 or above is high risk tolerance (ie. aggrssive investor)";
}

function restartFunc(){
    // Set initial values again
    id = 0;
    //riskValTotal = 0;
    //creating empty array
    riskValTotal=[];

    // Show:
    next.style.display = '';
    const form = document.getElementsByClassName('form-container');
    form[0].style.display = '';

    // Hide:
    const end = document.getElementsByClassName('end-container');
    end[0].style.display = 'none';
    finish.style.display = 'none';
    previous.style.display = 'none';

    // Start from first question
    iterate(0);
}

function iterate(id){
    // Showing what question out of total question is current
    const numQuestion = document.getElementById("questOfTotal");
    numQuestion.style.display = '';
    var currQuest = id+1;
    numQuestion.innerText = currQuest+" of "+totalQues+" questions";

    // Getting the question and setting it's text
    const question = document.getElementById("question");
    question.innerText = Questions[id].q;

    // Grab the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');

    // Provide new text for options
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
    
    // Provide new values for options
    op1.value = Questions[id].a[0].riskVal;
    op2.value = Questions[id].a[1].riskVal;
    op3.value = Questions[id].a[2].riskVal;
    op4.value = Questions[id].a[3].riskVal;
}


// *** AUTOMATICALLY RUNS WHAT IS BELOW***

// Initialize values
var id = 0;
var start = true;
//var riskValTotal = 0; creating array :p
var riskValTotal =[];
var totalQues = Questions.length;

// Grab the buttons
const finish = document.getElementById('finish');
const restart = document.getElementById('restart');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const start_container = document.getElementsByClassName('start-container');
const numQuestion = document.getElementById("questOfTotal");

// Hide: finish button
finish.style.display = 'none';
numQuestion.style.display = 'none';

// Initialize next button as "start"
next.innerText = "START";

// Get it started
if (start){
    // Hide: the form-container and end-contianer, and restart button
    const form = document.getElementsByClassName('form-container');
    form[0].style.display = 'none';
    const end = document.getElementsByClassName('end-container');
    end[0].style.display = 'none';
    restart.style.display = 'none';
    previous.style.display = 'none';
}

// When next button is clicked, advance to next question
next.addEventListener("click", nextFunc);

// When previous button is clicked, go back to next question
previous.addEventListener("click", previousFunc);

// When finish button is clicked, go to last page with results
finish.addEventListener("click", finishFunc);

// When this button is clicked, restart quiz
restart.addEventListener("click", restartFunc);
