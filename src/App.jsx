import React, { Component } from 'react';

import LifeCycle from './components/LifeCycle';
import SetState from './components/SetState';
import Jsx from './components/Jsx';
import ThisDemo from './components/ThisDemo';
import MaterialUI from './components/MaterialUI';
import Frannie from './components/Frannie' ;
import FunctionalComponent from './components/FunctionalComponent';
import Cat from './Cat';
import Account from './Account';
import Grandpa from './components/Grandpa';
import Father from './components/Father';


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      family: {
        grandson: 'Peter',
        father: 'David',
        grandpa: 'Jimmy'
      },
      dog: {
        name: 'baby',
        age: 12,
        gender:'female',
        address: 'montreal'
      }
    }
  }

  getName = () => {  // ES6  =>  arrow function
    return <h1>welcome to react </h1>
  }

  // getName();   


  // getName () {   // ES5 node.js   some mudules-> package Require.js
     
  // }

  time = () => {
    return Date().toString();
  }




  render() {

  const cat = {
    name: 'un chat',
    age: 10,
    gender:'male',
    address:'canada'
  }

  const welcome = 'welcome to react'

  // const FunctionalComponent = props => { // 静态展示型函数组件
  //   return <h1>无状态组件{props.comment}{props.weather}</h1>
  // }   

    return (
      <div>
         {/* <h3>-------------------------------------</h3>
        <FunctionalComponent 
          comment='react真他妈牛逼'
          weather='sunnny'
        />
        <h3>-------------------------------------</h3>
        <h1>{welcome} {this.getName()} {this.time()}</h1>
        <h3>-------------------------------------</h3>
        
        <h3>-------------------------------------</h3> */}
        {/* <SetState />
        <MaterialUI />
        <ThisDemo /> */}
        {/* <Frannie data='Frannie'></Frannie>
        <FunctionalComponent 
          data={dog}
          name='Frannie'
        /> */}
        {/* <h3>-------------------------------------</h3>
        <Jsx 
          shouldDisplay={true}
          data='hands boy'
        />
        <h3>-------------------------------------</h3> */}
        {/* <Cat />
        <Account /> */}
        {/* <Grandpa
        fatherState = {this.state.dog}
        grandpaStatus={this.state.family}/> */}
        {/* <Father fatherState = {this.state.dog}/> */}
        <LifeCycle />
        
      </div>
    );
  }
}


