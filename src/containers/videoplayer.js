import React, { Component } from 'react'
import VideoViewer from '../components/video'
import styled from 'styled-components'


const VideoPage = styled.div`
  font-size: 10px;
  font-family: Roboto, Arial, sans-serif;
  background-color: #141414;
  height: 100%
`

const LoadingContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const loading = {
  margin: '0 0 2em',
  height: '100px',
  width: '20%',
  textAlign: 'center',
  padding: '1em',
  margin: '0 auto 1em',
  display: 'inline-block',
  verticalAlign: 'top'
}

const videoInfo = {
  '1': {
    'provider': 'youtube',
    'videoId': 'JcUf9ANCpNY',
    'title': 'Trailer: ฉลากเกมส์โกง',
    'description': 'เรื่องราวของเด็กฉลาด กับภารกิจโกงข้อสอบ เปลี่ยนกระดาษคำตอบให้เป็นเงินล้าน ขอต้อนรับทุกคนเข้าสู่ ธุรกิจกลางสนามสอบ ของ ลิน (ชุติมณฑน์ จึงเจริญสุขยิ่ง) นักเรียนทุนเจ้าของเกรดเฉลี่ย 4.00 ทุกปีการศึกษา ธุรกิจที่มีจุดเริ่มต้นจากการช่วยเพื่อนสนิทอย่าง เกรซ (อิษยา ฮอสุวรรณ) เด็กกิจกรรมตัวยงแต่ผลการเรียนย่ำแย่ และ พัฒน์ (ธีรดนย์ ศุภพันธุ์ภิญโญ) เด็กบ้านรวยที่คิดว่าเงินซื้อได้ทุกอย่าง ด้วยการปันคำตอบกลางห้องสอบ จนกลายเป็นวงการลอกขนาดใหญ่ ที่นักเรียนหลายคนในโรงเรียนยินดีจ่ายค่าตอบแทนแบบสูงลิบ แลกกับการได้รับคำตอบจากอัจฉริยะอย่างลิน'
  },
  '2': {
    'provider': 'youtube',
    'videoId': '_7hMVZ25vQg',
    'title': 'Trailer: น้อง.พี่.ที่รัก',
    'description': 'ตั้งแต่เด็ก ชัช (ซันนี่ สุวรรณเมธานนท์) คิดมาตลอดว่าน้องที่อยู่ในท้องแม่คือน้องชาย พอถึงวันที่แม่คลอดแล้วกลายเป็นน้องสาว ชัชจึงเซ็งระดับสิบ ความฝันที่จะได้เล่นหุ่นยนต์และเตะบอลแมนๆ กับน้องก็จบไป เพราะเล่นกับไอ้เจน (ญาญ่า อุรัสยา เสปอร์บันด์) ทีไร มันก็ร้องไห้งอแงทุกที ตั้งแต่เด็กจนโต ชัชกับเจนตีกันได้ ทุกเรื่อง เพราะเจนชอบทำตัวเหมือนเป็นแม่มากกว่าเป็นน้อง ส่วนชัชก็ชอบทำตัวเป็นภาระมากกว่าเป็นพี่ จะมีพี่ชายคนไหนที่ห่วยกว่าน้องสาวไปซะทุกด้าน ไม่ว่าจะเป็นเรื่องการเรียน กีฬา หน้าตา นิสัย แข่งกัน ยังไง เจนก็เพอร์เฟคกว่า เวลาเดียวที่ชัชจะโชว์เหนือทำตัวเป็นพี่ ก็คือตอนที่มีคนมาจีบเจน ชัชจะทำตัวกร่างไล่หนุ่มๆให้หนีหายไปหมด เหมือนเป็นการเอาคืน'
  },
  '3': {
    'provider': 'youtube',
    'videoId': 'ZMJJobqe5CU',
    'title': 'Trailer: 2,215 เชื่อ บ้า กล้า ก้าว',
    'description': 'จากปรากฏการณ์การวิ่งครั้งประวัติศาสตร์ระยะทางกว่าสองพันกิโลเมตร มีคนอาสามาร่วมขบวนวิ่งนับหมื่น มีคนยืนชะเง้อรอเซลฟี่อีกนับแสน มีผู้ชมทางบ้านนั่งจ้องหน้าจอไลฟ์อีกนับล้าน จนมีเงินระดมบริจาคเข้ามาให้โรงพยาบาลเกินหนึ่งพันสี่ร้อยล้าน! ทั้งหมดนี้.. เริ่มต้นเพราะคนหนึ่งคน อยู่บนเวที เขาคือศิลปินที่สะกดผู้ชมด้วยเพลงร็อคอันเร่าร้อนทรงพลัง อยู่บนถนน เขาคือนักวิ่งที่ทำสถิติวิ่งข้ามประเทศคนแรกของไทย แต่อยู่บนรถบ้าน เขาคือไอ้หนุ่มร่างผอม ติดกาแฟ ดื้อกับหมอ แถมยังตลกฝืด! ตลอด 55 วันของ "ก้าวคนละก้าว" ทุกเหตุการณ์ ทุกแง่มุม ทุกดราม่า น่าจะถูกเล่าออกสื่อไปหมดแล้ว.. ยกเว้นเรื่องราวจากกล้องตัวนี้ นี่คือภาพยนตร์สารคดีคลุกวงใน ที่จะพาคุณฝ่าฝูงชนไปค้นลึกถึงเบื้องหลังแรงขับของนักร้องน่องเหล็ก พี่ตูน-บอดี้สแลม ผู้แบกฝันฝ่าแดดลุยฝนไล่ตามความเชื่อไปจนถึงแสงสุดท้าย โดยทีมงานสารคดีทีมเดียวที่ตามติดถ่ายทำเข้านอกออกในแบบไม่เคาะประตู (ยกเว้นตอนเข้าห้องน้ำ) บนเส้นทางจากเบตงถึงแม่สาย มาค้นพบแรงบันดาลใจไปพร้อมกัน ทีละก้าว'
  }
}

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      'loading': true,
      'provider': 'youtube',
      'videoId': 'y8kwJesil18',
      'title': '',
      'description': ''
    }
  }

  componentDidMount() {
    const queryString = require('query-string');
    const parsed = queryString.parse(this.props.location.search);
    const videoId = parsed.videoId || 1

    const video = videoInfo[videoId]
    this.setState(video)
    this.setState({loading: false})
  }

  renderLoadingView() {
    return (
      <LoadingContainer>
        <div style={loading}>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="24px" height="30px" viewBox="0 0 24 30" style={{ 'enableBackground': 'new 0 0 50 50'}}>
            <rect x="0" y="10" width="4" height="10" fill="#1aafff" opacity="0.2">
              <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" />
              <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
              <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <rect x="8" y="10" width="4" height="10" fill="#1aafff" opacity="0.2">
              <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
              <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
              <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <rect x="16" y="10" width="4" height="10" fill="#1aafff" opacity="0.2">
              <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
              <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
              <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
            </rect>
          </svg>
        </div>
      </LoadingContainer>
    )
  }

  renderVideoView() {
    return (
      <VideoPage>
        <VideoViewer
          provider={this.state.provider}
          videoId={this.state.videoId}
          title={this.state.title}
          description={this.state.description}
          autoplay={true}
        />
      </VideoPage>
    )
  }

  render() {
    return this.state.loading ?
      this.renderLoadingView() :
      this.renderVideoView()
  }
}