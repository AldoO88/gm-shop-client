import service from './index';

const productIngramService = {
  getAllProductsIM: () => service.get('/api/products'),
}

export default productIngramService;
