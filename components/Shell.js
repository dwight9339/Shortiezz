import { 
  AppShell, 
  Header, 
  Navbar, 
  Group
} from "@mantine/core";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/dist/frontend";

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
                ? <Link href="/api/auth/logout"><a>Logout</a></Link>
                : <Link href="/api/auth/login"><a>Login</a></Link>
            }
            
          </Group>
        </Header>
      }
    >
      { children }
    </AppShell>
  )
}