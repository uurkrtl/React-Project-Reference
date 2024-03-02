import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

import {
    MenuMenu,
    MenuItem,
    Menu, Container,
} from 'semantic-ui-react'
import CartSummary from "./CartSummary.tsx";
import SignedIn from "./SignedIn.tsx";
import SignedOut from "./SignedOut.tsx";
import {useSelector} from "react-redux";

function Navi() {
    const {cartItems} = useSelector(state => state.cart)
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const navigate = useNavigate();
    function handleSignOut() {
        setIsAuthenticated(false)
        navigate("/")
    }
    function handleSignIn() {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <MenuItem
                        name='home' as={NavLink} to="/"
                    />
                    <MenuItem
                        name='messages'
                    />

                    <MenuMenu position='right'>
                        {cartItems.length>0&&<CartSummary/>}
                        {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
                    </MenuMenu>
                </Container>

            </Menu>
        </div>
    );
}

export default Navi;