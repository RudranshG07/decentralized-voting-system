const hre = require("hardhat");

async function main() {
  console.log("Deploying Voting contract...");

  const Voting = await hre.ethers.getContractFactory("Voting");
  const voting = await Voting.deploy();

  await voting.waitForDeployment();

  const address = await voting.getAddress();
  console.log("Voting contract deployed to:", address);

  // Add some sample candidates
  console.log("\nAdding sample candidates...");
  
  await voting.addCandidate("Alice Johnson");
  console.log("Added candidate: Alice Johnson");
  
  await voting.addCandidate("Bob Smith");
  console.log("Added candidate: Bob Smith");
  
  await voting.addCandidate("Carol Williams");
  console.log("Added candidate: Carol Williams");

  console.log("\nContract deployment completed!");
  console.log("Contract address:", address);
  console.log("Network:", hre.network.name);
  
  // Save contract address for frontend
  const fs = require('fs');
  const contractData = {
    address: address,
    network: hre.network.name,
    deployedAt: new Date().toISOString()
  };
  
  fs.writeFileSync(
    './frontend/src/contract-config.json',
    JSON.stringify(contractData, null, 2)
  );
  
  console.log("Contract configuration saved to frontend/src/contract-config.json");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });