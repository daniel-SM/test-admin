import React from 'react';
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit } from './Posts';
import { UserList } from './Users';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} />
      <Resource name="users" list={UserList} />
  </Admin>
);

export default App;