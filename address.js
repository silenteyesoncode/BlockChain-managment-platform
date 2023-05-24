const axios = require('axios');

async function getAddressInfo() {
  try {
    const url = 'https://api.blockcypher.com/v1/btc/main/addrs/1DEP8i3QJCsomS4BSMY2RpU1upv62aGvhD?unspentOnly=true';
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

module.exports = getAddressInfo
