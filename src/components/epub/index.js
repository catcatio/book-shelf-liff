
import React, { Component } from 'react'
import { ReactReader } from 'react-reader'
import {
  Container,
  ReaderContainer,
  Bar,
  CloseButton,
  CloseIcon,
  FontSizeButton,
  ThemeButton
} from './Components'

const storage = global.localStorage || null
const themes = ['light', 'tan', 'dark']
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
      },
      currentTheme: 0
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
    rendition.themes.register('dark', { body: { background: '#171717', color: '#BEBEBE' } })
    rendition.themes.register('tan', { body: { background: '#FBF4E7', color: '#663D19' } })
    rendition.themes.register('light', { body: { background: '#FCFCFC', color: '#242424' } })
    rendition.themes.select(themes[currentTheme])

    rendition.hooks.content.register(function (contents) {
      console.log(contents)
      var script = contents.document.createElement('script');
      script.text = "!function(a,b,c){function f(a){d=a.touches[0].clientX,e=a.touches[0].clientY}function g(f){if(d&&e){var g=f.touches[0].clientX,h=f.touches[0].clientY,i=d-g,j=e-h;Math.abs(i)>Math.abs(j)&&(i>a?b():i<0-a&&c()),d=null,e=null}}var d=null,e=null;document.addEventListener('touchstart',f,!1),document.addEventListener('touchmove',g,!1)}";
      // script.text += "(10,function(){parent.ePubViewer.Book.nextPage()},function(){parent.ePubViewer.Book.prevPage()});"
      script.text += "(10,function(){console.log('Next Page')},function(){console.log('Prev Page')});"
      contents.document.head.appendChild(script);
    });
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
          <ThemeButton onClick={this.onToggleTheme}>
            {themes[this.state.currentTheme]}
          </ThemeButton>
        </ReaderContainer>
      </Container>
    )
  }
}
