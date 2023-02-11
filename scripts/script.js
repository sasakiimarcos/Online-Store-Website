class Product {
    constructor(name, price, type)
    {
        this.name = name,
        this.price = price,
        this.type = type,
        this.amount = 0
    }
}

function addtocart(item) {
    switch (item) {
        case "A":
            if (productlist[0].amount == 0) {
                productlist[0].amount += 1
                updateTotal()
                createRow(productlist[0])
            } else {
                productlist[0].amount += 1
                updateTotal()
                updateRow(productlist[0])
            }
            break
        case "B":
            if (productlist[1].amount == 0) {
                productlist[1].amount += 1
                updateTotal()
                createRow(productlist[1])
            } else {
                productlist[1].amount += 1
                updateTotal()
                updateRow(productlist[1])
            }
            break
        case "C":
            if (productlist[2].amount == 0) {
                productlist[2].amount += 1
                updateTotal()
                createRow(productlist[2])
            } else {
                productlist[2].amount += 1
                updateTotal()
                updateRow(productlist[2])
            }
            break
        case "D":
            if (productlist[3].amount == 0) {
                productlist[3].amount += 1
                updateTotal()
                createRow(productlist[3])
            } else {
                productlist[3].amount += 1
                updateTotal()
                updateRow(productlist[3])
            }
            break
        case "E":
            if (productlist[4].amount == 0) {
                productlist[4].amount += 1
                updateTotal()
                createRow(productlist[4])
            } else {
                productlist[4].amount += 1
                updateTotal()
                updateRow(productlist[4])
            }
            break
        case "F":
            if (productlist[5].amount == 0) {
                productlist[5].amount += 1
                updateTotal()
                createRow(productlist[5])
            } else {
                productlist[5].amount += 1
                updateTotal()
                updateRow(productlist[5])
            }
            break
    }
}

function updateTotal () {
    let totalAmount = 0
    for (let i = 0; i < productlist.length; i++) {
        totalAmount += productlist[i].amount * productlist[i].price
    }
    total.innerText = String(totalAmount)
}

function createRow (product) {
    let row = document.createElement("tr")
    row.setAttribute("id", product.name)
    let column1 = document.createElement("th")
    let column2 = document.createElement("th")
    column2.setAttribute("id", `${product.name}-amount`)
    let column3 = document.createElement("th")
    let column4 = document.createElement("th")
    column4.setAttribute("id", `${product.name}-totalAmount`)
    let button = document.createElement("button")
    button.onclick = () => {
        product.amount -= 1
        updateTotal()
        updateRow(product)
    }
    button.innerText = " - "
    column1.append(button)
    column2.innerText = String(product.amount)
    column3.innerText = product.name
    column4.innerText = "$" + String(product.amount * product.price)
    row.append(column1)
    row.append(column2)
    row.append(column3)
    row.append(column4)
    table.append(row)
}

function updateRow (product) {
    if (product.amount > 0) {
        let column2 = document.getElementById(`${product.name}-amount`)
        column2.innerText = String(product.amount)
        let column4 = document.getElementById(`${product.name}-totalAmount`)
        column4.innerText = "$" + String(product.amount * product.price)
    } else {
        let row = document.getElementById(`${product.name}`)
        row.innerHTML = ''
        row.remove()
    }
}

let productlist = [
    new Product("Casio's MS-80B", 9, "scientific"),
    new Product("Seaciyan Mini Calculator", 7, "mini"),
    new Product("Deli Mini standard function calculator", 7, "mini"),
    new Product("Texas Instruments TI-30XS", 15.44, "graphing"),
    new Product("Sharp EL-W535TGBBL 16-digit scientific calculator", 19.72, "scientific"),
    new Product("Texas Instruments TI-84 Plus CE", 100, "graphing")
]

// Buttons for the purchase of each item
let buttons = document.getElementsByClassName("products-purchase")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {addtocart(buttons[i].value)}
}

// Variable where the total cost is stored
let total = document.getElementById("totalAmount")

// Remove all Purchases
let clear = document.getElementById("clear")
clear.onclick = () => {
    for (let i = 0; i < productlist.length; i++) {
        productlist[i].amount = 0
    }
    updateTotal()
}

let table = document.getElementById("cart-list-table")

let show = document.getElementById("cart-list-button")
show.onclick = () => {
    if (show.innerText == "Show") {
        table.style.display = "block"
        show.innerText = "Hide"
    } else {
        table.style.display = "none"
        show.innerText = "Show"
    }
}

let 