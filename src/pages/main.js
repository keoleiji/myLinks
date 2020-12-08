import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../services/api';
import styles from './styles';

export default class Main extends Component {

    state = {
        productInfo: {},
        docs: [],
        pages: 1,
        refreshing: false,
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        this.setState(
            {
                docs: [... this.state.docs, ...docs],
                productInfo,
                page,
                refreshing: false,
            }
        );
    };

    loadMore = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.page) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    handleRefresh = () => {
        this.setState({
            docs: '',
            refreshing: true
        }, () => {
            this.loadProducts();
        })
    };

    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <TouchableOpacity
                style={styles.productButton}
                onPress={() => {
                    this.props.navigation.navigate('Product', { product: item });
                }}
            >
                <Text style={styles.productButtonText}>
                    Acessar
                </Text>
            </TouchableOpacity>
        </View>
    )

    renderEmptyComponent(){
        return(
            <View style={styles.container}>
                <Text style={styles.emptyList}>
                    Sua lista de links está vazia! Adicione já!
                </Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.docs}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.1}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                    ListEmptyComponent={this.renderEmptyComponent}
                />
            </View>
        );
    }

}