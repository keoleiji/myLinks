import * as React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Main from './pages/main';
import Product from './pages/product';
import AddLink from './pages/addLink';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#7159c1'
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    textAlign: 'center'
                },
                headerTintColor: '#FFF'
            }}
            initialRouteName="Main">
            <Stack.Screen
                name="Home"
                component={Main}
                options={{
                    title: 'myLinks'
                }}
            />

            <Stack.Screen
                name='Product'
                component={Product}
                options={({ route }) => {
                    return {
                        headerTitle: route.params.product.title,
                    }
                }}
            />
        </Stack.Navigator>
    );
}

function addStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#7159c1'
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center'
            },
            headerTintColor: '#FFF'
        }}
        initialRouteName="AddLink">
            <Stack.Screen
                name='AddLink'
                component={AddLink}
            />
        </Stack.Navigator>
    )
}

export default function App() {
    return (
        <Tab.Navigator
            initialRouteName='home'
            activeColor='#fff'
            inactiveColor='#4d3795'
            barStyle={{
                backgroundColor: '#7159c1'
            }}
        >
            <Tab.Screen
                name="home"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Icon color={color} size={25} name='ios-home' />
                    )
                }}
            />
            <Tab.Screen
                name="addLink"
                component={addStack}
                options={{
                    tabBarLabel: 'Add',
                    tabBarIcon: ({ color }) => (
                        <Icon color={color} size={25} name='ios-add' />
                    )
                }}
            />
        </Tab.Navigator>
    )
};