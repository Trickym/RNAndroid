import React,{useState} from 'react'
import { StyleSheet, Text, View,Button,TextInput, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker'
const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props}
      editable
      maxLength={40}
    />
  );
}
const RNForm = () => {
    const [show, setShow] = useState(false)
    const [date,setDate] = useState('Enter D.O.B')
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Male', value: 'male'},
      {label: 'Female', value: 'female'},
      {label: 'Others', value: 'others'}
    ]);
  
    return (
      <View style={styles.container}>
        <Text style={{margin:12,textAlign:'center',fontSize:18}}>Register</Text>
        <View style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
        <View style={{width:'48%'}}>
        <TextInput placeholder='First Name' style={styles.inputName}/>
        </View>
        <View style={{width:'48%'}}>
        <TextInput placeholder='Last Name' style={styles.inputName}/>
        </View>
        </View>
        <View style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
        <View style={{width:'48%'}}>
        <Text  style={{height: 51,
      fontSize:16,
      borderWidth: 1,
      padding: 10,
      borderRadius:5,
      marginVertical:12}} onPress={()=>{setShow(true)}}>
          {date}</Text>
        </View>
        <View style={{width:'48%'}}>
        <DropDownPicker
        style={styles.inputName}
        open={open}
        value={value}
        items={items}
        placeholder='Gender'
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
        </View>
        </View>
        
        {
          show?
          <DateTimePicker mode='date' value={new Date()} onChange={(e,selectedDate)=>{
            setDate((selectedDate.getDate()+"/"+(selectedDate.getMonth()+1)+"/"+selectedDate.getFullYear()).toString())
            setShow(false)}}/>
          :null
        }
        <TextInput style={styles.input} keyboardType={'email-address'} placeholder={'Email Address'}/>
        <TextInput style={styles.input} keyboardType={'phone-pad'} placeholder={'Mobile Number'}/>
        <UselessTextInput
          multiline
          numberOfLines={3}
          placeholder={'Address'}
          style={styles.textArea}
        />
        <View style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
        <View style={{width:'48%'}}>
        <TextInput placeholder='State' style={styles.inputName}/>
        </View>
        <View style={{width:'48%'}}>
        <TextInput placeholder='City' style={styles.inputName}/>
        </View>
        </View>
        <View style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
        <View style={{width:'48%'}}>
        <TextInput placeholder='Postal Code' keyboardType='number-pad' style={styles.inputName}/>
        </View>
        <View style={{width:'48%'}}>
        <TextInput placeholder='Country' style={styles.inputName}/>
        </View>
        </View>
        <Pressable style={styles.button}>
          <Text style={{color:'white',fontSize:16,fontWeight:'600'}}>Submit</Text>
        </Pressable>
       {/* <StatusBar style="auto" /> */}
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:20
    },
    button:{
      width:'100%',
      backgroundColor:'#764ABC',
      height:40,
      borderRadius:5,
      margin:12,
      alignItems: 'center',
      justifyContent: 'center',
      elevation:8
    },
    text:{
      marginTop: 12,
      fontSize:16,
      fontWeight:'600'
    },
    textArea:{
      width:'100%',
      fontSize:16,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:5,
    },
    input:{
      width:'100%',
      height: 40,
      fontSize:16,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:5,
    },
    inputName: {
      height: 40,
      fontSize:16,
      borderWidth: 1,
      padding: 10,
      borderRadius:5,
      marginVertical:12
    },
  });
export default RNForm