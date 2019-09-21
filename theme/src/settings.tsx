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

export interface Settings {
  widgets: ComponentType[]
  PostFooter: ComponentType<{
    post: PostQuery_markdownRemark
  }> | null
  Footer: ComponentType | null
  menuLinks: MenuLink[] | null
  twitterCardInfo: TwitterCardInfo | null
}

const defaultSettings: Settings = {
  widgets: [],
  PostFooter: null,
  Footer: null,
  menuLinks: null,
  twitterCardInfo: null
}

export default {
  ...defaultSettings,
  ...customSettings
}
