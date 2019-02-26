if (!process.env.default_config) {
    process.env.default_config = "../config/config.json";
}
var config = require(process.env.default_config);
const BncClient =require ("@binance-chain/javascript-sdk")
const crypto = require("@binance-chain/javascript-sdk")

const mnemonic = "test create account"


const getClient = async () => {
  const client = new BncClient(config.chainUrl)
  await client.initChain()

  return client
}

const createAccount = async () => {
  const client = await getClient()
  const res = client.createAccount()
  console.log(res.address)
  console.log(res.privateKey)
}

createAccount()

//tbnb1l9lgcye5xcmcj8agw39jk66jrtft94u59s6qr8
//8ec3a1a3ed1b6106a66b74df28812328f342ba94d3303ab3d3f98174edad4e5d
