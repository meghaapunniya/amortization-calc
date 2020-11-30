let amount, principal, rate, number_of_payments, b;
function calculate() {
    principal = document.getElementById("principal").value;
    number_of_payments = document.getElementById("number_of_payments").value;
    rate = document.getElementById("rate").value;
    principal = Number(principal);
    number_of_payments = Number(number_of_payments);
    rate = Number(rate);

    console.log(principal);
    console.log(number_of_payments);
    console.log(rate);

    b = Math.pow((1 +( rate * 0.01)/12), number_of_payments);
    amount = principal * (((rate * 0.01)/12 * b) / (b - 1));
    console.log(b);
    console.log(amount);
    document.getElementById("display").innerHTML = "The Payment Amount is $" + amount.toFixed(2);
}
