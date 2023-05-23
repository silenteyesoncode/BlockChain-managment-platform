const axios = require('axios');

async function createNormalWallet(walletNames) {
  try {
    const responses = [];

    for (const name of walletNames) {
      const data = {
        name: name,
        addresses: ['1JcX75oraJEmzXXHpDjRctw3BX6qDmFM8e'],
      };

      const response = await axios.post('https://api.blockcypher.com/v1/btc/main/wallets?token=1440db4ab95b4b10bc4e6c53aee4c7db', data);
      responses.push(response.data);
    }

    return responses;
  } catch (error) {
    console.error('Error creating normal wallets:', error.message);
  }
}

module.exports = createNormalWallet;
