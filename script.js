let balanceToggleButton = document.getElementById('balanceToggleButton');
let buttonText = document.getElementById('buttonText');
let cadAmount = document.getElementById('cadAmount');
let ngnAmount = document.getElementById('ngnAmount')



let isMasked = true

balanceToggleButton.addEventListener('click', (e) => {
    e.preventDefault();


    if (isMasked) {
        cadAmount.innerText = '$300.50'
        ngnAmount.innerText = 'N100,000.87'
        buttonText.innerText = 'Hide balance'
    } else {
        cadAmount.innerText = '****'
        ngnAmount.innerText = '****'
        buttonText.innerText = "Show balance"
    }
    isMasked = !isMasked
})

let sendMoney = document.getElementById('sendMoney');
let sendMoneyButton = document.getElementById('sendMoneyButton');
let closeIcon = document.querySelectorAll('.closeIcon');

let addMoneyButton = document.getElementById('addMoneyButton');
let addMoney = document.getElementById('addMoney');

let threedotButton = document.getElementById('threedotButton');
let threedot = document.getElementById('threedot');

let documentOverlay = document.getElementById('documentOverlay');


let profileIcon = document.getElementById('profileIcon');
let userNavbar = document.getElementById('userNavbar');
let navbarOverlay = document.getElementById('navbarOverlay');

let notificationBell = document.getElementById('notificationBell')
let notificationPopup = document.getElementById('notificationPopup')
let notificationClosePage = document.getElementById('notificationClosePage')


notificationBell.addEventListener('click', (e) => {
    notificationPopup.style.display = 'flex'
    notificationPopup.style.flexDirection = 'column'
    notificationBell.style.display = 'none'

    documentOverlay.style.display = "block"
    document.body.style.overflow = 'hidden'

    e.stopPropagation()
})


profileIcon.addEventListener('click', (e) => {
    userNavbar.style.display = 'flex'
    userNavbar.style.flexDirection = 'column'
    documentOverlay.style.display = "block"
    document.body.style.overflow = 'hidden'
    userNavbar.style.overflow = 'hidden'

    userNavbar.classList.add('show')
    documentOverlay.classList.add('show')
    userNavbar.setAttribute('aria-hidden', 'false')


    e.stopPropagation()
})



sendMoneyButton.addEventListener('click', (e) => {
    sendMoney.style.display = 'flex'
    sendMoney.style.flexDirection = 'column'
    documentOverlay.style.display = "block"
    document.body.style.overflow = 'hidden'
    e.stopPropagation()
})

addMoneyButton.addEventListener('click', (e) => {
    addMoney.style.display = 'flex'
    addMoney.style.flexDirection = 'column'
    documentOverlay.style.display = "block"
    document.body.style.overflow = 'hidden'


    e.stopPropagation()
})

threedotButton.addEventListener('click', (e) => {
    threedot.style.display = 'flex'
    threedot.style.flexDirection = "column"
    documentOverlay.style.display = "block"
    document.body.style.overflow = 'hidden'

})



notificationClosePage.addEventListener('click', (e) => {
    notificationPopup.style.display = 'none'
    notificationBell.style.display = 'block'

    documentOverlay.style.display = "none"
    document.body.style.overflow = ''

    e.stopPropagation()

})

closeIcon.forEach(svg => {

    svg.addEventListener('click', (e) => {
        sendMoney.style.display = 'none'
        addMoney.style.display = 'none'
        threedot.style.display = 'none'

        documentOverlay.style.display = "none"
        document.body.style.overflow = ''


        e.stopPropagation()
    })
}

)


documentOverlay.addEventListener('click', (e) => {
    userNavbar.style.display = 'none'
    sendMoney.style.display = 'none'
    addMoney.style.display = 'none'
    threedot.style.display = 'none'

    document.body.style.overflow = ''

    documentOverlay.style.display = "none"


    userNavbar.classList.remove('show')
    documentOverlay.classList.remove('show')
    userNavbar.setAttribute('aria-hidden', 'true')
})

