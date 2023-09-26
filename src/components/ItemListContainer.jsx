import ItemList from "./ItemList"

const ItemListContainer = ({ saludo }) => {
  return (
    <div>
      <div className="d-flex justify-content-center">{saludo}</div>
      <div >
        <ItemList />
      </div>
    </div>
  )
}

export default ItemListContainer