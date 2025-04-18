import axios from 'axios'

const tvcToken = import.meta.env.VITE_TVC_TOKEN;
const TVC_API_URL = '/api/exchange-rates'

let headers = {
"Authorization": `Bearer ${tvcToken}`,
"Accept": "application/json",
"Content-Type": "application/json",
}

export const getExchangeRates = async () => {

  if(tvcToken === '') return null

  try {
    const config = {
      baseURL: TVC_API_URL,
    };
    const url = axios.getUri(config);

    const response = await axios.get(url,{
      headers: headers,
    })
    const res = await response.data

    return { dollarPrice: res }

  }catch (e){
    throw new Error(e, 'Error loading echange rates')
  }
}
