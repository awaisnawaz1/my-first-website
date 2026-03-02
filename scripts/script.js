/* Scripts for this project go below */
let me = document.getElementById('first').innerText;
console.log(me);
let msg;
if(me == 'My first small paragraph')  {
    msg = 'My first change';
}

document.getElementById('first').innerText = msg;

/* element by class */
let you = document.getElementsByClassName('cool');
console.log(you);

/* Change things by class */
let heads = document.querySelectorAll('.cool');
heads.forEach(cool => { 
    cool.style.color = "orange";
});

function changeEvent()  {
    console.log('The onchange happened');

}

function blurEvent() {
    console.log('The onblur happened');
}

function myInfo() {
    // These variables take info from the inputs 
    let first = document.getElementById('fname').value;
    let myChoice = movieChoice();

    // These variables are the output 
    document.getElementById('my-name').innerHTML = first;
    document.getElementById('movie-choice').innerHTML = myChoice;

        /* Add in after form submit, to verify values */
        alert(`Name: ${first} & Movie Genre: ${myChoice}`);
}

function movieChoice() {
    let choice = document.getElementsByName('movie')
    for(let i =0; i < choice.length; i++)  {
        if(choice[i].checked) {
            return `Movie Genre: ${choice[i].value}`;
    }
}

}