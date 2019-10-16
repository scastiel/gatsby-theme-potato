export const onServiceWorkerUpdateReady = () => window.location.reload(true)

export const onClientEntry = () => {
  const updateBodyClass = () => {
    document.body.classList.remove('light', 'dark')
    const theme = window.__theme
    if (theme) {
      document.body.classList.add(theme)
    }
  }

  Object.defineProperty(window, '__theme', {
    get() {
      return (
        (window.localStorage && window.localStorage.getItem('theme')) || null
      )
    },
    set(theme) {
      if (localStorage) {
        if (theme !== null) {
          localStorage.setItem('theme', theme)
        } else {
          localStorage.removeItem('theme')
        }
      }
      updateBodyClass()
    }
  })

  updateBodyClass()
}
