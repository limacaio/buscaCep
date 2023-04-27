import React from "react";
import { StyleSheet }from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBDB',
        paddingTop: 40,

    },

    input:{
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'gray',
        borderRadius:5,
        width:'90%',
        padding:10,
        fontSize:18,
    },

    texto:{
        marginTop:25,
        marginBottom:25,
        fontSize:25,
        fontWeight:'bold'
    },

    botao:{
       
        height:60,
        borderRadius:5,
        alignItems:'center',
        padding:15,
        justifyContent:'center'
        
    },

    areaBtn:{
        alignItems:'center',
        flexDirection:'row',
        marginTop:15,
        justifyContent:'space-around'

    },

    btnText:{
        color:'#ffff',
        fontSize:20,
        fontWeight:'bold'
    },
    resultado:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
       
    },
    itemText:{
        fontSize:20,
    }

});

export default styles;