import React from "react"; 
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native"; 
 
const   Firstpage = () => { 
  return ( 
    <View> 
      <Image 
      style={styles.photo} 
        source={require('./qiz.png')} 
      /> 
      <Text style= {styles.text}> 
         Hey Leslee, 
        there's a new course about 
        Figma 
      </Text> 
      <Text style ={styles.newText}> 
        find out how our new matching tool can help you leaarn aother way 
    </Text> 
    <TouchableOpacity style = {styles.duyme}> 
      <Text style = {styles.newtext}> 
        Discover the course 
        </Text> 
    </TouchableOpacity> 
    <TouchableOpacity style={styles.yeniduyme}> 
      <Text> 
        Not now 
      </Text> 
    </TouchableOpacity> 
    </View> 
  ) 
} 
const styles = StyleSheet.create ({ 
  photo:{ 
    width : 260, 
    height : 360, 
    left :70, 
    top:12
  }, 
   text :{ 
    fontWeight:"bold", 
    color: "black", 
    fontSize: 36, 
    textAlign:'center' 
   
 
  }, 
  newText:{ 
    fontSize:22, 
    textAlign:'center', 
    top:16 
 
  }, 
  duyme:{ 
    backgroundColor: 'black', 
        borderRadius:21, 
        alignItems: 'center', 
        marginHorizontal:22, 
        top: 30 
  }, 
  newtext:{ 
    color:'white', 
    padding: 20, 
  }, 
  yeniduyme:{ 
    top:55, 
    left: 200
  } 
}) 
 
export default Firstpage;