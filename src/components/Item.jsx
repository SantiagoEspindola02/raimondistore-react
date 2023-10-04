

const Item = ({id, image, title, price}) => {

    return (
        <>
            <div className="d-flex justify-content-center flex-column p-6" style={{maxWidth: "600px", backgroundColor:"grey", borderRadius:"20px"}} key={id}>
                <div className="d-flex justify-content-center">
                    <img className="mt-4 p-3" style={{ borderRadius:"30px", width: "200px", height:"200px"}} src={image} alt="image" />
                </div>
                <div>
                    <h2 className="d-flex justify-content-center m-3 text-center">{title}</h2>
                </div>
                <div>
                    <p className="d-flex justify-content-center">${price}</p>
                </div>
                <div className="d-flex justify-content-center mb-2 p-2 ">
                    <a href={/product/id}>
                        <button className="btn btn-warning">Ir al detalle del producto</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Item