import ShowTextTitle from './ShowTextTitle.jsx';
export default function ShowTextTitleTab({ title, titleSize, text, textSize }) {
  return (
    <div className="ms-3 flex-1">
      <ShowTextTitle
        Showtitle={title} 
        TitleSize={titleSize}
        ShowText={text} 
        TextSize={textSize}
      />
     </div>
  );
}