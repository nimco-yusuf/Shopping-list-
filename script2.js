const itemLists= document.querySelector("ul")
const input = document.querySelector("input")
const inputNum = document.querySelector(".Num")

const enterBtn = document.querySelector("button")

const calTotal = document.querySelector('.total')


enterBtn.addEventListener('click', clickButton)
// input.addEventListener('keydown', function(event){
//     if(event.key === "Enter"){
//         event.preventDefault()
//         clickButton()
//     }
// }) dont need this cause i can use the last one, the one next to button being clicked
inputNum.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        event.preventDefault()
        clickButton()
    }
})
// function total(inputNum){
//     let previusValue;
// return inputNum + previusValue;
// }
let sumTotal= 0;
function clickButton(){
    
    const currentValue = input.value //takes the current value and saves to this variable
    const currentNumVal = parseFloat(inputNum.value)


    if (isNaN(currentNumVal)) {
        alert("Please enter a valid number!");
        return;
    }

    input.value = '' //temp spaces before the value is saved into current then this is embtys
    inputNum.value = '';

  


    sumTotal += currentNumVal;
    calTotal.textContent = sumTotal

    const currentListItem = document.createElement("li")
    const listt = document.createElement("span")
    const numSpan = document.createElement("span")
    const deleteButtn = document.createElement("button")
    
    listt.textContent = currentValue
    numSpan.textContent = currentNumVal
    deleteButtn.textContent = 'Delete'

    currentListItem.append(listt)
    currentListItem.append(numSpan)
    currentListItem.append(deleteButtn)
    itemLists.append(currentListItem)

    deleteButtn.addEventListener('click',()=>{
        sumTotal -= parseFloat(numSpan.textContent); 
        calTotal.textContent = sumTotal
        itemLists.removeChild(currentListItem)
        

    })
    
    
    
    input.focus()
    
}
