import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Linking, ScrollView, RefreshControl } from 'react-native';

export default function App() {

    const [items, steItems] = useState([
        {key: 0, item:'Item 0'},
        {key: 1, item:'Item 1'},
        {key: 2, item:'Item 2'},
        {key: 3, item:'Item 3'},
        {key: 4, item:'Item 4'},
        {key: 5, item:'Item 5'},
        {key: 6, item:'Item 6'},
        {key: 7, item:'Item 7'},
        {key: 8, item:'Item 8'},
        {key: 9, item:'Item 9'},
        {key: 10, item:'Item 10'},
    ])

    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        setRefreshing(true);
        steItems([...items, {key:100, item: 'Item 100'}]);
        setRefreshing(false);
    }

	return (
        <View style={styles.body}>
            <ScrollView refreshControl={ 
                <RefreshControl 
                    refreshing={refreshing} 
                    onRefresh={onRefresh}
                    colors={['#ff0000']}
                /> 
            }>
            {
                items.map((object) => {
                    return (
                        <View style={styles.item} key={object.key}>
                            <Text style={styles.text}>{object.item}</Text>
                        </View>
                    )
                })
            }
            </ScrollView>
        </View>
	);
}

const styles = StyleSheet.create({
	body: {
		flexDirection: 'column',
		backgroundColor: '#ffffff',
	  },
	  item: {
        backgroundColor: '#04fa8a',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
      },
	  text: {
		color: '#000000',
		fontSize: 35,
		fontStyle: 'italic',
		margin: 10,
	  },
});

