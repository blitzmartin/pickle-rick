import { Box } from '@chakra-ui/react'

export const Header = () => {
    return (
        <Box 
            bgImage="url('/public/portal.jpg)"
            bgPosition="center"
            bgRepeat="no-repeat"
            minH={500}
        >
            <Header>The Pickle Rick Project</Header>
        </Box>
    )
}
