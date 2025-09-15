import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";


const HomePage = () => {
	const { fetchProducts, products } = useProductStore();

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);
	console.log("products", products);

	return (
		<Container maxW='container.xl' py={12}>
			<VStack spacing={8}>

        <HStack spacing={4} justify='center'>
					<Image src={logo} alt='Brand Logo' boxSize='60px' borderRadius='full' />
					<Text
						fontSize={"3xl"}
						fontWeight={"extrabold"}
						bgGradient={"linear(to-r, cyan.400, blue.500)"}
						bgClip={"text"}
					>
						Welcome to Our Store 🚀
					</Text>
				</HStack>

				<Text
	fontSize={{ base: "md", md: "lg", lg: "xl" }}
	color="gray.600"
	maxW="3xl"
	textAlign="center"
	lineHeight="tall"
	fontWeight="medium"
	letterSpacing="wide"
>
	Discover the{" "}
	<Text
		as="span"
		bgGradient="linear(to-r, cyan.400, blue.500)"
		bgClip="text"
		fontWeight="semibold"
	>
		latest products
	</Text>{" "}
	carefully curated to bring you{" "}
	<Text
		as="span"
		color="blue.600"
		fontWeight="semibold"
	>
		quality
	</Text>
	,{" "}
	<Text
		as="span"
		color="cyan.600"
		fontWeight="semibold"
	>
		style
	</Text>
	, and{" "}
	<Text
		as="span"
		color="teal.600"
		fontWeight="semibold"
	>
		innovation
	</Text>
	. We aim to provide the{" "}
	<Text as="span" fontWeight="semibold" color="purple.600">
		best shopping experience
	</Text>{" "}
	— browse our collection below!
</Text>



        
				<Text
					fontSize={"30"}
					fontWeight={"bold"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
					textAlign={"center"}
				>
					Current Products 🚀
				</Text>

				<SimpleGrid
					columns={{
						base: 1,
						md: 2,
						lg: 3,
					}}
					spacing={10}
					w={"full"}
				>
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</SimpleGrid>

				{products.length === 0 && (
					<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No products found 😢{" "}
						<Link to={"/create"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Create a product
							</Text>
						</Link>
					</Text>
				)}
			</VStack>
		</Container>
	);
};
export default HomePage;