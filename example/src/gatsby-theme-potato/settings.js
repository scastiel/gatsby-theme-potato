import ProfileWidget from "../components/widgets/ProfileWidget"
import BookWidget from "../components/widgets/BookWidget"
import NewsletterWidget from "../components/widgets/NewsletterWidget"
import PostFooter from "../components/PostFooter"
import Footer from "../components/Footer"

export const widgets = [ProfileWidget, NewsletterWidget, BookWidget]

export { PostFooter, Footer }

export const menuLinks = [
  { url: "/", label: "Home" },
  { url: "/start-here", label: "Start here" },
  { url: "/categories/life", label: "Life" },
  { url: "/categories/dev", label: "Dev" },
  { url: "/about", label: "About" },
]

export const twitterCardInfo = {
  user: "@scastiel",
  defaultImage: "/twitter-card-small.png",
}
