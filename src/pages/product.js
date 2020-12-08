import React, { Component } from 'react';
import { Text } from 'react-native';
import { WebView } from 'react-native-webview';

const Product = ({ route }) => (
    // <Text>Product</Text>
    <WebView source={{ uri: route.params.product.url }} />
);
export default Product;

// Product.navigationOption = ({ navigation }) => ({
//     title: navigation.state.params.product.title,
//     headerStyle: {
//         backgroundColor: '##DA552F'
//     },
//     headerTitleStyle: {
//         fontWeight: 'bold'
//     },
//     headerTintColor: '#FFF'
// });

