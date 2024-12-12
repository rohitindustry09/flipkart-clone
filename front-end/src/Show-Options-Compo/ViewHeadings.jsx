import ShowTextTitleTab from './ShowTextTitleTab.jsx';
import ReturnAnElement from '../Return-Elements-Compo/ReturnAnAccountElement.jsx';
export default function ViewHeadings({ title, text, HeadingFor }) {
  return (
  <>
  { HeadingFor !== "credits-btn" ?
  <>
    <ShowTextTitleTab
      title={title} 
      titleSize={{ fontSize: '1rem' }}
      text={text} 
      textSize={{ fontSize: '0.8rem' }}
    />

  { 
    HeadingFor == "credits-arrow" ? 
    <ReturnAnElement returnElement="i" />
    : "" 
  }
  </>
  : 
<>
    <ShowTextTitleTab
      title={title} 
      titleSize={{ fontSize: '1.8rem' }}
      text={text} 
      textSize={{ fontSize: '1rem' }}
    />
    <ReturnAnElement returnElement="btn" />
</>
  }
  </> 
  );
}