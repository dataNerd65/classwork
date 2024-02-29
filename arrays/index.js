var myScores = [70,60,50,70,20,30,40,80];
let div = document.getElementById("test")

myScores.pop()
myScores.push(100)

myScores.shift()
myScores.unshift(5)

for(let i = 0; i<myScores.length; i++){
    if(myScores[i] <= 40){
        div.innerHTML += myScores[i] + " - E" + "<br>"
    }else if(myScores[1] > 40 && myScores[i] <= 50){
        div.innerHTML += myScores[i] + " -  D" + "<br>"
    }else if(myScores[i] > 50 && myScores[i] <=60){
        div.innerHTML += myScores[i] + " -  C" + "<br>"
    }else if(myScores[i] > 60 && myScores[i] <=70){
        div.innerHTML += myScores[i] + " -  B" + "<br>"
    }else if(myScores[i] > 70){
        div.innerHTML += myScores[i] + " -  A" + "<br>"
    }
}
h1 = document.querySelector('h1')
function change(){
    h1.style.color = 'red'
    h1.textContent = 'Victor Wanyungu'
}
function changeBack(){
    h1.style.color = 'black'
    h1.textContent = 'My Scores'
}

// function validation(){
//     if(document.myForm.name.value == ""){
//         alert("Please provide your name!")
//         document.myForm.name.value.focus()
//         return false
//     }else{
//         alert(document.myForm.name.value)
//     }
    
//     if(document.myForm.email.value != ""){
//         var emailId = document.myForm.email.value
//         var atpos = emailId.indexOf("@")
//         var dotpos = emailId.lastIndexOf(".")

//         if(atpos < 1){
//             alert("No @")
//             document.myForm.email.value.focus()
//             return false
//         }
//         if(dotpos - atpos < 2){
//             alert("No words after @")
//             document.myForm.email.value.focus()
//             return false
//         }
//     }else{
//         alert("Please enter your email address")
//         document.myForm.email.value.focus()
//         return false
//     }
// }

var showBtnI = document.getElementById("showBtnI")
function show(){
    showBtnI.setAttribute('type', 'text');
}