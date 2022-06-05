import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
    return (
        <Stack
          direction="row"
          mt="8"
          justify="space-between"
          align="center"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de 100
            </Box>
            <Stack direction="row" spacing="2">
            <PaginationItem number={1} isCurrent />
            <PaginationItem number={2} />
            <PaginationItem number={3} />
           
            </Stack>
        </Stack>
    )
}