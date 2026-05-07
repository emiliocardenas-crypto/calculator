function add() {
    const num1= Number(document.getElementById("num1").value)
    console.log(num1)
    const num2= Number(document.getElementById("num2").value)
    console.log(num2)
    const sum=(num1+num2)
    console.log(sum)
    document.getElementById("answer").textContent=sum
}
function sub() {
    const num1= Number(document.getElementById("num1").value)
    console.log(num1)
    const num2= Number(document.getElementById("num2").value)
    console.log(num2)
    const sum=(num1-num2)
    console.log(sum)
    document.getElementById("answer").textContent=sum
}
function times() {
    const num1= Number(document.getElementById("num1").value)
    console.log(num1)
    const num2= Number(document.getElementById("num2").value)
    console.log(num2)
    const sum=(num1*num2)
    console.log(sum)
    document.getElementById("answer").textContent=sum
}
function divied() {
    const num1= Number(document.getElementById("num1").value)
    console.log(num1)
    const num2= Number(document.getElementById("num2").value)
    console.log(num2)
    const sum=(num1/num2)
    console.log(sum)
    document.getElementById("answer").textContent=sum
}
function squaredroot() {
    const num3= Number(document.getElementById("num3").value)
    console.log(num3)
    let sum2 = Math.sqrt(num3); 
    console.log(sum2); 
    console.log(sum2)
    document.getElementById("answer2").textContent=sum2
}
