import { Container, Text, VStack } from '@chakra-ui/react' 
import { Link } from 'react-router-dom'
import { SimpleGrid } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useProductStore } from "../store/product";
import ProductCard from '../components/ProductCard'

const HomePage = () => {

  const { fetchProducts, products } = useProductStore();

    useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products:", products);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text 
          fontSize={"30"}
          fontWeight={"bold"}
          textAlign={"center"}
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          Current Products 🛍️
        </Text>

        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}

        <SimpleGrid
          columns={{
            base: 1, 
            md: 2, 
            lg: 3 
          }}
          spacing={8}
          width={"full"}
        >
          
        </SimpleGrid>

        {products.length === 0 && (
          <Text fontSize='xl' textAlign={"center"} 
          fontWeight='bold'
          color='gray.500'
        >
          No products available at the moment. Please check back later! 😔 { " "}
          <Link to={'/create'}>
            <Text as='span' color='blue.500' _hover ={{ textDecoration: "underline" }}>
              Create a new product
            </Text>
          </Link>
        </Text>
        )}


        
      </VStack>
    </Container>
  )
}

export default HomePage