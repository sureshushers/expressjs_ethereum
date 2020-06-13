const Inbox = artifacts.require("InboxContract");
require('dotenv').config();

module.exports = function(deployer) {
  deployer.deploy(Inbox)
  .then(async()=> {
    process.env.CONTRACT_ADDRESS = await Inbox.address;
    console.log(`Contract Address: ${process.env.CONTRACT_ADDRESS}`);
  });
};
