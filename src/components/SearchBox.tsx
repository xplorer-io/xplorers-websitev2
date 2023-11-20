import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBox = () => {
  return (
    <Flex sx={{ width: "100%", justifyContent: "center" }}>
      <InputGroup sx={{ width: { base: "100%", md: "50%" } }}>
        <InputRightElement>
          <IconButton onClick={() => {}} aria-label={"search-button"}>
            <SearchIcon />
          </IconButton>
        </InputRightElement>
        <Input placeholder="Search Accolades" />
      </InputGroup>
    </Flex>
  );
};
export default SearchBox;
