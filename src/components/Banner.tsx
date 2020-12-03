import React from 'react';
import { Box, Icon, IconButton, HStack, Heading, Link } from '@chakra-ui/react';
import DarkModeSwitch from './DarkModeSwitcher';
import { FiGithub  } from 'react-icons/fi';
import { SiFacebook } from 'react-icons/si'

export const Banner:React.FC = () => {
  return (
    <Box bg="cyan.500" color="grey.800" padding="2">
      <HStack
        alignItems="center"
        justifyContent="space-between"
        maxW="960px"
        marginX="auto"
      >
        <Heading as="h4" fontSize="lg" >
          My Git Repos
        </Heading>
        <HStack direction="row">
          <Link href="https://github.com/chmenegatti">
            <IconButton aria-label="My GitHub" icon={ <Icon as={FiGithub} /> } />
          </Link>
          <IconButton aria-label="My Discord" icon={ <Icon as={SiFacebook} /> } />
          <DarkModeSwitch />
        </HStack>
      </HStack>
    </Box>
  )
}

