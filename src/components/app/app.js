import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import "./app.css";

import styled from "styled-components";

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    label: "продолжаю изучать react",
                    important: true,
                    like: false,
                    id: 1,
                },
                {
                    label: "Toyota Rav4 xa10",
                    important: false,
                    like: false,
                    id: 2,
                },
                {
                    label: "завтра на работу",
                    important: false,
                    like: false,
                    id: 3,
                },
            ],
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
    }

    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newData = [...before, ...after];

            return {
                data: newData,
            };
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++,
        };
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            };
        });
    }

    onToggleImportant(id) {
        this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id == id);

            const old = data[index];
            const newItem = { ...old, important: !old.important };
            const newArr = [
                ...data.slice(0, index),
                newItem,
                ...data.slice(index + 1),
            ];

            return {
                data: newArr,
            };
        });
    }

    onToggleLiked(id) {
        this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id == id);

            const old = data[index];
            const newItem = { ...old, like: !old.like };
            const newArr = [
                ...data.slice(0, index),
                newItem,
                ...data.slice(index + 1),
            ];

            return {
                data: newArr,
            };
        });
    }

    render() {
        const liked = this.state.data.filter((item) => item.like).length;
        const allPosts = this.state.data.length;

        return (
            <AppBlock>
                <AppHeader liked={liked} allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm onAdd={this.addItem} />
            </AppBlock>
        );
    }
}
