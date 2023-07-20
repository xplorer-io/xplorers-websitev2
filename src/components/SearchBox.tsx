import { Box, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBox = () => {
  return (
    <Box sx={{ border: "1px solid blue", width: "100%" }}>
      <InputGroup>
        <InputLeftAddon
          // eslint-disable-next-line react/no-children-prop
          children={<SearchIcon />}
        />
        <Input placeholder="Search" />
      </InputGroup>
    </Box>
  );
};
export default SearchBox;
