const axios = require('axios');

async function getHDWalletAddresses(walletName, TOKEN) {
  try {
    const url = `https://api.blockcypher.com/v1/btc/main/wallets/hd/${walletName}?token=${TOKEN}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error retrieving HD wallet details:', error.message);
    return null;
  }
}

module.exports = getHDWalletAddresses;
