const n1Ele = document.getElementById("n1");
const n2Ele = document.getElementById("n2");
const resEle = document.getElementById("result");

const readValues = () => {
    const n1 = Number(n1Ele.value);
    const n2 = Number(n2Ele.value);
    return [n1, n2];
}
const sum = () => {
    const [n1, n2] = readValues();
    const result = n1+n2;
    resEle.innerText = "= " + result;
}
const sub = () => {
    const [n1, n2] = readValues();
    const result = n1-n2;
    resEle.innerText = "= " + result;
}
const mult = () => {
    const [n1, n2] = readValues();
    const result = n1*n2;
    resEle.innerText = "= " + result;
}
const div = () => {
    const [n1, n2] = readValues();
    const result = n1/n2;
    resEle.innerText = "= " + result;
}

const box = document.getElementById("h");
box.onmouseover(box.classList.toggle('change'));
