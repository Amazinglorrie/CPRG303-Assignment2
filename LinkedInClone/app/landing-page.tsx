// app/landing-page.tsx

import { router } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";

export default function LandingPage() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logoBox}>
          <Text style={styles.logoText}>in</Text>
        </View>
        <Text style={styles.brandName}>LinkedIn</Text>
      </View>

      {/* Hero Text */}
      <View style={styles.heroContainer}>
        <Text style={styles.heroTitle}>
          Welcome to your{"\n"}professional community
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.joinButton}
          onPress={() => router.push("/(tabs)")}
        >
          <Text style={styles.joinButtonText}>Join now</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => router.push("/(tabs)")}
        >
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        By clicking Continue, you agree to LinkedIn's{" "}
        <Text style={styles.footerLink}>User Agreement</Text>,{" "}
        <Text style={styles.footerLink}>Privacy Policy</Text>, and{" "}
        <Text style={styles.footerLink}>Cookie Policy</Text>.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    justifyContent: "space-between",
    paddingVertical: 60,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logoBox: {
    backgroundColor: "#0A66C2",
    width: 44,
    height: 44,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  brandName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0A66C2",
  },
  heroContainer: {
    flex: 1,
    justifyContent: "center",
  },
  heroTitle: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#000",
    lineHeight: 42,
  },
  buttonContainer: {
    gap: 12,
    marginBottom: 24,
  },
  joinButton: {
    backgroundColor: "#0A66C2",
    paddingVertical: 14,
    borderRadius: 28,
    alignItems: "center",
  },
  joinButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  signInButton: {
    borderWidth: 1.5,
    borderColor: "#0A66C2",
    paddingVertical: 14,
    borderRadius: 28,
    alignItems: "center",
  },
  signInButtonText: {
    color: "#0A66C2",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    lineHeight: 18,
  },
  footerLink: {
    color: "#0A66C2",
    fontWeight: "500",
  },
});