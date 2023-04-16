import { Box, Input } from '@chakra-ui/react';

export const SearchBar = ({ value, onChange }) => {
  return (
    <Box>
      <Input minW={400}
      placeholder='Search character'
        value={value}
        onChange={onChange}
      />
    </Box>
  );
}
