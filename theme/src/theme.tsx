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

  darkTextColor: string
  darkBackgroundColor: string
  darkTitleTextColor: string
  darkLinkTextColor: string
  darkLightTextColor: string
  darkPageHeaderColor: string
  darkAccentColor: string
  darkSeparatorColor: string
}

const siteTheme: Theme = {
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
  serifFont: 'sans-serif',

  darkTextColor: 'hsl(0, 0%, 70%)',
  darkBackgroundColor: 'hsl(0, 0%, 15%)',
  darkTitleTextColor: 'hsl(0, 0%, 80%)',
  darkLinkTextColor: 'hsl(0, 0%, 80%)',
  darkLightTextColor: 'hsl(0, 0%, 60%)',
  darkPageHeaderColor: 'hsla(0, 75%, 10%, 70%)',
  darkAccentColor: 'hsl(0.5, 75%, 30%)',
  darkSeparatorColor: 'hsl(0, 0%, 40%)'
}

export default siteTheme

// --textColor: hsl(0, 0%, 70%);
// --lightTextColor: hsl(0, 0%, 60%);
// --titleTextColor: hsl(0, 0%, 80%);
// --linkTextColor: hsl(0, 0%, 80%);
// --backgroundColor: hsl(0, 0%, 15%);
// --separatorColor: hsl(0, 0%, 40%);
// --commentBorderColor: hsl(0, 0%, 30%);
// --inputBorderColor: hsl(0, 0%, 30%);
// --articleTitleTextColor: hsl(201, 31%, 80%);
