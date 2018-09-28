import React, { Component } from 'react'
import EpubViewer from '../components/epub'

export default class EpubReader extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <EpubViewer document="https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf"/>
      </div>
    )
  }
}