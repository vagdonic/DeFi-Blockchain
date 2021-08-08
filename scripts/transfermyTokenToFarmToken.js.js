const myToken = artifacts.require("myToken")
const FarmToken = artifacts.require("FarmToken")

module.exports = async function (callback) {
    const accounts = await new web3.eth.getAccounts()
    const MyToken = await myToken.deployed()
    const farmToken = await FarmToken.deployed()

    const allowanceBefore = await MyToken.allowance(
        accounts[0],
        farmToken.address
    )
    console.log(
        "Amount of MyToken FarmToken is allowed to transfer on our behalf Before: " + allowanceBefore.toString()
    )
    
    


}