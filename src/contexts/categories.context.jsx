import React, { createContext, useState, useEffect } from "react";

import { getCategoriedAndDocuments } from "../utils/firebase/firebase.utils.js";


// Create a new context using createContext
export const CategoriesContext = createContext({
    categoryMaps: {},
});

// Create a provider component
export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriedAndDocuments();
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap();
    }, [])

    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
}
