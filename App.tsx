/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Hello World'}
          component={() => {
            return (
              <View style={{flex: 1}}>
                <Text
                  style={{
                    height: 100,
                    backgroundColor: 'red',
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                  }}>
                  Hello world
                </Text>
              </View>
            );
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
