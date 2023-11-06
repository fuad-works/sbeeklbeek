import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

interface ProductCardProps {
    productName: string;
    price: number;
    imageUrl: string;
}

function ProductCard({ productName, price, imageUrl }: ProductCardProps) {
    return (
        <div className="relative max-w-sm rounded overflow-hidden shadow-lg">
            {/* Favorite button */}
            <button className="absolute top-0 right-0 bg-gray-500 rounded-full hover:bg-red-700 text-white font-bold py-2 px-3 m-1 z-10">
                <FontAwesomeIcon icon={faHeart} />
            </button>

            {/* Product image and details */}
            <div className="flex flex-col">
                <img className="w-full h-32 object-cover mb-2" src={imageUrl} alt={productName} />
                <div className="px-6">
                    <div className="font-bold text-md mb-1">{productName}</div>
                    <p className="text-gray-700 text-base"> {price} ل.س </p>
                </div>
                <div className="px-3 py-4">
                    {/* Shopping cart button */}
                    <button className="w-full bg-blue-500 rounded-xl text-sm hover:bg-blue-700 text-white font-bold py-2 px-2">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span className="ml-2">أضف للسلة</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard