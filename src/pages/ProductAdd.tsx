import {Form, Formik} from "formik";
import * as Yup from 'yup';
import {Button} from 'semantic-ui-react'
import KartalTextInput from "../utilities/customFormControls/KartalTextInput.tsx";
import {useState} from "react";
import ProductService from "../services/productService.ts";

function ProductAdd() {
    const initialValues = {name: '', description:'', salePrice: 10, stock:'', criticalStock:'', imageUrl:'', categoryId:''};
    const schema = Yup.object({
        name: Yup.string().required('Product name is required'),
        salePrice: Yup.number().required('Sale price is required').min(1, 'Sale price must be greater than 0')
    });

    const [products, setProducts] = useState([]);

    const productService = new ProductService();
    const onSubmit = (values) => {
        productService.addProduct(values)
            .then(response => {
                console.log(response);
                setProducts(prevProducts => [...prevProducts, response.data]);
            })
            .catch(error => console.error(error.response.data.errorMessage));
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={onSubmit}>
                <Form className={"ui form"}>
                    <KartalTextInput type='text' name='name' placeholder='Product Name'></KartalTextInput>
                    <KartalTextInput type='text' name='description' placeholder='Description'></KartalTextInput>
                    <KartalTextInput type='number' name='salePrice' placeholder='Sale Price'></KartalTextInput>
                    <KartalTextInput type='number' name='stock' placeholder='Stock'></KartalTextInput>
                    <KartalTextInput type='number' name='criticalStock' placeholder='Critical Stock'></KartalTextInput>
                    <KartalTextInput type='text' name='imageUrl' placeholder='Image Url'></KartalTextInput>
                    <KartalTextInput type='text' name='categoryId' placeholder='Category Id'></KartalTextInput>
                    <br/>
                    <Button color='green' type='submit'>Add</Button>
                </Form>
            </Formik>
        </div>
    );
}

export default ProductAdd;