import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SignIn } from './Src/Screens';

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <SignIn />
    </>
  );
};

export default App;
