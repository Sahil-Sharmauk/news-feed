import React, { useEffect, useState, useRef } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Newsfeed from './components/Newsfeed'
import Slidebar from './components/Slidebar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Container} from 'react-bootstrap'
import './index.css'
import {fetchTopHeadLines,fetchAllSources} from './api/newsarticles.api'

function App() {
  const [articles, setArticles]= useState([])
  const [allSources, setAllSources] =useState([])
  const [source , setSource] = useState('All')
  const [searchArticle , setSearchArticle] = useState(false)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [headlines, setHeadLines] = useState([])
  // const listInnerRef = useRef();
  const myRef = useRef(null);
  useEffect(()=>{
      (async () => {
          let allsrc = await fetchAllSources()
          setAllSources(allsrc.allSources)
          let topHeadLines = await fetchTopHeadLines()
          console.log('topHeadLines.allheadlines.articles',topHeadLines.allheadlines[0].articles)
          setHeadLines(topHeadLines.allheadlines[0].articles)
      })();       
  },[])

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = myRef.current;
    const scrollPos = myRef.current.scrollTop;
    if (scrollTop > (450)) {
      setPage(page+1)
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
            setArticles={setArticles}
            search={search} 
            setSearch={setSearch}
            />
          </Col>
        
          <Col md={2} className='sidebar-container' style={{  overflowY: 'scroll' }}>
            <Sidebar
            allSources={allSources} 
            setAllSources={setAllSources}
            setSource={setSource}
            source={source}
            setSearchArticle={setSearchArticle}
            setPage={setPage}
            setArticles={setArticles}
            setSearch={setSearch}
            />
          </Col>

          <Col md={10} style={{padding:'0px'}}>
            <Col md={12}>
              <Slidebar
              headlines={headlines}
              />
            </Col>
            <Col md={12} className='news-feed-container' style={{ height: '700px', overflowY: 'scroll', overflowX: 'none' }} ref={myRef} onScroll={handleScroll}>
              <Newsfeed 
              searchArticle={searchArticle}
              source={source}
              page={page}
              setPage={setPage}
              articles={articles}
              setArticles={setArticles}
              search={search} 
              setSearch={setSearch}
              />
            </Col>  
          </Col>
        </Row>
      </Container>
    </>

  );
}
export default App;
