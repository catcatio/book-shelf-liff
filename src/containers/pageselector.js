import React, { Component } from 'react'
import styled from 'styled-components'

import VideoPlayer from './videoplayer'
import EpubReader from './epubreader'
import PdfReader from './pdfreader'
import BookShelf from './bookshelf'
import MovieShelf from './movieshelf'

const PageNotFound = styled('div') `
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`

export default class PageSelector extends Component {
  constructor(props) {
    super(props)
    const queryString = require('../utils/query-string');
    const parsed = queryString.parse(this.props.location.search);
    console.log(this.props.location.search)
    const page = parsed.page || 'none'

    this.state = {
      'page': page,
    }
  }

  componentDidMount() {
    this.setState({ loading: false })
  }

  render() {
    switch (this.state.page) {
      case 'movie':
        return (<VideoPlayer {...this.props} />)
      case 'movieshelf':
        return (<MovieShelf {...this.props} />)
      case 'bookshelf':
        return (<BookShelf {...this.props} />)
      case 'epub':
        return (<EpubReader {...this.props} />)
      case 'pdf':
        return (<PdfReader {...this.props} />)
      default:
        return (<PageNotFound>¯\_(ツ)_/¯</PageNotFound>)
    }
  }
}