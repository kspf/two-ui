<script setup>
  import { TwoDemoBlock, TwoDemoInfo, TwoDemoCode } from '../index'
</script>

<template>
  <h1>这是demo介绍</h1>
  <two-demo-block title="基本使用">
     <two-demo-info>这是介绍问题</two-demo-info>
     <two-demo-code>
       <pre>
        import React from 'react';
        import ReactDOM from 'react-dom';
        import { Provider } from 'mobx-react'
        import counter from "./stores/counter.store";
        import App from './App';

        ReactDOM.render(
          <Provider counter={counter}>
            <App />
          </Provider>,
          document.getElementById('root')
        );  
       </pre>
     </two-demo-code>
   </two-demo-block>
</template>

<style scoped>
</style>
