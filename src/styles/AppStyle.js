const React = require('react-native');
const {StyleSheet} = React;

export default StyleSheet.create({
    songText: {
        width:'85%'
    },
    songRow: {
        flexDirection: 'row'
    },
    pointText: {
        marginTop:17,
        paddingRight:10,
        textAlign: 'right',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20,
        width:'15%'
    },
    margin: {
        marginTop: 30,
        marginBottom: 30,
        marginLeft:5,
        marginRight:3
    },
    artist: {
        marginTop: 15
    },
    noSongText: {
        color: 'red',
        fontSize: 30,
        marginTop: 50,
        marginLeft:3,
        marginRight:3
    },

    //Modal view
    modalView: {
        marginTop: 22
    },

    //Radio button in modal view
    radioForm:{
        alignItems: 'flex-start',
        marginLeft: 15,
        height:'100%',
    },
    radioFormButton: {
        marginTop:14,
        marginRight: 10
    },
    radioFormLabel: {
        marginTop: 5,
        fontSize: 20
    },

    //Close button in modal view
    closeButton:{
        height: 100
    }
});