import React, { useState,useEffect,useRef } from 'react'
import { Col,Card,Button } from 'react-bootstrap';
import '../index.css'
// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function Slidebar({headlines}) {
  const [index, setIndex] = useState(headlines.length);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === headlines.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <Col className="slideshow">
      <Col
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {headlines.map((item, index) => { 
            console.log("item.urlToImage",item)
        return(
            <>
                 <Col
                    className="slide"
                    key={index}
                >
                    <img style={{  height: '150px',width:'100%'}}src={item.urlToImage}/>
                </Col>
            </>
        )}
        )}
      </Col>

      <Col className="slideshowDots">
        {headlines.map((_, idx) => (
          <Col
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></Col>
        ))}
      </Col>
    </Col>
  );
}
export default Slidebar;