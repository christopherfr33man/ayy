const TOKEN = artifacts.require("AYY");

module.exports = function (deployer, network) {
	deployer.deploy(TOKEN);
};

