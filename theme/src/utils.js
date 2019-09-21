export const renderDate = date =>
  new Date(date).toLocaleDateString('en-US', {
    formatMatcher: 'basic',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
