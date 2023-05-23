const axios = require('axios');

async function createHDWallet(walletNames) {
  try {
    const responses = [];

    for (const name of walletNames) {
      // const uniqueName = `${name}-${Date.now()}`; // Append a unique identifier to the wallet name

      const data = {
        name: name,
        extended_public_key: 'xpub661MyMwAqRbcFtXgS5sYJABqqG9YLmC4Q1Rdap9gSE8NqtwybGhePY2gZ29ESFjqJoCu1Rupje8YtGqsefD265TMg7usUDFdp6W1EGMcet8',
      };

      const response = await axios.post('https://api.blockcypher.com/v1/btc/main/wallets/hd?token=1440db4ab95b4b10bc4e6c53aee4c7db', data);
      responses.push(response.data);
    }

    return responses;
  } catch (error) {
    console.error('Error creating HD wallets:', error.message);
  }
}

module.exports = createHDWallet;
