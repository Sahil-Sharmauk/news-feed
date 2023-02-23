import React, { useEffect } from 'react'
import {Container,Row,Col,InputGroup,Form,Button} from 'react-bootstrap';

function Sidebar({allSources,setSource,source,setSearchArticle,setPage}) {
    const handleChange = (e)=>{
        console.log(e.target.value)
        setSearchArticle(false)
        setPage(1)
        setSource(e.target.value)
    }
    return (
        <>  
            <Container>
            <Row className='mt-2 sidebar' >
                {allSources.length>0 && (
                    <>
                    
                    {allSources.map((item)=>{
                        {console.log("source",source,item)}
                        return(
                        <Col md={12}>
                            <Form.Check 
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
