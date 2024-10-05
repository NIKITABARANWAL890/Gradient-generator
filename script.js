let btn1=document.getElementsByClassName("first")[0];
let btn2=document.getElementsByClassName("second")[0];
let cpCode=document.querySelector(".copyCode");
let myHexaValues="0123456789abcdef";

const hexValues = ()=>{
    let color="#";
    for (let i=0; i<6; i++){
        color+=myHexaValues[Math.floor(Math.random()*16)];
    }
    return color;
}
const hexValuesButton = ()=>{
    let color="#";
    for (let i=0; i<6; i++){
        color+=myHexaValues[Math.floor(Math.random()*16)];
    }
    return color;
}

const handleButton1=()=>{
    let rgb1 = hexValues();
    let rgbButton1 = hexValuesButton();
    btn1.innerHTML=rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, #fff)`;
    cpCode.innerHTML=`background-image: linear-gradient(to right, ${rgb1}, rgb(152, 63, 198))`;
    btn1.style.backgroundColor=rgbButton1;
    console.log(rgb1);
};

const handleButton2=()=>{
    let rgb2 = hexValues();
    let rgbButton2 = hexValuesButton();
    btn2.innerHTML=rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb2}, #fff)`;
    cpCode.innerHTML=`background-image: linear-gradient(to right, ${rgb2}, rgb(152, 63, 198))`;
    btn2.style.backgroundColor=rgbButton2;
    console.log(rgb2);
};

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);

const copyFunction = () =>{
    const textToCopy = cpCode.value;
    navigator.clipboard.writeText(textToCopy).then(()=>{
        alert("Text copied to clipboard");
    }).catch(err => {
        console.log("Faild to copy text: ", err);
    });
}

cpCode.addEventListener("click", copyFunction);

