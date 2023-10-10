/*================== SHOW MENU ==================*/

const navMenu= document.querySelector('#nav-menu')
const navToggle=document.querySelector('#nav-toggle')
const navClose= document.querySelector('#nav-close')

  
if(navToggle){
  navToggle.addEventListener('click', ()=>{
    navMenu.classList.add('show-menu')
    
  })
}

/*================== MENU HIDDEN ==================*/


if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })

}

/*================== REMOVE MENU AFTER CLICK ==================*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = function() {
  const navMenu = document.querySelector('#nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(function(n){
  n.addEventListener('click', linkAction)
})


// =====================================================================
// ================== CHANGE BACKGROUND HEADER ==================
// ====================================================================



const scrollHeader = () => {
  
  const header = document.getElementById('header')

  this.scrollY >= 10 ? header.classList.add('scroll-header') 
                     :header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


// =====================================================================
// ================== CALCULATE BMI ==================
// ====================================================================

const calculateForm=document.getElementById('calculate-form'),
      calculateCm= document.getElementById('calculate-cm'),
      calculateKg= document.getElementById('calculate-kg'),
      calculateMessage= document.getElementById('calculate-message')



const calculateBmi = (e)=> {
  e.preventDefault()

  if(calculateCm.value === "" || calculateKg.value === ""){



    //Add and remove color

    calculateMessage.classList.remove('color-green')
    calculateMessage.classList.add('color-red')

    //Show message

    calculateMessage.textContent='Fill in the Height and Weight'

    //Remove message in 3 second

    setTimeout(() => {
      calculateMessage.textContent= " "
    },3000)

  }else{
    //BMI Formula

    const cm= calculateCm.value/100,
          kg= calculateKg.value,
          bmi=Math.round( kg/ (cm * cm))

    if ( bmi < 18.5){
      calculateMessage.classList.add('color-green')
      calculateMessage.textContent=`Your BMI is ${bmi} and you are skinny`
    }else if (bmi< 25){
      calculateMessage.classList.add('color-green')
      calculateMessage.textContent=`Your BMI is ${bmi} and you are healthy`
    }else{
      calculateMessage.classList.add('color-green')
      calculateMessage.textContent=`Your BMI is ${bmi} and you are overweight`
    }
    
    //To clear the input field

    calculateCm.value= ' '
    calculateKg.value= ' '

    //Remove message in 4 second

    setTimeout(() =>{
      calculateMessage.textContent=''
    }, 4000)
  }
}


calculateForm.addEventListener('click', calculateBmi)


// ===================================================================
// ================== JS EMAIL ==================
// ===================================================================

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user')

const sendEmail = (e) => {
  e.preventDefault()

  // Checking if the field has a value
  if(contactUser.value === ""){

    //Add and Remove clolor

    contactMessage.classList.remove('color-green')
    contactMessage.classList.add('color-red')

    //Show message
    contactMessage.textContent = 'You must enter your email'


    //Remove message three second

    setTimeout(() => {
      contactMessage.textContent=''
    }, 3000)

  }else{

      //serviceID - template ID - #form - publicKey
      emailjs.sendForm("service_bm6fmum", "template_3royz7m", "#contact-form", "qsT_PsGkttIDSYtKo")
      .then(() =>{
        contactMessage.classList.add('color-green')
        contactMessage.textContent="You registered successfully "

        
        //Remove message after 4 sec.
        setTimeout(() =>{ 
          contactMessage.textContent=''
        }, 4000)
      },(error) => {
      //MAil sending error
      alert('OOPS! SOMETHING HAS FAILED...', error)
    })

    // To clear the input field
    contactUser.value='' 
  }
}

contactForm.addEventListener('submit', sendEmail)


// ===================================================================
// ================== SCROLL SECTION ACTIVE LINK ==================
// ===================================================================

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop -58,
    sectionId = current.getAttribute('id'),
    sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }


  })
}

window.addEventListener('scroll', scrollActive)

// ===================================================================
// ================== SCROLL UP ==================
// ===================================================================

const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')

  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                          : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

// ===================================================================
// ================== SCROLL Reveal ANIMATION ==================
// ===================================================================

const sr= ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:300,
})

sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay:700, origin:'bottom'})
sr.reveal(`.logos__img, .program__card`, {interval:100})
sr.reveal(`.choose__img, .calculate__content`, {origin:'left'})
sr.reveal(`.choose__content, .calculate__img`, {origin:'right'})