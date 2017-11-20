import React from 'react';
import { Text, View, ScrollView, Modal, Button } from 'react-native';
import styles from '../styles/AppStyle';
import api from "../utillities/api";
import RadioButtons from "./RadioButtons";
import Results from "./Results"

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            playList: [],
            modalVisible: false,
            resultVisible: false,
            selectedText: 0
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

    displayResults(visible) {
        this.setState({resultVisible: visible});
    }

    render() {
        if(this.state.playList.length > 0) {
            return (
                <ScrollView style={styles.scrollView}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.resultVisible}
                        onRequestClose={() => {console.log("closed")}}
                    >
                        <Results
                            playList = {this.state.playList.concat()}
                            sendData={() => {
                                this.displayResults(!this.state.resultVisible);
                            }}
                        />
                    </Modal>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {console.log("closed")}}
                    >
                        <View style={styles.modalView}>
                            <View>
                                <RadioButtons
                                    currentValue = {this.state['text_' + this.state.selectedText] ? this.state['text_' + this.state.selectedText] : 0}
                                    sendData={(val) => {
                                        this.state.playList[this.state.selectedText].points = val.props;
                                        this.state['text_' + this.state.selectedText] =  val.props;
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}
                                />
                            </View>
                        </View>
                    </Modal>
                    {
                        this.state.playList.map((y, i) => {
                            {
                                if(!y.points) {
                                    y.points = 0
                                }
                            }
                            if(y.track.artists[0].name !== "Rebecca Black" && y.track.name !== "Friday") {
                                return (
                                    <View style={styles.songRow} key={i}>
                                        <View style={[styles.songText, styles.artist]}>
                                            <Text>{y.track.artists[0].name}</Text>
                                            <Text>{y.track.name}</Text>
                                        </View>
                                        <Text style={[styles.pointText]} onPress={() => {
                                            this.state.selectedText = i;
                                            this.setModalVisible(!this.state.modalVisible)
                                        }}>{y.points}</Text>
                                    </View>
                                );
                            }
                        })
                    }
                    <View style={styles.resultsButtonView}>
                        <Button
                            onPress={() => {
                                this.displayResults(!this.state.resultVisible)
                            }}
                            title="Show results"
                            color="#841584"
                            accessibilityLabel="Results"
                        />
                    </View>
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


