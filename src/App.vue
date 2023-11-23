<template>
    <div id="app">
    
        <DashBoard />
        <SideBar />
        <RouterView/>

        <div :style="{'margin-left' : sidebarWidth}"></div>

      
    </div>

</template>


<script>
 
import SideBar from '@/components/sidebar/SideBar.vue';
import { sidebarWidth } from './components/sidebar/state';  
import DashBoard from './components/DashBoard.vue';
import {RouterView} from 'vue-router'




export default{
    name: "App",
    components : {
    DashBoard,
    SideBar,
    RouterView,
}, 

setup(){
    return{ sidebarWidth}
}
}

</script>