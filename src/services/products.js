import axios from 'axios'

const tvcToken = import.meta.env.VITE_TVC_TOKEN;
const TVC_API_URL = '/api/products'

export const allProducts = async () => {

  if(tvcToken === '') return null

  try {
    let params = {
      "withInventory": "detailed",
      "withPrice": true,
      "withMedia": true,
      "withOverviews": true,
      "withWeightsAndDimensions": true,
      "withCategoryBreadcrumb": true,
      'perPage': 25
    };
    
    let headers = {
    "Authorization": `Bearer ${tvcToken}`,
    "Accept": "application/json",
    "Content-Type": "application/json",
    }

    const config = {
      baseURL: TVC_API_URL,
      params: params,
    };
    const url = axios.getUri(config);

    const response = await axios.get(url,{
      headers: headers,
    })
    const res = await response.data
    const products = res.data


    console.log(res);
    console.log(products)
    

    return products.map(product => ({
      id: product.tvc_id,
      name: product.name,
      categoryId: product.category_id,
      stock: product.inventory_detailed.reduce((total, item) => {
        return total + parseInt(item.quantity, 10);
      }, 0),
      price: product.list_price,
      distribuidor_price: product.distributor_price,
      image: product.media.main_image
     

    }))
  }catch (e){
    throw new Error(e, 'Error loading products')
  }
}
