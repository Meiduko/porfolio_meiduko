const html = document.querySelector('html')

const systemLang = navigator.language 
const currentLang = document.documentElement.lang
const preferredLang = localStorage.getItem('lang')

export const setInitialLang = () =>{
    localStorage.setItem('lang', currentLang)
    if (currentLang !== systemLang) {
    window.location.replace(`/${systemLang}`)
    html?.setAttribute('lang', currentLang)
  }
}