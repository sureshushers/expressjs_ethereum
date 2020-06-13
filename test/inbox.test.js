const Web3 = require('web3');
const {abi,bytecode,networks} = require('../build/contracts/InboxContract');
const assert = require('assert');

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
let contractAddress; 
let accounts;
let inbox;
const MSG = 'This is a test';

beforeEach(async()=>{
   accounts =await web3.eth.getAccounts();
   const networkId = await web3.eth.net.getId();
   contractAddress = networks[networkId].address; 
   inbox = await new web3.eth.Contract(abi ,contractAddress);
});

describe('Inbox',()=>{
  it('Verify Contract Deployed Test', async()=>{
      const newcontractAddress = await inbox.options.address;
      assert.equal(newcontractAddress,contractAddress);
  });

  it('SetMessage Test', async()=>{
    const result = await inbox.methods.setMessage(MSG).send({from:accounts[0]});
    const message = await inbox.methods.getMessage().call();
    assert.equal(message,MSG);
  });

  it('Read the message', async()=>{
    const message = await inbox.methods.getMessage().call();
    console.log(message);
  });
});
