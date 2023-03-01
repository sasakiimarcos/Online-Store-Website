class Product {
    constructor(name, price,  amount=0)
    {
        this.name = name,
        this.price = price,
        this.amount = amount
    }

    toJSON() {
		return {
			name: this.name,
			price: this.price,
            amount: this.amount
		}
    }
}

function addtocart(item) {
    showfirstitem().then((a) => {
        showtable()
    }).catch((b) => {
        console.log("not first")
    }).finally((c) => {
        switch (item) {
            case "A":
                Toastify({
                    text: `One "${productlist[0].name}" has been added to the shopping cart`,
                    duration: 3000,
                    gravity: 'top',
                    position: 'right',
                    close: true,
                    style: {
                        background: 'linear-gradient(90deg, rgba(0,94,3,1) 60%, rgba(69,255,0,1) 100%)'
                    }        
                }).showToast();
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
                Toastify({
                    text: `One "${productlist[1].name}" has been added to the shopping cart`,
                    duration: 3000,
                    gravity: 'top',
                    position: 'right',
                    close: true,
                    style: {
                        background: 'linear-gradient(90deg, rgba(0,94,3,1) 60%, rgba(69,255,0,1) 100%)'
                    }        
                }).showToast();
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
                Toastify({
                    text: `One "${productlist[2].name}" has been added to the shopping cart`,
                    duration: 3000,
                    gravity: 'top',
                    position: 'right',
                    close: true,
                    style: {
                        background: 'linear-gradient(90deg, rgba(0,94,3,1) 60%, rgba(69,255,0,1) 100%)'
                    }        
                }).showToast();
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
                Toastify({
                    text: `One "${productlist[3].name}" has been added to the shopping cart`,
                    duration: 3000,
                    gravity: 'top',
                    position: 'right',
                    close: true,
                    style: {
                        background: 'linear-gradient(90deg, rgba(0,94,3,1) 60%, rgba(69,255,0,1) 100%)'
                    }        
                }).showToast();
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
                Toastify({
                    text: `One "${productlist[4].name}" has been added to the shopping cart`,
                    duration: 3000,
                    gravity: 'top',
                    position: 'right',
                    close: true,
                    style: {
                        background: 'linear-gradient(90deg, rgba(0,94,3,1) 60%, rgba(69,255,0,1) 100%)'
                    }        
                }).showToast();
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
                Toastify({
                    text: `One "${productlist[5].name}" has been added to the shopping cart`,
                    duration: 3000,
                    gravity: 'top',
                    position: 'right',
                    close: true,
                    style: {
                        background: 'linear-gradient(90deg, rgba(0,94,3,1) 60%, rgba(69,255,0,1) 100%)'
                    }        
                }).showToast();
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
    })
}

function updateTotal () {
    let totalAmount = 0
    for (let i = 0; i < productlist.length; i++) {
        totalAmount += productlist[i].amount * productlist[i].price
    }
    total.innerText = "$" + String(totalAmount.toFixed(2))
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
    button.classList.add("btn")
    button.classList.add("btn-danger")
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
    table.style.display = "none"
    show.innerText = "Show"
    addtostorage()
    updateTotal()
}

function checkifcartempty () {
    totalamount = 0
    for (let item of productlist) {
        totalamount += item.amount
    }
    if (totalamount == 0) {
        return true
    } else {     
        return false
    }
}

function showtable () {
    table.style.display = "block"
    show.innerText = "Hide"
}

function hidetable () {
    table.style.display = "none"
    show.innerText = "Show"
}

function showfirstitem () {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            checkifcartempty() ? resolve() : reject()
        }, 0)
    })
}

// Variable where the total cost is stored
let total = document.getElementById("totalAmount")

let table = document.getElementById("cart-list-table")

let productlist = []

fetch("http://sasakiimarcos.github.io/Online-Store-Website/data/data.json")
.then((res)=> res.json())
.then((data) =>{
    for(let product of data){
        productlist.push(new Product(product.name, product.price))
}})

if (localStorage.getItem('productlist')) {
    let stored = JSON.parse(localStorage.getItem("productlist"))
    productlist = []
    for (const product of stored)
        productlist.push(new Product(product.name, product.price, product.amount));
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
    if (show.innerText == "Show" && !(checkifcartempty())) {
        showtable()
    } else {
        hidetable()
    }
}

let purchase = document.getElementById("purchase")
purchase.onclick = () => {
    if (!(checkifcartempty())) {
        const DateTime = luxon.DateTime.now()
        Swal.fire({
            title: 'Item/s have been purchased successfully',
            text: `Item/s purchased on ${DateTime.toLocaleString()} at ${DateTime.hour}:${DateTime.minute < 10 ? "0" + DateTime.minute.toString() : DateTime.minute} for the price of ${total.innerText}`,
            icon: 'success',
            confirmButtonText: 'Ok'
        })    
        clearlist()
    } else {
        Swal.fire({
            title: 'You have not added any items to the cart',
            icon: 'error',
            confirmButtonText: 'Ok'
        })    
    }

}