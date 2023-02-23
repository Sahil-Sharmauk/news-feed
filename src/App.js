import React, { useEffect, useState, useRef } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Newsfeed from './components/Newsfeed'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Container} from 'react-bootstrap'
import './index.css'
import {fetchArticles,fetchAllSources} from './api/newsarticles.api'

function App() {
  const [allSources, setAllSources] =useState([])
  const [source , setSource] = useState('All')
  const [searchArticle , setSearchArticle] = useState(false)
  const [page, setPage] = useState(1)
  const listInnerRef = useRef();

  useEffect(()=>{
      (async () => {
          // let data={}
          let allsrc = await fetchAllSources()
          setAllSources(allsrc.allSources)
      })();       
  },[])

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      console.log("scrollTop clientHeight",scrollTop,clientHeight,scrollHeight)
      let bottom = scrollTop + clientHeight 
      if (scrollHeight >= Math.round(scrollTop) + clientHeight+1 &&scrollHeight >= Math.round(scrollTop) + clientHeight-1) {
        console.log('Reached bottom',bottom)
        setPage(page+1)
      }
    }
  };
  return (
    <>  
      <Container fluid>
        <Row>
          <Col md={12} className=' nav-bar' >
            <Header
            setSource={setSource}
            setSearchArticle={setSearchArticle}
            />
          </Col>
        </Row>
        <Row style={{overflowY: 'scroll', height:'600px'}} className='list-inner'  onScroll={() => onScroll()} ref={listInnerRef}>
          <Col md={2}>
            <Sidebar
            allSources={allSources} 
            setAllSources={setAllSources}
            setSource={setSource}
            source={source}
            setSearchArticle={setSearchArticle}
            setPage={setPage}
            />
          </Col>
          <Col md={10}>
            <Newsfeed 
            searchArticle={searchArticle}
            source={source}
            page={page}
            setPage={setPage}
            />
          </Col>
        </Row>
      </Container>
    </>

  );
}
export default App;
