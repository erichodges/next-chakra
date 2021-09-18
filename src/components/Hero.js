import { Flex, Heading } from '@chakra-ui/layout';

// import { Flex } from '@chakra-ui/layout';
import Image from 'next/image';

export default function Hero() {
  return (
    <section>
      <Flex
        pos="absolute"
        top="0"
        left="0"
        w="100vw"
        h="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          pos="relative"
          margin="auto"
          maxWidth="70%"
          as="h1"
          size="4xl"
          w="70%"
          sx={{ zIndex: '2' }}
        >
          A Personalized Approach to Insomnia
        </Heading>
      </Flex>
      <div pos="relative" sx={{ zIndex: '-1' }}>
        <Image
          src="https://res.cloudinary.com/dn3baky3u/image/upload/v1631656911/SDY/ocean.jpg"
          alt="Image of an ocean"
          width={7149}
          height={4771}
        />
      </div>
    </section>
  );
}
