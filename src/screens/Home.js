import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, FlatList} from 'react-native';
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      currentPage: 1,
    };
  }
  async componentDidMount() {
    await this.getData();
  }
  getData = async () => {
    this.setState({isLoading: true});
    const {data} = await axios.get(
      'https://reqres.in/api/users?page='.concat(this.state.currentPage),
    );
    this.setState({data: [...this.state.data, ...data.data], isLoading: false});
  };
  nextPage = () => {
    this.setState({currentPage: this.state.currentPage + 1}, () => {
      this.getData({page: this.state.currentPage});
    });
    // console.log('end of data');
  };
  render() {
    const {data, isLoading, currentPage} = this.state;
    return (
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Item
            name={`${item.first_name} ${item.last_name}`}
            phone={item.email}
          />
        )}
        keyExtractor={item => item.email}
        onRefresh={() => this.getData({page: currentPage})}
        refreshing={isLoading}
        onEndReached={this.nextPage}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

class Item extends Component {
  render() {
    return (
      <View style={homeStyle.item}>
        <View style={homeStyle.pictureWrapper}>
          <View style={homeStyle.picture} />
        </View>
        <View style={homeStyle.textWrapper}>
          <Text style={homeStyle.textName}>{this.props.name}</Text>
          <Text>{this.props.phone}</Text>
        </View>
      </View>
    );
  }
}

const homeStyle = StyleSheet.create({
  item: {
    height: 65,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 30,
    paddingLeft: 30,
  },
  pictureWrapper: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    borderRadius: 25,
    height: 50,
    width: 50,
    backgroundColor: 'black',
  },
  textWrapper: {
    justifyContent: 'center',
  },
  textName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
