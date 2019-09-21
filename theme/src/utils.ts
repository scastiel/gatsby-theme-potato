export const renderDate = (date: Date) =>
  new Date(date).toLocaleDateString('en-US', {
    formatMatcher: 'basic',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
