export default function GetCheckCircles({ stepsRef }) {
  return (
  <div className="current-page-num">
     <div className="circle" ref={el => (stepsRef.current[0] = el)}>1</div>
     <div className="line"></div>
     <div className="circle" ref={el => (stepsRef.current[1] = el)}>2</div>
     <div className="line"></div>
     <div className="circle" ref={el => (stepsRef.current[2] = el)}>3</div>
  </div>
  );
}