// app/_layout.tsx

import { Stack } from "expo-router";

export default function RootLayout() {
<<<<<<< HEAD
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="landing-page" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
=======
  return <Stack screenOptions={{headerShown: false}} />;
>>>>>>> ced1156decb840cb84ecbe04421fff3977f55857
}