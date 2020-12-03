import React from "react";
import { Box, Badge, useColorMode, IconButton, Grid, Link } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons";

interface IRepos {
  license: string;
  pushed_at: string;
  description: string;
  name: string;
  size: string;
  url: string;
}

const Repositories:React.FC<IRepos> = ({ description, license, pushed_at, name, size, url }: IRepos) => {

  const { colorMode, } = useColorMode();

  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      marginX="auto"
      mt={4}
    >
      <Grid templateColumns={"11fr 1fr"} >
        <Box p="4" maxWidth="90%">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="cyan" textTransform="capitalize">
              {license}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              fontSize="xs"
              ml="2"
            >
              {pushed_at}
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
          >
            {description}
          </Box>

          <Box>
            {name}
          </Box>

          <Box d="flex" mt="2" alignItems="center">
            Tamanho
            <Box as="span" ml="2" color="gray.600" fontSize="md">
              {size} kbytes
            </Box>
          </Box>
        </Box>
        <Link href={url}>
          <IconButton
            icon={<ChevronRightIcon />}
            aria-label="Visitar"
            borderRadius="0"
            fontSize="xl"
            colorScheme="cyan"
            h="100%"
            color={ colorMode === 'dark' ? 'black' : 'white' }
          />
        </Link>
      </Grid>
    </Box>
  )
}

export default Repositories;
