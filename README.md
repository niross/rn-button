### rn-button
A basic, style-able button for use in react-native projects

### Usage
Install the button from github ` npm install niross/rn-button --save`.
Require it in your app `import Button from rn-button`.

```js
import React, { Component } from 'react';
import Button from 'rn-button';

export default class MyComponent extends Component {
  handleSubmit() {
    console.log('Submitted...');
  }
  
  render() {
    return (
      <Button
        style={{backgroundColor: 'gree'}}
        disabled={false}
        loading={false}
        onPress={() => this.handleSubmit()}>
        text="I'm a button, press me!"
        loadingText="While I'm loading I can't be pressed..."
      </Button>
    );
  }
};
```