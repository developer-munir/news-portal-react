import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoriesNews = useLoaderData();
    console.log(categoriesNews)
    return (
        <div>
            <h1>This Category has :{categoriesNews.length} news</h1>
            {
                categoriesNews.map(news=><NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;