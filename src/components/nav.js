import { Flex, Heading, Text } from '@chakra-ui/layout';

const Navbar = () => (
  <Flex
    w="100vw"
    absolute
    top="0"
    left="0"
    height="80px"
    justify="space-between"
    align="center"
    pl="2rem"
    pr="2rem"
  >
    <Heading fontSize="2xl">Sleep Deep Yoga</Heading>

    <Flex fontSize="lg">
      <Text>Home</Text>
      <Text pl="2rem">About</Text>
      <Text pl="2rem">Contact</Text>
    </Flex>
  </Flex>
);

export default Navbar;
