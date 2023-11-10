<template>
    <Navbar>
      <template #logo>
        <a class="navbar-logo" href="http://localhost:8080">
          <img src="../assets/logo.png" alt="RoomEase logo" />
        </a>
      </template>
      <template #default="{ isShowMenu }">
        <NavbarCollapse :isShowMenu="isShowMenu">
          <NavbarLink isActive link="./components/DashBoard.vue">Home</NavbarLink>
          <NavbarLink link="#">Chores</NavbarLink>
          <NavbarLink link="#">Expenses</NavbarLink>
        </NavbarCollapse>
      </template>
    </Navbar>
  </template>
  
  
  <script setup>
  import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue';
  // You may need to import other dependencies and define any required logic here.
  </script>
  
  <style>
  @import url('../styles.css');
  /* Additional CSS rules for the NavBar component */
  </style>