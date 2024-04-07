import React, { createContext, useState } from "react";
import PRODUCTS from '../shop-data.json';

// Create a new context using createContext
export const ProductsContext = createContext({
    products: [],
});

// Create a provider component
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products };

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    );
}
