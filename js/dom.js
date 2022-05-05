 let i = 0;
 let text = "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%50 OFF Con el codigo khalil jejeje";
 let speed = 35;

 function typeWriter(n) {
 

     if (i < text.length) {
         document.getElementById("demo").innerHTML += text.charAt(i);
         i++;
         setTimeout(typeWriter, speed);
     }
 }

 typeWriter()


let desplegableClick = document.getElementById('desplegable-click');

function eventClick() {

    let desplegable = document.getElementById('desplegable')
    desplegable.style.display = 'block';
    for(desplegables in desplegable) {
        addEventListener.click  (()=> {
             desplegable.style.display = 'none'
        }) 
    }
}

desplegableClick.addEventListener('click', eventClick);

