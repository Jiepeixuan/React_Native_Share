/**
 * Created by peixuan.xie on 2016/10/25.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
} from 'react-native';

class LifeCycle extends Component {

    constructor(props) {
        super(props);
        console.log("constructor()");
        this.state = {name: 'example'}
    }
    //�����Ҫ����Ⱦ
    componentWillMount(){
        console.log("1componentWillMount()");
    };
    //��Ⱦ��ͼ
    render() {
        console.log("render");
        return (
            <View style={{padding:10}}>
            </View>
        );
    };
    //��Ⱦ��ɺ�
    componentDidMount(){
        console.log("2componentDidMount()");
        this.loadDataToState();
    };
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps()");
    };
    shouldComponentUpdate(nextProps,nextState){
        console.log("4shouldComponentUpdate()");
        return true;
    };
    componentWillUpdate(nextProps,nextState){
        console.log("5componentWillUpdate()");
    };
    componentDidUpdate(prevProps,prevState){
        console.log("6componentDidUpdate()");
    };
    componentWillUnmount(){
        console.log("componentWillUnmount()");
    };
    loadDataToState(){
        console.log("3loadDataToState");
        this.setState({
            name:"RN"
        })
    };
}