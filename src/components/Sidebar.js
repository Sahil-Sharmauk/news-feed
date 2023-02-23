import React, { useEffect } from 'react'
import {Container,Row,Col,InputGroup,Form,Button} from 'react-bootstrap';
import '../index.css'
function Sidebar({allSources,setSource,source,setSearchArticle,setPage,setArticles,setSearch}) {
    const handleChange = (e)=>{
        console.log(e.target.value)
        setSearch('')
        setSearchArticle(false)
        setArticles([])
        setPage(1)
        setSource(e.target.value)
    }
    return (
        <>  
            <Container className='sidebar-comp-container'>
            <Row className='mt-2 sidebar' >
                {allSources.length>0 && (
                    <>
                    {allSources.map((item)=>{
                        {console.log("source",source,item)}
                        return(
                        <Col md={12}>
                            <Form.Check 
                            className='sidebar-checkbox'
                            type={'checkbox'}
                            label={item}
                            value={item}    
                            checked={source === item}
                            onChange={handleChange}
                            />
                        </Col>
                        )
                    })}
                    </>
                )}
            </Row>
        </Container>
        </>

    );
}

export default Sidebar;
