import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements'
import styles from './styles';
import axios from 'axios';
import api from '../services/api';

export default class AddLink extends Component {

    // constructor(props){
    //     super(props)

    //     this.state = {
    //         title: 'l',
    //         description: 'l',
    //         url: 'l'
    //     }
    // }

    state = {
        title: '',
        description: '',
        url: ''
    }

    changeHandler = (e) => {
        this.setState = ({ [e.target.ref]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        // console.log(e)

        axios.post('http://192.168.0.21:3001/api/products', this.state)
            .then(res => {
                this.setState({
                    title: '',
                    description: '',
                    url: ''
                })
                console.log(this.state)
            })
            .catch(error => {
                // console.log(error)
            })
    }

    render() {
        // const { title, description, url } = this.state
        return (
            <View style={styles.form}>
                <Text style={styles.linkTitle}>
                    Title
                </Text>
                <Input
                    type='text'
                    ref='title'
                    value={this.state.title}
                    // onChange={this.changeHandler}
                    onChangeText={(text) => this.setState({ title: text })}
                    style={styles.linkTitleInput}
                    placeholder='Insert title' />
                <Text style={styles.linkTitle}>
                    Description
                </Text>
                <Input
                    type='text'
                    ref='description'
                    value={this.state.description}
                    // onChange={this.changeHandler}
                    onChangeText={(text) => this.setState({ description: text })}
                    style={styles.linkTitleInput}
                    placeholder='Insert description' />
                <Text style={styles.linkTitle}>
                    URL
                </Text>
                <Input
                    type='text'
                    ref='url'
                    value={this.state.url}
                    // onChange={this.changeHandler}
                    onChangeText={(text) => this.setState({ url: text })}
                    style={styles.linkTitleInput}
                    placeholder='Insert URL' />
                <TouchableOpacity
                    style={styles.productButton}
                    type="submit"
                    onPress={this.submitHandler}>
                    <Text style={styles.productButtonText}>
                        Adicionar
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

}
