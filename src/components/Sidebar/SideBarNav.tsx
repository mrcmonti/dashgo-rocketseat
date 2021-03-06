import { Box, Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav() {
    return (
        <Stack spacing="12" align="flex-start">
        <Box>
          <NavSection title="Geral">
            <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
            <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>
          </NavSection>
          <NavSection title="Automação">
            <NavLink icon={RiInputMethodLine} href="#">Formulários</NavLink>
            <NavLink icon={RiGitMergeLine} href="#">Automação</NavLink>
          </NavSection>
        </Box>
      </Stack>
    )
}