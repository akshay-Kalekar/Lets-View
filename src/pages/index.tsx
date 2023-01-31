import axios from 'axios';
import Head from 'next/head'
import { Inter } from '@next/font/google'

import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

import Search from 'components/search';

const inter = Inter({ subsets: ['latin'] })


console.log("Key is ",)
const settings = {
  apiKey: 'Fwm3aqGn0c6mK1pnDExDf4pEwHWPGU5q',
  network: Network.ETH_MAINNET,
};
console.log("settings",settings)
const alchemy = new Alchemy(settings);


export default function Home() {

  const [blockNumber, setBlockNumber] = useState<any>();
  const [find, setFind] = useState<any>();

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();
  },[find]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search />

      <div className="App">Block Number: {blockNumber}</div>
    </>
  )
}
