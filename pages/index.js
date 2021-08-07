// import Head from 'next/head'
// import Image from 'next/image'

import { Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import Navbar from '../src/components/nav';
// import { DarkModeSwitch } from '../src/components/DarkModeSwitch';

export default function Home() {
  return (
    <>
      <Flex>
        <Navbar />
      </Flex>
      <Button variant="solid" color="blue.100" bgColor="darkgray" size="lg">
        yoddle de
      </Button>
    </>
  );
}
