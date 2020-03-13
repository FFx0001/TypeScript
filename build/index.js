var n = 0;
function displayTotalPerPerson(person, total) {
    var message = "Total for " + person + " is " + total + n;
    n++;
    // @ts-ignore
    document.getElementById("totalMessage").innerText = message;
}
