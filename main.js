let icon;
let price_basic;
let price_pro;
let price_master;

const toggle = () => {
    if (icon === "toggle_on") {
        icon = "toggle_off";
        price_basic = "199.99";
        price_pro = "249.99";
        price_master = "399.99";
    } else {
        icon = "toggle_on";
        price_basic = "19.99";
        price_pro = "24.99";
        price_master = "39.99";
    }

    document.getElementById("price_basic").innerHTML = price_basic;
    document.getElementById("price_pro").innerHTML = price_pro;
    document.getElementById("price_master").innerHTML = price_master;

    document.getElementById("icon").innerHTML = icon;
};