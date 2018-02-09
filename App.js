import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, List, ListItem, CheckBox, Icon} from 'react-native-elements';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    title: 'Take out the trash',
                    done: true
                },
                {
                    title: 'Buy Coffee',
                    done: false
                },
                {
                    title: 'Call Amy',
                    done: false
                }
            ]
        }
    }

    handleAddItem(item) {
        console.log(item)
    }

    handleCheckItem(index) {
        let list = this.state.list;
        list[index].done = !this.state.list[index].done;
        this.setState({
            list: list
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text h2>Today!</Text>
                <List containerStyle={{'width': 350}}>
                    {
                        this.state.list.map((item, index) => (
                            <ListItem
                                key={index}
                                hideChevron
                                title={
                                    <View>
                                        <CheckBox
                                            containerStyle={styles.listCheckbox}
                                            title={item.title}
                                            uncheckedIcon='circle'
                                            checkedIcon='check-circle'
                                            checked={item.done}
                                            onPress={() => this.handleCheckItem(index)}
                                        />
                                    </View>
                                }
                            />
                        ))
                    }
                </List>
                <Icon
                    name='add-circle'
                    color='#f50'
                    onPress={() => this.handleAddItem('TODO: pop a modal to capture new item.  also, style this button plz')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'red'
    },
    list: {
        width: 200
    },
    listCheckbox: {
        'backgroundColor': 'transparent',
        'borderWidth': 0
    }
});
