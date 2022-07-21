import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Linking, ScrollView, RefreshControl, FlatList, SectionList } from 'react-native';

export default function App() {

    const [items, steItems] = useState([
        {name:'name 0'},
        {name:'name 1'},
        {name:'name 2'},
        {name:'name 3'},
        {name:'name 4'},
        {name:'name 5'},
        {name:'name 6'},
        {name:'name 7'},
        {name:'name 8'},
        {name:'name 9'},
        {name:'name 10'},
    ])

    const DATA = [
        {
            title: 'Title 1',
            data: ['Item 1-1', 'Item 1-2', 'Item 1-3']
        },
        {
            title: 'Title 2',
            data: ['Item 2-1', 'Item 2-2', 'Item 2-3']
        },
        {
            title: 'Title 3',
            data: ['Item 3-1', 'Item 3-2', 'Item 3-3']
        },
        {
            title: 'Title 4',
            data: ['Item 4-1', 'Item 4-2']
        }
    ]

    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        setRefreshing(true);
        steItems([...items, {name: 'Item 100'}]);
        setRefreshing(false);
    }

	return (

        <SectionList 
            keyExtractor={(item, index) => index.toString()}
            sections={DATA}
            renderItem={({item}) => (                
                <Text style={styles.text}>{item}</Text>
            )}
            renderSectionHeader={({section}) => (
                <View style={styles.item}>
                    <Text style={styles.text}>{section.title}</Text>
                </View>
            )}
        />

        /* <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={items}
            renderItem={({item}) => (                
                <View style={styles.item}>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            )}
            refreshControl={ 
                <RefreshControl 
                    refreshing={refreshing} 
                    onRefresh={onRefresh}
                    colors={['#ff0000']}
                /> 
            }
        /> */
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

