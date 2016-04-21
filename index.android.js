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
  TouchableOpacity,
  Linking,
  ScrollView
} from 'react-native';

class AndroidIntentIssue extends Component {
  componentDidMount () {
    Linking.addEventListener('url', (data) => {
      this.setState({
        intentsReceived: this.state.intentsReceived.concat([data])
      });
    });
  }

  state = {
    counter: 0,
    intentsReceived: []
  };

  increment = () => {
    this.setState({counter: this.state.counter + 1});
  };

  renderIntent (intent, i) {
    var fields = [];
    for (var fieldName in intent) {
      if (intent.hasOwnProperty(fieldName)) {
        var field = intent[field];
        fields.push(
          <View key={fieldName} style={styles.intentField}>
            <Text style={styles.label}>{fieldName}: </Text><Text>{intent[fieldName]}</Text>
          </View>
        );
      }
    }
    return (
      <View key={i} style={styles.intent}>
        {fields}
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.heading}>Intents received:</Text>
        {this.state.intentsReceived.map(this.renderIntent)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    alignItems: 'stretch',
  },
  heading: {
    fontSize: 20,
    fontWeight: '900',
  },
  intent: {
    borderWidth: 1,
    borderColor: 'blue',
    margin: 5,
    padding: 10,
    alignItems: 'stretch',
  },
  intentField: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  label: {
    fontWeight: '900',
  },
});

AppRegistry.registerComponent('AndroidIntentIssue', () => AndroidIntentIssue);
