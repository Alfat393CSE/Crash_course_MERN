import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, IconButton } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import React, { use } from 'react'

const ProductCard = ({ product }) => {
    const textColor = useColorModeValue('gray.600', 'gray.200');
    const bg = useColorModeValue('white', 'gray.800');
  return (
    <Box
        shadow='lg'
        rounded='lg'
        overflow='hidden'
        transition='all 0.3s'
        _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
        bg={bg}
      >
        <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

        <Box p={4}>
          <Heading as='h3' size='md' mb={2} >{product.name}</Heading>
          <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>${product.price}</Text>

          <HStack spacing={2}>
            <IconButton icon={<EditIcon />} colorScheme='blue' />
            <IconButton icon={<DeleteIcon />} colorScheme='red' />
          </HStack>
        </Box>

      </Box>
  )
}

export default ProductCard