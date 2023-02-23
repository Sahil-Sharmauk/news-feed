import React, { useState,useEffect,useRef } from 'react'
import {Container,Row,Col,Card,Button} from 'react-bootstrap';
import {fetchArticles,fetchAllSources} from '../api/newsarticles.api'
let temp =[]
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
    <>  {console.log("articles",articles)}
         <Container >
            
            <Row  >
              
                {articles !== undefined && articles.length >0 ?
                (
                    articles.map((item)=>{
                        return(
                            <>
                            <Col md={4} className='mb-2 '>
                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" width={150} height={100} src={item.urlToImage !== null ? item.urlToImage : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fempty&psig=AOvVaw30OQ4hOLVqMqVTCy_fodQV&ust=1677179592637000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCODkmYDrqf0CFQAAAAAdAAAAABAE'} />
                                    <Card.Body>
                                        <Card.Title className='title'> {item.title}</Card.Title>
                                        <Card.Text className="description">{item.description}</Card.Text>
                                        <Button variant="primary" href={item.url}>Read..</Button>
                                    </Card.Body>
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