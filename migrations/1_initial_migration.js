var Voting = artifacts.require("../contracts/Voting.sol");

module.exports = function (deployer) {
  deployer.deploy(
    Voting,
    1000,
    web3.utils.toWei("0.1", "ether")

    // [
    //   // "0x4179617a00000000000000000000000000000000000000000000000000000000",
    //   // "0x1179617a00000000000000000000000000000000000000000000000000000000",
    //   // "0x1179617a00000000000000000000000000000000000000000000000000000000",
    //   "Rama",
    //   "Nick",
    //   "Jose",
    // ]
  );
};
