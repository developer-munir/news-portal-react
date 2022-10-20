import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const categoriesNews = useLoaderData();
    console.log(categoriesNews)
    return (
        <div>
            <h1>this is Category{categoriesNews.length}</h1>
        </div>
    );
};

export default Category;