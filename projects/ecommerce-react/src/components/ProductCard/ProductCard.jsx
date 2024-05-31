import "./index.css";


const ProductCard = ({ link, name, price, src }) => {
    return (
        <div className="product-card">
            <img className="product-card__img" src={src} />
            <a href={link}>
                <h3 className="product-card__title">{name}</h3>
            </a>
                <p>{price} €</p>
        </div>
    )
}

export default ProductCard; 