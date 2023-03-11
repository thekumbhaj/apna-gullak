import { StyleSheet, Text, View,  SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import AppLoading from 'expo-app-loading'
import {useFonts} from 'expo-font'

import Ionicons from '@expo/vector-icons/Ionicons';

const Login = () => {

    let [fontsLoaded] = useFonts({
        'fbold': require("../assets/Montserrat/static/Montserrat-Bold.ttf"),
        'fsemibold': require("../assets/Montserrat/static/Montserrat-SemiBold.ttf"),
        'fmedbold': require("../assets/Montserrat/static/Montserrat-Medium.ttf"),
        'fregular': require("../assets/Montserrat/static/Montserrat-Regular.ttf")
    })

    if(!fontsLoaded)
    {
        return <AppLoading />
    }

  return (
    <SafeAreaView style={styles.main}>

        <View style={styles.upperHalf}>
            <Text style={styles.loginText}>Log in</Text>

            <Ionicons 
            style={styles.icon}
            name="person-sharp" size={44} color="black"
            backgroundColor="#F5F5F5" />
        </View>

        <View style={styles.lowerHalf}>
        
            <TextInput 
            style={styles.input}
            placeholder="Email"
             />
            <TextInput style={styles.input}
            placeholder="Password" />
            
            <TouchableOpacity>
            <Text style={styles.forget}>Forgot Password ?</Text>
            </TouchableOpacity>

           

        </View>

        <View style={styles.btnOuter}>
            <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Log in</Text>
            </TouchableOpacity>
        </View>

    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    main: {
        height: "100%",
        backgroundColor:"#F5F5F5",
    },
    icon : {
        borderRadius: 40,
        padding: 13,
        position: "absolute",
        bottom: -35,
        elevation: 10,
        shadowColor: 'black',
        left: "43%"
    },
    upperHalf: {
        backgroundColor: "#5cadff",
        height: "27%",
        padding: 20,
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        borderBottomRightRadius:100,
        marginRight: -10
    },
    loginText: {
        color:"white",
        fontSize: 30,
        fontFamily: 'fsemibold'
    }, 
    input: {
        padding: 10,
        borderRadius: 8,
        borderColor: "#d3d3d3",
        borderStyle: 'solid',
        borderWidth: 1,
        marginVertical: 20
    } ,
    lowerHalf : {
        marginTop: 40,
        padding: 30,
    },
    forget:{
        textAlign: "center",
        marginTop:10,
        fontFamily: "fregular"   
    },
    btn:{
        backgroundColor: "#5cadff",
        width: "70%",
        padding: 15,
        borderRadius: 30,
        elevation: 10,
        shadowColor: 'black',
        
    },
    btnText : {
        color:"white",
        fontSize: 20,
        fontFamily: 'fbold',
        textAlign:"center"
    },
    btnOuter: {
        display:"flex",
        alignItems:"center",
        marginTop: "20%"
    }
})