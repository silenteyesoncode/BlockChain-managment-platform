const readline = require('readline');
const axios = require('axios');

const createNormalWallet = require('./wallet/normalWallet');
const createHDWallet = require('./wallet/hdWallet');
const getWalletNames = require('./wallet/listWallet');
const getWalletBalance = require('./wallet/walletBalance');
const getNormalWalletAddresses = require('./wallet/normalWalletAddresses');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function createWallets() {
  try {
    const numWallets = await askQuestion('Enter the number of wallets you want to create: ');
    const walletNames = [];

    for (let i = 1; i <= numWallets; i++) {
      const name = await askQuestion(`Enter the name for wallet ${i}: `);
      walletNames.push(name);
    }

    const normalWalletResponses = await createNormalWallet(walletNames);
    console.log('Normal Wallets:', normalWalletResponses);

    const hdWalletResponses = await createHDWallet(walletNames);
    console.log('HD Wallets:', hdWalletResponses);

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

  const walletName = await askQuestion('Enter the name of the wallet: ');

  const normalWalletAddresses = await getNormalWalletAddresses(walletName);
  console.log('Normal Wallet Addresses:', normalWalletAddresses);

  // const hdWalletDetails = await getHDWalletDetails('bob');
  // console.log('HD Wallet Details:', hdWalletDetails);
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
    default:
      console.log('Invalid option.');
      break;
  }

  rl.close();
});
