import React, { useState,useEffect,useRef } from 'react'
import {Container,Row,Col,Card,Button} from 'react-bootstrap';
import {fetchArticles,fetchAllSources} from '../api/newsarticles.api';
import noimg from '../images/noimg.png'
let temp=[]
function Newsfeed({source,searchArticle,page,articles, setPage,setArticles,setSearch}) {
    useEffect(()=>{
        (async () => {
            let data={"source":source,'search':searchArticle,'page':page}
            let allNewsArticles = await fetchArticles(data)
            if(allNewsArticles.allArticles.length === 0){
                setPage(1)
                setSearch('')
            }else{
                temp = [...articles,...allNewsArticles.allArticles]
                setArticles(temp)
            }
        })(); 
    },[source,page])
   
  return (
    <>  
         <Container className='news-feeds-inner-container'>   
            <Row  className="news-feeds">
                {articles !== undefined && articles.length >0 ?
                (
                    articles.map((item)=>{
                        return(
                            <>
                            <Col md={4} className='mb-2 card-conatiner'>
                                <Card className='card-inner-conatiner' >
                                    <Card.Img className='card-img'variant="top" width={150} height={150} src={item.urlToImage !== null ? item.urlToImage : noimg} />
                                    <Card.Body className='card-body'>
                                        <Card.Title className='title'> {item.title}</Card.Title>
                                        <Card.Text className="description">{item.description}</Card.Text>
                                    </Card.Body>
                                    <Button className='card-btn' style={{backgroundColor:'black'}} href={item.url}>Read..</Button>
                                </Card>
                            </Col>
                            </>
                        )                
                    })
                ) :
                <Col md={12} style={{textAlign:'center',margin:'auto'}}>
                    <span>Not Found</span>
                </Col>  
                }
                    
                
               
            </Row>
        </Container>
    </>

  );
}
export default Newsfeed;