import React from 'react'; 
import { Image, SafeAreaView, StyleSheet, Text,  TouchableOpacity } from 'react-native' 
 
const Second= () => { 
    return ( 
   <SafeAreaView> 
     
              <TouchableOpacity > 
                  <Image style ={ styles.geri} 
         source = {require('./geri.png')} /> 
         </TouchableOpacity> 
         <Text style = {styles.text1}> 
             Credit / Debit Cart 
             </Text> 
        <Image style = { styles.photo}  
        source = {require('./kartt.png')} 
        />  
         
        <TouchableOpacity > 
                  <Image style ={ styles.vector2} 
         source = {require('./kamera.png')} /> 
         </TouchableOpacity> 
         <Text style = {styles.text2}> 
            name on card 
         </Text> 
         <Image style = { styles.Container}  
        source = {require('./duzbucaqli.png')} 
        /> 
        <Text style = {styles.text3}> 
             Leslee  Harron 
            </Text>  
            <Text style= {styles.text4}> 
                Card number 
            </Text> 
            <Image style = { styles.Container2}  
        source = {require('./duzbucaqli.png')} 
        /> 
        <Text style = {styles.text5}> 
           4242424242424242
        </Text> 
       
         
        
         
 
        
        </SafeAreaView> 
         
 
    ) 
}; 
 
const styles = StyleSheet.create({ 
    photo:{ 
        top : 15, 
        height : 355, 
        width :400, 
        left : 8, 
        right : 10 , 
        borderRadius: 8, 
    }, 
    geri:{ 
        top : 30, 
        left :20
    }, 
    text1:{ 
        fontSize: 27, 
        left: 50, 
        fontWeight: "bold" 
    }, 
    vector2:{ 
        left :190, 
         
    }, 
    text2 :{ 
        top :12
    }, 
    Container:{ 
        top :12, 
        
    }, 
    text3: { 
        fontWeight: 'bold', 
        fontSize: 27, 
        left :45, 
        bottom: 35
    }, 
    text4: { 
        bottom :25
    }, 
    Container2 :{ 
        bottom:20 
    }, 
    text5:{ 
        bottom: 67, 
        left :30, 
        fontSize: 30, 
        fontWeight: "500" 
         
}
 
     
     
 
}) 
export default Second;