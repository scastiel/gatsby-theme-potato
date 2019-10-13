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

export interface Themes {
  light: Theme
  dark: Theme
}

export type ThemeName = keyof Themes

export const lightTheme: Theme = {
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

export const darkTheme: Theme = {
  ...lightTheme,
  textColor: 'hsl(0, 0%, 70%)',
  backgroundColor: 'hsl(0, 0%, 15%)',
  titleTextColor: 'hsl(0, 0%, 80%)',
  linkTextColor: 'hsl(0, 0%, 80%)',
  lightTextColor: 'hsl(0, 0%, 60%)',
  pageHeaderColor: 'hsla(0, 75%, 10%, 70%)',
  accentColor: 'hsl(0.5, 75%, 30%)',
  separatorColor: 'hsl(0, 0%, 40%)'
}

const themes: Themes = {
  light: lightTheme,
  dark: darkTheme
}

export default themes
