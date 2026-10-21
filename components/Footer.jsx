import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react';

const Footer = () => (
    <Box borderTop="1px" borderColor="gray.100" mt="10" py="8" px="5" color="gray.600">
        <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align={{ base: 'center', md: 'flex-start' }}
            gap="6"
            maxW="1000px"
            mx="auto"
            textAlign={{ base: 'center', md: 'left' }}
        >
            <Box>
                <Text fontSize="lg" fontWeight="bold" color="red.400">The Property Co</Text>
                <Text mt="2" fontSize="sm">Homes to rent and buy, in one place.</Text>
            </Box>
            <Stack spacing="1" fontSize="sm">
                <Text fontWeight="semibold" color="gray.700">Contact</Text>
                <Link href="tel:+97145550182" _hover={{ color: 'red.400' }}>+971 4 555 0182</Link>
                <Link href="mailto:hello@thepropertyco.com" _hover={{ color: 'red.400' }}>hello@thepropertyco.com</Link>
                <Text>Office 18, Marina Walk, Dubai Marina, UAE</Text>
            </Stack>
        </Flex>
        <Text textAlign="center" fontSize="sm" mt="8">
            &copy; 2026 The Property Co
        </Text>
    </Box>
);

export default Footer;
