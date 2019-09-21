import { ComponentType } from 'react'
import customSettings from './customSettings'
import { PostQuery_markdownRemark } from './types/PostQuery'

export interface MenuLink {
  url: string
  label: string
}

export interface TwitterCardInfo {
  user: string
  defaultImage: string
}

export interface Theme {
  textColor: string
  lightTextColor: string
  titleTextColor: string
  linkTextColor: string
  backgroundColor: string
  separatorColor: string
  commentBorderColor: string
  inputBorderColor: string
  accentColor: string
  articleTitleTextColor: string
  pageHeaderColor: string
  lightAccentColor: string
  sansSerifFont: string
  serifFont: string
}

export interface Settings {
  widgets: ComponentType[]
  PostFooter: ComponentType<{
    post: PostQuery_markdownRemark
  }> | null
  Footer: ComponentType | null
  menuLinks: MenuLink[] | null
  twitterCardInfo: TwitterCardInfo | null
  theme: Theme
}

const defaultSettings: Settings = {
  widgets: [],
  PostFooter: null,
  Footer: null,
  menuLinks: null,
  twitterCardInfo: null,
  theme: {
    textColor: 'hsl(0, 0%, 10%)',
    lightTextColor: 'hsl(0, 0%, 40%)',
    titleTextColor: 'hsl(0, 0%, 20%)',
    linkTextColor: 'hsl(0, 0%, 20%)',
    backgroundColor: 'hsl(0, 0%, 100%)',
    separatorColor: 'hsl(0, 0%, 80%)',
    commentBorderColor: 'hsl(0, 0%, 90%)',
    inputBorderColor: 'hsl(0, 0%, 70%)',
    accentColor: 'hsl(0, 75%, 50%)',
    articleTitleTextColor: 'hsl(201, 31%, 30%)',
    pageHeaderColor: 'hsla(0, 75%, 80%, 70%)',
    lightAccentColor: 'hsla(0, 75%, 50%, 15%)',
    sansSerifFont: 'sans-serif',
    serifFont: 'sans-serif'
  }
}

export default {
  ...defaultSettings,
  ...customSettings,
  theme: {
    ...defaultSettings.theme,
    ...customSettings.theme
  }
}
