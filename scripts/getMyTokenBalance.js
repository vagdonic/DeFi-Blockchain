const myToken = artifacts.require("myToken")
const FarmToken = artifacts.require("FarmToken")
	
module.exports = async function (callback) {
  MyToken = await myToken.deployed()
  farmToken = await FarmToken.deployed()
  balance = await MyToken.balanceOf(farmToken.address)
  console.log(web3.utils.fromWei(balance.toString()))
  callback()
}