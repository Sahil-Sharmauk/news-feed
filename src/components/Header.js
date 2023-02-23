import React, { useState } from 'react'
import {Container,Row,Col,InputGroup,Form,Button} from 'react-bootstrap';
import '../index.css'
function Header({setSource,setSearchArticle,setArticles,setSearch,search}) {

    const handleChangeSearch = (e)=>{
        if(e.target.value.length > 0){
            setSearch(e.target.value)
        }
    }
    const handleSearch = () =>{
        if(search !== ''){
            setArticles([])
            setSearchArticle(true)
            setSource(search)
        }else{
            setSource('')
            setArticles([])
        }
    }
    return (
        <>  
        <Container className='mt-2 '>
        <Row className='mt-2'>
            <Col md={2} sm={2} xs={2} className='mt-2 '>
                <span className='logo-name'>News Feeds</span>
            </Col>
            <Col md={8} sm={8} xs={8}>
            <InputGroup>
                <Form.Control 
                required
                type="text"
                placeholder="Search"
                value={search}
                onChange={handleChangeSearch}
                />
            </InputGroup>
            </Col>
            <Col md={2} sm={2} xs={2}>
            <Button className="btn btn-primary" onClick={handleSearch}>Search</Button>
            </Col>
        </Row>
        </Container>
        </>

    );
}

export default Header;
