import ShowOptions from '../Show-Options-Compo/ShowWithout_DropOptions.jsx';

export default function AccountTabs() {
  return (
   <div className="customer-list mb-3">
    <ShowOptions classFor="user-icons orders"
      icon="fa-solid fa-cube"
      title="Orders"
      color="#ff3fb0"
    />
    <ShowOptions classFor="user-icons orders"
      icon="fa-regular fa-heart" 
      title="Wishlists"
      color="#ffaf1d"
    />
    <ShowOptions classFor="user-icons orders"
      icon="fa-solid fa-gift"
      title="Coupons" 
      color="#1dffec"
    />
    <ShowOptions classFor="user-icons orders"
      icon="fa-solid fa-headset"
      title="Help Center"
      color="#ff3f1d"
    />
    </div>
  );
}