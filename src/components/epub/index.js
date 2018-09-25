
import React, { Component } from 'react'
import { ReactReader } from 'react-reader'
import {
  Container,
  ReaderContainer,
  Bar,
  CloseButton,
  CloseIcon,
  FontSizeButton
} from './Components'

const storage = global.localStorage || null

export default class EpubViewer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      document: this.props.document,
      fullscreen: true,
      location:
        storage && storage.getItem('epub-location')
          ? storage.getItem('epub-location')
          : 2,
      largeText: false,
      epubOptions: {
        manager: "continuous",
        flow: "scrolled",
        themes: { "dark": { "color": "purple" } }
      }
    }
    this.rendition = null
  }

  toggleFullscreen = () => {
    this.setState(
      {
        fullscreen: !this.state.fullscreen
      },
      () => {
        setTimeout(() => {
          const evt = document.createEvent('UIEvents')
          evt.initUIEvent('resize', true, false, global, 0)
        }, 1000)
      }
    )
  }

  onLocationChanged = location => {
    this.setState(
      {
        location
      },
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

  getRendition = rendition => {
    // Set inital font-size, and add a pointer to rendition for later updates
    const { largeText } = this.state
    this.rendition = rendition
    rendition.themes.fontSize(largeText ? '140%' : '100%')
    rendition.themes.register('dark', { body: {background: '#171717', color: '#BEBEBE' }})
    rendition.themes.register('tan', { body: {background: '#FBF4E7', color: '#663D19' }})
    rendition.themes.register('light', { body: {background: '#FCFCFC', color: '#242424' }})
    rendition.themes.select('light')
    // rendition.themes.default({
    //   h2: {
    //     'font-size': '32px',
    //     color: 'purple'
    //   },
    //   p: {
    //     "margin": '10px'
    //   }
    // });
  }

  render() {
    const { fullscreen, location, epubOptions } = this.state
    return (
      <Container>
        <Bar>
          <CloseButton onClick={this.toggleFullscreen}>
            Use full browser window
            <CloseIcon />
          </CloseButton>
        </Bar>
        <ReaderContainer fullscreen={fullscreen}>
          <ReactReader
            url={'https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf'}
            locationChanged={this.onLocationChanged}
            title={'Moby Dick'}
            location={location}
            getRendition={this.getRendition}
            epubOptions={epubOptions}
          />
          <FontSizeButton onClick={this.onToggleFontSize}>
            Toggle font-size
          </FontSizeButton>
        </ReaderContainer>
      </Container>
    )
  }
}
