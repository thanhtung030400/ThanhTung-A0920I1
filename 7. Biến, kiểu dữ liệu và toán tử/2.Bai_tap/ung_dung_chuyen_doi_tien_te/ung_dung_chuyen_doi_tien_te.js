function covertCurrency() {
    let amount = parseFloat(document.getElementById("amount").value);
    let Fromcurrency = document.getElementById("Fromcurrency");
    let Tocurrency = document.getElementById("Tocurrency");
    let result = document.getElementById("result");

    if(Fromcurrency.value == "vnd" && Tocurrency.value == "usd") {
        result.value = amount / 23000;
    }else if (Fromcurrency.value == "vnd" && Tocurrency.value == "vnd") {
        result.value = amount * 1;
    }else if (Fromcurrency.value == "usd" && Tocurrency.value == "usd") {
        result.value = amount * 1;
    } else {
        result.value = amount*23000;
    }
}