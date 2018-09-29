import React, { Component } from 'react'

const withTheme = Comp => props => {
  class ThemeUser extends Component {
    constructor(props) {
      super(props)
      this.state = { theme: null }
    }
    componentDidMount() {
      const theme = localStorage && localStorage.getItem('theme')
      if (theme) {
        this.setState({ theme })
      }
    }
    setTheme = theme => {
      this.setState({ theme })
      if (localStorage) {
        localStorage.setItem('theme', theme)
      }
    }
    render() {
      return (
        <Comp theme={this.state.theme} setTheme={this.setTheme} {...props} />
      )
    }
  }
  return <ThemeUser {...props} />
}

export default withTheme
