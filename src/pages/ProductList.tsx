import {useState, useEffect} from 'react';

import {
    TableRow,
    TableHeaderCell,
    TableHeader,
    TableFooter,
    TableCell,
    TableBody,
    MenuItem,
    Icon,
    Label,
    Menu,
    Table,
} from 'semantic-ui-react'
import ProductService from "../services/productService.ts";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../store/actions/cartActions.tsx";


function ProductList() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const productService = new ProductService();
        productService.getProducts().then((result) => setProducts(result.data));
    }, [])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <div>
            <Table celled>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Product Name</TableHeaderCell>
                        <TableHeaderCell>Description</TableHeaderCell>
                        <TableHeaderCell>Price</TableHeaderCell>
                        <TableHeaderCell>Stock</TableHeaderCell>
                        <TableHeaderCell>Image Url</TableHeaderCell>
                        <TableHeaderCell>Category</TableHeaderCell>
                        <TableHeaderCell>Active/Passive</TableHeaderCell>
                        <TableHeaderCell></TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {
                        products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell><Link to={`/products/${product.id}`}>{product.name}</Link></TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell>{product.salePrice}</TableCell>
                                <TableCell>{product.stock}</TableCell>
                                <TableCell>{product.imageUrl}</TableCell>
                                <TableCell>{product.categoryName}</TableCell>
                                <TableCell>{product.active ? <Label color='green'>Active</Label> : <Label color='red'>Passive</Label>}</TableCell>
                                <TableCell>
                                    <Menu>
                                        <MenuItem onClick={() => handleAddToCart(product)}>
                                            <Icon name='cart plus'/>
                                        </MenuItem>
                                    </Menu>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>

                <TableFooter>
                    <TableRow>
                        <TableHeaderCell colSpan='16'>
                            <Menu floated='right' pagination>
                                <MenuItem as='a' icon>
                                    <Icon name='chevron left' />
                                </MenuItem>
                                <MenuItem as='a'>1</MenuItem>
                                <MenuItem as='a'>2</MenuItem>
                                <MenuItem as='a'>3</MenuItem>
                                <MenuItem as='a'>4</MenuItem>
                                <MenuItem as='a' icon>
                                    <Icon name='chevron right' />
                                </MenuItem>
                            </Menu>
                        </TableHeaderCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
}

export default ProductList;