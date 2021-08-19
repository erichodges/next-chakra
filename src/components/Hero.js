// import { Flex } from '@chakra-ui/layout';
import Image from 'next/image';

export default function Hero() {
  return (
    <div pos="relative" sx={{ zIndex: '-1' }}>
      <Image
        src="https://res.cloudinary.com/dn3baky3u/image/upload/v1580246844/gatsby-cloudinary/evora-gt-side.jpg"
        alt="car"
        width={2400}
        height={1200}
      />
    </div>
  );
}
