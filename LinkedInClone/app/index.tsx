<<<<<<< HEAD
import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href="/landing-page" />;
=======
import { Text, View } from "react-native";
import LandingPage from '@/components/landing-page';
import MainPage from '@/components/main-page';

export default function Index() {
  return (
    <View style={{flex:1}}>
      {/* <LandingPage /> */}
      <MainPage/>
  </View>
  );
>>>>>>> ced1156decb840cb84ecbe04421fff3977f55857
}
