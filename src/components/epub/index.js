import React, { Component } from 'react'
import EpubView from './EpubView'
import {
  Container,
  FontSizeButton,
  ThemeButton,
  LoadingView
} from './Components'

const storage = global.localStorage || null
const themes = ['light', 'tan', 'gray', 'dark']
export default class EpubViewer extends Component {
  constructor(props) {
    super(props)
    this.readerRef = React.createRef()
    this.state = {
      document: this.props.document,
      location:
        storage && storage.getItem('epub-location')
          ? storage.getItem('epub-location')
          : 2,
      largeText: true,
      epubOptions: {
        manager: "continuous",
        flow: "scrolled",
        // overflow: 'visible',
        fullsize: false,
      },
      currentTheme: 2
    }
    this.rendition = null
  }

  onLocationChanged = location => {
    this.setState({ location },
      () => {
        storage && storage.setItem('epub-location', location)
      }
    )
  }

  onToggleFontSize = () => {
    const nextState = !this.state.largeText
    this.setState(
      {
        largeText: nextState
      },
      () => {
        this.rendition.themes.fontSize(nextState ? '140%' : '100%')
      }
    )
  }

  onToggleTheme = () => {
    let currentTheme = this.state.currentTheme + 1
    if (currentTheme >= themes.length) currentTheme = 0
    this.setState({ currentTheme })
    this.rendition.themes.select(themes[currentTheme])
  }

  getRendition = rendition => {
    // Set inital font-size, and add a pointer to rendition for later updates
    const { largeText, currentTheme } = this.state
    this.rendition = rendition
    rendition.themes.fontSize(largeText ? '140%' : '100%')
    rendition.themes.register('dark', { body: { background: 'rgb(18, 18, 18)', color: 'rgb(176, 176, 176)' } })
    rendition.themes.register('gray', { body: { background: 'rgb(74, 74, 77)', color: 'rgb(215, 215, 215)' } })
    rendition.themes.register('tan', { body: { background: 'rgb(249, 241, 227)', color: 'rgb(77, 47, 26)' } })
    rendition.themes.register('light', { body: { background: 'rgb(251, 251, 251)', color: 'rgb(27, 27, 27)' } })
    rendition.themes.select(themes[currentTheme])
  }

  render() {
    const { location, epubOptions, document } = this.state

    return (
      <Container>
          <EpubView
            ref={this.readerRef}
            url={document}
            location={location}
            loadingView={(<LoadingView>Loading</LoadingView>)}
            tocChanged={this.onTocChange}
            locationChanged={this.onLocationChanged}
            epubOptions={epubOptions}
            getRendition={this.getRendition}
          />
          <FontSizeButton onClick={this.onToggleFontSize}>
            Toggle font-size
          </FontSizeButton>
          <ThemeButton onClick={this.onToggleTheme}>
            {themes[this.state.currentTheme]}
          </ThemeButton>
      </Container>
    )
  }
}
