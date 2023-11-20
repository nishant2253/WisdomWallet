/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "N1a-gCpmkKK-XjuxJSDaEJyDcRGnnC6O"; // Replace with your actual Alchemy API key
const MATIC_PRIVATE_KEY = "8d3b0024fd75f8fd0a6eb222981722cb11677f074cadd7a2e24b141b645ea5a4"; // Replace with your actual Matic private key

module.exports = {
  solidity: "0.8.23",

  networks: {
    matic: {
      url: `https://rpc-mumbai.maticvigil.com/`,
      accounts: [MATIC_PRIVATE_KEY],
      gasPrice: 8000000000, // Adjust the gas price as needed
    },
    alchemy: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`, // Replace with the correct Alchemy URL
      accounts: [MATIC_PRIVATE_KEY],
      gasPrice: 8000000000, // Adjust the gas price as needed
    },
  },
};

// * @type import('hardhat/config').HardhatUserConfig
//  */
// require("@nomiclabs/hardhat-waffle");

// const ALCHEMY_API_KEY =
//   "https://eth-ropsten.alchemyapi.io/v2/Tv277_RjwkXDuii_WGiG_X8RL-T56yyG";
// const ROPSTEN_PRIVATE_KEY =
//   "03b0f6f55ffbb14f947243799cdb21854527ee5efe87d0ae7c5613b3bee7d0b6";
// // module.exports = {
// //   solidity: "0.8.9",

// //   networks: {
// //     ropsten: {
// //       url: "https://eth-ropsten.alchemyapi.io/v2/Tv277_RjwkXDuii_WGiG_X8RL-T56yyG",
// //       accounts: [
// //         "03b0f6f55ffbb14f947243799cdb21854527ee5efe87d0ae7c5613b3bee7d0b6",
// //       ],
// //     },
// //   },
// // };
// // //0x89002c933dd68b737b7836d0656858Ef0f2A4aCa
// // //0x2E854489Bd80B357e6F9f9A3Ba0626457B0A36C8
// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */

// require("@nomiclabs/hardhat-ethers");

// module.exports = {
//   solidity: "0.8.7",
//   defaultNetwork: "ropsten",
//   networks: {
//     hardhat: {},
//     ropsten: {
//       url: ALCHEMY_API_KEY,
//       accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
//     },
//   },
// };