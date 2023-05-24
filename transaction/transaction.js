const axios = require('axios');

async function createNewTransaction() {
  try {
    const newtx = {
      inputs: [{ addresses: ['1JcX75oraJEmzXXHpDjRctw3BX6qDmFM8e'] }],
      outputs: [{ addresses: ['1KbT2Hq9bDjYfBcKXvroHRnh8kW5xkVnVn'], value: 100000 }]
    };

    const response = await axios.post('https://api.blockcypher.com/v1/bcy/test/txs/new', newtx);
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      console.error('Request failed with status code', error.response.status);
      console.error('Response data:', error.response.data);
    } else {
      console.error('Error:', error.message);
    }
  }
}

createNewTransaction();


// 1JcX75oraJEmzXXHpDjRctw3BX6qDmFM8e
// 1KbT2Hq9bDjYfBcKXvroHRnh8kW5xkVnVn