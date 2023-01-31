// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://eth-mainnet.g.alchemy.com/v2/docs-demo',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  data: {
    id: 1,
    jsonrpc: '2.0',
    method: 'alchemy_getTransactionReceipts',
    params: [
      {
        blockNumber: '0xF1D1C6',
        blockHash: '0xafe39262351a8668512f674a17f4a6c4f84cd5fe7c6392f6c64ae250bec88367'
      }
    ]
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });