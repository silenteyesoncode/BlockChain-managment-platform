const axios = require('axios');

async function getWalletBalance(walletName) {
  try {
    const response = await axios.get(`https://api.blockcypher.com/v1/btc/main/wallets/${walletName}/balance?token=1440db4ab95b4b10bc4e6c53aee4c7db`);
    return response.data.balance;
  } catch (error) {
    console.error('Error retrieving wallet balance:', error.message);
  }
}

module.exports = getWalletBalance;
