// import Head from 'next/head'
// import Image from 'next/image'

import { Button } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/layout';
import Navbar from '../src/components/nav';
// import { DarkModeSwitch } from '../src/components/DarkModeSwitch';

export default function Home() {
  return (
    <>
      <Flex>
        <Navbar />
      </Flex>
    </>
  );
}
