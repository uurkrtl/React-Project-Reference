import {Button, Menu} from "semantic-ui-react";

function SignedOut(props) {
    return (
        <div>
            <Menu.Item>
                <Button primary onClick={props.signIn}>Login</Button>
                <Button primary style={{marginLeft: '0.5em'}}>Register</Button>
            </Menu.Item>
        </div>
    );
}

export default SignedOut;