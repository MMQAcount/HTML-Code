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

const box = document.getElementById("hi");
box.addEventListener("mouseover", () => {
        if(box.value === "Hi"){
            box.value = "Bey";
        };
        if(box.value === "Bey") {
            box.value = "Hi";
        };
        box.style.left = (Math.floor(random()*(window.innerWidth-box.offsetWidth)));
        box.style.right = (Math.floor(random()*(window.innerHeight-box.offsetHeight)));
        box.style.backgroundColor = (rgp(Math.floor(random()*256),Math.floor(random()*256),Math.floor(random()*256)));
    }
); 



