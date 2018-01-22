# react-native-keyboard-aware-form

React Native Form which prevents inputs from being hidden by the keyboard in scroll views, and manage tapping outside fields - iOS and Android

Features:

* The keyboard is dismissed when user tap out of the inputs.
* The scroll to reveal an input is performed only if the input would be hidden by the keyboard.
* The scoll is not restored to any prosition after the user dismisses the keyboard.
* Simple interface, generic implementation.

## Installation

``
npm install @discontinuity/react-native-keyboard-aware-form-container

````
## Usage

```js
export class Form extends React.Component {
  import { ScrollView } from "react-native"
  import KeyboardAwareFormContainer from "@discontinuity/react-native-keyboard-aware-form-container"


  render() {
    const { children } = this.props

    return (
      <KeyboardAwareFormContainer containerStyle={styles.keyboardAwareFormContainertyle}>
         {children}
      </KeyboardAwareFormContainer>
    )
  }
}

const styles = StyleSheet.create({
  keyboardAwareFormContainertyle: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
})
````

## Props

| Name           | Description              |
| -------------- | ------------------------ |
| children       | The children component   |
| containerStyle | The childContainer style |

## Credits

Copyright (c) 2017 Discontinuity s.r.l.
Available under the MIT license.

This component is built on the [react-native-scroll-view-keyboard-manager](https://github.com/Discontinuity-srl/react-native-scroll-view-keyboard-manager)
