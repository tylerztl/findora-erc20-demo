const ERC20 = artifacts.require("ERC20FixedSupply.sol");
const ERC20Delegator = artifacts.require("ERC20Delegator.sol");
const Loot = artifacts.require("Loot.sol");

module.exports = async (deployer) => {
	await deployer.deploy(Loot);
	await deployer.deploy(ERC20, "Tether USD", "USDT",
		'100000000000000000000000000', {gas: 5000000});
	await deployer.deploy(ERC20Delegator);
};
