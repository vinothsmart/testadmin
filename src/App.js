import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList  } from './posts';
import { UserList } from './users';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={EditGuesser} />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;

