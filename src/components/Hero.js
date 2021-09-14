import { Flex, Heading } from '@chakra-ui/layout';

// import { Flex } from '@chakra-ui/layout';
import Image from 'next/image';

export default function Hero() {
  return (
    <section>
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
      <div pos="relative" sx={{ zIndex: '-1' }}>
        <Image
          src="https://res.cloudinary.com/dn3baky3u/image/upload/v1580246844/gatsby-cloudinary/evora-gt-side.jpg"
          alt="car"
          width={2400}
          height={1200}
        />
      </div>
    </section>
  );
}
