<template>
    <div>
      <h1>DashBoard</h1>
  
      <table>
        <caption>Chores</caption>
        <tr>
          <td>ChoresID</td>
          <td>Chore Name</td>
          <td>Created By</td>
        </tr>
  
        <tr v-for="ChoresList in ChoresList" :key="ChoresList.id">
          <td>{{ ChoresList.choreId }}</td>
          <td>{{ ChoresList.choreName }}</td>
          <td>{{ ChoresList.createdBy }}</td>
        </tr>
      </table>
  
      <table>
        <caption>Expenses</caption>
        <tr>
          <td>Expense ID</td>
          <td>Name</td>
          <td>Description</td>
          <td>Amount</td>
        </tr>
        
        <tr v-for="expenseList in expenseList" :key="expenseList.id">
        
          <td>{{ expenseList.ExpenseId }}</td>
          <td>{{ expenseList.ExpenseName }}</td>
          <td>{{ expenseList.ExpenseDescription }}</td>
          <td>{{ expenseList.ExpenseAmount }}</td>
        </tr>

      </table>


    </div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import axios from 'axios';
  
  export default {
    name: "DashBoard",
    setup() {
      const ChoresList = ref([]); // Define the ChoresList using ref
      const expenseList = ref([]); // Define the expenseList using ref
  
      onMounted(() => {
        axios
          .get('https://localhost:7170/api/Chores/GetAll')
          .then((response) => {
            ChoresList.value = response.data.value; // Update the ChoresList value
            console.log('Chores Data:', response.data.value);
          })
          .catch((error) => {
            console.error('Error fetching Chores data:', error);
          });
  
        axios
          .get('https://localhost:7170/api/Expense/GetAll') // Fetch expense data
          .then((response) => {
            expenseList.value = response.data.value; // Update the expenseList value
            console.log('Expenses Data:', response.data.value);
          })
          .catch((error) => {
            console.error('Error fetching Expenses data:', error);
          });
      });
  
      return {
        ChoresList, // Return the ChoresList from the setup function
        expenseList, // Return the expenseList from the setup function
      };
    },
  };
  </script>
  
  <style>
    table {
      border: 3px solid black;
      border-collapse: collapse;
    }
  
    td {
      border: 1px solid black;
      padding: 8px;
    }
  </style>
  