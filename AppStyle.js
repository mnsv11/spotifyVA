const React = require('react-native');
const {StyleSheet} = React;

export default StyleSheet.create({
    songText: {
        width:'85%'
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
    modalView: {
        marginTop: 22
    },
    radioForm:{
        alignItems: 'flex-start',
        marginLeft: 15,
        height:'94%',
    },
    radioFormButton: {
        marginBottom: 20,
        fontSize: 20
    },
    radioFormLabel: {

        fontSize: 20
    },
    closeButton:{
        height: 100
    }
});