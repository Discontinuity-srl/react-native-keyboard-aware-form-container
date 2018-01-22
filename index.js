import React from "react"
import PropTypes from "prop-types"
import {
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  Platform,
} from "react-native"
import AndroidKeyboardAdjust from "react-native-android-keyboard-adjust"
import
import ScrollViewKeyboardManager, {
  ANDROID_SOFT_INPUT_MODES,
} from "@discontinuity/react-native-scroll-view-keyboard-manager"

// ----------------------------------------------------------------------------

const IS_ANDROID = Platform.OS === "android"

// ----------------------------------------------------------------------------

export class KeyboardAwareFormContainer extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    containerStyle: PropTypes.number,
  }

  // -------------------------------------

  componentDidMount() {
    if (IS_ANDROID) {
      AndroidKeyboardAdjust.setAdjustResize()
    }
  }

  componentWillUnmount() {
    if (IS_ANDROID) {
      AndroidKeyboardAdjust.setAdjustPan()
    }
  }

  // -------------------------------------

  dismissKeyboard = () => {
    Keyboard.dismiss()
  }

  // -------------------------------------

  render() {
    const { children, containerStyle } = this.props
    return (
      <ScrollViewKeyboardManager
        additionalScrollOffset={20}
        androidSoftInputMode={ANDROID_SOFT_INPUT_MODES.adjustResize}
        render={scrollViewProps => {
          return (
            <ScrollView
              {...scrollViewProps}
              keyboardShouldPersistTaps="always"
              showsVerticalScrollIndicator={true}
              keyboardDismissMode="interactive"
            >
              <TouchableWithoutFeedback onPress={this.dismissKeyboard}>
                <View style={containerStyle}>{children}</View>
              </TouchableWithoutFeedback>
            </ScrollView>
          )
        }}
      />
    )
  }
}

// ----------------------------------------------------------------------------

export default KeyboardAwareForm
