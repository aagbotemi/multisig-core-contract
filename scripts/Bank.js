const hre = require("hardhat");

async function main() {
  
    const [owner, signer1, signer2] = await hre.ethers.getSigners();

    const Bankk = await hre.ethers.getContractFactory("Bank");
    const bank = await Bankk.deploy();
    await bank.deployed();

    console.log("Bank contract deployed to:", bank.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
