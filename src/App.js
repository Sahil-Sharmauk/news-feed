import React, { useEffect, useState, useRef } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Newsfeed from './components/Newsfeed'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Container} from 'react-bootstrap'
import './index.css'
import {fetchArticles,fetchAllSources} from './api/newsarticles.api'

function App() {
  const [articles, setArticles]= useState([])
  const [allSources, setAllSources] =useState([])
  const [source , setSource] = useState('All')
  const [searchArticle , setSearchArticle] = useState(false)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  // const listInnerRef = useRef();
  const myRef = useRef(null);
  useEffect(()=>{
      (async () => {
          let allsrc = await fetchAllSources()
          setAllSources(allsrc.allSources)
      })();       
  },[])

  const handleScroll = () => {
    console.log("JobPost", myRef.current)
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
        </Row>
        <Row style={{ height: '700px', overflowY: 'scroll' }} ref={myRef} onScroll={handleScroll}>
          <Col md={2} >
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
          <Col md={10}>
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
        </Row>
      </Container>
    </>

  );
}
export default App;
