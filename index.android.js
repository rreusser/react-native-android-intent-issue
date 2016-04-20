/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class AndroidIntentIssue extends Component {
  state = {
    counter: 0
  };

  increment = () => {
    this.setState({counter: this.state.counter + 1});
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.block}>
          <TouchableOpacity onPress={this.increment} style={styles.btn}>
            <Text style={styles.btnText}>Press to modify state</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.block}>
          <Text style={styles.blockText}>Counter: {this.state.counter}</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.blockText}>Execute `$ npm run link` to open a deep link via adb.</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.blockText}>Confirm that the hardware back button reveals additional instances of the main activity before finally exiting the app.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btn: {
    padding: 20,
    backgroundColor: '#89a'
  },
  btnText: {
    color: '#fff'
  },
  block: {
    marginVertical: 10
  },
  blockText: {
    textAlign: 'center',
  }
});

AppRegistry.registerComponent('AndroidIntentIssue', () => AndroidIntentIssue);
