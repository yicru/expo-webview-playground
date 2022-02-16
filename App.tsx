import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        style={{ flex: 1 }}
        source={{ uri: "https://docs.expo.dev/" }}
      />
    </SafeAreaView>
  );
}
