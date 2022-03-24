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

let order = (time, work) => {

    return new Promise(  (resolve, reject) =>{
        if(is_shop_open){

            setTimeout( () => {
                resolve( work())
            }, time)
            
        }else{
            reject( render("our shop is closed"))
        }
    } )
}

order(2000, () => {
    render(`${stocks.Fruits[0]} was selected`)
})
.then(() => {
    return order(0000, () => {
        render("Production has started");
    })
})
.then(() => {
    return order(2000, () => {
        render("The fruit was chopped");
    })
})
.then(() => {
    return order(1000, () => {
        render(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
    })
})
.then(() => {
    return order(1000, () => {
        render("start the machine")
    })
})
.then(() => {
    return order(2000, () => {
        render(`ice cream was placed on ${stocks.holder[0]} `)
    })
})
.then(() => {
    return order(3000, () => {
        render(`${stocks.toppings[0]} was selected`)
    })
})
.then(() => {
    return order(2000, () => {
        render("Ice cream was served")
    })
})