let n:number = 0;

function displayTotalPerPerson(person: string, total: number) {
    let message: string = "Total for " + person + " is " + (total + n).toString();
    n++;
    // @ts-ignore
    document.getElementById("totalMessage").innerText = message;
}