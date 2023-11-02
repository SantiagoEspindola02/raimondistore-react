const CategoryItem = ({isActive = false, name}) =>{
    return(
        <p className={`nav-link ${isActive ? "active": null}`} aria-current="page">{name}</p>
    )
}

export default CategoryItem