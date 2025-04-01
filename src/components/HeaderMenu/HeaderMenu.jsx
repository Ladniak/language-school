import { useSelector } from "react-redux"
import { selectUserName } from "../../redux/auth/selectors"

import UserMenu from "../UserMenu/UserMenu";
import PrivateMenu from "../PrivateMenu/PrivateMenu";

const HeaderMenu = () => {
    const user = useSelector(selectUserName);

    return (
        <>
            {!user ? <UserMenu /> : <PrivateMenu />}
        </>
    )
}

export default HeaderMenu