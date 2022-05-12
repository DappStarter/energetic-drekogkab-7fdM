require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million prosper include clip swift soup'; 
let testAccounts = [
"0x4e7048d7d8f18cee2ad409be6d8bffe690539a7faf60919ec817c051839535ac",
"0x2d1c878f8795897d0048128b0e9424757722b9929af2a80c07fd1364b428e168",
"0x70660464cf2b31de3dfb8c5442cdef0e0534c2e6e52149f7449f17b952d08110",
"0x24fdd69c117d71d5a32f0dad8124d204d2a779fe17e79ad9390045224bcd473b",
"0x760f43ef36e57fbfd4db55c914ee4dec352a483ef471dc11151088d8a9488948",
"0x5f98511875901a4da0f69a27a210f9655511d432ab663ce66b5e7f0fabf7d3cf",
"0xc9148a6873a95780fb9cf25dfa9827841ebf62491ecebce6f4a8b37b0dd613af",
"0xbda03c711caa765d471798c916fa3f7ab2b03823c7ec9bba94a39f8f37e30f69",
"0xca7f0df51505b5e72301df1e53cbb6f39de3e91b0b443cd7d3d1b59d3743db2b",
"0x4f4ca84219ee16c25e53e04000c290d14c830a6c635f7d7b99e108f1c3563ed5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

