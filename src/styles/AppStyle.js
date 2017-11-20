const React = require('react-native');
const {StyleSheet} = React;

export default StyleSheet.create({

    scrollView: {
        marginTop: 30,
    },
    songText: {
        marginLeft: 10,
        width:'80%'
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
    resultsButtonView:{
        marginTop: 10

    },

    //Result view
    resultTitle:{
        marginLeft: 10,
        fontSize:20,
        fontWeight: "bold"
    },
    mainView:{
        height: "100%"
    },

    resultView:{
        height: "92%"
    },

    resultList: {
        flexDirection: 'row',
        fontSize: 10
    },

    resultName:{
        width: '80%',
        marginLeft: 10
    },

    text:{
        fontSize:15
    }
});