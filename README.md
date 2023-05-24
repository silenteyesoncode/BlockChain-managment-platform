# BlockChain Wallet Management Application

This is a Node.js application for managing wallets and retrieving blockchain data using the Blockcypher API.

## Project Overview

The Wallet Management Application allows users to perform various wallet-related operations such as creating wallets, importing wallets, retrieving wallet names, checking wallet balances, and fetching transaction data. The application interacts with the Blockcypher API to fetch blockchain data and perform wallet-related actions.

The project structure is organized as follows:
- `wallet`: Contains modules for wallet creation, listing wallet names, and retrieving wallet balances.
- `address`: Contains a module for fetching address information from the Blockcypher API.
- `index.js`: The main entry point of the application, which provides a command-line interface for interacting with the different features.

## Prerequisites

Before running the application, make sure you have the following dependencies installed:
- Node.js (version X.X.X)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git

```

## Configuration

In order to access the Blockcypher API, you need to provide an API token.

1. Obtain an API token from the Blockcypher website.
2. Open the `index.js` file.
3. Locate the `TOKEN` variable at the top of the file.
4. Replace `'1440db4ab95b4b10bc4e6c53aee4c7db'` with your actual API token.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.
