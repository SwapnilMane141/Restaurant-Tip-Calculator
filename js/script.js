'use strict'


let billInput = document.querySelector('.bill-box__input');
const tipButtons = document.querySelectorAll('.tip-button');
let tipInput = document.querySelector('.tip-input');
let PeopleCountInput = document.querySelector('.people-count__input');

let tipAmount = document.querySelector('.tip-amount');
let totalAmount = document.querySelector('.total-amount');
const resetButton = document.querySelector('.reset-button');

const updateData = function(){
    let selectedElement = document.querySelector('.active');
    if(selectedElement.classList.contains('tip-button')){
        let tipSelected = Number((selectedElement.textContent).replace('%',''));
        let totalBill = Number(billInput.value);
        let totalPeople = Number(PeopleCountInput.value);
        if(totalPeople === 0){
            return;
        }
        // console.log(tipSelected, totalBill, totalPeople);
        // Getting Main data:
        let tipAmountPerPerson = Math.trunc(((tipSelected * totalBill)/100)/totalPeople);
        let totalAmountPerPerson = Math.trunc((totalBill/totalPeople) + tipAmountPerPerson);
        
        tipAmount.textContent = `$${tipAmountPerPerson}`;
        totalAmount.textContent = `$${totalAmountPerPerson}`;
    } else if(selectedElement.classList.contains('tip-input')){
        let tipSelected = Number((selectedElement.value).replace('%',''));
        let totalBill = Number(billInput.value);
        let totalPeople = Number(PeopleCountInput.value);
        if(totalPeople === 0){
            return;
        }
        // console.log(tipSelected, totalBill, totalPeople);
        // Getting Main data:
        let tipAmountPerPerson = Math.trunc(((tipSelected * totalBill)/100)/totalPeople);
        let totalAmountPerPerson = Math.trunc((totalBill/totalPeople) + tipAmountPerPerson);
        
        tipAmount.textContent = `$${tipAmountPerPerson}`;
        totalAmount.textContent = `$${totalAmountPerPerson}`;
    }
}

// billInput.addEventListener('change',function(){
//     updateData()
// });

PeopleCountInput.addEventListener('change',function(){
    updateData()
});

tipButtons.forEach((element) => element.addEventListener('click',function(){
    tipButtons.forEach((element) => element.classList.remove('active'));
    tipInput.classList.remove('active');
    element.classList.add('active');
    updateData();
}))

tipInput.addEventListener('click',function(){
    tipButtons.forEach((element) => element.classList.remove('active'));
    tipInput.classList.add('active');
    updateData();
})

// Reset Button

resetButton.addEventListener('click',function(){
    billInput.value = '0';
    PeopleCountInput = '0';
    tipButtons.forEach((element) => element.classList.remove('active'));
    tipAmount.textContent = '0';
    totalAmount.textContent = '0';
})
