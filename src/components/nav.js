import { Flex } from '@chakra-ui/layout';

const Navbar = () => (
  <Flex
    w="100vw"
    absolute
    top="0"
    left="0"
    height="80px"
    justify="space-between"
    align="center"
    padding="0, 2rem"
  >
    <div>NXT</div>
    <div>Home About Contact</div>
  </Flex>
);

export default Navbar;

// const Nav = styled.nav`
//   height: 80px;
//   background: #000;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   color: #fff;
// `;
