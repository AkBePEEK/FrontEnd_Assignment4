function color() {
    let color = '';
    let hex = ["A", "B", 'C', 'D', 'E', 'F']
    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 16);
        color += (num >= 10) ? hex[num - 10] : num;
    }
    return color;
}
function font_family() {
    let fonts = ["Garamond", "Georgia", "Arial", "Helvetica", "Verdana", "Monaco", "Copperplate", "Papyrus"]
    return fonts[Math.floor(Math.random() * fonts.length)]
}
function font_size() {
    return Math.floor(Math.random() * 34) + 1;
}
function add() {
    const inpt = document.getElementById("list_elem");
    let x = inpt.value;
    if (x.length == 0) {
        alert("You must type something");
        return
    }
    document.getElementById("list_group").insertAdjacentHTML("afterbegin", `<li>
        <input class="form-check-input flex-shrink-0" type="checkbox" value="" style="font-size: 1.375em;"><strong>${x}</strong><span class="close">&times;</span></li>`);
    var closebtns = document.getElementsByClassName("close");
    for (let i = 0; i < closebtns.length; i++) {
        closebtns[i].addEventListener("click", function () {
            this.parentElement.style.display = 'none';
        });
    }
}
function Sort() {
    let str = document.getElementById("list_num").value;
    var order = document.getElementById("order").value;
    let num_arr = str.split(", ");
    for (let elem of num_arr) {
        if (isNaN(elem)) {
            alert("Input only numbers!");
            return
        }
    }
    if (order == "True" || order == "true") {
        document.getElementById("sorted_arr").innerHTML = num_arr.toSorted(function (a, b) { return a - b });
    }
    else if (order == "False" || order == "false") {
        document.getElementById("sorted_arr").innerHTML = num_arr.toSorted(function (a, b) { return b - a });
    }
    else document.getElementById("sorted_arr").innerHTML = num_arr;
}
function Multiply() {
    var num1 = document.getElementById("firstnum").value;
    var num2 = document.getElementById("secondnum").value;
    document.getElementById("result").innerHTML = num1 * num2;
}
function Divide() {
    var num1 = document.getElementById("firstnum").value;
    var num2 = document.getElementById("secondnum").value;
    document.getElementById("result").innerHTML = num1 / num2;
}
function Substract() {
    var num1 = document.getElementById("firstnum").value;
    var num2 = document.getElementById("secondnum").value;
    document.getElementById("result").innerHTML = num1 - num2;
}
function Summation() {
    var num1 = document.getElementById("firstnum").value;
    var num2 = document.getElementById("secondnum").value;
    document.getElementById("result").innerHTML = num1 * 1 + num2 * 1;
}
function Power() {
    var num1 = document.getElementById("firstnum").value;
    var num2 = document.getElementById("secondnum").value;
    document.getElementById("result").innerHTML = Math.pow(num1, num2);
}
function Logarithm() {
    var num1 = document.getElementById("firstnum").value;
    var num2 = document.getElementById("secondnum").value;
    document.getElementById("result").innerHTML = Math.log(num2) / Math.log(num1);
}
function Tax() {
    var purch = document.getElementById("purchase").value;
    var purch_num = purch.slice(0, purch.length - 1);
    var purch_сurr = purch[purch.length - 1];
    if (purch_num > 10000) {
        document.getElementById("taxes").innerHTML = purch_num * .25 + purch_сurr;
    }
    else if (5000 <= purch_num && purch_num <= 10000) {
        document.getElementById("taxes").innerHTML = purch_num * .2 + purch_сurr;
    }
    else {
        document.getElementById("taxes").innerHTML = purch_num * .15 + purch_сurr;
    }
}