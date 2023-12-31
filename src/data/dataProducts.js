

const products = [
    {
        id: 1,
        image: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw41c8afb1/products/LC_L1212-21001/LC_L1212-21001-1.JPG",
        category: "chombas",
        title: "Chomba 1",
        description: "Descripción del Producto 1",
        price: 19.99,
        stock: 3,
    },
    {
        id: 2,
        image: "https://http2.mlstatic.com/D_NQ_NP_866931-MLA43297132803_082020-W.jpg",
        category: "chombas",
        title: "Chomba 2",
        description: "Descripción del Producto 2",
        price: 29.99,
        stock: 5,
    },
    {
        id: 3,
        image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw64443e2c/products/NI_CJ2353-010/NI_CJ2353-010-1.JPG",
        category: "pantalones",
        title: "Pantalon 1",
        description: "Descripción del Producto 3",
        price: 39.99,
        stock: 4,
    },
    {
        id: 4,
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/00bc8de6-2774-4c02-a82f-1a70f9732ffe/pantalones-de-entrenamiento-tech-fleece-h2Bmxs.jpg",
        category: "pantalones",
        title: "Pantalon 2",
        description: "Descripción del Producto 4",
        price: 39.99,
        stock: 7,
    },
    {
        id: 5,
        image: "https://i5.walmartimages.com/asr/b91548f6-4919-4e1c-a044-dd14046688f0_1.e4f94c7fd2969e9422203b63fc7daf53.jpeg",
        category: "sneackers",
        title: "Sneaker 1",
        description: "Descripción del Producto 5",
        price: 39.99,
        stock: 8,
    },
    {
        id: 6,
        image: "https://i5.walmartimages.com/asr/5829b956-2747-4111-a1f5-8cf480dd8458_1.2369644d6071452ec1a4c487e046326a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        category: "sneakers",
        title: "Sneaker 2",
        description: "Descripción del Producto 6",
        price: 39.99,
        stock: 5,
    },
    {
        id: 7,
        image: "https://th.bing.com/th/id/OIP.Ussr0VNHBnSDRUlpXmrkvAHaIW?pid=ImgDet&rs=1",
        category: "abrigos",
        title: "Abrigo 1",
        description: "Descripción del Producto 7",
        price: 39.99,
        stock: 7,
    },
    {
        id: 8,
        image: "https://th.bing.com/th/id/OIP.Aw8fdDOoQJ0yhewZLnp0GAHaIW?pid=ImgDet&rs=1",
        category: "abrigos",
        title: "Abrigo 2",
        description: "Descripción del Producto 8",
        price: 39.99,
        stock: 6,
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)

    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find((product) => (product.id == productId)))
        },2000)
        
    })

}