const Web3 = require('web3')
const HDWalletProvider = require("truffle-hdwallet-provider");

const erc20ABI = require('../build/contracts/erc20.json');
const delegatorABI = require('../build/contracts/erc20delegator.json');

const mnemonic = "citizen hint animal brain label grab hurt prison myth stem load wait";
const caller = '0xA5225cBEE5052100Ec2D2D94aA6d258558073757';
const receiver = '0x0A559eD20fD86DC38A7aF82E7EdE91aE9b43b5f5';

const erc20Address = '0xEc39933188A1c89B569FfeE44F5014E32F4AD8Eb';
const delegatorAddress = '0xC3f15Cc7A384b50f503A3D113093d760869De70c';

// devnet
// const findoraNetwork = "https://dev-evm.dev.findora.org:8545/";

const findoraNetwork = "http://127.0.0.1:8545";

async function main() {
    const provider = new HDWalletProvider(mnemonic, findoraNetwork);
    const web3 = new Web3(provider);

    const erc20Instance = new web3.eth.Contract(
        erc20ABI.abi,
        erc20Address,
        {gasLimit: "8000000"}
    );
    const delegatorInstance = new web3.eth.Contract(
        delegatorABI.abi,
        delegatorAddress,
        {gasLimit: "8000000"}
    );

    console.log("transfer result: ", await erc20Instance.methods.transfer(delegatorAddress, 10000).send({from: caller}));

    console.log("query balance: ", await erc20Instance.methods.balanceOf(delegatorAddress).call());

    console.log("delegator transfer result: ", await delegatorInstance.methods.callTransfer(receiver, 10000, erc20Address).send({from: caller}));

    console.log("delegator query balance: ", await delegatorInstance.methods.callBalance(receiver, erc20Address).call());
}

main();
