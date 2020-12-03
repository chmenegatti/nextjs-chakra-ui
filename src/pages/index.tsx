import React from 'react';
import { Box, Grid } from '@chakra-ui/react';
import { Banner } from '../components/Banner';
import Repositories from '../components/Repositories';
import { GetStaticProps } from 'next';

interface IRepositories {
  id: string;
  language: string;
  pushed_at: string;
  description: string;
  name: string;
  size: string;
  html_url: string;
}

interface IIndexPage {
  repositories: IRepositories[];
}

const IndexPage: React.FC<IIndexPage> = ({ repositories }) => {

  return (
    <Box as="main">
      <Banner />
        <Box as="section" padding={2} maxW="1024px" marginX="auto">
          <Grid templateColumns={[ "auto", "repeat(auto-fill, minmax(50%, 1fr))"]}>
          { repositories.map(repo => (
            <Repositories
              key={repo.id}
              description={repo.description}
              license={repo.language === '' ? 'JavaScript' : 'JavaScript'}
              name={repo.name}
              pushed_at={repo.pushed_at}
              size={repo.size}
              url={repo.html_url}
            />
          ))}
          </Grid>
        </Box>
    </Box>
  );
};

export default IndexPage;

export const getStaticProps:GetStaticProps<IIndexPage> = async () => {
  const baseUrl = 'https://api.github.com/users/chmenegatti/repos';
  const response = await fetch(baseUrl);
  const repositories = await response.json();

  if (!repositories) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      repositories,
    },
    revalidate: 600,
  }
}


