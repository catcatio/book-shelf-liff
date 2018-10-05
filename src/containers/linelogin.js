import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Logo = styled.img`
  width: 200px;
  padding-bottom: 100px
`

const Welcome = styled.div`
  padding-bottom: 30px;
`

const OpenIdNotification = styled.div`
  text-align: center;
  padding-top: 70px;
  padding-left: 15%;
  padding-right: 15%;
  color: gray;
`

const LoginButton = styled(Button)`
  background: url(${process.env.PUBLIC_URL}/assets/images/btn_login_base.png);
  background-repeat: no-repeat;
  background-size: 151px 44px;
  width: 151px;
  height: 44px;

  &:hover {
    background: url(${process.env.PUBLIC_URL}/assets/images/btn_login_hover.png);
  }

  &:active {
    background: url(${process.env.PUBLIC_URL}/assets/images/btn_login_press.png);
  }
`

export default class LineLogin extends Component {
  render() {
    const loginUrl = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${process.env.REACT_APP_LINE_LOGIN_CHANNEL_ID}&redirect_uri=${encodeURIComponent(`${process.env.REACT_APP_LINE_LOGIN_URL}`)}&state=12345abcde&scope=profile%20openid%20email&bot_prompt=normal&nonce=${Date.now()}`
    return (
      <Container>
        <div>
          <Logo src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}></Logo>
          <Welcome>
          </Welcome>
          <LoginButton href={loginUrl}/>
          <OpenIdNotification>
            By logging in with LINE, you will be asked provide us your Email.
            We will use it to send verification and notification of your purchase.
            <br></br>
            <br></br>
            <a style={{ color: 'gray', fontSize: '0.8em' }}>Read more about our email policy</a>
          </OpenIdNotification>
        </div>
      </Container>
    )
  }
}

