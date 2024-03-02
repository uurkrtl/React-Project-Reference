import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {
    CardMeta,
    CardHeader,
    CardGroup,
    CardDescription,
    CardContent,
    Button,
    Card,
    Image,
} from 'semantic-ui-react'
import ProductService from "../services/productService.ts";

function ProductDetail() {
    const {id} = useParams()

    const [product, setProduct] = useState({});
    useEffect(() => {
        const productService = new ProductService();
        productService.getByIdProduct(id).then((result) => setProduct(result.data));
    }, [])

    return (
        <div>
            <CardGroup>
                <Card fluid>
                    <CardContent>
                        <Image
                            floated='right'
                            size='mini'
                            src='/images/avatar/large/steve.jpg'
                        />
                        <CardHeader>{product.name}</CardHeader>
                        <CardMeta>{product.categoryName}</CardMeta>
                        <CardDescription>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </CardDescription>
                    </CardContent>
                    <CardContent extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </CardGroup>
        </div>
    );
}

export default ProductDetail;