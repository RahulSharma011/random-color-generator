const getColor =() =>{
    //hax code
    const getnumber= Math.floor( Math.random() * 16777215);
    const randomCode = "#" + getnumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("colorcode").innerText = randomCode;
    let target = document.getElementById("btn");
    target.style.backgroundColor = randomCode;
}
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
getColor();

// setInterval(getColor,1500);


    