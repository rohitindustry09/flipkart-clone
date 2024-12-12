export default function ShowTextTitle({ Showtitle, TitleSize, ShowText, TextSize }) {
  return (
    <>
     <h6 className="card-title" style={TitleSize}>
       {Showtitle}
     </h6> 
     
     <p className="card-text" style={TextSize}>
       {ShowText}
     </p> 
    </>
  );
}