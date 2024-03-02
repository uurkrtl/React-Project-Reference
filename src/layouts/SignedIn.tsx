import {Dropdown, Image, Menu} from "semantic-ui-react";

function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/68209498?v=4"/>
                <Dropdown pointing="top left" text="Ugur">
                    <Dropdown.Menu>
                        <Dropdown.Item text="My account" icon="info"/>
                        <Dropdown.Item onClick={props.signOut} text="Logout" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>

        </div>
    );
}

export default SignedIn;