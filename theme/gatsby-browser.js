export const onServiceWorkerUpdateReady = () => window.location.reload(true)

export const onClientEntry = () => {
  window.__theme =
    (window.localStorage && window.localStorage.getItem('theme')) ||
    (window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light')
}
