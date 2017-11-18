import React, { Component } from 'react';

import styles from '../styles/AppStyle';
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



export default class RadioButtons extends Component {
    constructor(props){
        super(props);

        this.state = {
            modalVisible: false,
            value3Index: this.props.currentValue
        }
    }

    render(){
        return (
            <RadioForm
                formHorizontal={false}
                animation={true}
                style={styles.radioForm}
            >
                {radio_props.map((obj, i) => {
                    let onPress = (value, index) => {
                        this.setState({
                            value3Index: index,

                        });
                        this.props.sendData({
                            props: index
                        });

                    };
                    return (
                        <RadioButton labelHorizontal={true} key={i} >
                            {/*  You can set RadioButtonLabel before RadioButtonInput */}
                            <RadioButtonInput
                                obj={obj}
                                index={i}
                                isSelected={this.state.value3Index === i}
                                onPress={onPress}
                                buttonInnerColor={'#2196f3'}
                                buttonOuterColor={'#2196f3'}
                                buttonSize={20}
                                buttonStyle={styles.radioFormButton}
                                buttonWrapStyle={{marginLeft: 10}}
                            />
                            <RadioButtonLabel
                                obj={obj}
                                index={i}
                                onPress={onPress}
                                labelStyle={styles.radioFormLabel}
                                labelWrapStyle={{}}
                            />
                        </RadioButton>
                    )
                })}
            </RadioForm>
        )
    }
}


