let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
}


let order  = (Fruit_name, call_production) => {
    
    setTimeout(()=> {
        Output(`${stocks.Fruits[Fruit_name]} was selected`);
        call_production();
    }, 1000);

    
};
let Output = (instruction) => {
    const list = document.getElementById("list");
    list.innerHTML += `<li>"${instruction}"</li>`;
};

let production = () => {
    setTimeout(() => { 
        Output("production has started");

        setTimeout(() => {
            Output("Fruit is chopped");
            
            setTimeout(() => {
                Output(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(() => {
                    Output("Machine was started");

                    setTimeout(() => {
                        Output(` Icecream was placed on ${stocks.holder[0]}`);

                        setTimeout(() => {
                            Output(`${stocks.toppings[0]} was added as toppings`);
                            setTimeout(() => {
                                Output(``)
                            })

                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0000)

};

