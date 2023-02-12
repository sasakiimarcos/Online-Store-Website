class Product {
    constructor(name, price, type, amount=0)
    {
        this.name = name,
        this.price = price,
        this.type = type,
        this.amount = amount
    }

    toJSON() {
		return {
			name: this.name,
			price: this.price,
			type: this.type,
            amount: this.amount
		}
    }
}

function addtocart(item) {
    switch (item) {
        case "A":
            if (productlist[0].amount == 0) {
                productlist[0].amount += 1
                updateTotal()
                createRow(productlist[0])
                addtostorage()
            } else {
                productlist[0].amount += 1
                updateTotal()
                updateRow(productlist[0])
                addtostorage()
            }
            break
        case "B":
            if (productlist[1].amount == 0) {
                productlist[1].amount += 1
                updateTotal()
                createRow(productlist[1])
                addtostorage()
            } else {
                productlist[1].amount += 1
                updateTotal()
                updateRow(productlist[1])
                addtostorage ()
            }
            break
        case "C":
            if (productlist[2].amount == 0) {
                productlist[2].amount += 1
                updateTotal()
                createRow(productlist[2])
                addtostorage ()
            } else {
                productlist[2].amount += 1
                updateTotal()
                updateRow(productlist[2])
                addtostorage ()
            }
            break
        case "D":
            if (productlist[3].amount == 0) {
                productlist[3].amount += 1
                updateTotal()
                createRow(productlist[3])
                addtostorage ()
            } else {
                productlist[3].amount += 1
                updateTotal()
                updateRow(productlist[3])
                addtostorage()
            }
            break
        case "E":
            if (productlist[4].amount == 0) {
                productlist[4].amount += 1
                updateTotal()
                createRow(productlist[4])
                addtostorage()
            } else {
                productlist[4].amount += 1
                updateTotal()
                updateRow(productlist[4])
                addtostorage()
            }
            break
        case "F":
            if (productlist[5].amount == 0) {
                productlist[5].amount += 1
                updateTotal()
                createRow(productlist[5])
                addtostorage()
            } else {
                productlist[5].amount += 1
                updateTotal()
                updateRow(productlist[5])
                addtostorage()
            }
            break
    }
}

function updateTotal () {
    let totalAmount = 0
    for (let i = 0; i < productlist.length; i++) {
        totalAmount += productlist[i].amount * productlist[i].price
    }
    total.innerText = "$" + String(totalAmount)
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
        addtostorage()
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
    } else if (document.getElementById(`${product.name}`)) {
        let row = document.getElementById(`${product.name}`)
        row.innerHTML = ''
        row.remove()
    }
}

function addtostorage () {
    let objlist = []
    for (let i = 0; i < productlist.length; i++) {
        objlist.push(productlist[i].toJSON())
    }
    localStorage.setItem('productlist', JSON.stringify(objlist))
}

function clearlist () {
    for (let i = 0; i < productlist.length; i++) {
        productlist[i].amount = 0
        updateRow(productlist[i])
    }
    addtostorage()
    updateTotal()
}

// Variable where the total cost is stored
let total = document.getElementById("totalAmount")

let table = document.getElementById("cart-list-table")

let productlist = [
    new Product("Casio's MS-80B", 9, "scientific"),
    new Product("Seaciyan Mini Calculator", 7, "mini"),
    new Product("Deli Mini standard function calculator", 7, "mini"),
    new Product("Texas Instruments TI-30XS", 15.44, "graphing"),
    new Product("Sharp EL-W535TGBBL 16-digit scientific calculator", 19.72, "scientific"),
    new Product("Texas Instruments TI-84 Plus CE", 100, "graphing")
    ]
if (localStorage.getItem('productlist')) {
    let stored = JSON.parse(localStorage.getItem("productlist"))
    productlist.length = 0
    for (const product of stored)
        productlist.push(new Product(product.name, product.price, product.type, product.amount));
    for (let i = 0; i < productlist.length; i++) {
        if (productlist[i].amount > 0) {
            createRow(productlist[i])
        }
    }
    updateTotal()
} 

// Buttons for the purchase of each item
let buttons = document.getElementsByClassName("products-purchase")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {addtocart(buttons[i].value)}
}

// Remove all Purchases
let clear = document.getElementById("clear")
clear.onclick = () => {
    clearlist()
}

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

let purchase = document.getElementById("purchase")
purchase.onclick = () => {
    alert("Item/s have been purchased successfully")
    clearlist()
}