import React from 'react';
import { Box, Container, Heading, VStack, HStack, Image, Text, Input, IconButton, Flex, Spacer } from '@chakra-ui/react';
import { SearchIcon, ShoppingCartIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex mb={4} alignItems="center">
        <Heading as="h1" size="lg">Clothing Store</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Input placeholder="Search for products" size="md" />
          <IconButton icon={<SearchIcon />} />
          <Link to="/cart">
            <IconButton icon={<ShoppingCartIcon />} />
          </Link>
        </HStack>
      </Flex>
      <VStack spacing={8}>
        <Box w="100%">
          <Heading as="h2" size="md" mb={4}>Featured Products</Heading>
          <HStack spacing={4} overflowX="scroll">
            {/* Replace with dynamic product data */}
            <Box w="200px" h="300px" bg="gray.200">
              <Image src="https://via.placeholder.com/200" alt="Product 1" />
              <Text>Product 1</Text>
              <Text>$10.00</Text>
            </Box>
            <Box w="200px" h="300px" bg="gray.200">
              <Image src="https://via.placeholder.com/200" alt="Product 2" />
              <Text>Product 2</Text>
              <Text>$20.00</Text>
            </Box>
            <Box w="200px" h="300px" bg="gray.200">
              <Image src="https://via.placeholder.com/200" alt="Product 3" />
              <Text>Product 3</Text>
              <Text>$30.00</Text>
            </Box>
          </HStack>
        </Box>
        <Box w="100%">
          <Heading as="h2" size="md" mb={4}>Categories</Heading>
          <HStack spacing={4} overflowX="scroll">
            {/* Replace with dynamic category data */}
            <Box w="200px" h="100px" bg="gray.200">
              <Text>Category 1</Text>
            </Box>
            <Box w="200px" h="100px" bg="gray.200">
              <Text>Category 2</Text>
            </Box>
            <Box w="200px" h="100px" bg="gray.200">
              <Text>Category 3</Text>
            </Box>
          </HStack>
        </Box>
        <Box w="100%">
          <Heading as="h2" size="md" mb={4}>New Arrivals</Heading>
          <HStack spacing={4} overflowX="scroll">
            {/* Replace with dynamic product data */}
            <Box w="200px" h="300px" bg="gray.200">
              <Image src="https://via.placeholder.com/200" alt="Product 4" />
              <Text>Product 4</Text>
              <Text>$40.00</Text>
            </Box>
            <Box w="200px" h="300px" bg="gray.200">
              <Image src="https://via.placeholder.com/200" alt="Product 5" />
              <Text>Product 5</Text>
              <Text>$50.00</Text>
            </Box>
            <Box w="200px" h="300px" bg="gray.200">
              <Image src="https://via.placeholder.com/200" alt="Product 6" />
              <Text>Product 6</Text>
              <Text>$60.00</Text>
            </Box>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Homepage;