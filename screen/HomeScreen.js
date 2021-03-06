import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React ,{useState}from "react";
import HeaderTop from "../components/HeaderTop";
import TodoInputForm from "../components/TodoInputForm";
import TodoList from "../components/TodoList";

const HomeScreen = () => {
  const [todosList,setTodosList]=useState([]);
  const addTodoHandler=(data)=>{
    const oldData= [...todosList];
    oldData.push(data);
    setTodosList(oldData);
  }
  return (
    <>
      <HeaderTop title={"TodoApp"} color="#0074CC" />
      <TodoInputForm addTodoHandler={addTodoHandler}/>
      <View
        style={styles.headerContainer}
      >
        <Text style={styles.title}>Todos List</Text>
      </View>
      <TodoList todosList={todosList} />
      <StatusBar />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerContainer:{
    alignItems:'center',
    marginTop:20,
    backgroundColor:'#f4f4f4',
    marginHorizontal:20,
    paddingVertical:10,
    marginBottom:12,
  },
  title:{
    fontSize:15,
    fontWeight:'bold',
    color:'#333'
  }
});
