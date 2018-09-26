import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { PDFJS as PDFJSViewer } from 'pdfjs-dist/web/pdf_viewer'
import './Viewer.css'
import 'pdfjs-dist/web/pdf_viewer.css'

const pdfHistoryKey = 'pdfreader.history'

class Viewer extends Component {
  constructor(props) {
    super(props)
    this.initEventBus()
    this.state = {
      doc: null,
      scale: undefined,
    }
  }

  initEventBus() {
    let eventBus = new PDFJSViewer.EventBus()

    eventBus.on('pagesinit', (/* e */) => {
      this.setState({
        scale: this._pdfViewer.currentScale
      })
      if (this.props.onInit) {
        this.props.onInit({})
      }
      if (this.props.onScaleChanged) {
        this.props.onScaleChanged({scale: this.state.scale})
      }
    })

    eventBus.on('scalechange', (e) => {
      if (this.props.onScaleChanged) {
        this.props.onScaleChanged({scale: e.scale})
      }
    })

    eventBus.on('pagerendered', (e) => {
      console.log(e)
    })

    eventBus.on('updateviewarea', (e) => {
      const dbString = localStorage.getItem(pdfHistoryKey) || '{}'
      console.log(dbString)
      const db = JSON.parse(dbString)

      const fingerprint = e.source.pdfDocument.fingerprint
      db[fingerprint] = e.location
      db[fingerprint]['_time'] = Date.now()
      console.log(e.location)
      localStorage.setItem(pdfHistoryKey, JSON.stringify(db))
    })

    eventBus.on('pagechanging', (e) => {
      console.log(e)
    })

    this._eventBus = eventBus
  }

  componentDidMount() {
    let viewerContainer = ReactDOM.findDOMNode(this) // eslint-disable-line
    this._pdfViewer = new PDFJSViewer.PDFViewer({
      container: viewerContainer,
      eventBus: this._eventBus,
    })
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.doc !== nextState.doc) {
      this._pdfViewer.setDocument(nextState.doc)
    }
    if (this.state.scale !== nextState.scale) {
      this._pdfViewer.currentScale = nextState.scale
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.doc !== nextState.doc ||
        this.state.scale !== nextState.scale) {
      return true
    }
    return false
  }

  render() {
    return (<div className="Viewer">
      <div className="pdfViewer"></div>
    </div>)
  }
}

Viewer.propTypes = {
  onInit: PropTypes.func,
  onScaleChanged: PropTypes.func,
}

export default Viewer