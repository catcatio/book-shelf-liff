import React, { Component } from 'react'
// import Plyr from 'react-plyr';
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import MoreVert from '@material-ui/icons/MoreVert'
import ExpandLess from '@material-ui/icons/ExpandLess'
import Youtube from './youtube'

import 'plyr/dist/plyr.css'
import logoImg from './logo.svg'


const Header = styled.div`
  text-align: left;
  height: 48px;
  align-items: center;
  display: flex;
`

const LogoImg = styled.img`
  width: 30px;
  padding-left: 8px;
`

const BrandText = styled.h1`
  font-size: 1.2rem;
  margin-left: 12px;
  font-weight: normal;
`

const InfoContainer = styled.div`
  text-align: left;
  margin-left: 10px;
  margin-right: 10px;
`

const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: normal;
  font-size: 1.8em;
`

const Description = styled.div`
  font-size: 1.3em;
  color: hsla(0,0%,93.3%,.6);
  line-height: 1.5em;
`

export default class VideoViewer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      'provider': this.props.provider,
      'videoId': this.props.videoId,
      'title': this.props.title,
      'description': this.props.description,
      'autoplay': this.props.autoplay
    }
  }

  render() {
    return (
      <div>
        <Header>
          <LogoImg src={logoImg}></LogoImg>
          <BrandText>GDH</BrandText>
          <IconButton style={{ color: 'white', position: 'absolute', right: '0px' }}>
            <MoreVert />
          </IconButton>
        </Header>
        <Youtube videoId={this.state.videoId} autoplay={this.state.autoplay}/>
        <InfoContainer>
          <IconButton style={{ color: 'white', float: 'right', padding: '0px' }}>
            <ExpandLess />
          </IconButton>
          <Title>{this.state.title}</Title>
          <Description>{this.state.description}</Description>
        </InfoContainer>
      </div>
    )
  }
}
/*
        <Plyr
          type={this.state.provider}
          videoId={this.state.videoId}
          playsinline={true}
          onReady={(player) => this.state.autoplay && player.play()}
          onPlay={() => console.log('Played!')}
        />

        <Plyr
          ref={node => this.player = node}
          type={this.state.provider}
          videoId={this.state.videoId}
          autoplay={this.state.autoplay}
          onReady= {player => {
            try {
              this.state.autoplay && player.play()
            } catch (err) {
              console.log(err.message)
              alert(err.message)
            }
          }}
          onPlay={() => console.log('Played!')}
        />
*/

// fullscreen: {
//   enabled: true, // Allow fullscreen?
//   fallback: true, // Fallback for vintage browsers
//   iosNative: false, // Use the native fullscreen in iOS (disables custom controls)
// }