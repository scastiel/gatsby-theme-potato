import 'raleway-webfont'
import 'typeface-libre-baskerville'
import Footer from '../components/Footer'
import { PostFooter } from '../components/PostFooter'
import BookWidget from '../components/widgets/BookWidget'
import NewsletterWidget from '../components/widgets/NewsletterWidget'
import ProfileWidget from '../components/widgets/ProfileWidget'

const customSettings = {
  widgets: [ProfileWidget, NewsletterWidget, BookWidget],
  PostFooter,
  Footer,
  menuLinks: [
    { url: '/', label: 'Home' },
    { url: '/start-here', label: 'Start here' },
    { url: '/categories/life', label: 'Life' },
    { url: '/categories/dev', label: 'Dev' },
    { url: '/about', label: 'About' }
  ],
  twitterCardInfo: {
    user: '@scastiel',
    defaultImage: '/twitter-card-small.png'
  },
  theme: {
    accentColor: 'hsl(200, 50%, 60%)',
    pageHeaderColor: 'hsla(200, 50%, 30%, 70%)',
    lightAccentColor: 'hsla(200, 50%, 60%, 15%)',
    sansSerifFont: "'Raleway', sans-serif",
    serifFont: "'Libre Baskerville', serif"
  }
}

export default customSettings
