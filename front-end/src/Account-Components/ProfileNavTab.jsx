import ShowOptions from '../Show-Options-Compo/ShowWithout_DropOptions.jsx';
export default function ProfileNavTab() {
  return (
   <div className="account-nav">
     <ShowOptions classFor="left-arrow-number"
       icon="fa-solid fa-arrow-left"
       title="+917042497098" 
     />
     <ShowOptions classFor="account-coins"
       icon="fa-solid fa-bolt"
       title="0" 
     />
   </div>
  );
}