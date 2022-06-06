import { Avatar, Box, Text, Flex } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
    return (
        <Flex align="center">
          { showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Mauricio Monti</Text>
            <Text color="gray.300">mrcmonti@live.com</Text>
          </Box>
          )}
          <Avatar size="md" name="Mauricio Monti" />
        </Flex>
    )
}