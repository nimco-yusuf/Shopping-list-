const itemLists= document.querySelector("ul")
const input = document.querySelector("input")
const inputNum = document.querySelector(".Num")

const enterBtn = document.querySelector("button")

const calTotal = document.querySelector('.total')


enterBtn.addEventListener('click', clickButton)

inputNum.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        event.preventDefault()
        clickButton()
    }
})

let sumTotal= 0;
function clickButton(){
    
    const currentValue = input.value 
    const currentNumVal = parseFloat(inputNum.value)


    if (isNaN(currentNumVal)) {
        alert("Please enter a valid number!");
        return;
    }

    input.value = '' 
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
