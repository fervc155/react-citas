/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, FlatList, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formuiario';
import AsyncStorage from '@react-native-community/async-storage';

const App = () => {

    const [citas, setCitas]  = useState([]);


    useEffect(()=>{
      const cargarCitas = async ()=>{
        let result = await AsyncStorage.getItem('citas') || '[]';
        result = JSON.parse(result);
        setCitas(result)
      }
      
      cargarCitas();
    },[])
    const onDelete = async (item)=>{
      console.log(item)
      const newCitas = citas.filter(cita=>cita.id!==item.id)
      setCitas(
        newCitas
      )

      saveStorage(newCitas)

    }

    const saveStorage = async(newCitas) =>{
      await AsyncStorage.setItem('citas', JSON.stringify(newCitas));

    }

    const onSave = async (newCita) =>{
      const newCitas = [
        ...citas,
        newCita
      ];

      setCitas(newCitas)

      saveStorage(newCitas)

    }
 
      const closeKeyboard = ()=>{
        Keyboard.dismiss()
      }
  return (
    <TouchableWithoutFeedback onPress={closeKeyboard}  >
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Proyecto citas</Text>
      <Formulario save={onSave}/>
    
      <FlatList 
        data={citas}
        renderItem={({item})=><Cita item={item} onDelete={()=>onDelete(item)}/>} 
        keyExtrractor ={cita=>cita.id}
        />

    </ScrollView>
    </TouchableWithoutFeedback>
    );
};


const styles = StyleSheet.create({
  contenedor:{
    backgroundColor : '#AA076B',
    flex:1
  },  
  titulo: {
    textAlign:'center',
    marginTop:40,
    fontSize:24,
    fontWeight:'bold',
    color:'#FFF'
  }
});
export default App;
