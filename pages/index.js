import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList} from '../lib/data';
import React from 'react';
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';
import Header from '../components/Header';
import {
  Box,
} from '@chakra-ui/react';




export async function getStaticProps() {
  const allData = await getSortedList();
  return {
    props: {
      allData
    },

    revalidate: 60
  }
}

export default function Home({ allData }) {
  return (
      <Layout home>
          <Header 
         />
        <h1>posts:</h1>
        <div className="list-group">
          {allData.map(({ id, name }) => (
            <Link key={id} href={`/${id}`}>
              <a className="list-group-item list-group-item-action">{name}</a>
            </Link>
          ))}
        </div>
      </Layout>
  );
}
