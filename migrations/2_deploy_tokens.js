const myToken = artifacts.require("myToken")
const FarmToken = artifacts.require("FarmToken")

module.exports = async function (deployer, network, accounts){
    await deployer.deploy(myToken)
    const MyToken = await myToken.deployed()

    await deployer.deploy(FarmToken, MyToken.address)
	const farmToken = await FarmToken.deployed()
}