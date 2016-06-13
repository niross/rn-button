import React, { PropTypes } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, ProgressBarAndroid } from 'react-native';

const propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  text: PropTypes.string,
  loadingText: PropTypes.string
};
const defaultProps = {
  style: {},
  disabled: false,
  loading: false,
  text: ''
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    position: 'relative',
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  disabled: {
    opacity: 0.5
  },
  text: {
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const Button = (props) =>
  <TouchableOpacity
    disabled={props.disabled}
    style={[
      styles.container,
      StyleSheet.create(props.style),
      props.disabled ? styles.disabled : {}
    ]}
    onPress={() => {
      if (!props.disabled && !props.loading) props.onPress();
    }}
  >
    {props.loading ?
      <View style={styles.loading}>
        <ProgressBarAndroid styleAttr="Small" />
        <Text style={styles.text}> {props.loadingText ? props.loadingText : props.text}</Text>
      </View>
      :
      <Text style={[styles.text, props.disabled ? styles.disabled : {}]}>{props.text}</Text>
    }
  </TouchableOpacity>;

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
