---
layout: post
title: 2017-09-18-yn42mo
tags: typescript
---

> 笔者的一些看法


## 目录结构

```javascript
// 目录结构
todos
    - constants    // 常量定义
    - view
        - index.js // 默认引用
        - OTHER folders~~
    - model
    - types // especially useful if we are using TypeScript
```
### 
### 使用Types
```markup
// types/index.js

export interface ITodoState {
    todos: ITodo[];
}

interface IToodo {
    content: string;
    completed: boolean;
}
```
## 
## Index and constants
> The public API and constants.


## Reducers 
> Updates module state.


## Selectors 
> Queries module state.


使用`reselect`搭配`lodash`
```javascript
// todos/selectors.js
import { createSelector } from 'reselect';
import _ from 'lodash';
import { NAME } from './constants';
import { filterActive, filterCompleted } from './model';

export const getAll = state => state[NAME];

export const getCompleted = _.compose(filterCompleted, getAll);

export const getActive = _.compose(filterActive, getAll);

export const getCounts = createSelector(
  getAll,
  getCompleted,
  getActive,
  (allTodos, completedTodos, activeTodos) => ({
    all: allTodos.length,
    completed: completedTodos.length,
    active: activeTodos.length
  })
);
```

