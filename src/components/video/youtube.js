import React, { Component } from 'react'
import 'video.js/dist/video-js.min.css'
import videojs from 'video.js'
import 'videojs-youtube'


export default class YoutubePlayer extends Component {
  constructor(props) {
    // this.viewer = React.createRef()
    super(props)

    this.state = {
      videoId: this.props.videoId,
      autoplay: this.props.autoplay
    }
  }

  componentDidMount() {

    const player = videojs(this.viewer)
    player.ready(() => {
      this.state.autoplay && player.play()
    })
  }

  render() {
    const playerOption = {
      'techOrder': [
        'youtube'
      ],
      'sources': [
        {
          'type': 'video/youtube',
          'src': `https://www.youtube.com/watch?v=${this.state.videoId}`
        }
      ],
      'youtube': {
        // 'ytControls': 2,
        //'iv_load_policy': 3,
        // 'playsinline': 0,
        enablejsapi: 1,
        origin: 'https://liff.catcat.io'
      }
    }
    return (
      <video
        ref={node => this.viewer = node}
        id="vid1"
        className="video-js vjs-default-skin"
        controls
        width="100%"
        style={{ width: '100%', paddingBottom: '56.25%' }}
        data-setup={JSON.stringify(playerOption)}
      >
      </video>
    )
  }
}

