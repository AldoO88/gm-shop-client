import axios from 'axios';

const tvcToken = import.meta.env.VITE_TVC_TOKEN;
const TVC_API_URL = '/api/products';

const fetchProducts = async (params, headers, idCategory, accumulatedProducts = []) => {
  try {
    const response = await axios.get(TVC_API_URL, {
      headers,
      params
    });
    
    const res = response.data;
    const products = res.data;

    console.log( 'idCategory dentro del fetch:', idCategory );

    const filteredProducts = products.filter(product => product.category_id === idCategory);
    // Concatenate current products with accumulated products
    accumulatedProducts = [...accumulatedProducts, ...filteredProducts];
    // Check if there are more pages
    if (res.meta.current_page < res.meta.last_page) {
      // Prepare parameters for the next page
      const nextParams = { ...params, page: res.meta.current_page + 1 };
      // Recursively fetch the next page
      return fetchProducts(nextParams, headers, idCategory, accumulatedProducts);
    }

    return accumulatedProducts;

  } catch (e) {
    console.error('Error loading products:', e);
    throw new Error('Error loading products');
  }
};

export const allProducts = async ({categoryId}) => {
  if (!tvcToken) return null;

  const params = {
    "withInventory": "simple",
    "withPrice": true,
    "withMedia": true,
    "withCategoryBreadcrumb": true,
   // Fetch 100 products per
    "page": 1 // Start with the first page
  };

  const headers = {
    "Authorization": `Bearer ${tvcToken}`,
    "Accept": "application/json",
    "Content-Type": "application/json",
  };
  const idCategory = categoryId;

  console.log(idCategory);
  const allProducts = await fetchProducts(params, headers, idCategory);


  console.log(allProducts);

  return allProducts.map(product => ({
    id: product.tvc_id,
    name: product.name,
    stock: product.total_inventories ? product.total_inventories : 0,
    //stock: product.inventory_detailed.reduce((total, item) => {
      //return total + parseInt(item.quantity, 10);
    //}, 0),
    price: product.list_price,
    distribuidor_price: product.distributor_price,
    image: product.media.main_image,
    category1: product.category_breadcrumb_tree.name,
    category2: product.category_breadcrumb_tree.parent.name,
    category3: product.category_breadcrumb_tree.parent.parent.name

  }));
};
