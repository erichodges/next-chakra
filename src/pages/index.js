// import Head from 'next/head'
// import Image from 'next/image'

// import { Button } from '@chakra-ui/react';
import { Flex, Heading } from '@chakra-ui/layout';

import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

// import { DarkModeSwitch } from '../src/components/DarkModeSwitch';

export default function Home() {
  return (
    <>
      <Flex>
        <Navbar />
        <Flex
          alignContent="center"
          alignItems="center"
          pos="absolute"
          w="100vw"
          justifyContent="center"
          textAlign="center"
        >
          <Heading as="h1" size="4xl" w="100vw" mt="20%" sx={{ zIndex: '2' }}>
            A Personalized Approach to Insomnia
          </Heading>
        </Flex>
        <Hero />
      </Flex>
    </>
  );
}