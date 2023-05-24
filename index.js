

const readline = require('readline');
const axios = require('axios');

const createNormalWallet = require('./wallet/normalWallet');
const createHDWallet = require('./wallet/hdWallet');
const getWalletNames = require('./wallet/listWallet');
const getWalletBalance = require('./wallet/walletBalance');
const getNormalWalletAddresses = require('./wallet/normalWalletAddresses');
const getHDWalletAddresses= require('./wallet/hdWalletAddresses');
const getAddressInfo= require('./address');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


var TOKEN = '1440db4ab95b4b10bc4e6c53aee4c7db';


async function createWallets() {
  try {
    const numWallets = await askQuestion('Enter the number of wallets you want to create: ');
    const walletNames = [];

    for (let i = 1; i <= numWallets; i++) {
      const name = await askQuestion(`Enter the name for wallet ${i}: `);
      walletNames.push(name);
    }

    const walletType = await askQuestion('Enter the type of wallet you want to create (normal/HD): ');

    let walletResponses;

    if (walletType === 'normal') {
      walletResponses = await createNormalWallet(walletNames , TOKEN);
      console.log('Normal Wallets:', walletResponses);
    } else if (walletType === 'HD') {
      walletResponses = await createHDWallet(walletNames);
      console.log('HD Wallets:', walletResponses);
    } else {
      console.log('Invalid wallet type.');
      return;
    }

  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    rl.close();
  }
}

async function showWalletNames() {
  try {
    const walletNames = await getWalletNames();
    console.log('Wallet Names:', walletNames);
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    rl.close();
  }
}

async function showWalletBalance() {
  try {
    const walletName = await askQuestion('Enter the name of the wallet to retrieve the balance: ');
    const balance = await getWalletBalance(walletName);
    console.log(`Balance of wallet "${walletName}": ${balance}`);
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    rl.close();
  }
}

async function fetchWalletData() {

  const walletType = await askQuestion('Enter the type of wallet you want (normal/HD): ');

  const walletName = await askQuestion('Enter the name of the wallet: ');
  
  if (walletType === 'normal') {
    const normalWalletAddresses = await getNormalWalletAddresses(walletName, TOKEN);
    console.log('Normal Wallet Addresses:', normalWalletAddresses);
  } else if (walletType === 'HD') {
    const hdWalletDetails = await getHDWalletAddresses(walletName, TOKEN);
    console.log('HD Wallet Details:', hdWalletDetails);
  } else {
    console.log('Invalid wallet type.');
  }
}

async function getTransaction() {

  try {
    const response = await axios.get(`https://api.blockcypher.com/v1/btc/main/forwards?token=${TOKEN}`);
    console.log(response.data);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Display menu options
console.log('Select an option:');
console.log('1. Create wallets');
console.log('2. Import wallets');
console.log('3. Show wallet names');
console.log('4. Show wallet balance');
console.log('5. Show transaction');
console.log('6. Show Address');

rl.question('Enter the option number: ', async (option) => {
  switch (option) {
    case '1':
      await createWallets();
      break;
    case '2':
      await fetchWalletData();
      break;
    case '3':
      await showWalletNames();
      break;
    case '4':
      await showWalletBalance();
      break;
    case '5':
      await getTransaction();
      break;
    case '6':
      await getAddressInfo();
      break;
    default:
      console.log('Invalid option.');
      break;
  }

  rl.close();
});
