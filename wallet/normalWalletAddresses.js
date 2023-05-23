const axios = require('axios');

async function getNormalWalletAddresses(walletName) {
  try {
    const response = await axios.get(`https://api.blockcypher.com/v1/btc/main/wallets/${walletName}/addresses?token=1440db4ab95b4b10bc4e6c53aee4c7db`);
    return response.data.addresses;
  } catch (error) {
    console.error('Error retrieving normal wallet addresses:', error.message);
  }
}


module.exports = getNormalWalletAddresses;
