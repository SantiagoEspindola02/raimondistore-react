import ItemCount from "./ItemCount"


const ItemDetail = ({ image, title, description, price, stock}) => {

    return (
        <>
            <div className="d-flex justify-content-center flex-column p-6" style={{maxWidth: "600px", backgroundColor:"grey", borderRadius:"20px"}}>
                <div className="d-flex justify-content-center">
                    <img className="mt-4 p-3" style={{ borderRadius:"30px", width: "200px", height:"200px"}} src={image} alt="image" />
                </div>
                <div>
                    <h2 className="d-flex justify-content-center m-3 text-center">{title}</h2>
                </div>
                <div className="d-flex justify-content-center">
                    <h6 className="d-flex justify-content-center text-center m-2">{description}</h6>
                </div>
                <div>
                    <p className="d-flex justify-content-center">${price}</p>
                </div>
                <div>
                    <p className="d-flex justify-content-center">Stock disponible: {stock}</p>
                </div>
                <div className="d-flex justify-content-center mb-2 p-2 ">
                    <ItemCount stock= {stock} />
                </div>
            </div>
        </>
    )
}

export default ItemDetail