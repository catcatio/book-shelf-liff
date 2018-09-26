import React, { Component } from 'react'
import Toolbar from '../components/pdf/Toolbar'
import Viewer from '../components/pdf/Viewer'
import pdfjsLib from 'pdfjs-dist/webpack'

export default class PdfReader extends Component {
  componentDidMount() {
    const documentUrl =`${process.env.PUBLIC_URL}/assets/pdf/LiberaMe_01_demo.pdf`
    let loadingTask = pdfjsLib.getDocument(documentUrl)
    loadingTask.promise.then((doc) => {
      console.log(`Document ${documentUrl} loaded ${doc.numPages} page(s)`)
      this.viewer.setState({
        doc,
      })
    }, (reason) => {
      console.error(`Error during ${documentUrl} loading: ${reason}`)
    })
  }

  zoomIn(/* e */) {
    this.viewer.setState({
      scale: this.viewer.state.scale * 1.1
    })
  }

  zoomOut(/* e */) {
    this.viewer.setState({
      scale: this.viewer.state.scale / 1.1
    })
  }

  displayScaleChanged(e) {
    this.toolbar.setState({
      scale: e.scale
    })
  }

  render() {
    return (
      <div className="App">
        <Toolbar
          ref={(ref) => this.toolbar = ref}
          onZoomIn={(e) => this.zoomIn(e)}
          onZoomOut={(e) => this.zoomOut(e)}></Toolbar>
        <div className="App-body">
          <Viewer
            ref={(ref) => this.viewer = ref}
            onScaleChanged={(e) => this.displayScaleChanged(e)}></Viewer>
        </div>
      </div>
    )
  }
}