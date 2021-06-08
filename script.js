console.log('Hey my js file is working!!!!')

// ------------------------------------------------
// Target specific elements using the document object
// -------------------------------------------------


//  let myHeader = document.getElementById('title1')
//  console.log(myHeader)
// let myParagraphs = document.getElementsByClassName('paragraph')

// console.log( myParagraphs )
// document.getElementsByTagName('p')

// ------------------------------------------------
//           .querySelector
// -------------------------------------------------

// RETURNS THE FIRST MATCHING ELEMENT

// elements with id
// let myHeader = document.querySelector('#title1')
// console.log(myHeader)

// elements with classes
// let myParagraphs = document.querySelector('.paragraph')
// console.log(myParagraphs)

// elements
//document.querySelector('span')

//let myInput = document.querySelectorAll('.myInputs input')
//console.log( myInput )

// let myInput2 = document.querySelector('.myInputs input[type="text"]')
//console.log( myInput2 )

// ------------------------------------------------
//           .querySelectorAll
// -------------------------------------------------


// RETURNS ALL THE MATCHING ELEMENTS

/*
let myParagraphs = document.querySelectorAll('.paragraph')
console.log(myParagraphs)


myParagraphs.forEach((elem) => {
    console.log( elem.innerText  )
    elem.innerText = 'Ironhack'
})
*/


/*
let product = document.querySelector('.products')
console.log( product.innerHTML  )
console.log( product.innerText  )
console.log ( product.classList  ) // all the classes 
// product.classList.add('myClass')
 product.classList.remove('products')
//product.id = 'myId'

//product.removeAttribute('id') // removes an attribute
product.setAttribute('id', 'myId') // updates the 

// input 

let inp = document.querySelector('.myInputs input[type="text"]')
console.log( inp.value )
*/

// -------------------------------------------------
//           Event Listeners
// -------------------------------------------------

// -------------------------------------------------
//      .addEventListener( eventType, callback  )
// -------------------------------------------------

// Adding event listeners on DOM nodes

// -------------------------------------
// 1. mouse events
// -------------------------------------
/*
let title = document.querySelector('#title1')

title.addEventListener('mouseenter', (event) => {
    title.style.color = 'red'

    //console.log(event)
})

title.addEventListener('mouseleave', () => {
    title.style.color = 'blue'
})

// -------------------------------------
// 2.       keyboard events
// -------------------------------------

let input = document.querySelector('input[type="text"]')
input.addEventListener('keydown', (event) => {
    console.log(event.key)
})


// --------------------------------------
//        mouse click events      
// --------------------------------------

let count = document.querySelector('#counter span')

function createAddEventHandler(){
    // where we will create the event listener

    let addButton = document.querySelector('#increment')
    addButton.addEventListener('click', () => {
        console.log('Add click works!')
        count.innerText = Number(count.innerText) + 1
    })
}

// create a function to hanlde the substract button click
function createDecrEventHandler(){
    let decrButton = document.querySelector('#decrement')
    
    decrButton.addEventListener('click', () => {
        console.log('Decr click works!')
        count.innerText = Number(count.innerText) - 1
    })
}

// --------------------------------------
//        form submit events      
// --------------------------------------

function handleSubmitEvent(){
    let myForm = document.querySelector('#myForm')

    myForm.addEventListener('submit', (event) => {
        // prevents the default behaviour of events
        event.preventDefault()
       
        let input = document.querySelector('#number')
        let age = input.value

        let input1 = document.querySelector('#name')
        let name = input1.value

        console.log(name, age)

        //createElement will give you a new DOM node created
        let li = document.createElement('li')
        // adding some text to that li
        li.innerText = `Name is ${name} and age is ${age}`
        // adding a class to that li
        li.className = 'myClass'


        let ul = document.querySelector('#output')
        // add all these li's inside the ul element

        ul.appendChild(li)
    })
}

// ----------------------------------------------------
// load event listener
// ----------------------------------------------------


window.addEventListener('load', () => {
    createAddEventHandler()
    createDecrEventHandler()
    handleSubmitEvent()
})



*/

// -------------------------------------------------------------------
//          DOM activity
// -------------------------------------------------------------------


// ****************************** part 1 ******************************

// this function is invoked once the dom is ready. 
// check the load eventlistener at the bottom 
function mySubmitEventListener(){
     let myForm  = document.querySelector('#new-task-form')
      myForm.addEventListener('submit', e => {
          e.preventDefault();

          let task = document.querySelector('#task-input')
          let owner = document.querySelector('#owner-input')

          let li = document.createElement('li')
          li.innerText = `${owner.value} and task is ${task.value}`

          let ul = document.querySelector('#tasks-list')

          ul.querySelector()


          ul.appendChild(li)
          
          task.value = ''
          owner.value = ''

      });
}

// ****************************** part 2 ******************************

function minions(){
    let btn = document.querySelector('#update-button')
    btn.addEventListener('click', () =>{

        let iframe = document.querySelector('.three-minions')
        
        // iframe.remove()
        // .removeChild()

        // if (iframe.src == 'https://giphy.com/embed/MOWPkhRAUbR7i') {
        //     iframe.setAttribute('src', 'https://giphy.com/embed/1MTLxzwvOnvmE')
        // }
        // else {
        //     iframe.setAttribute('src', 'https://giphy.com/embed/MOWPkhRAUbR7i')
        // }    
    })
}


// 5: bonus: make it so every time you  click on the 'Update gif' button, a different gif (one of these two) appears


// EVERYTHING STARTS FROM HERE
window.addEventListener('load', () => {
    mySubmitEventListener()
    minions()
});


