import MenuHeader from "@/components/menu";
import withAuth from "../with-auth";

const Header = () => {
  return (
    <MenuHeader />
  )
}

export default withAuth(Header);