import SearchResultCard from "../components/SearchResultCard";
const Restaurantlist = ({restaurant,isLoading}) =>{

return (
    <div>
        {isLoading?isLoading:restaurant && restaurant.map((item, index) => (
        <div key={index} className="mb-3">
            <SearchResultCard restaurant={item} />
        </div>
        ))}
    </div>
);
};

export default Restaurantlist;