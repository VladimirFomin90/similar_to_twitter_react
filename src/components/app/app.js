import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import './app.css';

const App = () => {

    const data = [
        {label: 'продолжаю изучать react', important: true},
        {label: 'Toyota Rav4 XA10', important: false},
        {label: 'завтра на работу', important: false}
    ];

    return (

        <div className="app">

            <AppHeader />
            <div className="search-panel d-flex">
            <SearchPanel />
            <PostStatusFilter />
            </div>
            <PostList posts={data}/>
            <PostAddForm />

        </div>
    
    )
};

export default App;
