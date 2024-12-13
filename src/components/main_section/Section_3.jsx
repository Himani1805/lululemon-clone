import { Flex, Image, Heading, Box, Text, Link } from '@chakra-ui/react'
import React from 'react'

export default function Section_3() {
  return (
    <Box>
        <Box>
            <Heading>Shop popular categories.</Heading>
        </Box>
        <Flex>
            <Link>Women's</Link>
            <Box>
                <Image src='public\images\ShopCategories_W_Hoodies.webp' />
                <Text>Hoodies & Sweatshirts</Text>
            </Box>
            <Box>
                <Image src='public\images\ShopCategories_W_Pants.webp' />
                <Text>Pants</Text>
            </Box>
            <Box>
                <Image src='public\images\ShopCategories_W_Shirts.webp' />
                <Text>Shirts</Text>
            </Box>
            <Box>
                <Image src='public\images\ShopCategories_W_Shoes.webp' />
                <Text>Shoes</Text>
            </Box>
            <Box>
                <Image src='public\images\ShopCategories_W_Bags.webp' />
                <Text>Bags</Text>
            </Box>
            <Box>
                <Image src='public\images\ShopCategories_W_CoatsJackets.webp' />
                <Text>Coats & Jackets</Text>
            </Box>
        </Flex>
        <Flex>
            <Text><a href="#">Men's</a></Text>
            <Box>
                <Image src='public\images\ShopCategories_M_Hoodies.webp' />
                <Text>Hoodies & Sweatshirts</Text>
            </Box>
            <Box>
                <Image src='public\images\ShopCategories_M_Pants.webp' />
                <Text>Pants</Text>
            </Box>
            <Box>
                <Image src='public\images\ShopCategories_M_Shirts.webp' />
                <Text>Shirts</Text>
            </Box>
            <Box>
                <Image src='public\images\ShopCategories_M_Shoes.webp' />
                <Text>Shoes</Text>
            </Box>
            <Box>
                <Image src='public\images\ShopCategories_M_Bags.webp' />
                <Text>Bags</Text>
            </Box>
            <Box>
                <Image src='public\images\ShopCategories_M_CoatsJackets.webp' />
                <Text>Coats & Jackets</Text>
            </Box>
        </Flex> 
    </Box>
  )
}
