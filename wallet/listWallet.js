const axios = require('axios');

async function getWalletNames() {
  try {
    const response = await axios.get('https://api.blockcypher.com/v1/btc/main/wallets?token=1440db4ab95b4b10bc4e6c53aee4c7db');
    return response.data.wallet_names;
  } catch (error) {
    console.error('Error retrieving wallet names:', error.message);
  }
}

module.exports = getWalletNames;
