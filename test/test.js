const AYY = artifacts.require("AYY");
const BN = web3.utils.BN;
const toBN = web3.utils.toBN;
const toWei = web3.utils.toWei;

const totalSupplyString = '21000000000000';

contract("AYY", accounts => {
  it("should put 500 billion in initial account", async () => {
    const [owner, acc1, acc2] = accounts;
    const ayy = await AYY.deployed();
    let expectedBalance = toWei(totalSupplyString, 'ether');
    assert.equal(
      expectedBalance.toString(),
      (await ayy.balanceOf(owner)).toString()
    );
  });
});