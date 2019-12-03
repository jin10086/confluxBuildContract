const ConfluxWeb = require('conflux-web');
const confluxWeb = new ConfluxWeb('http://testnet-jsonrpc.conflux-chain.org:12537');

//创建地址
let a = confluxWeb.cfx.accounts.create();
console.log("pub_key:", a.address.toLowerCase(), '\n', "priv_key:", a.privateKey)