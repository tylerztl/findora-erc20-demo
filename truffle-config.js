const HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic = "citizen hint animal brain label grab hurt prison myth stem load wait";

module.exports = {
	networks: {
		findora: {
			provider: () => new HDWalletProvider(mnemonic,
				'https://dev-evm.dev.findora.org:8545/'
			),
			network_id: '523',
			gas: 9000000,
			gasPrice: 1000000000000, // 1000 gwei
		},
		development: {
			provider: () => new HDWalletProvider(mnemonic,
				'http://127.0.0.1:8545/'
			),
			network_id: '523',
			gas: 9000000,
			gasPrice: 1000000000000, // 1000 gwei
		},
	},

	// Set default mocha options here, use special reporters etc.
	mocha: {
		// timeout: 100000
	},

	// Configure your compilers
	compilers: {
		solc: {
			version: "^0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
			settings: {          // See the solidity docs for advice about optimization and evmVersion
				optimizer: {
					enabled: true,
					runs: 20
				},
				evmVersion: "istanbul"
			}
		}
	},

	db: {
		enabled: false
	}
};
