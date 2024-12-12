import ShowOptions from '../Show-Options-Compo/ShowWithout_DropOptions.jsx';
import ShowLinkOptions from '../Show-Options-Compo/ShowLinkOptions.jsx';

export default function SimilarNavigation({ NavTabName1, NavTabIcon1, NavTabName2, NavTabIcon2, NavigationName1, NavigationName2 }) {
  return (
<>
  
   <div className="d-flex p-3 w-100" style={{
      background: 'red',
      fontSize: '1rem',
      position: 'fixed',
      top: '0',
      zIndex: '100'
    }}>
      <ShowOptions 
       classFor=""
       icon={NavTabIcon1}
       title={NavTabName1}
       titleStyle={{
        color: 'white',
        fontSize: '1.2rem'
       }}
       IconStyle={{ color: 'white '}}
      />

     <ShowOptions
      classFor="ms-auto"
      icon={NavTabIcon2}
      title={NavTabName2} 
      titleStyle={{ 
       color: 'white', 
       marginLeft: '.5rem',
       fontSize: '1.2rem'
      }}
      IconStyle={{
       color: 'white', 
       fontSize: '1.5rem',
      }}
      navigateTo={"/"+NavTabName2.toLowerCase()}
     />

  </div>
  

  <ul 
   className="nav nav-underline w-100" 
   style={{ borderBottom: '0.8rem solid #f1f1f1', background: 'white', marginTop: '', position: 'fixed', top: '3.8rem', zIndex: '99' }}>
   <ShowLinkOptions 
    link="#"
    title={NavigationName1}
   />
   <ShowLinkOptions 
    link="#"
    title={NavigationName2}
   />
  </ul>
</>
  );
}