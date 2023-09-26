
const Item = ({ id, image, title = "Sin titulo", description = "No hay descripcion", price }) => {
    return (
        <div className="d-flex justify-content-center" key={id}>
            <div className="d-flex justify-content-center">
                {image}
            </div>
            <div className="d-flex justify-content-center">
                <h1 className="d-flex justify-content-center">{title}</h1>
            </div>
            <div className="d-flex justify-content-center">
                <h3 className="d-flex justify-content-center">{description}</h3>
            </div>
            <div className="d-flex justify-content-center">
                <p className="d-flex justify-content-center">{price}</p>
            </div>
        </div>
    )
}

export default Item