import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Login extends React.Component{

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
            <Image source ={require('../images/dour.jpg')}
                style={{width:"100%",height:"43%"}}
            />
        


        <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#E09E11",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="mail" color="#E09E11" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                    />
                    </View>

                    <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#E09E11",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="lock" color="#E09E11" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                    />

                    

                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#E09E11",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text style={{
                        color:"white",
                       
                    }}>Sign In</Text>
                </View>

                
        <Text style={{
                    alignSelf:"center",
                    color:"#E09E11",
                    
                    paddingVertical:30
                }}>Forgot Password?</Text>
      

                <Text 
                
                onPress={()=>navigate('Register')}
                
                style={{
                    alignSelf:"center",
                    color:"#E09E11",
                    
                    paddingVertical:30
                }}>Don't have an acount? Create here</Text>

        </View>

        

        )
    }
}