import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { connect } from 'react-redux';

export class LandingPage extends Component {
  render() {
    return (
      <View>
        <Text>OUR FIRST PAGE</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
