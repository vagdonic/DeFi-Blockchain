const myToken = artifacts.require("myToken")

module.exports = async function (deployer, network, accounts){
    await deployer.deploy(myToken)
    const myToken = await myToken.deployed()
}