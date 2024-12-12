import OptionsView from '../Show-Options-Compo/OptionsView.jsx';

export default function OptionsLayout({ heading, optionIcon, optionTitle, optionText, tabFor }) {
  return (
    <>
     { heading !== "" ? 
        <h4 className="card-title m-3"> {heading} </h4>
      : "" } {/*for head of buttons like credit scores*/}
     <OptionsView icon={optionIcon} title={optionTitle} text={optionText} forWho={tabFor} />
    </>
  );
}