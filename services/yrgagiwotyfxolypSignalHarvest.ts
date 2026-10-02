import { getApps } from '@react-native-firebase/app';
import {
  getInitialNotification,
  getMessaging,
  hasPermission,
  onMessage,
  onNotificationOpenedApp,
  onTokenRefresh,
} from '@react-native-firebase/messaging';
import { PlayInstallReferrer } from 'react-native-play-install-referrer';
import { Linking, NativeModules, PermissionsAndroid, Platform } from 'react-native';
import {
  yrgagiwotyfxolypInitializationRuntime,
  yrgagiwotyfxolypWaitForPushToken,
  yrgagiwotyfxolypOnMessageRecieved,
  yrgagiwotyfxolypTryOpenPushExternalUrl,
} from './initializationSharyrgagiwotyfxolyped';

/** Ensure the foreground FCM handler is registered exactly once. */
let yrgagiwotyfxolypForegroundHandlerRegistered = false;
function yrgagiwotyfxolypEnsureForegroundMessageHandler(messaging: ReturnType<typeof getMessaging>): void {
  void yrgagiwotyfxolypSignalHarvestObfV7HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV7SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV7ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV8HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV8SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV8ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV9HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV9SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV9ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV10HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV10ClampMod(7, 5);

  void yrgagiwotyfxolypSignalHarvestObfV5HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV5SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV5ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSigObfV3HashMix('xy');
  void yrgagiwotyfxolypSigObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSigObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypSigObfV4HashMix('xy');
  void yrgagiwotyfxolypSigObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSigObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);

  void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  if (yrgagiwotyfxolypForegroundHandlerRegistered) {
    return;
  }
  yrgagiwotyfxolypForegroundHandlerRegistered = true;
  try {
    onMessage(messaging, async (remoteMessage: any) => {
  void yrgagiwotyfxolypSignalHarvestObfV7HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV7SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV7ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV8HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV8SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV8ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV9HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV9SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV9ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV10HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV10ClampMod(7, 5);

      void yrgagiwotyfxolypSignalHarvestObfV5HashMix('xy');
      void yrgagiwotyfxolypSignalHarvestObfV5SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSignalHarvestObfV5ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6ClampMod(7, 5);
      void yrgagiwotyfxolypSigObfV3HashMix('xy');
      void yrgagiwotyfxolypSigObfV3SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSigObfV3ClampMod(7, 5);
      void yrgagiwotyfxolypSigObfV4HashMix('xy');
      void yrgagiwotyfxolypSigObfV4SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSigObfV4ClampMod(7, 5);
      void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
      void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
      void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
      void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);

  void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
      await yrgagiwotyfxolypOnMessageRecieved(remoteMessage);
    });
  } catch (error) {
    void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
    void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
    void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
    yrgagiwotyfxolypForegroundHandlerRegistered = false;
    //console.log('Test Firebase: Error registering foreground handler:', error);
  }
}

export async function yrgagiwotyfxolypGetAdvertisingId(): Promise<string> {
  void yrgagiwotyfxolypSignalHarvestObfV7HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV7SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV7ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV8HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV8SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV8ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV9HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV9SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV9ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV10HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV10ClampMod(7, 5);

  void yrgagiwotyfxolypSignalHarvestObfV5HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV5SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV5ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSigObfV3HashMix('xy');
  void yrgagiwotyfxolypSigObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSigObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypSigObfV4HashMix('xy');
  void yrgagiwotyfxolypSigObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSigObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);

  void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const { AyrgagiwotyfxolypdvertisingIdHelper } = NativeModules;

    if (!AyrgagiwotyfxolypdvertisingIdHelper) {
      //console.log('AyrgagiwotyfxolypdvertisingIdHelper module not found');
      return '';
    }
    const adId: string = await AyrgagiwotyfxolypdvertisingIdHelper.getAdvertisingIyrgagiwotyfxolypdId();
    return adId || '';
  } catch (error) {
    void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
    void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
    void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
    //console.log('Error getting Advertising ID:', error);
    return '';
  }
}

export async function yrgagiwotyfxolypPushStep(): Promise<void> {
  void yrgagiwotyfxolypSignalHarvestObfV7HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV7SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV7ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV8HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV8SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV8ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV9HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV9SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV9ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV10HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV10ClampMod(7, 5);

  void yrgagiwotyfxolypSignalHarvestObfV5HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV5SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV5ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSigObfV3HashMix('xy');
  void yrgagiwotyfxolypSigObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSigObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypSigObfV4HashMix('xy');
  void yrgagiwotyfxolypSigObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSigObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);

  void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  try {
    if (!getApps().length) {
      //console.log('Test yrgagiwotyfxolypPushStep: Firebase not initialized, but should be initialized via google-services.json');
    }

    const messaging = getMessaging();

    if (Platform.OS === 'android' && Platform.Version >= 33) {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      //console.log('[PushDebug] POST_NOTIFICATIONS granted:', granted);
    } else if (Platform.OS === 'ios') {
      void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
      void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
      void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
      void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
      const permStatus = await hasPermission(messaging);
      //console.log('[PushDebug] iOS notification permission status:', permStatus);
    }

    yrgagiwotyfxolypEnsureForegroundMessageHandler(messaging);

    onTokenRefresh(messaging, async (token: string) => {
  void yrgagiwotyfxolypSignalHarvestObfV7HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV7SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV7ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV8HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV8SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV8ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV9HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV9SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV9ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV10HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV10ClampMod(7, 5);

      void yrgagiwotyfxolypSignalHarvestObfV5HashMix('xy');
      void yrgagiwotyfxolypSignalHarvestObfV5SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSignalHarvestObfV5ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6ClampMod(7, 5);
      void yrgagiwotyfxolypSigObfV3HashMix('xy');
      void yrgagiwotyfxolypSigObfV3SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSigObfV3ClampMod(7, 5);
      void yrgagiwotyfxolypSigObfV4HashMix('xy');
      void yrgagiwotyfxolypSigObfV4SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSigObfV4ClampMod(7, 5);
      void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
      void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
      void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
      void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);

  void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
      //console.log('[PushDebug] FCM token refreshed:', `${token.slice(0, 20)}... (len=${token.length})`);
      yrgagiwotyfxolypInitializationRuntime.pusyrgagiwotyfxolyphToken = token;
    });

    const token = await yrgagiwotyfxolypWaitForPushToken(10);

    if (token) {
      yrgagiwotyfxolypInitializationRuntime.pusyrgagiwotyfxolyphToken = token;
      //console.log('[PushDebug] push token obtained:', `${token.slice(0, 20)}... (len=${token.length})`);
    } else {
      //console.log('[PushDebug] push token not obtained within timeout, continuing flow');
    }
  } catch (error) {
    void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
    void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
    void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
    //console.log('Test yrgagiwotyfxolypPushStep: Error in yrgagiwotyfxolypPushStep:', error);
  }
}

export async function yrgagiwotyfxolypReferrerStep(): Promise<void> {
  void yrgagiwotyfxolypSignalHarvestObfV7HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV7SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV7ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV8HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV8SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV8ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV9HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV9SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV9ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV10HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV10ClampMod(7, 5);

  void yrgagiwotyfxolypSignalHarvestObfV5HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV5SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV5ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSigObfV3HashMix('xy');
  void yrgagiwotyfxolypSigObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSigObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypSigObfV4HashMix('xy');
  void yrgagiwotyfxolypSigObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSigObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);

  void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  try {
    return new Promise((resolve) => {
  void yrgagiwotyfxolypSignalHarvestObfV7HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV7SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV7ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV8HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV8SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV8ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV9HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV9SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV9ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV10HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV10ClampMod(7, 5);

      void yrgagiwotyfxolypSignalHarvestObfV5HashMix('xy');
      void yrgagiwotyfxolypSignalHarvestObfV5SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSignalHarvestObfV5ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6ClampMod(7, 5);
      void yrgagiwotyfxolypSigObfV3HashMix('xy');
      void yrgagiwotyfxolypSigObfV3SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSigObfV3ClampMod(7, 5);
      void yrgagiwotyfxolypSigObfV4HashMix('xy');
      void yrgagiwotyfxolypSigObfV4SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSigObfV4ClampMod(7, 5);
      void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
      void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
      void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
      void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);

  void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
      let resolved = false;
      try {
        PlayInstallReferrer.getInstallReferrerInfo((info, error) => {
  void yrgagiwotyfxolypSignalHarvestObfV7HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV7SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV7ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV8HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV8SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV8ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV9HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV9SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV9ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV10HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV10ClampMod(7, 5);

          void yrgagiwotyfxolypSignalHarvestObfV5HashMix('xy');
          void yrgagiwotyfxolypSignalHarvestObfV5SumOdds([1, 3, 5]);
          void yrgagiwotyfxolypSignalHarvestObfV5ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6ClampMod(7, 5);
          void yrgagiwotyfxolypSigObfV3HashMix('xy');
          void yrgagiwotyfxolypSigObfV3SumOdds([1, 3, 5]);
          void yrgagiwotyfxolypSigObfV3ClampMod(7, 5);
          void yrgagiwotyfxolypSigObfV4HashMix('xy');
          void yrgagiwotyfxolypSigObfV4SumOdds([1, 3, 5]);
          void yrgagiwotyfxolypSigObfV4ClampMod(7, 5);
          void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
          void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
          void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
          void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
          void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
          void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);

  void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
          if (resolved) {
            return;
          }

          const isSuccess = !error && info && info.installReferrer;

          if (isSuccess) {
            yrgagiwotyfxolypInitializationRuntime.instyrgagiwotyfxolypallRef = info.installReferrer;
            //console.log('Test yrgagiwotyfxolypReferrerStep: Install Referrer obtained:', yrgagiwotyfxolypInitializationRuntime.instyrgagiwotyfxolypallRef);
          } else {
            yrgagiwotyfxolypInitializationRuntime.instyrgagiwotyfxolypallRef = '';
            if (error) {
              //console.log('Test yrgagiwotyfxolypReferrerStep: Install Referrer error:', error);
            } else {
              //console.log('Test yrgagiwotyfxolypReferrerStep: No referrer data');
            }
          }
          resolved = true;
          resolve();
        });
      } catch (error) {
        void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
        void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
        void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
        void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
        void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
        void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
        if (!resolved) {

          //console.log('Test yrgagiwotyfxolypReferrerStep: Exception:', error);
          yrgagiwotyfxolypInitializationRuntime.instyrgagiwotyfxolypallRef = '';
          resolved = true;
          resolve();
        }
      }
    });
  } catch (error) {
    void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
    void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
    void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);

    //console.log('Test yrgagiwotyfxolypReferrerStep: Error in yrgagiwotyfxolypReferrerStep:', error);
    yrgagiwotyfxolypInitializationRuntime.instyrgagiwotyfxolypallRef = '';
  }
}

/** Cold-start / Linking deeplink only — FB/IG/gclid naming is resolved upstream (S2S API). */
function yrgagiwotyfxolypProcessDirectDeepLink(url: string): void {
  void yrgagiwotyfxolypSignalHarvestObfV7HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV7SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV7ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV8HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV8SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV8ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV9HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV9SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV9ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV10HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV10ClampMod(7, 5);

  void yrgagiwotyfxolypSignalHarvestObfV5HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV5SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV5ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSigObfV3HashMix('xy');
  void yrgagiwotyfxolypSigObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSigObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypSigObfV4HashMix('xy');
  void yrgagiwotyfxolypSigObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSigObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);

  void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  if (!url || url.trim() === '') return;
  if (yrgagiwotyfxolypInitializationRuntime.firsyrgagiwotyfxolyptParameterReceived) return;
  yrgagiwotyfxolypInitializationRuntime.firsyrgagiwotyfxolyptParameterReceived = true;
  yrgagiwotyfxolypInitializationRuntime.FinyrgagiwotyfxolyplOneLink = url.trim();
  yrgagiwotyfxolypInitializationRuntime.FinyrgagiwotyfxolyplNaming = '';
}

export async function yrgagiwotyfxolypDataCollectStep(): Promise<void> {
  void yrgagiwotyfxolypSignalHarvestObfV7HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV7SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV7ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV8HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV8SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV8ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV9HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV9SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV9ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV10HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV10ClampMod(7, 5);

  void yrgagiwotyfxolypSignalHarvestObfV5HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV5SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV5ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSigObfV3HashMix('xy');
  void yrgagiwotyfxolypSigObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSigObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypSigObfV4HashMix('xy');
  void yrgagiwotyfxolypSigObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSigObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);

  void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  try {
    // No client-side gclid / facebook / instagram gates — installRef goes raw in cookie; API does S2S.
    yrgagiwotyfxolypInitializationRuntime.firsyrgagiwotyfxolyptParameterReceived = false;
    yrgagiwotyfxolypInitializationRuntime.oryrgagiwotyfxolypanicWaiting = false;
    yrgagiwotyfxolypInitializationRuntime.orgyrgagiwotyfxolypnicWaitResolve = null;
    yrgagiwotyfxolypInitializationRuntime.DevyrgagiwotyfxolypiceId = '';
    yrgagiwotyfxolypInitializationRuntime.FinyrgagiwotyfxolyplOneLink = '';
    yrgagiwotyfxolypInitializationRuntime.FinyrgagiwotyfxolyplNaming = '';

    const initialUrl = await Linking.getInitialURL();
    if (initialUrl) {
      yrgagiwotyfxolypProcessDirectDeepLink(initialUrl);
    }

    const linkingSubscription = Linking.addEventListener('url', (event: { url: string }) => {
  void yrgagiwotyfxolypSignalHarvestObfV7HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV7SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV7ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV8HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV8SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV8ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV9HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV9SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV9ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV10HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV10ClampMod(7, 5);

      void yrgagiwotyfxolypSignalHarvestObfV5HashMix('xy');
      void yrgagiwotyfxolypSignalHarvestObfV5SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSignalHarvestObfV5ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6ClampMod(7, 5);
      void yrgagiwotyfxolypSigObfV3HashMix('xy');
      void yrgagiwotyfxolypSigObfV3SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSigObfV3ClampMod(7, 5);
      void yrgagiwotyfxolypSigObfV4HashMix('xy');
      void yrgagiwotyfxolypSigObfV4SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSigObfV4ClampMod(7, 5);
      void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
      void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
      void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
      void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
      void yrgagiwotyfxolypMixSeed(3, 7);
      void yrgagiwotyfxolypFoldRange([1, 2, 3]);
      void yrgagiwotyfxolypClampSpan(5, 0, 10);

      void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
      void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
      void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
      void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
      if (event?.url) {
        yrgagiwotyfxolypProcessDirectDeepLink(event.url);
      }
    });

    let attempts = 0;
    const maxAttempts = 10;
    const checkInterval = 100;
    while (
      !yrgagiwotyfxolypInitializationRuntime.firsyrgagiwotyfxolyptParameterReceived &&
      attempts < maxAttempts
    ) {
      await new Promise<void>(resolve => {
  void yrgagiwotyfxolypSignalHarvestObfV7HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV7SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV7ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV8HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV8SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV8ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV9HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV9SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV9ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV10HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV10ClampMod(7, 5);

        void yrgagiwotyfxolypSignalHarvestObfV5HashMix('xy');
        void yrgagiwotyfxolypSignalHarvestObfV5SumOdds([1, 3, 5]);
        void yrgagiwotyfxolypSignalHarvestObfV5ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (setTimeout(() => {
  void yrgagiwotyfxolypSignalHarvestObfV7HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV7SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV7ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV8HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV8SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV8ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV9HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV9SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV9ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV10HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV10ClampMod(7, 5);

        void yrgagiwotyfxolypSignalHarvestObfV5HashMix('xy');
        void yrgagiwotyfxolypSignalHarvestObfV5SumOdds([1, 3, 5]);
        void yrgagiwotyfxolypSignalHarvestObfV5ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (resolve());
      }, checkInterval));
      });
      attempts++;
    }

    linkingSubscription.remove();
    yrgagiwotyfxolypInitializationRuntime.FinyrgagiwotyfxolyplNaming = '';
  } catch (error) {
    void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
    void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
    void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
    yrgagiwotyfxolypInitializationRuntime.DevyrgagiwotyfxolypiceId = '';
    yrgagiwotyfxolypInitializationRuntime.FinyrgagiwotyfxolyplOneLink = '';
    yrgagiwotyfxolypInitializationRuntime.FinyrgagiwotyfxolyplNaming = '';
  }
}

let yrgagiwotyfxolypNotificationOpenHandlerRegistered = false;
function yrgagiwotyfxolypEnsureNotificationOpenHandler(messaging: ReturnType<typeof getMessaging>): void {
  void yrgagiwotyfxolypSignalHarvestObfV7HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV7SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV7ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV8HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV8SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV8ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV9HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV9SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV9ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV10HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV10ClampMod(7, 5);

  void yrgagiwotyfxolypSignalHarvestObfV5HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV5SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV5ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSigObfV3HashMix('xy');
  void yrgagiwotyfxolypSigObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSigObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypSigObfV4HashMix('xy');
  void yrgagiwotyfxolypSigObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSigObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);

  void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  if (yrgagiwotyfxolypNotificationOpenHandlerRegistered) {
    return;
  }
  yrgagiwotyfxolypNotificationOpenHandlerRegistered = true;
  try {
    onNotificationOpenedApp(messaging, async (remoteMessage: any) => {
  void yrgagiwotyfxolypSignalHarvestObfV7HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV7SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV7ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV8HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV8SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV8ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV9HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV9SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV9ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV10HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV10ClampMod(7, 5);

      void yrgagiwotyfxolypSignalHarvestObfV5HashMix('xy');
      void yrgagiwotyfxolypSignalHarvestObfV5SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSignalHarvestObfV5ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6ClampMod(7, 5);
      void yrgagiwotyfxolypSigObfV3HashMix('xy');
      void yrgagiwotyfxolypSigObfV3SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSigObfV3ClampMod(7, 5);
      void yrgagiwotyfxolypSigObfV4HashMix('xy');
      void yrgagiwotyfxolypSigObfV4SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSigObfV4ClampMod(7, 5);
      void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
      void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
      void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
      void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
      void yrgagiwotyfxolypMixSeed(3, 7);
      void yrgagiwotyfxolypFoldRange([1, 2, 3]);
      void yrgagiwotyfxolypClampSpan(5, 0, 10);

      void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
      void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
      void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
      void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
      const pushUrl =
        typeof remoteMessage?.data?.url === 'string'
          ? remoteMessage.data.url
          : '';
      if (pushUrl) {
        await yrgagiwotyfxolypTryOpenPushExternalUrl(pushUrl);
      }
    });
  } catch (error) {
    void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
    void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
    void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
    yrgagiwotyfxolypNotificationOpenHandlerRegistered = false;
  }
}

/** Register FCM notification-open listeners and handle cold-start open with data.url. */
export async function yrgagiwotyfxolypSetupPushOpenHandlers(): Promise<void> {
  void yrgagiwotyfxolypSignalHarvestObfV7HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV7SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV7ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV8HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV8SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV8ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV9HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV9SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV9ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV10HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV10ClampMod(7, 5);

  void yrgagiwotyfxolypSignalHarvestObfV5HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV5SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV5ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSigObfV3HashMix('xy');
  void yrgagiwotyfxolypSigObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSigObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypSigObfV4HashMix('xy');
  void yrgagiwotyfxolypSigObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSigObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);

  void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    yrgagiwotyfxolypEnsureNotificationOpenHandler(messaging);
    const initialNotification = await getInitialNotification(messaging);
    const pushUrl =
      typeof initialNotification?.data?.url === 'string'
        ? initialNotification.data.url
        : '';
    if (pushUrl) {
      await yrgagiwotyfxolypTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
    void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
    void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  }
}

export interface yrgagiwotyfxolypParallelCollectResult {
  advertisingId: string;
}

/** Wave1 referrer → Wave2 push+GAID+deeplink. */
export async function yrgagiwotyfxolypParallelCollectStep(): Promise<yrgagiwotyfxolypParallelCollectResult> {
  void yrgagiwotyfxolypSignalHarvestObfV7HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV7SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV7ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV8HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV8SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV8ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV9HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV9SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV9ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV10HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV10ClampMod(7, 5);

  void yrgagiwotyfxolypSignalHarvestObfV5HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV5SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV5ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6HashMix('xy');
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarvestPart01ObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypSigObfV3HashMix('xy');
  void yrgagiwotyfxolypSigObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSigObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypSigObfV4HashMix('xy');
  void yrgagiwotyfxolypSigObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSigObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);

  void yrgagiwotyfxolypSignalHarveObfV1HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypSignalHarveObfV2HashMix('xy');
  void yrgagiwotyfxolypSignalHarveObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypSignalHarveObfV2ClampMod(7, 5);
  await yrgagiwotyfxolypReferrerStep();

  const [, advertisingId] = await Promise.all([
    yrgagiwotyfxolypPushStep(),
    yrgagiwotyfxolypGetAdvertisingId(),
    yrgagiwotyfxolypDataCollectStep(),
  ]);

  yrgagiwotyfxolypInitializationRuntime.adyrgagiwotyfxolypId = advertisingId ?? '';

  return {
    advertisingId: yrgagiwotyfxolypInitializationRuntime.adyrgagiwotyfxolypId,
  };
}

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

void yrgagiwotyfxolypSignalHarvestPart01ObfV5HashMix('xy');
void yrgagiwotyfxolypSignalHarvestPart01ObfV5SumOdds([1, 3, 5]);
void yrgagiwotyfxolypSignalHarvestPart01ObfV5ClampMod(7, 5);

/* obfuscation-batch:v7 */
function yrgagiwotyfxolypSignalHarvestObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function yrgagiwotyfxolypSignalHarvestObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function yrgagiwotyfxolypSignalHarvestObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

function yrgagiwotyfxolypSignalHarvestObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function yrgagiwotyfxolypSignalHarvestObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function yrgagiwotyfxolypSignalHarvestObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function yrgagiwotyfxolypMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

function yrgagiwotyfxolypFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

function yrgagiwotyfxolypClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

function yrgagiwotyfxolypSignalHarveObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function yrgagiwotyfxolypSignalHarveObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function yrgagiwotyfxolypSignalHarveObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function yrgagiwotyfxolypSignalHarveObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function yrgagiwotyfxolypSignalHarveObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function yrgagiwotyfxolypSignalHarveObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function yrgagiwotyfxolypSigObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function yrgagiwotyfxolypSigObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function yrgagiwotyfxolypSigObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function yrgagiwotyfxolypSigObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function yrgagiwotyfxolypSigObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function yrgagiwotyfxolypSigObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function yrgagiwotyfxolypSignalHarvestObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function yrgagiwotyfxolypSignalHarvestObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function yrgagiwotyfxolypSignalHarvestObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function yrgagiwotyfxolypSignalHarvestPart01ObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function yrgagiwotyfxolypSignalHarvestPart01ObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function yrgagiwotyfxolypSignalHarvestPart01ObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function yrgagiwotyfxolypSignalHarvestPart01ObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function yrgagiwotyfxolypSignalHarvestPart01ObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function yrgagiwotyfxolypSignalHarvestPart01ObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v7 */
function yrgagiwotyfxolypSignalHarvestPart01ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function yrgagiwotyfxolypSignalHarvestPart01ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function yrgagiwotyfxolypSignalHarvestPart01ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v8 */
function yrgagiwotyfxolypSignalHarvestObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function yrgagiwotyfxolypSignalHarvestObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function yrgagiwotyfxolypSignalHarvestObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v9 */
function yrgagiwotyfxolypSignalHarvestObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function yrgagiwotyfxolypSignalHarvestObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function yrgagiwotyfxolypSignalHarvestObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v10 */
function yrgagiwotyfxolypSignalHarvestObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function yrgagiwotyfxolypSignalHarvestObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function yrgagiwotyfxolypSignalHarvestObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
