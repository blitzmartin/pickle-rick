import { Card, CardBody, CardFooter, Divider, Heading, IconButton, Image, Stack, Text } from '@chakra-ui/react';

export const CustomCard = ({ character, icon, handleToggle }) => {
    const { id, name, image, episode, species, status } = character;
    return (
    <Card w='sm' bg="grey.800" variant="outline">
        <CardBody>
            <Image alt={name} src={image} borderRadius='lg'/>
            <Stack mt='6' spacing='3'>
                <Heading size='md'>{name}</Heading>
                <Text>Was in: {episode.length} episodes</Text>
                <Text color='blue.600' fontSize='2xl'>Species: {species}</Text>
                <Text color='blue.600' fontSize='2xl'>Status: {status}</Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <IconButton colorScheme='blue' onClick={() => { handleToggle(id) }} icon={icon} />
        </CardFooter>
    </Card>
    )
}