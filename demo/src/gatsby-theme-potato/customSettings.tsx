import Footer from '../components/Footer'
import { PostFooter } from '../components/PostFooter'
import NewsletterWidget from '../components/widgets/NewsletterWidget'
import ProfileWidget from '../components/widgets/ProfileWidget'

const customSettings = {
  widgets: [ProfileWidget, NewsletterWidget],
  PostFooter,
  Footer,
  menuLinks: [
    { url: '/', label: 'Home' },
    { url: '/categories/great', label: 'Great posts' },
    { url: '/categories/awesome', label: 'Awesome posts' },
    { url: '/about', label: 'About' }
  ]
}

export default customSettings
