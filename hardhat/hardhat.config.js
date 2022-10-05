require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = "https://smart-smart-layer.ethereum-goerli.discover.quiknode.pro/a2bc3112177151ae269abc6ea379810361651321/";
const PRIVATE_KEY = "a7630a06473c7f4191b4e568cf2cd662209fa557a2d4a134ff04c1512a8c4203";

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
