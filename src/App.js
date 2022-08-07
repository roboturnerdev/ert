import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Party } from './Party';

const CLIENT_ID = `${process.env.REACT_APP_WCL_CLIENT_ID}`;
const CLIENT_SECRET = `${process.env.REACT_APP_CLIENT_SECRET}`;
const WCL_TOKEN = `${process.env.REACT_APP_WCL_TOKEN}`;
const options = {
  url: 'https://www.warcraftlogs.com/api/v2/client',
  method: 'post',
  headers: {
    'Authorization': `Bearer ${WCL_TOKEN}`
  },
  data: {
    query: `
      query {
        characterData {
          characters(guildID:484557) {
            data {
              id
              name
            }
          }
        }
      }
    `
  }
};
const axiosInstance = axios.request({
  url: '/oauth/token',
  method: 'post',
  baseURL: 'https://www.warcraftlogs.com/',
  auth: {
    username: CLIENT_ID,    // client_id
    password: CLIENT_SECRET // client_secret
  },
  data: {
    "grant_type": "client_credentials"
  }
}).then(response => {
  console.log('Response from request with client credentials to retrieve access token: ');
  console.log(response.data.access_token);
});

function App() {
  // WCL Test Guild Query
  axios.request(options).then((response) => {
    console.log('Response from query with bearer token sent: ');
    console.log(response.data);
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <Party />
    </DndProvider>
  );
}

export default App;
