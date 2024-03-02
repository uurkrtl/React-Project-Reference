//import React from 'react';

import {Dropdown, DropdownItem, DropdownMenu, Label} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

function CartSummary() {
    const {cartItems} = useSelector(state => state.cart)
    return (
        <div>
            <Dropdown item text='Your Cart'>
                <DropdownMenu>
                    {
                        cartItems.map((cartItem) => (
                            <DropdownItem key={cartItem.product.id}>
                                {cartItem.product.name}
                                <Label>{cartItem.quantity}</Label>
                            </DropdownItem>
                        ))
                    }
                    <Dropdown.Divider/>
                    <DropdownItem as={NavLink} to="/cart">Go to Cart</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}

export default CartSummary;