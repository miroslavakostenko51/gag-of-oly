import React from 'react';
import {ImageBackground, ImageSourcePropType, StatusBar, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {C} from '../constants/theme';

interface Props {
  bg: ImageSourcePropType;
  overlay: string[];
  children: React.ReactNode;
}

/** Layer 1 + 2 of the depth stack: artwork, then the tinted scrim above it. */
export default function AppShell({bg, overlay, children}: Props) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <ImageBackground source={bg} style={styles.bg} resizeMode="cover">
        <LinearGradient colors={overlay} style={StyleSheet.absoluteFill} />
        {children}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: C.bgDeep},
  bg: {flex: 1, width: '100%', height: '100%'},
});
