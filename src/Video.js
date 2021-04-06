/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 
 import React,{Component} from 'react';
 import {StyleSheet, TextInput, View, Text, Button} from 'react-native'

 class VideoScreen extends Component {
    state = {
        video_src: 'input the text'
    }
    onchangeinput = (event) => {
        this.setState({
            mytextinput : event
        })
    }
   render(){
       return(
           
           <View style={{
               flex :1,
               alignItems : 'center',
               marginTop: 70
           }}>
               <Text style = {{
                   fontSize : 30
               }}>Video
               </Text>
               <TextInput
                value = {this.state.mytextinput}
                style = {style.input}
                onChangeText = {this.onchangeinput}
                multiline = {true}
                maxLength = {20}
                autoCapitalize={'none'}
                editable ={true}
            >
            </TextInput>
            <Button
                title = "Submit"
            />
            <View style = {{
                width: '92%'
                , height : 400
                , backgroundColor : 'skyblue'
                , marginTop : 30
            }}>

            </View>
               
           </View>
           
       )
   }
}
const style = StyleSheet.create({
    input: {
        width:'80%',
        backgroundColor:'#fffafa',
        marginTop: 50,
        fontSize:25
    }
})
   export default VideoScreen;
 