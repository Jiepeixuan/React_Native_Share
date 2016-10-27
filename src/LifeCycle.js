/**
 * Created by peixuan.xie on 2016/10/25.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
} from 'react-native';

export default class LifeCycle extends Component {

    constructor(props) {
        super(props);
        console.log("constructor()+LifeCycle");
        this.state = {name: 'example'}
        console.log(this.state.name);
    }
    //�����Ҫ����Ⱦ
    componentWillMount(){
        console.log("1componentWillMount()");
        console.log(this.state.name);
    };
    //��Ⱦ��ͼ
    render() {
        console.log("render+LifeCycle");
        console.log(this.state.name);
        return (
            <View >
            </View>
        );
    };
    //��Ⱦ��ɺ�
    componentDidMount(){
        console.log("2componentDidMount()");
        //this.loadDataToState();
    };
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps()");
        console.log(nextProps);
    };
    shouldComponentUpdate(nextProps,nextState){
        console.log("4shouldComponentUpdate()");
        console.log(this.state.name);
        return true;
    };
    componentWillUpdate(nextProps,nextState){
        console.log("5componentWillUpdate()");
        console.log(this.state.name);
    };
    componentDidUpdate(prevProps,prevState){
        console.log("6componentDidUpdate()");
        console.log(this.state.name);
    };
    componentWillUnmount(){
        console.log("componentWillUnmount()");
        console.log(this.state.name);
    };
    loadDataToState(){
        console.log("3loadDataToState");
        console.log(this.state.name);
        this.setState({
            name:"RN"
        })
        console.log(this.state.name);
    };
}