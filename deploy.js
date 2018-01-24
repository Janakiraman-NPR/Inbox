const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
  'cook vacuum ostrich loop exhibit empower churn present split fit usual else',
  'https://rinkeby.infura.io/b1sGhqMuxCY6ytaAAYuP'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('attempting to deploy from ', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data: bytecode,arguments: ['hi there']})
  .send({gas:'1000000', from: accounts[0] });

  console.log('contract deployed to', result.options.address);
};
deploy();