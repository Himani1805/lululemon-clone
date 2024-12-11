import React from 'react';
import { footer_1 } from '../assets/statics/js/Footer/Footer_1';
import { footer_2 } from '../assets/statics/js/Footer/Footer_2';

import { Box, Flex, Heading, VStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // const sections = [
  //   {
  //     title: "MY ACCOUNT",
  //     links: ["Membership Program", "Sign In", "Register", "Order Status", "Returns"],
  //   },
  //   {
  //     title: "HELP",
  //     links: [
  //       "Ordering",
  //       "Returns and Refunds",
  //       "Shipping and Delivery",
  //       "Payment",
  //       "Redeem Gift Cards",
  //       "Programs and Discounts",
  //       "Services",
  //       "Product and Sizing",
  //       "Stores",
  //        "Account"
  //     ],
  //   },
  //   {
  //     title: "ABOUT US",
  //     links: [
  //       "Our Business",
  //       "Media",
  //       "Investors",
  //       "Strategic Sales",
  //       "Affiliates and Creators",
  //       "Sweat Collective",
  //     ],
  //   },
  //   {
  //     title: "CONTACT US",
  //     links: ["Live Chat", "Contact Us"],
  //   },
  //   {
  //     title: "",
  //     links: ["EMAIL SIGN UP", "CAREERS","LULULEMON X FANATICS","LIKE NEW", "SUSTAINABILITY", "SOCIAL IMPACT", "DIVERSITY AND INCLUSION","LULULEMON APPS", "SITEMAP"],
  //   },
  //   {
  //     title: "",
  //     links: ["GIFT CARDS","STORE LOCATOR",
  //       "Accessibility Statement",
  //       "Privacy Policy",
  //       "Your Privacy Choices",
  //       "California Consumer Privacy Act (CCPA) Opt-Out Icon",
  //       "California Privacy Rights",
  //       "California Transparency Act",
  //     ],
  //   },
  //   {
  //     title: "Follow Us",
  //     links: ["Twitter", "Pinterest", "YouTube", "Facebook", "Instagram"],
  //   },
  // ];

  return (
    <VStack>
      <Flex>
        {
          footer_1.map((el,idx)=>{
            return <Box key={idx} >
              <Box fontWeight={'bold'}>
                <Link to={el.title}>{el.title}</Link>
              </Box>
              {
                el.links.map((e,i)=>{
                  return <Box key={i}>
                     <Link to={e} key={i}>{e}</Link>
                  </Box>
                })
              }
            </Box>
          })
        }
      </Flex>
      <Flex>
      {
          footer_2.map((el,idx)=>{
            return <Box key={idx}>
              <Link to={el.title}>{el.title}</Link>
              {
                el.links.map((e,i)=>{
                  return <Box key={i} fontWeight={idx==0?"bold":"normal"}>
                    <Link to={e} key={i}>{e}</Link>
                  </Box>
                })
              }
            </Box>
          })
        } 
      </Flex>
      <Flex>
      
      </Flex>
    
    </VStack>
  )

}

  
export default Footer;


