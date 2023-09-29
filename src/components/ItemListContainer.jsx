import ItemList from "./ItemList"

const ItemListContainer = ({ saludo }) => {
  return (
    <div>
      <div className="d-flex justify-content-center mt-3">{saludo}</div>
      <div className="d-flex justify-content-center p-1">
        <ItemList />
      </div>
    </div>
  )
}

export default ItemListContainer