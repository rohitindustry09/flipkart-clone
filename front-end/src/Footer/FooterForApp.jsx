export default function FooterForApp({ AppIcon, Title, AppLink }) {
  return (
    <div>
     <a href={AppLink}>
       { Title !== "" ? 
        <span> {Title} </span>
        : <i className={AppIcon} style={{ color: 'black'}}></i> }
     </a> 
    </div>
  );
}