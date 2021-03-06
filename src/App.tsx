import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';

import AuthRoutes from './routes';

// import { Container } from './styles';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <AuthRoutes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;
