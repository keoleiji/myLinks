import React from 'react';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content"/>
            <Routes />
        </NavigationContainer>
    )
};

// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';

// export default function App() {
//   return (
//     <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
//   );
// }

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
