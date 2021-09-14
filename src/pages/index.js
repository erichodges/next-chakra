// import Head from 'next/head'
// import Image from 'next/image'

// import { Button } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/layout';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

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
