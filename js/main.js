const  button = document.querySelector('button'),
       circleArray = document.querySelectorAll('.circle'),
       circleWrapp = document.querySelector('.wrapp-circle');

button.addEventListener('click', iterateCircle)

function iterateCircle(){

    let num = 0;

    circleArray.forEach((value, index, array) => {

       let interval = setInterval(() => {

            num++

            if(num >= 100) {

                clearInterval(interval)
                randomDeletedElement()

            }else {

                randomElementReplacement(index)
                console.log('done')
            }
           
        },1000 + index*100)
        
    })
}

function randomElementReplacement() {

    let randomNumber = Math.floor(Math.random()*10);

    let elementCircle = circleArray[randomNumber].parentNode.replaceChild(circleArray[randomNumber], circleArray[randomNumber]);

    circleWrapp.appendChild(elementCircle)
}

function randomDeletedElement(index){

    let circleArray = document.querySelectorAll('.circle')

    let randomIndex = Math.floor(Math.random() * circleArray.length);

    console.log(circleArray[randomIndex])
    
    setTimeout(() => {

       if(circleArray.length <= 4) {

        return

       }else {

        circleArray[randomIndex].remove()

        console.log(circleArray.length)

       }
    }, 1000 + index*500);
    
    
}
