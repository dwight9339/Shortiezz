import { 
  AppShell, 
  Header, 
  Navbar, 
  Group
} from "@mantine/core";
import { useUser } from "@auth0/nextjs-auth0/dist/frontend";
import NavbarContents from "./NavbarContents";

export default ({ children }) => {
  const { user } = useUser();

  return (
    <AppShell
      header={
        <Header height={60}>
          <Group position="apart">
            <div></div>
            <h1>Shortiezzz</h1>
            {
              user 
                ? <a href="/api/auth/logout">Logout</a>
                : <a href="/api/auth/login">Login</a>
            }
            
          </Group>
        </Header>
      }
      navbar={
        user
          ? <Navbar
            width={{
              base: 300
            }}
          >
            <NavbarContents user={user}   />
          </Navbar>
          : null
      }
    >
      { children }
    </AppShell>
  )
}