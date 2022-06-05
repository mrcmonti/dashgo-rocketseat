import { Avatar, Box, Text, Flex } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Mauricio Monti</Text>
            <Text color="gray.300">mrcmonti@live.com</Text>
          </Box>
          <Avatar size="md" name="Mauricio Monti" />
        </Flex>
    )
}