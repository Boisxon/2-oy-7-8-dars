
const botlar = JSON.parse(localStorage.getItem("user"));
const studentBox = document.querySelector(".student__wrapper");
const logOutBtn = document.querySelector(".reset");
const logOutBtnShop = document.querySelector(".mars-shop")
const logOutBtnMars = document.querySelector(".mars");

// console.log(botlar);

function renderStudent() {
    if (botlar) {
        const userName = document.createElement("h2");
        const userCoin = document.createElement("span");
        const userUstoz = document.createElement("p");
        const userGroup = document.createElement("p");
        const userVaqt = document.createElement("p");

        userName.textContent = `Ismi: ${botlar.ism}`;
        userCoin.textContent = `Koin: ${botlar.coin}`;
        userUstoz.textContent = `Ustoz: ${botlar.ustoz}`;
        userGroup.textContent = `Group: ${botlar.group}`;
        userVaqt.textContent = `Vaqt: ${botlar.vaqt}`;

        studentBox.append(userName, userCoin, userUstoz, userGroup, userVaqt);

        studentBox.style.backgroundColor = "#f0400f";
        studentBox.style.color = "#fff";
        studentBox.style.width = "500px";
        studentBox.style.height = "250px";
        studentBox.style.display = "flex"
        studentBox.style.flexDirection = "column"
        studentBox.style.alignItems = "center"
        userName.style.paddingTop = "35px"
        userCoin.style.fontSize = "23px"
        userCoin.style.fontWeight = "50px"
        userUstoz.style.fontSize = "23px"
        userUstoz.style.fontWeight = "50px"
        userGroup.style.fontSize = "23px"
        userGroup.style.fontWeight = "50px"
        userVaqt.style.fontSize = "23px"
        userVaqt.style.fontWeight = "50px"
        studentBox.style.gap = "15px"
        userName.style.color = "#0e0d5d"
        userName.style.fontSize = "30px"
        }

    logOutBtn.addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.href = "./index.html";
        studentBox.innerHTML = "";
    });
    logOutBtnShop.addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.href = "./shop.html";
        studentBox.innerHTML = "";
    });
}

renderStudent();




// const shop = document.querySelector(".Magazin");

// shop.addEventListener("click", () => {
//     window.location.href = "./shop.html";
    
   
//     const magazin = botlar.product.filter(product => {

//     });
// });
