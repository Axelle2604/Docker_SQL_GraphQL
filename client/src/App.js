import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './services/apolloClient';
import AppContainer from './components/AppContainer';

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <AppContainer />
      </ApolloProvider>
    </div>
  );
}

export default App;
