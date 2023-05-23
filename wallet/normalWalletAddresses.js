const axios = require('axios');

async function getNormalWalletAddresses(walletName , TOKEN) {
  try {
    const response = await axios.get(`https://api.blockcypher.com/v1/btc/main/wallets/${walletName}/addresses?token=${TOKEN}`);
    return response.data.addresses;
  } catch (error) {
    console.error('Error retrieving normal wallet addresses:', error.message);
  }
}


module.exports = getNormalWalletAddresses;
