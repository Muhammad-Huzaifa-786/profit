

// document.getElementById("firstdiv").addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//         profit();
//     }
// });
// document.getElementById("seconddiv").addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//         percentage();
//     }
// });
// document.getElementById("thirddiv").addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//         sale();
//     }
// });
// document.getElementById("abcde").addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//         monthly();
//     }
// });

function r(){
    location.reload()
}
function profit() {
    var pro = document.getElementById('prfit')
    var prsale = document.getElementById('invesr')
    if ((pro.value !== '') && (prsale.value !== '')) {

        var percvvv = pro.value * 100 / prsale.value
        var con = percvvv.toFixed(2)
        var perce = document.getElementById('Percent')

        perce.innerHTML = con
    }
}

function percentage() {
    var pro = document.getElementById('inves')
    var prsale = document.getElementById('perc')
    if ((pro.value !== '') && (prsale.value !== '')) {
        var percvvv = pro.value / 100 * prsale.value
        var con = percvvv.toFixed(2)
        var perce = document.getElementById('amount')

        perce.innerHTML = con
    }

}
function sale() {

    var pro = document.getElementById('ale')
    var prsale = document.getElementById('cost')
    if ((pro.value !== '') && (prsale.value !== '')) {
        var percvvv = ((prsale.value / pro.value) * 100)
        var abc = 100 - percvvv
        var con = abc.toFixed(2)
        var t = document.getElementById('ppp')
        var perce = document.getElementById('salecost')
        var saa = document.getElementById('sa')
        saa.innerHTML = percvvv.toFixed(2)

        perce.innerHTML = con
        if (parseInt(pro.value) > parseInt(prsale.value)) {
            t.innerHTML = `Profit :${pro.value - prsale.value}`
        }
        if (parseInt(prsale.value) > parseInt(pro.value)) {
            t.innerHTML = `Loss :${prsale.value - pro.value}`
        }
    }
}


function monthly() {


    let capital = document.getElementById('monthinves').value, month = document.getElementById('monthvalue').value; profit_percentage = document.getElementById('monthpercen').value,
        factor = 1 + profit_percentage / 100;
    let total = capital;
    let totalv = document.getElementById('totalbenifits')
    let totlv = document.getElementById('totalbenifis')
    let i = document.getElementById('monthinves').value
    let p = document.getElementById('monthpercen').value
    let m = document.getElementById('monthvalue').value
    for (let i = 1; i <= month; i++) {
        total *= factor;

    }
    totalv.innerHTML = (total - parseInt(document.getElementById('monthinves').value)).toFixed(2)

    if ((i.value !== '') && (m.value !== '') && (p.value !== '')) {

        totlv.innerHTML = ((parseInt(i) / 100 * parseInt(p)) * parseInt(m)).toFixed(2)
    }


}





function a1() {
    var pro = document.getElementById('prfit')
    pro.value = pro.value.slice(0, -1)
    profit();
}
function a2() {
    var pro = document.getElementById('invesr')
    pro.value = pro.value.slice(0, -1)
    profit();
}
function a3() {
    var pro = document.getElementById('inves')
    pro.value = pro.value.slice(0, -1)
    percentage();
}
function a4() {
    var pro = document.getElementById('perc')
    pro.value = pro.value.slice(0, -1)
    percentage();
}
function a5() {
    var pro = document.getElementById('ale')
    pro.value = pro.value.slice(0, -1)
    sale();
}
function a6() {
    var pro = document.getElementById('cost')
    pro.value = pro.value.slice(0, -1)
    sale();
}

