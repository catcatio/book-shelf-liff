import React, { Component } from 'react'
import styled from 'styled-components'

const styles = {
  shelf: {
    margin: '0 0 12px',
    padding: '30px 0',
    textAlign: 'center',
    textAlign: 'left',
    paddingLeft: '30px'
  },
  content: {
    padding: '0px 0',
    background: '#fff',
    color: '#777'
  },
  li: {
    marginBottom: '10px',
    width: '120px',
    height: '120px',
    textAlign: 'center',
    display: 'inline-block',
    padding: '5px'
  },
  bookitem: {
    width: '100px',
    height: '100px',
    borderRadius: '20px',
    background: 'url("https://images-na.ssl-images-amazon.com/images/I/71CVpV1Vh6L.jpg") 0% 0% / 100px no-repeat',
    marginTop: '10px',
    marginLeft: '10px'
  },
  booktitle: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingTop: '10px'
  }
}

export default class BookShelf extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div style={styles.content}>
        <input ></input>
        <ul style={styles.shelf}>
          <li style={styles.li}>
            <div style={styles.bookitem} />
            <div style={styles.booktitle} title="Sleepy, the Goodnight Buddy">Sleepy, the Goodnight Buddy</div>
          </li>
          <li style={styles.li}>
            <div style={styles.bookitem} />
            <div style={styles.booktitle} >Sleepy, the Goodnight Buddy</div>
          </li>
          <li style={styles.li}>
            <div style={styles.bookitem} />
            <div style={styles.booktitle} >Sleepy, the Goodnight Buddy</div>
          </li>
          <li style={styles.li}>
            <div style={styles.bookitem} />
            <div style={styles.booktitle} >Sleepy, the Goodnight Buddy</div>
          </li>
          <li style={styles.li}>
            <div style={styles.bookitem} />
            <div style={styles.booktitle} >Sleepy, the Goodnight Buddy</div>
          </li>
          <li style={styles.li}>
            <div style={styles.bookitem} />
            <div style={styles.booktitle} >Sleepy, the Goodnight Buddy</div>
          </li>
          <li style={styles.li}>
            <div style={styles.bookitem} />
            <div style={styles.booktitle} >Sleepy, the Goodnight Buddy</div>
          </li>
          <li style={styles.li}>
            <div style={styles.bookitem} />
            <div style={styles.booktitle} >Sleepy, the Goodnight Buddy</div>
          </li>
          <li style={styles.li}>
            <div style={styles.bookitem} />
            <div style={styles.booktitle} >Sleepy, the Goodnight Buddy</div>
          </li>
          <li style={styles.li}>
            <div style={styles.bookitem} />
            <div style={styles.booktitle} >Sleepy, the Goodnight Buddy</div>
          </li>
          <li style={styles.li}>
            <div style={styles.bookitem} />
            <div style={styles.booktitle} >Sleepy, the Goodnight Buddy</div>
          </li>
        </ul>
      </div>
    );
  }
}