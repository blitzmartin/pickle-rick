import { Card, CardBody, Divider, Heading, IconButton, Image, Stack, Text } from '@chakra-ui/react';

export const CustomCard = ({ character, icon, handleToggle }) => {
    const { id, name, image, episode, species, status } = character;
    return (
    <Card bgColor='#e3f5d7' variant="filled" position="relative">
        <CardBody>
            <Image alt={name} src={image} borderRadius='lg'/>
            <Stack mt='6' spacing='2'>
                <Heading fontSize={25} mb="3">{name}</Heading>
                <Divider h="0.4" bg="black"/>
                <Text fontSize='lg'>Was in: {episode.length} episodes</Text>
                <Text fontSize='lg'>Species: {species}</Text>
                <Text fontSize='lg'>Status: {status}</Text>
            </Stack>
            <IconButton 
                position="absolute" 
                right="3" bottom="3" size="md"  
                color='black' bg="white"
                aria-label='favorites' 
                variant="outline"
                onClick={() => { handleToggle(id) }} 
                icon={icon} />
        </CardBody>
    </Card>
    )
}