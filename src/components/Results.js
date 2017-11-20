import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../styles/AppStyle';
import api from "../utillities/api";


export default class Results extends Component {
    constructor(props){
        super(props);
        this.state = {
            results: [],
            topScoreSong: []
        };

        this.props.playList.sort(this.sortList);
        let currentId = this.props.playList[0].added_by.id;
        let score = 0;
        let currentScore = 0;

        for (let i = 0; i < this.props.playList.length; i++) {
            if (this.props.playList[i].track.artists[0].name !== "Rebecca Black" && this.props.playList[i].track.name !== "Friday") {

                if(this.props.playList[i].points === currentScore){
                    this.state.topScoreSong.push({
                        artist: this.props.playList[i].track.artists[0].name,
                        song: this.props.playList[i].track.name,
                        point: this.props.playList[i].points
                    })
                } else if(this.props.playList[i].points > currentScore) {
                    this.state.topScoreSong = [];
                    this.state.topScoreSong.push({
                        artist: this.props.playList[i].track.artists[0].name,
                        song: this.props.playList[i].track.name,
                        point: this.props.playList[i].points
                    });
                    currentScore = this.props.playList[i].points;
                }


                if (currentId === this.props.playList[i].added_by.id) {
                    score = score + this.props.playList[i].points;
                } else {
                    this.state.results.push({
                        id: currentId,
                        totalScore: score
                    });
                    score = 0;
                    currentId = this.props.playList[i].added_by.id;
                    score = score + this.props.playList[i].points;
                }
            }
        }

        console.log(this.state.topScoreSong)

        api.getUserProfile(this.state.results).then(() => {
            this.state.results.sort(this.sortResult);
            this.setState({
                results: this.state.results
            })
        });

    }


    /**
     * Sort by id
     * @param a
     * @param b
     * @returns {number}
     */
    sortList(a,b) {
        if (a.added_by.id < b.added_by.id)
            return -1;
        if (a.added_by.id> b.added_by.id)
            return 1;
        return 0;

    }

    /**
     * Sort by result
     * @param a
     * @param b
     * @returns {number}
     */
    sortResult(a,b) {
        if (a.totalScore < b.totalScore)
            return 1;
        if (a.totalScore> b.totalScore)
            return -1;
        return 0;

    }

    render(){
        return (
            <View style={styles.mainView}>

                <Text style={styles.resultTitle}>Resultat</Text>
                <View style={styles.resultView}>
                    {
                        this.state.results.map((y, i) => {
                            return (
                                <View key={i}>
                                    <View style={styles.resultList}>
                                        <Text style={[styles.resultName, styles.text]}>{y.display_name}</Text>
                                        <Text style={styles.text}>{y.totalScore}</Text>
                                    </View>
                                </View>
                            );
                        })
                    }
                    <View style={styles.border}/>
                    <Text style={styles.resultTitle}>Låt med högst poäng</Text>
                    {
                        this.state.topScoreSong.map((y, i) => {
                            return (
                                <View key={i}>
                                    <View style={[styles.resultList, styles.topScoreName]}>
                                        <View style={styles.topScoreText}>
                                            <Text style={styles.text}>{y.artist}</Text>
                                            <Text style={styles.text}>{y.song}</Text>
                                        </View>
                                        <Text style={[styles.text, styles.topScorePoints]}>{y.point}</Text>
                                    </View>

                                </View>
                            );
                        })
                    }
                </View>
                <Button
                    onPress={() => {
                        this.props.sendData();
                    }}
                    title="Close"
                    color="#841584"
                    accessibilityLabel="Results"
                />
            </View>
        )
    }
}


