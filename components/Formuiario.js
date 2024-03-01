import React, {useState} from 'react';
import { View, Text, StyleSheet,  TextInput, Button, Alert  } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';



const Formulario = ({save}) => {

    function getRandomInt(max=1000) {
        return Math.floor(Math.random() * max);
    }
    const initialState = {
        propietario:'',
        paciente:'',
        sintomas:'',
        telefono:'',
        hora:'',
        fecha:'',
    }
    const [data, setData] = useState(initialState)

    const onchange = (key, text) =>{
        console.log(key)
        setData({
            ...data,
            [key]:text
        })

        console.log(data)
    }
    const onSave = ()=>{

        for (let k in data){
            try{
                if(data[k].trim()===''){
                    Alert.alert('Error', 'el campo '+k+' es obligatorio');
                    return;
                }
            }catch(e){

            }
        }

        let forSave = data;
        forSave.id = getRandomInt();
        save(forSave);
        setData(initialState)
    }

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
    const showTimePicker = () => {
        setTimePickerVisibility(true);
      };
    
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
    const hideTimePicker = () => {
        setTimePickerVisibility(false);
      };
     
    const handleConfirmDate = (date) => {
        setData({
            ...data,
            fecha:date
        })
        hideDatePicker();
    };
    const handleConfirmTime = (time) => {
        setData({
            ...data,
            hora:time
        })       
        hideTimePicker();
      };
  

    return <View style={style.container}>
    <View>
        <Text style={style.label}>Paciente:</Text>
        <TextInput style={style.input} onChangeText={(text)=>onchange('paciente', text)} />
    </View>
    <View>
        <Text style={style.label}>Propietario:</Text>
        <TextInput style={style.input} onChangeText={(text)=>onchange('propietario', text)} />
    </View>
    <View>
        <Text style={style.label}>Telefono:</Text>
        <TextInput style={style.input}  keyboardType='numeric' onChangeText={(text)=>onchange('telefono', text)} />
    </View>
    <View>
        <Text style={style.label}>Sintomas:</Text>
        <TextInput style={style.input}  multiline onChangeText={(text)=>onchange('sintomas', text)} />
    </View>
    <View style={style.time}>
        <Button title="Seleccionaar fecha" onPress={showDatePicker} />
        <DateTimePickerModal 
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmDate}
            onCancel={handleConfirmDate}
        />
    </View>
    <View style={style.time}>
        <Button title="seeleccionar hora" onPress={showTimePicker} />
        <DateTimePickerModal 
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleConfirmTime}
            onCancel={handleConfirmTime}
        />
    </View>

    <Button title="Guardar" onPress={onSave} />

    </View>

};

const style = StyleSheet.create({
    label: {
        fontWeight:'bold',
        fontSize:20,
        color:'white'

    },
   input: {
    marginTop:10,
    height:50,
    borderColor: '#e1e1e1',
    borderWidth:1,
    borderStyle:'solid'

   },
   container: {
    backgroundColor:'#555',
    paddingVertical:30,
    paddingHorizontal:30,
    marginVertical:30,

   },
   time:{
    marginTop:20
   }
});

export default Formulario;
