// import Head from 'next/head'
// import Image from 'next/image'

// import { Button } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/layout';
import Hero from '../src/components/Hero';
import Navbar from '../src/components/Navbar';
// import { DarkModeSwitch } from '../src/components/DarkModeSwitch';

export default function Home() {
  return (
    <>
      <Flex>
        <Navbar />
        <Hero />
      </Flex>
    </>
  );
}
