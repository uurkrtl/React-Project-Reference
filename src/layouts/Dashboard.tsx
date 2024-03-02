//import React from 'react';

import Categories from "./Categories.tsx";
import ProductList from "../pages/ProductList.tsx";
import { GridRow, GridColumn, Grid} from 'semantic-ui-react'
import {Route, Routes} from "react-router-dom";
import ProductDetail from "../pages/ProductDetail.tsx";
import CartDetail from "../pages/CartDetail.tsx";
import ProductAdd from "../pages/ProductAdd.tsx";

function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <Categories />
                    </GridColumn>
                    <GridColumn width={12}>
                        <Routes>
                            <Route exact path="/" element={<ProductList />} />
                            <Route exact path="/products" element={<ProductList />} />
                            <Route path="/products/:id" element={<ProductDetail />} />
                            <Route path="/cart" element={<CartDetail />} />
                            <Route path="/product/add" element={<ProductAdd />} />
                        </Routes>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    );
}

export default Dashboard;