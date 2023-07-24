import {SafeAreaView} from 'react-native';
import React from 'react';
import {AppNavigator} from './src/navigator/AppNavigator';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppNavigator />
    </SafeAreaView>
  );
}
