import ItemCount from "./ItemCount"

const ItemListContainer = ({saludo}) => {
  return (
    <div className="container">{saludo}
    <ItemCount />
    </div>
  )
}

export default ItemListContainer