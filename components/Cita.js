/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight } from 'react-native';



const Cita = ({item, onDelete}) => {

 
  return (
    <View style={style.cita}>
        <View>
            <Text style={style.label}>Paciente</Text>
            <Text style={style.texto}>{item.paciente}</Text>
        </View>
        <View>
            <Text style={style.label}>Propietario</Text>
            <Text style={style.texto}>{item.propietario}</Text>
        </View>        
        <View>
            <Text style={style.label}>Sintomas</Text>
            <Text style={style.texto}>{item.sintomas}</Text>
        </View>
        <View>
            <TouchableHighlight onPress={onDelete} style={style.btnDelete}>
                <Text style={style.btnDeleteText}>Eliminar</Text>
            </TouchableHighlight>
        </View>
    </View>
    );
};

const style = StyleSheet.create({
    cita: {
        backgroundColor:'#FFF',
        borderBottomColor:'#e1e1e1',
        borderStyle:'solid',
        borderBottomWidth:1,
        paddingVertical: 20,
        paddingHorizontal:30,

    },
    label: {
        fontWeight:'bold',
        fontSize:20,
        marginTop:20,
        color:'#333'

    },
    texto:  {
        fontSize:14,
        color:'#333'

    },

    btnDelete:{
        padding:10,
        backgroundColor:'red',
        marginVertical:10,
        color:'#FFF',
    },
    btnDeleteText:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold'

    }
});

export default Cita;
