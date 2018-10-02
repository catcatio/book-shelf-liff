import React, { Component } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import Search from '@material-ui/icons/Search'
import Select from '@material-ui/core/Select'
import FilterList from '@material-ui/icons/FilterList'

const Content = styled.div`
  padding: 0px;
  background: rgb(255, 255, 255);
  color: rgb(119, 119, 119);
  text-align: center;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
`

const Shelf = styled.ul`
  margin: 0 0 12px;
  padding-top: 30px;
  padding-left: 0px;
  text-align: center;
`

const BookItem = styled.li`
  margin-bottom: 10px;
  margin-left: 10px;
  width: 100px;
  height: 120px;
  text-align: center;
  display: inline-block;
  padding: 5px;
`

const BookIcon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background: url(${props => props.url}) 0% 0% / 100px no-repeat;
  margin-top: 10px;
`

const BookTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 10px;
`

const SearchBoxWrapper = styled.div`
  padding: 20px 20px 0px 20px;
`

const books = [
  {
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/71CVpV1Vh6L.jpg',
    title: 'Sleepy, the Goodnight Buddy'
  },
  {
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/51Cw94GVw8L.jpg',
    title: 'I Spy - Animals!'
  },
  {
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/51gEY86ijML.jpg',
    title: 'The Wonderful Things You Will Be'
  },
  {
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/51Uw%2BnqX0qL.jpg',
    title: 'The Most Magnificent Thing'
  },
  {
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/51inFTeRHCL.jpg',
    title: 'The Gruffalo'
  },
  {
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/51HwCL2oGAL.jpg',
    title: 'Play Smart Brain Boosters 4+'
  },
  {
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/61QUOPxsOUL.jpg',
    title: 'Rosie Revere, Engineer'
  },
  {
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/51LGXTQYfEL.jpg',
    title: 'Violet the Pilot'
  },
  {
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/516L4IaqgjL.jpg',
    title: 'Catching the Moon: The Story of a Young Girl\'s Baseball Dream'
  },
  {
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/61dCXs8i4nL.jpg',
    title: 'That\'s What Leprechauns Do'
  },
  {
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/71CVpV1Vh6L.jpg',
    title: 'Sleepy, the Goodnight Buddy'
  },
  {
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/51Cw94GVw8L.jpg',
    title: 'I Spy - Animals!'
  },
  {
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/51gEY86ijML.jpg',
    title: 'The Wonderful Things You Will Be'
  },
  {
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/51Uw%2BnqX0qL.jpg',
    title: 'The Most Magnificent Thing'
  },
  {
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/51inFTeRHCL.jpg',
    title: 'The Gruffalo'
  },
  {
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/51HwCL2oGAL.jpg',
    title: 'Play Smart Brain Boosters 4+'
  },
  {
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/61QUOPxsOUL.jpg',
    title: 'Rosie Revere, Engineer'
  },
  {
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/51LGXTQYfEL.jpg',
    title: 'Violet the Pilot'
  },
  {
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/516L4IaqgjL.jpg',
    title: 'Catching the Moon: The Story of a Young Girl\'s Baseball Dream'
  },
  {
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/61dCXs8i4nL..jpg',
    title: 'That\'s What Leprechauns Do'
  }
]

export default class BookShelf extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Content>
        <SearchBoxWrapper>
          <TextField
            style={{ width: '100%' }}
            label="Find your books"
            InputProps={{
              endAdornment: (
                <InputAdornment variant="filled" position="end">
                  <IconButton aria-label="Find your books">
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}></TextField>
          <div style={{textAlign: 'left', paddingTop: '10px'}}>
            <span>
              Sort by <Select
                native
                value={10}
              >
                <option value={10}>Name</option>
                <option value={20}>Purchased</option>
                <option value={30}>Latest</option>
              </Select>
            </span>
            <Button variant="contained" color="default" style={{ float: 'right' }}>
              Filter
          <FilterList style={{ marginLeft: '20px' }} />
            </Button>
          </div>
        </SearchBoxWrapper>
        <Shelf>
          {
            books.map((b, i) => (
              <BookItem key={i}>
                <BookIcon url={b.coverUrl}></BookIcon>
                <BookTitle title={b.title}>{b.title}</BookTitle>
              </BookItem>
            ))
          }
        </Shelf>
        <Chip label="More" />
      </Content>
    )
  }
}