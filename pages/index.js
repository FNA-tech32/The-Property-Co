import { Flex, Box } from '@chakra-ui/react';
import Property from '../components/Property';
import { searchListings } from '../utils/listings';
import HeroSection from '../components/HeroSection';
import CardSection from '../components/CardSection';
import Banner from '../components/Banner';

const details = [
  {
    id: 1,
    title: 'Renting Made Simple',
    description: 'Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device.',
    imgUrl: 'https://images.unsplash.com/photo-1592595896616-c37162298647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
  },
  {
    id: 2,
    title: 'Tips for Renters',
    description: 'Find answers to all of your renting questions with the best renter’s guide in the galaxy.',
    imgUrl: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
  },
];

const Home = ({ propertiesForSale, propertiesForRent }) => (
  <Box>
    <HeroSection />

    {details.map((item) => (
      <CardSection key={item.id} item={item} inverted={item.id % 2 == 0 && true} />
    ))}

    <Banner
      purpose='RENT A HOME'
      title1='Rental Homes for'
      title2='Everyone'
      desc1=' Explore from Apartments, builder floors, villas'
      desc2='and more'
      buttonText='Explore Renting'
      linkName='/search?purpose=for-rent'
      imageUrl='https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
      passedId="rental-section"
    />

    <Flex flexWrap='wrap' justifyContent='center' gap={5}>
      {propertiesForRent.map((property) => <Property property={property} key={property.id} renting={true} />)}
    </Flex>
    <Banner
      purpose='BUY A HOME'
      title1=' Find, Buy & Own Your'
      title2='Dream Home'
      desc1=' Explore from Apartments, land, builder floors,'
      desc2=' villas and more'
      buttonText='Explore Buying'
      linkName='/search?purpose=for-sale'
      imageUrl='https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80'
      passedId="sale-section"
    />
    <Flex flexWrap='wrap' justifyContent='center' gap={5}>
      {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
    </Flex>
  </Box>
);

export async function getStaticProps() {
  return {
    props: {
      propertiesForSale: searchListings({ purpose: 'for-sale' }).slice(0, 6),
      propertiesForRent: searchListings({ purpose: 'for-rent' }).slice(0, 6),
    },
  };
}

export default Home;