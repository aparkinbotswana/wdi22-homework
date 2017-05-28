


$(document).ready(function(){


  var checkingAccount = 0;
  var savingsAccount = 10;


    //  function which will parseInt from input field and add it to checking balance. this also updates the visual representation
  var depositToChecking = function(){
    var valueAmount = $("#checking-amount").val();
    var parsedValue = (parseInt(valueAmount));
    checkingAccount = parsedValue += checkingAccount;
    console.log(checkingAccount);

    var cDisplay = $("#checking-balance").text('$' + checkingAccount);
  };

  // fiunction which does the withdrawal version of the deposit function for checkingAccount. has an added IF statement to check that there are sufficient funds in the account to withdraw. will throw an error message and will not withdraw if there are not enough funds.

  var withdrawFromChecking = function(){

    var valueAmount = $("#checking-amount").val();
    var parsedValue = (parseInt(valueAmount));

    if (checkingAccount < parsedValue ) {
      
      // alert("Insufficient funds. Cannot withdraw")
    } else {
      checkingAccount = checkingAccount -= parsedValue;
    }
    console.log(checkingAccount);

    var cDisplay = $("#checking-balance").text('$' + checkingAccount)
  };


    //  function which will parseInt from input field and add it to savings balance. this also updates the visual representation

  var depositToSavings = function(){
    var valueAmount = $("#savings-amount").val();
    var parsedValue = (parseInt(valueAmount));
    savingsAccount = parsedValue += savingsAccount;
    console.log(savingsAccount);

    var cDisplay = $("#savings-balance").text('$' + savingsAccount);
  };

  // fiunction which does the withdrawal version of the deposit function to savings. has an added IF statement to check that there are sufficient funds in the account to withdraw. will throw an error message and will not withdraw if there are not enough funds.

  var withdrawFromSavings = function(){

    var valueAmount = $("#savings-amount").val();
    var parsedValue = (parseInt(valueAmount));

    if (savingsAccount < parsedValue ) {
      alert("Insufficient funds. Cannot withdraw")
    } else {
      savingsAccount = savingsAccount -= parsedValue;
    }
    console.log(savingsAccount);

    var cDisplay = $("#savings-balance").text('$' + savingsAccount)
  };



  // if (checkingAccount = 0) {
  //   $(".balance").css("color", "red")
  // };
  //
  // if (savingsAccount = 0) {
  //   $(".balance").css("color", "red")
  // };

    //  click event to call function that will deposit to bank. WORKING!!! YAY!!
  $("#checking-deposit").on("click", depositToChecking)
  $("#checking-withdraw").on("click", withdrawFromChecking)
  $("#savings-deposit").on("click", depositToSavings)
  $("#savings-withdraw").on("click", withdrawFromSavings)


})

// overdraft protection will need to do the following
 // -look at how much is in checking account,
 // -reduce it till it goes down to zero,
 // -calculate the difference between how much was taken out of checking and how much was requested
 // -withdraw the difference from savings

// ###Specification:
//
// DONE-----------------------------
// * Keep track of the checking and savings balances somewhere ---------------


// DONE-----------------------------
// * Add functionality so that a user can deposit money //into one of the bank accounts
// assuming there was no HTML, changing the value would first include setting the initial balance to be equal to a variable. Secondly, creating a function which allows you to specify a particular value which can be added to the existing account balance. you would need to parseInt of original balance and then text to string of new balance because the value is represented as string.
// with HTML, you will need to retrieve the DOM node that the value lives in first. you would then have to isolate the string from the HTML, run it through the function and append the new amount to the div.

// DONE-----------------------------
// * Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
//

// DONE-----------------------------
// * Add functionality so that a user can withdraw money from one of the bank accounts.

// DONE-----------------------------
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.

// DONE-----------------------------
// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.

// * When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.

// * What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.


// * Make sure there is overdraft protection going both ways.

// * Are there ways to refactor your code to make it DRYer?
