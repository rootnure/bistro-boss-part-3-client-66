import PropTypes from "prop-types";
import MainBtn from "../../components/MainBtn";

const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <>
            <div className="card bg-base-100 rounded-xl relative">
                {price ? <p className="absolute right-2 top-2 px-1 py-0.5 rounded text-white bg-blue-600 font-medium">${price.toFixed(2)}</p> : ""}
                <figure className="h-60 rounded-t-xl overflow-hidden">
                    <img src={image} alt={name} className="min-w-full min-h-full" />
                </figure>
                <div className="card-body bg-gray-100 items-center text-center rounded-b-xl">
                    <h2 className="card-title text-2xl font-bold">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <MainBtn isBgWhite>Add To Cart</MainBtn>
                    </div>
                </div>
            </div>

        </>
    );
};

FoodCard.propTypes = {
    item: PropTypes.object.isRequired
}

export default FoodCard;