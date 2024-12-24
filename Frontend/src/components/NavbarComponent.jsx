import { Navbar, NavbarItem, NavbarLink } from "@shadcn/ui";

function NavbarComponent() {
  return (
    <Navbar>
      <NavbarItem>
        <NavbarLink href="/">Home</NavbarLink>
      </NavbarItem>
      <NavbarItem>
        <NavbarLink href="/about">About</NavbarLink>
      </NavbarItem>
      <NavbarItem>
        <NavbarLink href="/services">Services</NavbarLink>
      </NavbarItem>
      <NavbarItem>
        <NavbarLink href="/contact">Contact</NavbarLink>
      </NavbarItem>
    </Navbar>
  );
}

export default NavbarComponent;
