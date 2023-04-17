let CE=document.createElement("div")
CE.id="outerContainer"
document.body.append(CE)

let createpara=document.createElement('p')
createpara.innerHTML="Twitter Inspired character counter"
createpara.className="Para"
createpara.addEventListener("mouseover", myFunction_1);
createpara.addEventListener("mouseout", myFunction_2);
CE.appendChild(createpara)


function myFunction_1(){
  createpara.style.color = 'red';
}
function myFunction_2(){
  createpara.style.color = 'Black';
}