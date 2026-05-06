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
}function divied() {
    const num1= Number(document.getElementById("num1").value)
    console.log(num1)
    const num2= Number(document.getElementById("num2").value)
    console.log(num2)
    const sum=(num1/num2)
    console.log(sum)
    document.getElementById("answer").textContent=sum
}