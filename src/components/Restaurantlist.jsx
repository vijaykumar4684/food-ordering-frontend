const Restaurantlist = ({restaurant,isLoading}) =>{
    //const {city,country,imageurl,restaurantName} = restaurant
    //console.log(city,country,imageurl,restaurantName)
    //restaurant.map(item=>console.log(item))
    console.log(restaurant)
    console.log(isLoading)
// return(
// <div>
//     (isLoading?{isLoading}:
//     {restaurant})
// </div>
// );
return (
    <div>
        {restaurant && restaurant.map(item => (
            <div key={item._id}>
                <h2>{item.restaurantName}</h2>
                <p>City: {item.city}</p>
                <p>Country: {item.country}</p>
                <p>Delivery Price: {item.deliveryPrice}</p>
                <p>Estimated Delivery Time: {item.estimatedDeliveryTime} minutes</p>
                <p>Cuisines: {item.cuisines.join(', ')}</p>
                <p>Menu Items: {item.menuItems.map(menuItem => menuItem.name).join(', ')}</p>
                {/* Render other properties as needed */}
            </div>
        ))}
    </div>
);
};

export default Restaurantlist;