const html = document.querySelector('html')
const langSelector = document.getElementById('selectLang') as HTMLSelectElement

const systemLang = navigator.language 
const currentLang = document.documentElement.lang
const storedLang = localStorage.getItem('lang')
const langTo = storedLang ?? systemLang

const setInitialLang = () =>{
  langSelector.value = langTo
  if(currentLang !== langTo) {
    localStorage.setItem('lang', langTo)
    window.location.replace(`/${langTo}`)
    html?.setAttribute('lang', langTo)
  }
}

const selectLang= () =>{
  const newLang = langSelector.value
  if (newLang !== currentLang){
    localStorage.lang = newLang
    window.location.reload()
  }
}

const selectLangListener = () => {
  langSelector.addEventListener('change', selectLang)
}

export const setLang = () =>{
  setInitialLang()
  selectLangListener()
}