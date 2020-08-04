const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "h4": {
    "features-h4":"Features",
    "about-h4":"About",
    "services-h4":"Services",
    "product-h4":"Product",
    "vision-h4":"Vision",
  },
  "p":{
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "main-content-img": {
    "middle-img-src": "img/mid-page-accent.jpg",
  },
  "contactTitle":{
    "contact-h4" : "Contact",
  },
  "contact": {
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// console.log(siteContent)
// This is the navigation section 
const navigation = document.querySelectorAll(".container header nav a")
// console.log(navigation)

let links = Object.values(siteContent.nav)// this gathers all the nav links 
navigation.forEach((link,index) =>{
  link.textContent = links[index]
})
navigation.forEach((link,index)=>{
  link.style.color = 'green'
})
// CTA Section

const section = document.querySelector("h1")
const button = document.querySelector('button')
const ctaImg =document.querySelector('#cta-img')
section.innerHTML = `DOM<br> IS<br> AWESOME`
button.textContent = 'Get Started'
ctaImg.src = 'img/header-img.png'

// Main Content Section 
const mainTitles = document.querySelectorAll('.main-content h4') 

let h4Titles = Object.values(siteContent["h4"])
mainTitles.forEach((titles,index)=> titles.textContent = h4Titles[index]
)

const mainP = document.querySelectorAll('.main-content p')

let mainPs = Object.values(siteContent["p"])
mainP.forEach((p,index)=> p.innerHTML = mainPs[index])

const mainImg = document.querySelector('.main-content img')
mainImg.src = 'img/mid-page-accent.jpg'


// Contact section 
const contacth4 = document.querySelector(".contact h4")
// console.log(contacth4)
contacth4.textContent = "Contact"
let contactInfo = document.querySelectorAll('.contact p ')
// console.log(contactInfo)
let infoContact = Object.values(siteContent["contact"])
// console.log(infoContact)
contactInfo.forEach((p,index)=> p.textContent = infoContact[index])

// Footer 

let foot = document.querySelector("footer p")
// console.log(foot)
foot.textContent = "Copyright Great Idea! 2018"


// Adding items 

const newItem = document.createElement("a")
newItem.textContent = "Item 1"
newItem.href = "#"

const newItem2 = document.createElement("a")
newItem2.textContent = "Item 2"
newItem2.href = "#"

const nav = document.querySelector('nav')
nav.appendChild(newItem)
nav.append(newItem2)

newItem.style.color = 'green'
newItem2.style.color = 'green'
