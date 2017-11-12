import React from 'react';
import { Text, View, ScrollView, Modal, Button} from 'react-native';
import styles from './AppStyle';
import api from "./utillities/api";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

let radio_props = [
    {label: '0', value: 0 },
    {label: '1', value: 1 },
    {label: '2', value: 2 },
    {label: '3', value: 3 },
    {label: '4', value: 4 },
    {label: '5', value: 5 },
    {label: '6', value: 6 },
    {label: '7', value: 7 },
    {label: '8', value: 8 },
    {label: '9', value: 9 },
    {label: '10', value: 10 }
];

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            playList: [],
            modalVisible: false,
            value: 0
        }
    }



    componentWillMount() {
        api.getPlayList().then((res) => {
            this.setState({
                playList: res.tracks.items
            })
        });
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        if(this.state.playList.length > 0) {
            return (
                <ScrollView style={styles.margin}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {console.log("closed")}}
                    >
                        <View style={styles.modalView}>
                            <View>
                                <RadioForm
                                    radio_props={radio_props}
                                    initial={0}
                                    onPress={(value) => {this.setState({value:value})}}
                                    style={styles.radioForm}
                                    labelStyle={styles.radioFormLabel}
                                    buttonStyle={styles.radioFormButton}
                                />
                                <Button
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible)
                                    }}
                                    title="Close"
                                    color="#841584"
                                    accessibilityLabel="Close"
                                    style={styles.closeButton}
                                />
                            </View>
                        </View>
                    </Modal>
                    {
                        this.state.playList.map((y, i) => {
                            return (
                                <View style={{flexDirection: 'row'}}  key={i}>
                                    <View style={[styles.songText, styles.artist]}>
                                        <Text>{y.track.artists[0].name}</Text>
                                        <Text>{y.track.name}</Text>
                                    </View>
                                    <Text style={[styles.pointText]}  onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible)
                                    }}>10</Text>
                                </View>
                            );
                        })
                    }
                </ScrollView>
            );
        } else {
          return (
              <View>
                  <Text style={styles.noSongText}>Song list are loading or is not available!</Text>
              </View>
          )
        }
    }
}


