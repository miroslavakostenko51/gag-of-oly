import { StyleSheet, View, AppState, AppStateStatus } from 'react-native';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { useAppyrgagiwotyfxolypInitialization } from './services/inityrgagiwotyfxolypializationFlow';
import AppyrgagiwotyfxolypPlaceholder from './Layouts/Game/GameyrgagiwotyfxolypInit';
import LoaderyrgagiwotyfxolypScreen from './Layouts/Game/screens/LoaderyrgagiwotyfxolypScreen';
import { yrgagiwotyfxolypViewportGetState, yrgagiwotyfxolypViewportRestore } from './services/yrgagiwotyfxolypViewportHost';

function Ayrgagiwotyfxolyppp() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <AppyrgagiwotyfxolypContent />
    </SafeAreaProvider>
  );
}

function AppyrgagiwotyfxolypContent() {
  const { isyrgagiwotyfxolypLoading, isyrgagiwotyfxolypLoadPlaceholder } = useAppyrgagiwotyfxolypInitialization();

  // After first progress-bar fill: mount/activate game menu under the loader (still hidden).
  const [menuyrgagiwotyfxolypArmed, setMenuyrgagiwotyfxolypArmed] = useState(false);
  const appyrgagiwotyfxolypState = useRef(AppState.currentState);

  // Show the game only when init decided placeholder (not WebView).
  const showyrgagiwotyfxolypGame =
    !isyrgagiwotyfxolypLoading && isyrgagiwotyfxolypLoadPlaceholder;

  const handleyrgagiwotyfxolypFirstProgress = useCallback(() => {
    setMenuyrgagiwotyfxolypArmed(true);
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
      const previousState = appyrgagiwotyfxolypState.current;

      if (
        previousState.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        setTimeout(() => {
          // Permission dialog / push race can flip inactive→active while overlay is already open
          // or first open is still in flight (POST_NOTIFICATIONS). Service restore also no-ops then.
          const webViewState = yrgagiwotyfxolypViewportGetState();
          if (webViewState.visible || webViewState.openingInProgress) {
            return;
          }
          yrgagiwotyfxolypViewportRestore().then((success: boolean) => {
            // restored
          }).catch(() => {
            // error restoring
          });
        }, 300);
      }
      appyrgagiwotyfxolypState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {(menuyrgagiwotyfxolypArmed || showyrgagiwotyfxolypGame) && (
        <AppyrgagiwotyfxolypPlaceholder startyrgagiwotyfxolypAtMenu />
      )}
      {!showyrgagiwotyfxolypGame && (
        <View style={styles.loaderOverlay} pointerEvents="auto">
          <LoaderyrgagiwotyfxolypScreen
            doneyrgagiwotyfxolypOnFirstCycle
            onyrgagiwotyfxolypDone={handleyrgagiwotyfxolypFirstProgress}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Ayrgagiwotyfxolyppp;
