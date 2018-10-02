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
  background: #eeeeee;
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

const MovieItem = styled.li`
  margin-bottom: 10px;
  margin-left: 10px;
  width: 160px;
  height: 280px;
  text-align: center;
  display: inline-block;
  padding: 5px;
  background: #FFF;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  max-height: 280px;
  overflow: hidden;
`

const MovieIcon = styled.div`
  width: 160px;
  height: 230px;
  border-radius: 2px;
  background: url(${props => props.url}) 0% 0% / 160px  no-repeat;
  margin-top: 10px;
`

const MovieTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 10px;
  color: #444;
  font-size: 0.9em;
`

const SearchBoxWrapper = styled.div`
  padding: 20px 20px 0px 20px;
`

const VideoLink = styled.a `
`

const movies = [
  {
    coverUrl: 'https://f.ptcdn.info/454/050/000/ooaufthqwdDWKzbKkUq-o.jpg',
    title: 'ฉลาดเกมส์โกง',
    videoId: '1'
  },
  {
    coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6RyDbm-3pT35FuIf62CSoEqQYE8V4UMHkgt69ysYhGbtm88WRg',
    title: 'น้อง.พี่.ที่รัก',
    videoId: '2'
  },
  {
    coverUrl: 'https://s.isanook.com/mv/0/ui/16/80089/38860522_1937711392985362_933828711667466240_n_1533893805.jpg',
    title: '2,215 เชื่อ บ้า กล้า ก้าว',
    videoId: '3'
  },
  {
    coverUrl: 'https://f.ptcdn.info/673/045/000/ocw0svy4nWye2E7CYTy-o.jpg',
    title: 'แฟนเดย์..แฟนกันแค่วันเดียว',
    videoId: '4'
  },
  {
    coverUrl: 'https://occ-0-999-1001.1.nflxso.net/art/c84c9/1b7a95ffd32622f087ad057e1116ec8db99c84c9.jpg',
    title: 'เพื่อน..ที่ระลึก',
    videoId: '5'
  },
  {
    coverUrl: 'https://danieldokter.com/wp-content/uploads/2017/01/a-gift-2.jpg',
    title: 'พรจากฟ้า',
    videoId: '6'
  }
]

export default class MovieShelf extends Component {
  render() {
    return (
      <Content>
        <SearchBoxWrapper>
          <TextField
            style={{ width: '100%' }}
            label="Find your movies"
            InputProps={{
              endAdornment: (
                <InputAdornment variant="filled" position="end">
                  <IconButton aria-label="Find your movies">
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}></TextField>
          <div style={{ textAlign: 'left', paddingTop: '10px' }}>
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
            movies.map((m, i) => (
              <VideoLink href={`./?page=movie&videoId=${m.videoId}`}>
                <MovieItem key={i}>
                  <MovieIcon url={m.coverUrl}></MovieIcon>
                  <MovieTitle title={m.title}>{m.title}</MovieTitle>
                </MovieItem>
              </VideoLink>
            ))
          }
        </Shelf>
        <Chip label="More" />
      </Content>
    )
  }
}