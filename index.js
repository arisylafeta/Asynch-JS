let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
}


let render = (instruction) => {
    const list = document.getElementById("list");
    list.innerHTML += `<li>"${instruction}"</li>`;
};

let is_shop_open = true;

function order(ms){
    return new Promise((resolve, reject) => {
        if(is_shop_open){
            setTimeout(resolve, ms)
        }else{
            reject(render("Shop is closed"));
        }
    })
}
async function kitchen(){
    try{

        await order(2000);
        render(`${stocks.Fruits[0]}`);
        
        render("start the production");
        await order(2000)
        render(`cut the fruit`);

        await order(1000);
        render(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
    }
    catch(error){
        render("Sorry for seeing you leave", error)
    }
    finally{
        render("day ended, shop is closed")
    }
}

kitchen();