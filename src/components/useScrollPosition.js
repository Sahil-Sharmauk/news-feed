import React,{useState,useEffect} from 'react'

function useScrollPosition(){
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      const updatePosition = () => {
        setScrollPosition(window.pageYOffset);
      }
      window.addEventListener("scroll", updatePosition);
      updatePosition();
      return () => window.removeEventListener("scroll", updatePosition);
    }, []);
  
    return scrollPosition;
  };
  
  export default useScrollPosition;
// function ScrollableList(props) {
//     const { itemsFromServer, onScroll } = props;
  
//     const ref = useRef();
  
//     useEffect(() => {
//       const div = ref.current;
//       if (div) {
//         div.addEventListener("scroll", onScroll);
//       }
//     }, [onScroll]);
  
//     return (
//       <div className="scrollableContainer" ref={ref}>
//         {itemsFromServer}
//       </div>
//     )
// }
// export default ScrollableList;
