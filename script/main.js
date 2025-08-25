

// use case function container

function noneBlock(id) {
  const forms = document.getElementsByClassName("form");
  for (let form of forms) {
    form.style.display = "none";
  }

  document.getElementById(id).style.display = "block";
}

// getElementByid

function elementId(id) {
  const element = document.getElementById(id).value;
  return element;
}


// border and background effect 

function backgroundEffect(id){

  const clickEffect = document.getElementsByClassName("click-effect");

  for(let effect of clickEffect){
    effect.classList.remove("border-[#0874f2]" , "bg-[#0874f20d]");
    effect.classList.add("border-gray-300");
    // console.log(effect)
  }

  document.getElementById(id).classList.remove("border-gray-300");

  document.getElementById(id).classList.add("border-[#0874f2]" , "bg-[#0874f20d]")

}

// button on off container

document.getElementById("add-money-btn").addEventListener("click", function () {
  noneBlock("add-money-display");

  backgroundEffect("add-money-btn")

});

document.getElementById("cashout-money-btn").addEventListener("click", function () {
    noneBlock("cashout-money-display");
    backgroundEffect("cashout-money-btn")
  });

document.getElementById("transfer-money-btn").addEventListener('click', function(){
  noneBlock("transfer-money-display")
  backgroundEffect("transfer-money-btn")
})

document.getElementById("get-bonus-btn").addEventListener('click' , function(){
  noneBlock("bonus-money-display")
  backgroundEffect("get-bonus-btn")
})

document.getElementById("pay-bill-btn").addEventListener('click', function(){
  noneBlock("pay-bill-display");

  backgroundEffect("pay-bill-btn")
})

document.getElementById("transaction-btn").addEventListener('click', function(){

  noneBlock("transaction-display")
  backgroundEffect("transaction-btn")
})

/// ADD EVENT LISTENER container

// add section

document.getElementById("add-money").addEventListener("click", function (event) {
    event.preventDefault();

    const bankAccountNumber = elementId("bank-account-number");

    const pinNumber = elementId("pin-number");

    let money = parseInt(document.getElementById("money").innerText);

    const addMoneyInput = elementId("add-money-input");

    console.log(addMoneyInput.length)
    // condition checker

    if (
      bankAccountNumber.length < 11 ||
      addMoneyInput.length === 0 ||
      pinNumber.length < 4 
    ){
      alert("Plese FullFill Input and PROVIED CORECT INFORMATION");
      return;
    }

    // add money

    let add = money + parseInt(addMoneyInput);
    document.getElementById("money").innerText = add;
    // mt input value

    document.getElementById("add-money-input").value = "";

    document.getElementById("pin-number").value = "";

    // transactionData 
    const data = {
    name: "Add Money" ,
    date: new Date().toLocaleTimeString()
  }

   transactionData.push(data);

    alert("Money ADDED ✅")

  });
  

// cash out section

document
  .getElementById("cashout-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let money = parseInt(document.getElementById("money").innerText);

    const agentNumber = elementId("agent-number");

    const cashoutMoneyInput = elementId("cashout-money-input");

    const cashoutPin = elementId("cashout-pin-number");

    // condition check

    if (
      agentNumber.length < 11 ||
      cashoutPin.length < 4 ||
      cashoutMoneyInput.length === 0
    ) {
      alert("Plese FullFill Input");
      return;
    }

    //  cashout money
    let cashout = money - parseInt(cashoutMoneyInput);
    document.getElementById("money").innerText = cashout;

    // mt input value

    document.getElementById("cashout-pin-number").value = "";
    document.getElementById("cashout-money-input").value = "";

    // transactionData 
    const data = {
    name: "Cash Out" ,
    date: new Date().toLocaleTimeString()
  }

   transactionData.push(data);

   alert("Cash Out successfull ✅")
  });

  // transfer section

  document.getElementById("transfer-btn").addEventListener('click' , function(event){
    event.preventDefault();

    let money = parseInt(document.getElementById("money").innerText);

    const userTransferNumber = elementId("transfer-account-num");

    const transferMoneyInput = elementId("transfer-amount");

    const transferPin = elementId("transfer-pin-num");

    // check condition 

     if (
      userTransferNumber.length < 11 ||
      transferMoneyInput.length === 0 ||
      transferPin.length < 4 
    ){
      alert("Plese FullFill Input and PROVIED CORECT INFORMATION");
      return;
    }


    // transfer money 

    if(transferMoneyInput > money){
      alert("Invalid Money")
      return;
    }else{

    let transfer = money - parseInt(transferMoneyInput);

    document.getElementById("money").innerText = transfer
    }

    // mt input 

    document.getElementById("transfer-amount").value = "";
    document.getElementById("transfer-pin-num").value = "";

    // transactionData 
    const data = {
    name: "Transfer Money" ,
    date: new Date().toLocaleTimeString()
  }

   transactionData.push(data);

    
   alert(`Money Transfer ${userTransferNumber} ✅ `)
    
  })

  // get bonus 

  document.getElementById("bonus-btn").addEventListener('click' , function(event) {
    event.preventDefault();

    const bonusCouponInput = elementId("bonus-coupon");

    const money = parseInt(document.getElementById("money").innerText);

    if(bonusCouponInput === "coupon"){
      let bonus = money + 1000;
      document.getElementById("money").innerText = bonus
    }else{
      alert("Type [ coupon ] to get bonus.")
    }

    // mt input 

    document.getElementById("bonus-coupon").value = ''

    // transactionData 
    const data = {
    name: "Get Bonus" ,
    date: new Date().toLocaleTimeString()
  }

   transactionData.push(data);

   alert("You Got Bonus $1000 ✅")
  })


  // pay bill 

  document.getElementById("pay-money").addEventListener('click' , function(event){
    event.preventDefault();

    const money = parseInt(document.getElementById("money").innerText);
    // const selectPay = elementId("select-pay");
    const payAccountNum = elementId("pay-account-number");
    const payMoneyInput = elementId("pay-money-input");
    const payBIllPin = elementId("paybill-pin-number");

     // check condition 

     if (
      payAccountNum.length < 4 ||
      payMoneyInput.length === 0 ||
      payBIllPin.length < 4 
    ){
      alert("Plese FullFill Input and PROVIED CORECT INFORMATION");
      return;
    }

    // pay money 
    if(payMoneyInput > money){
      alert("Invalid Money")
    }else{
    let pay = money - parseInt(payMoneyInput);
    document.getElementById("money").innerText = pay;
    }

    // mt input 

    document.getElementById("pay-money-input").value = ''
    document.getElementById("paybill-pin-number").value = ''

    // transactionData 
    const data = {
    name: "Pay Bill" ,
    date: new Date().toLocaleTimeString()
  }

   transactionData.push(data);

   alert("Bill Pay Successful ✅")
  })


  // transaction history 
  
const transactionData = [];

document.getElementById("transaction-btn").addEventListener('click' , function(){
  
  const transactionContainer = document.getElementById("transaction-container");

  transactionContainer.innerText = " " ;

  for(const data of transactionData){
    const div = document.createElement("div")
    div.innerHTML = `
       <div class="bg-white p-3 flex justify-between items-center rounded-[10px]">

            <div class="flex items-center">
            <div class="p-3 rounded-full bg-[#f4f5f7]">
               <img src="./assets/wallet1.png " alt="add money" />
            </div>
            <div class="ml-3">
              <h1>${data.name}</h1>
              <p>${data.date}</p>
            </div>
          </div>
            <div class="cursor-pointer">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
    `

     transactionContainer.appendChild(div);
  }

})
