const html = document.querySelector('html')
const body = document.querySelector('body')
const toggleThemeButton = document.getElementById('ToggleTheme')

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
const preferredTheme = localStorage.getItem('theme')

const setInitialTheme = () =>{
  html?.setAttribute('data-theme', preferredTheme ?? systemTheme)
  localStorage.setItem('theme', preferredTheme ?? systemTheme)
}

const toggleTheme = () => {
  const currentTheme = html?.getAttribute('data-theme')
  let newTheme = currentTheme === 'dark' ? 'light' : 'dark'

  html?.setAttribute('data-theme', newTheme)
  localStorage.theme = newTheme
  body?.classList.add('transition-colors', 'duration-300')
}

const toggleThemeListener = () => {
  toggleThemeButton?.addEventListener('click', toggleTheme)
}

export const setTheme = () => {
  setInitialTheme()
  toggleThemeListener()
}