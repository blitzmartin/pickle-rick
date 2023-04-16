import { Container, Heading } from '@chakra-ui/react'

export const Header = () => {
    const style = {
        backgroundImage:  "url('/images/portal.jpg')",
        backgroundSize: "cover"
    }
    return (
        <Container style={style} minH={140} maxW='full' align="center" pt={10}>
            <Heading fontSize={40} color="white">The Pickle Rick Project</Heading>
        </Container>
    )
}
