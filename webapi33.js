let wrap = document.createElement("div")
wrap.setAttribute("class", "container")
document.body.appendChild(wrap)

let title = document.createElement("h1")
title.setAttribute("class", "text-center")
title.innerText = ("MOVIE COLLECTION")
title.setAttribute("id", "title")
wrap.appendChild(title)


let row = document.createElement("div")
row.setAttribute("class", "row")
row.setAttribute("id", "row1")
wrap.appendChild(row)



let col1 = document.createElement("div")
col1.setAttribute("class", "col-sm-12 col-md-4 col-lg-4 col-xl-4 py-2");
col1.setAttribute("id","main")
row.appendChild(col1)

let card = document.createElement("div")
card.setAttribute("class", "card h-100 ")
col1.appendChild(card)

let cardhead = document.createElement("div")
cardhead.setAttribute("class", "card-header bg-dark")
card.appendChild(cardhead)

let select1 = document.createElement("input");
select1.setAttribute("type", "text")
select1.setAttribute("id", "thirukkuralselection")
select1.setAttribute("placeholder", "Eg: 1  Type any number You like😊")
select1.setAttribute("class", "bg-dark border-0 text-light px-4 placeholder-glow w-75 fs-6 ")
cardhead.appendChild(select1)

let cardbody = document.createElement("div")
cardbody.setAttribute("class", "card-body cardbg")
card.appendChild(cardbody)

let countryimage = document.createElement("img")
countryimage.setAttribute("class", " card-img-top my-5")
countryimage.setAttribute("id", "thirukural")
countryimage.setAttribute("src", "567ce7251ddc2347a869f401f2b90568--movies-for-free-new-movies.jpeg")
// countryimage.setAttribute("alt", "Please Select the Country in the above Drop dow👆🏻")
cardbody.appendChild(countryimage)

let cardnative = document.createElement("div")
cardnative.setAttribute("class", "card-text")
cardnative.innerText = ("ID  :")
cardbody.appendChild(cardnative)

let spann1 = document.createElement("span")
spann1.setAttribute("id", "line1")
spann1.setAttribute("class","text-danger fs-5")
cardnative.appendChild(spann1)

let cardregion = document.createElement("div")
cardregion.setAttribute("class", "card-text ")
cardregion.innerText = ("MOVIE NAME :")
cardbody.appendChild(cardregion)


let spanr1 = document.createElement("span")
spanr1.setAttribute("id", "line2")
spanr1.setAttribute("class","text-success fs-5 ")
cardregion.appendChild(spanr1)


let te = document.createElement("div")
te.setAttribute("class", "card-text my-3")
te.innerText = ("URL LINK:")
cardbody.appendChild(te)


let spanp1 = document.createElement("span")
spanp1.setAttribute("id", "meaning")
spanp1.setAttribute("class","text-info")
te.appendChild(spanp1)

let em = document.createElement("div")
em.setAttribute("class", "card-text")
em.innerText = ("SUMMARY:")
cardbody.appendChild(em)


let spanp2 = document.createElement("span")
spanp2.setAttribute("id", "DESCRIPTION")
spanp2.setAttribute("class","text-warning")
em.appendChild(spanp2)


let cardfooter = document.createElement("div")
cardfooter.setAttribute("class", "card-footer cardbg")
card.appendChild(cardfooter)

let thankyou=document.createElement("div")
thankyou.setAttribute("id","thankyou")
thankyou.innerHTML=("THE END")
thankyou.setAttribute("class","fs-2 text-center text-light")
cardfooter.appendChild(thankyou)


// let button = document.createElement("button")
// button.setAttribute("onclick", "show()")
// button.setAttribute("class", "btn text-light btn-outline-light")
// button.setAttribute("id", "button")
// button.innerText = ("Today's weather report is BELOW 👇🏻👇🏻")
// cardfooter.appendChild(button)

let button=document.createElement("button")
button.setAttribute("id","Bu")
button.setAttribute("onclick","th()")
button.innerHTML=("SUBMIT")
button.setAttribute("class", "btn text-light btn-outline-light btn-primary")
cardhead.appendChild(button)




function th(){

let va = document.querySelector('input').value
for (i = 0; i < 1000000; i++) {
    if (i == va ) {
        fetch(`https://api.tvmaze.com/shows/${i}`)
            .then((d) => d.json())
            .then((data) => {
                document.getElementById("line1").innerHTML = data.id
                document.getElementById("line2").innerHTML = data.name
                document.getElementById("meaning").innerHTML = data.url
                document.getElementById("DESCRIPTION").innerHTML = data.summary
            })
    }
}
}