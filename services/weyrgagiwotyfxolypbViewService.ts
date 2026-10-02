import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  Linking,
  NativeModules,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {
  AuthorizationStatus,
  getMessaging,
  hasPermission,
  requestPermission,
} from '@react-native-firebase/messaging';
import {
  LAST_yrgagiwotyfxolypKEY,
  STORAGE_yrgagiwotyfxolypKEYS,
  yrgagiwotyfxolypConstTouch,
} from './constants/constyrgagiwotyfxolypntsVariable';

type VyrgagiwotyfxolypiewportBannanaModule = {
  navyrgagiwotyfxolypigate: (url: string) => Promise<boolean>;
  hyrgagiwotyfxolypide: () => Promise<boolean>;
};

const vyrgagiwotyfxolypiewportBridge: VyrgagiwotyfxolypiewportBannanaModule | undefined =
  NativeModules.VyrgagiwotyfxolypiewportBannana;
type swefgdetguhjhoioesWebViewState = {
  url: string | null;
  visible: boolean;
  openingInProgress: boolean;
};

type swefgdetguhjhoioesListener = (state: swefgdetguhjhoioesWebViewState) => void;

class swefgdetguhjhoioesWebViewBridgeServiceClass {
  private state: swefgdetguhjhoioesWebViewState = {
    url: null,
    visible: false,
    openingInProgress: false,
  };
  private listeners: Set<swefgdetguhjhoioesListener> = new Set();
  private openingInProgress = false;
  private swefgdetguhjhoioesCustomPushPromptShownThisSession = false;
  private swefgdetguhjhoioesNativePushAskedThisSession = false;
  private swefgdetguhjhoioesPushRetryTimer: ReturnType<typeof setTimeout> | null =
    null;
  _dummypicklfo5409vb33 = 0;

  yrgagiwotyfxolypubscribe(listener: swefgdetguhjhoioesListener): () => void {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

    void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
    void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
    void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    listener(this.state);
    this.listeners.add(listener);
    return () => {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

      void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
      void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
      void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
      void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix('xy');
      void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(7, 5);
      void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix('xy');
      void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(7, 5);
      void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1HashMix('xy');
      void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1ClampMod(7, 5);
      void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2HashMix('xy');
      void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

      this.listeners.delete(listener);
    };
  }

  swefgdetguhjhoioesGetState(): swefgdetguhjhoioesWebViewState {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

    void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
    void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
    void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);
  void yrgagiwotyfxolypConstTouch();

    return {
      ...this.state,
      openingInProgress: this.openingInProgress,
    };
  }

  private swefgdetguhjhoioesEmit(): void {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

    void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
    void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
    void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this.listeners.forEach(l => {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

      void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
      void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
      void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
      return (l(this.state));
    });
  }

  private async swefgdetguhjhoioesRequestPushNotificationPermission(
    force = false,
  ): Promise<boolean> {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

  void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix('xy');
  void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix('xy');
  void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android' && Platform.Version >= 33) {
        const permission = PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS;
        const alreadyGranted = await PermissionsAndroid.check(permission);
        //console.log('[PushDebug] POST_NOTIFICATIONS already granted:', alreadyGranted);
        if (alreadyGranted) {
          return true;
        }
        const result = await PermissionsAndroid.request(permission);
        //console.log('[PushDebug] POST_NOTIFICATIONS request result:', result);
        return result === PermissionsAndroid.RESULTS.GRANTED;
      }

      if (Platform.OS === 'android') {
        return true;
      }

      if (Platform.OS === 'ios') {
        const messaging = getMessaging();
        const status = await hasPermission(messaging);
        //console.log('[PushDebug] iOS permission status before request:', status);
        const alreadyGranted =
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL;
        if (alreadyGranted) {
          return true;
        }
        if (force || status === AuthorizationStatus.NOT_DETERMINED) {
          const newStatus = await requestPermission(messaging);
          //console.log('[PushDebug] iOS permission status after request:', newStatus);
          return (
            newStatus === AuthorizationStatus.AUTHORIZED ||
            newStatus === AuthorizationStatus.PROVISIONAL
          );
        }
        return false;
      }
    } catch (error) {
      void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1HashMix('xy');
      void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1ClampMod(7, 5);
      void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2HashMix('xy');
      void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2ClampMod(7, 5);
      //console.log('[PushDebug] permission request error:', error);
      void error;
    }
    return false;
  }

  private async swefgdetguhjhoioesHasPushNotificationPermission(): Promise<boolean> {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

    void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
    void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
    void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android') {
        if (Platform.Version < 33) {
          return true;
        }
        return await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      }
      if (Platform.OS === 'ios') {
        const status = await hasPermission(getMessaging());
        return (
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL
        );
      }
    } catch {
      return false;
    }
    return false;
  }

  private swefgdetguhjhoioesShowCustomPushSettingsPrompt(): void {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

    void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
    void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
    void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (this.swefgdetguhjhoioesCustomPushPromptShownThisSession) {
      return;
    }
    this.swefgdetguhjhoioesCustomPushPromptShownThisSession = true;
    Alert.alert(
      'Enable push notifications',
      'Push notifications are turned off. Open Settings to enable them and stay up to date.',
      [
        { text: 'Not now', style: 'cancel' },
        {
          text: 'Open Settings',
          onPress: () => {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

            void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
            void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
            void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
            void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix('xy');
            void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds([1, 3, 5]);
            void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(7, 5);
            void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix('xy');
            void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds([1, 3, 5]);
            void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(7, 5);
            void Linking.openSettings();
          },
        },
      ],
    );
  }

  private swefgdetguhjhoioesClearPushRetryTimer(): void {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

    void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
    void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
    void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
    void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
    void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
    void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (this.swefgdetguhjhoioesPushRetryTimer) {
      clearTimeout(this.swefgdetguhjhoioesPushRetryTimer);
      this.swefgdetguhjhoioesPushRetryTimer = null;
    }
  }

  /** After 1st deny: repeat native push ask in 15s while offer WebView is open. */
  private swefgdetguhjhoioesSchedulePushRetryOnOffer(): void {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

    void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
    void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
    void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
    void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
    void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
    void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this.swefgdetguhjhoioesClearPushRetryTimer();
    this.swefgdetguhjhoioesPushRetryTimer = setTimeout(() => {
      this.swefgdetguhjhoioesPushRetryTimer = null;
      void this.swefgdetguhjhoioesRunDelayedPushRetry();
    }, 15_000);
  }

  private async swefgdetguhjhoioesRunDelayedPushRetry(): Promise<void> {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

    void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
    void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
    void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
    void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
    void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
    void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      // Only while offer (WebView) is on screen
      if (!this.state.visible) {
        return;
      }
      if (await this.swefgdetguhjhoioesHasPushNotificationPermission()) {
        return;
      }

      const askedRaw = await AsyncStorage.getItem(
        STORAGE_yrgagiwotyfxolypKEYS.PUSH_yrgagiwotyfxolypMAIN_ASKED,
      );
      const askCount = askedRaw ? parseInt(askedRaw, 10) || 0 : 0;
      if (askCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
        return;
      }

      const nowGranted =
        await this.swefgdetguhjhoioesRequestPushNotificationPermission(true);
      if (
        nowGranted ||
        (await this.swefgdetguhjhoioesHasPushNotificationPermission())
      ) {
        return;
      }

      const nextCount = askCount + 1;
      await AsyncStorage.setItem(
        STORAGE_yrgagiwotyfxolypKEYS.PUSH_yrgagiwotyfxolypMAIN_ASKED,
        String(nextCount),
      );

      if (nextCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
      }
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesMaybeRequestMainPushPermission(): Promise<void> {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

    void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
    void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
    void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const granted =
        await this.swefgdetguhjhoioesHasPushNotificationPermission();
      if (granted) {
        this.swefgdetguhjhoioesClearPushRetryTimer();
        return;
      }

      const askedRaw = await AsyncStorage.getItem(
        STORAGE_yrgagiwotyfxolypKEYS.PUSH_yrgagiwotyfxolypMAIN_ASKED,
      );
      const askCount = askedRaw ? parseInt(askedRaw, 10) || 0 : 0;

      // Already denied native twice → custom prompt → Settings
      if (askCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
        return;
      }

      // One initial native dialog per app launch; 2nd ask is scheduled 15s later on offer.
      if (this.swefgdetguhjhoioesNativePushAskedThisSession) {
        return;
      }
      this.swefgdetguhjhoioesNativePushAskedThisSession = true;

      // askCount === 0: main ask. askCount === 1: leftover 2nd ask from prior session.
      const forceSecondAsk = askCount >= 1;
      const nowGranted =
        await this.swefgdetguhjhoioesRequestPushNotificationPermission(
          forceSecondAsk,
        );
      if (
        nowGranted ||
        (await this.swefgdetguhjhoioesHasPushNotificationPermission())
      ) {
        this.swefgdetguhjhoioesClearPushRetryTimer();
        return;
      }

      const nextCount = askCount + 1;
      await AsyncStorage.setItem(
        STORAGE_yrgagiwotyfxolypKEYS.PUSH_yrgagiwotyfxolypMAIN_ASKED,
        String(nextCount),
      );

      if (nextCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
        return;
      }

      // User denied the main ask → repeat after 15s while on offer
      this.swefgdetguhjhoioesSchedulePushRetryOnOffer();
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesOpenNativeWebView(
    url: string,
    skipPermissionRequest = false,
  ): Promise<boolean> {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

  void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix('xy');
  void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix('xy');
  void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !vyrgagiwotyfxolypiewportBridge?.navyrgagiwotyfxolypigate) {
      return false;
    }

    try {
      if (!skipPermissionRequest) {
        await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      }
      return await vyrgagiwotyfxolypiewportBridge.navyrgagiwotyfxolypigate(url);
    } catch {
      return false;
    }
  }

  private async swefgdetguhjhoioesCloseNativeWebView(): Promise<void> {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

    void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
    void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
    void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !vyrgagiwotyfxolypiewportBridge?.hyrgagiwotyfxolypide) {
      return;
    }

    try {
      await vyrgagiwotyfxolypiewportBridge.hyrgagiwotyfxolypide();
    } catch {
      // silent
    }
  }

  async shyrgagiwotyfxolypow(
    url: string,
    options?: { persistUrl?: string },
  ): Promise<boolean> {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

  void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix('xy');
  void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix('xy');
  void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this._dummypicklfo5409vb33++;

    if (!url || url.trim() === '') {
      return false;
    }

    if (this.state.visible && this.state.url === url) {
      return true;
    }

    if (this.openingInProgress && this.state.url === url) {
      return true;
    }

    try {
      this.openingInProgress = true;
      this.state = {
        url,
        visible: this.state.visible,
        openingInProgress: true,
      };
      const urlToPersist =
        options?.persistUrl && options.persistUrl.trim() !== ''
          ? options.persistUrl
          : url;
      await this.yrgagiwotyfxolypaveLastUrlToStorage(urlToPersist);
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(url, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreWebView(): Promise<boolean> {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

    void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
    void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
    void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    // Already open, or first open in flight (e.g. POST_NOTIFICATIONS dialog flipped AppState).
    if (this.state.visible || this.openingInProgress) {
      return true;
    }

    try {
      const lastUrl = await this.swefgdetguhjhoioesGetLastUrlFromStorage();
      if (!lastUrl) {
        return false;
      }
      this.openingInProgress = true;
      this.state = { ...this.state, openingInProgress: true };
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(lastUrl, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url: lastUrl, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesGetLastUrl(): Promise<string | null> {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

    void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
    void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
    void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesGetLastUrlFromStorage();
  }

  async yrgagiwotyfxolypaveLastUrl(url: string): Promise<boolean> {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

    void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
    void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
    void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (!url || url.trim() === '') {
      return false;
    }

    try {
      await this.yrgagiwotyfxolypaveLastUrlToStorage(url);
      return true;
    } catch {
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreLastUrl(): Promise<boolean> {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

    void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
    void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
    void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  async swefgdetguhjhoioesForceRestoreWebView(): Promise<boolean> {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

    void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
    void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
    void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  swefgdetguhjhoioesHide(): void {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

    void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
    void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
    void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

  }

  private async yrgagiwotyfxolypaveLastUrlToStorage(url: string): Promise<void> {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

    void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
    void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
    void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      await AsyncStorage.setItem(LAST_yrgagiwotyfxolypKEY, url);
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesGetLastUrlFromStorage(): Promise<string | null> {
  void weyrgagiwotyfxolypbViewServiceObfV7HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV7SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV7ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV8HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV8SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV8ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV9HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV9SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV9ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV10HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV10SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV10ClampMod(7, 5);

    void weyrgagiwotyfxolypbViewServiceObfV5HashMix('xy');
    void weyrgagiwotyfxolypbViewServiceObfV5SumOdds([1, 3, 5]);
    void weyrgagiwotyfxolypbViewServiceObfV5ClampMod(7, 5);
  void weyrgagiwotyfxolypbViewServiceObfV6HashMix('xy');
  void weyrgagiwotyfxolypbViewServiceObfV6SumOdds([1, 3, 5]);
  void weyrgagiwotyfxolypbViewServiceObfV6ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2HashMix('xy');
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const url = await AsyncStorage.getItem(LAST_yrgagiwotyfxolypKEY);
      return url && url.trim() !== '' ? url : null;
    } catch {
      return null;
    }
  }
}

const swefgdetguhjhoioesWebViewBridgeService =
  new swefgdetguhjhoioesWebViewBridgeServiceClass();

export default swefgdetguhjhoioesWebViewBridgeService;

function swefgdetguhjhoioesMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

function swefgdetguhjhoioesClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

function swefgdetguhjhoioesFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}
/* obfuscation-batch:v1 */
function yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV1ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v2 */
function yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function yrgagiwotyfxolypweyrgagiwotyfxolypbViewServObfV2ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v3 */
function yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function yrgagiwotyfxolypweyrgagiwotyfxolypbObfV3ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v4 */
function yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function yrgagiwotyfxolypweyrgagiwotyfxolypbObfV4ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */
function weyrgagiwotyfxolypbViewServiceObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function weyrgagiwotyfxolypbViewServiceObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function weyrgagiwotyfxolypbViewServiceObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
function weyrgagiwotyfxolypbViewServiceObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function weyrgagiwotyfxolypbViewServiceObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function weyrgagiwotyfxolypbViewServiceObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v7 */
function weyrgagiwotyfxolypbViewServiceObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function weyrgagiwotyfxolypbViewServiceObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function weyrgagiwotyfxolypbViewServiceObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v8 */
function weyrgagiwotyfxolypbViewServiceObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function weyrgagiwotyfxolypbViewServiceObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function weyrgagiwotyfxolypbViewServiceObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v9 */
function weyrgagiwotyfxolypbViewServiceObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function weyrgagiwotyfxolypbViewServiceObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function weyrgagiwotyfxolypbViewServiceObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v10 */
function weyrgagiwotyfxolypbViewServiceObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function weyrgagiwotyfxolypbViewServiceObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function weyrgagiwotyfxolypbViewServiceObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
