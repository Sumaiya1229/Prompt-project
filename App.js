import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import RootNavigator from './src/navigation/rootNavigator';
import { NavigationContainer } from "@react-navigation/native";
import AccountTypePrompt from './src/components/userAuth/userAuthCommon/accountTypePrompt';
import SpProviderBottomNav from './src/navigation/spProviderBottomNav';
import { Provider } from "react-redux";
import store from './src/redux/index';
import ClientBottomNav from './src/navigation/clientBottomNav';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Provider store={store}>
        <RootNavigator/>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusbar: {
    height: StatusBar.currentHeight,
    backgroundColor: "white",
  },
});
