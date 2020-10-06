require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note six property gesture brass equal giant'; 
let testAccounts = [
"0xbdaa64baa79923bf1aa9519c047ae8e01d4adea921750934e0d43d2349a85e37",
"0x890d0824eb93efca405be84bb73e6c7549130d744bb000717aa68cf9d650a2e2",
"0xf24ca147b7eedb18e5c7d071c1be74b6ba5921d276224ea89deff61f4a4958ac",
"0x31d4a044afc53442295b0635456cb4f792fff013a170e81a4463c237771c9bfb",
"0x0b305bbe51b2bf8151de9ccad9279030296bd498e95d35fbff4a319d7d57090e",
"0x320a899fa60d70e26bc7c068ba5a26776102142a83f9813313dbf1e4639ea529",
"0x904567d6ce7b4b7d0d364e376a4eb01ecf2d948f7323dd324010c1f3ef0c8b80",
"0x65ce78b4740c0e663488807b044d2c0fdae0f925873018eb4fa1586425a8cf70",
"0xda10d02a7894c6351ef11390d42da9814a50bb1c1a2f426d1294db4af3aa4196",
"0xc68027150392d1e21361bfb0abd3d490c1b6806a82e13561ea81b41f677ff587"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
