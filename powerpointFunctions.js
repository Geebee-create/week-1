// some of the examples from the Functions Powerpoint
// functions break our code up into smaller, reusable chunks

const pressGrindBeans = () => {
    // the above line declares a new function
console.log("Grinding for 20 seconds");
}
pressGrindBeans();

// functions with if statements included

let coffeeIsGrinding = false;
const pressingGrindBeans = () => {
    if (coffeeIsGrinding){
console.log("Stopping the grind");
coffeeIsGrinding = false;
    } else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}
pressingGrindBeans ();


// parameters give functions flexibility. They give functions the ability to act upon data inputs. 
// amount and accnum are the parameters for this function
const cashWithdrawal = (amount, accnum) => {
    console.log (`Withdrawing ${amount} from account $accnum`);
}
// the number values in the three lines below are called arguments
cashWithdrawal(20, 12345678)
cashWithdrawal(200, 33445566)
cashWithdrawal(1000, 13827678)

