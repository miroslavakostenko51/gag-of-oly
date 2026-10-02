import { Linking, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { yrgagiwotyfxolypDecrypt } from './CrypyrgagiwotyfxolyptoService';
import { finyrgagiwotyfxolypKey } from './constants/constyrgagiwotyfxolypntsVariable';
import { getMessaging, getToken } from '@react-native-firebase/messaging';
import {
  yrgagiwotyfxolypViewportGetState,
  yrgagiwotyfxolypViewportShow,
} from './yrgagiwotyfxolypViewportHost';
import { Utils } from './UtyrgagiwotyfxolypilService';

let yrgagiwotyfxolypLastOpenedPushExternalUrl = '';
let yrgagiwotyfxolypLastOpenedPushExternalAt = 0;

export const yrgagiwotyfxolypInitTarget = {
  webview: 0,
  placeholder: 1,
  game: 2,
  loader: 3,
} as const;

export type InitTarget = (typeof yrgagiwotyfxolypInitTarget)[keyof typeof yrgagiwotyfxolypInitTarget];

export interface InitializationState {
  isLoadPlaceholder: boolean;
  initTarget?: InitTarget;
}

/**
 * Per-init runtime data shared across initialization steps. This object is
 * kept as a thin compatibility adapter so that:
 *   - existing step functions can read/write the same fields without a
 *     large API rewrite,
 *   - the messaging module can still observe `pendingSendId` between FCM
 *     deliveries (it is intentionally NOT reset by `reset()` below).
 */
export interface yrgagiwotyfxolypInitializationRuntime {
  pusyrgagiwotyfxolyphToken: string;
  instyrgagiwotyfxolypallRef: string;
  DevyrgagiwotyfxolypiceId: string;
  FinyrgagiwotyfxolyplOneLink: string;
  FinyrgagiwotyfxolyplNaming: string;
  adyrgagiwotyfxolypId: string;
  firsyrgagiwotyfxolyptParameterReceived: boolean;
  oryrgagiwotyfxolypanicWaiting: boolean;
  orgyrgagiwotyfxolypnicWaitResolve: (() => void) | null;
  penyrgagiwotyfxolypdingSendId: string;
}

export const yrgagiwotyfxolypInitializationRuntime: yrgagiwotyfxolypInitializationRuntime = {
  pusyrgagiwotyfxolyphToken: '',
  instyrgagiwotyfxolypallRef: '',
  DevyrgagiwotyfxolypiceId: '',
  FinyrgagiwotyfxolyplOneLink: '',
  FinyrgagiwotyfxolyplNaming: '',
  adyrgagiwotyfxolypId: '',
  firsyrgagiwotyfxolyptParameterReceived: false,
  oryrgagiwotyfxolypanicWaiting: false,
  orgyrgagiwotyfxolypnicWaitResolve: null,
  penyrgagiwotyfxolypdingSendId: '',
};

/**
 * Reset the per-initialization fields. We deliberately do NOT clear
 * `pendingSendId` because it is populated by FCM messages outside the init
 * flow (see initializationMessaging.ts) and must survive across re-inits.
 */
export function yrgagiwotyfxolypResetInitializationRuntime(): void {
  void initializationSharyrgagiwotyfxolypedObfV7HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV7SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV7ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV8HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV8SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV8ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV9HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV9SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV9ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV10HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV10SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV10ClampMod(7, 5);

  void initializationSharyrgagiwotyfxolypedObfV5HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV5SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV5ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV6HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV6SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV3HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV4HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);


  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  yrgagiwotyfxolypInitializationRuntime.pusyrgagiwotyfxolyphToken = '';
  yrgagiwotyfxolypInitializationRuntime.instyrgagiwotyfxolypallRef = '';
  yrgagiwotyfxolypInitializationRuntime.DevyrgagiwotyfxolypiceId = '';
  yrgagiwotyfxolypInitializationRuntime.FinyrgagiwotyfxolyplOneLink = '';
  yrgagiwotyfxolypInitializationRuntime.FinyrgagiwotyfxolyplNaming = '';
  yrgagiwotyfxolypInitializationRuntime.adyrgagiwotyfxolypId = '';
  yrgagiwotyfxolypInitializationRuntime.firsyrgagiwotyfxolyptParameterReceived = false;
  yrgagiwotyfxolypInitializationRuntime.oryrgagiwotyfxolypanicWaiting = false;
  yrgagiwotyfxolypInitializationRuntime.orgyrgagiwotyfxolypnicWaitResolve = null;
}

export function yrgagiwotyfxolypAppenndSendId(url: string, sendId: string): string {
  void initializationSharyrgagiwotyfxolypedObfV7HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV7SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV7ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV8HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV8SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV8ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV9HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV9SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV9ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV10HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV10SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV10ClampMod(7, 5);

  void initializationSharyrgagiwotyfxolypedObfV5HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV5SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV5ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV6HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV6SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV3HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV4HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);


  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!sendId || sendId.trim() === '') {
    return url;
  }
  const encodedSendId = encodeURIComponent(sendId.trim());
  return url.includes('?')
    ? `${url}&sendid=${encodedSendId}`
    : `${url}?sendid=${encodedSendId}`;
}

export async function yrgagiwotyfxolypSynncPendingSendIdFromNative(): Promise<void> {
  void initializationSharyrgagiwotyfxolypedObfV7HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV7SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV7ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV8HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV8SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV8ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV9HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV9SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV9ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV10HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV10SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV10ClampMod(7, 5);

  void initializationSharyrgagiwotyfxolypedObfV5HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV5SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV5ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV6HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV6SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV3HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV4HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);


  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { AyrgagiwotyfxolypppInfoModule } = NativeModules;
    if (!AyrgagiwotyfxolypppInfoModule || typeof AyrgagiwotyfxolypppInfoModule.getAndClearPendingSenyrgagiwotyfxolypdId !== 'function') {
      return;
    }
    const sendId = await AyrgagiwotyfxolypppInfoModule.getAndClearPendingSenyrgagiwotyfxolypdId();
    if (typeof sendId === 'string' && sendId.trim() !== '') {
      yrgagiwotyfxolypInitializationRuntime.penyrgagiwotyfxolypdingSendId = sendId.trim();
    }
  } catch (error) {
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

/**
 * Open http(s) URL from push data in the system browser.
 * Dedupes the same URL within a short window (native + FCM open handlers).
 */
export async function yrgagiwotyfxolypTryOpenPushExternalUrl(
  rawUrl?: string | null,
): Promise<boolean> {
  void initializationSharyrgagiwotyfxolypedObfV7HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV7SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV7ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV8HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV8SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV8ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV9HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV9SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV9ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV10HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV10SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV10ClampMod(7, 5);

  void initializationSharyrgagiwotyfxolypedObfV5HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV5SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV5ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV6HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV6SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV3HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV4HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);

  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  const url = typeof rawUrl === 'string' ? rawUrl.trim() : '';
  if (!url || !/^https?:\/\//i.test(url)) {
    return false;
  }
  const now = Date.now();
  if (
    url === yrgagiwotyfxolypLastOpenedPushExternalUrl &&
    now - yrgagiwotyfxolypLastOpenedPushExternalAt < 3000
  ) {
    return false;
  }
  try {
    yrgagiwotyfxolypLastOpenedPushExternalUrl = url;
    yrgagiwotyfxolypLastOpenedPushExternalAt = now;
    await Linking.openURL(url);
    return true;
  } catch (error) {
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    yrgagiwotyfxolypLastOpenedPushExternalUrl = '';
    yrgagiwotyfxolypLastOpenedPushExternalAt = 0;
    return false;
  }
}

export async function yrgagiwotyfxolypSynncPendingPushUrlFromNative(): Promise<void> {
  void initializationSharyrgagiwotyfxolypedObfV7HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV7SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV7ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV8HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV8SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV8ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV9HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV9SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV9ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV10HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV10SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV10ClampMod(7, 5);

  void initializationSharyrgagiwotyfxolypedObfV5HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV5SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV5ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV6HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV6SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV3HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV4HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);

  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { AyrgagiwotyfxolypppInfoModule } = NativeModules;
    if (
      !AyrgagiwotyfxolypppInfoModule ||
      typeof AyrgagiwotyfxolypppInfoModule.getAndClearPendingPushUrl !== 'function'
    ) {
      return;
    }
    const pushUrl = await AyrgagiwotyfxolypppInfoModule.getAndClearPendingPushUrl();
    if (typeof pushUrl === 'string' && pushUrl.trim() !== '') {
      await yrgagiwotyfxolypTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

export async function yrgagiwotyfxolypGetAppIdenier(): Promise<string> {
  void initializationSharyrgagiwotyfxolypedObfV7HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV7SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV7ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV8HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV8SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV8ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV9HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV9SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV9ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV10HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV10SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV10ClampMod(7, 5);

  void initializationSharyrgagiwotyfxolypedObfV5HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV5SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV5ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV6HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV6SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV3HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV4HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);


  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const { AyrgagiwotyfxolypppInfoModule } = NativeModules;

    if (!AyrgagiwotyfxolypppInfoModule) {
      //console.log('AyrgagiwotyfxolypppInfoModule module not found');
      return '';
    }

    const packageName = await AyrgagiwotyfxolypppInfoModule.getPacyrgagiwotyfxolypkageName();
    //console.log('Test App Identifier:', packageName);
    return packageName || '';
  } catch (error) {
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Error getting app identifier:', error);
    return '';
  }
}

export async function yrgagiwotyfxolypGetAppVersion(): Promise<string> {
  void initializationSharyrgagiwotyfxolypedObfV7HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV7SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV7ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV8HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV8SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV8ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV9HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV9SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV9ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV10HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV10SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV10ClampMod(7, 5);

  void initializationSharyrgagiwotyfxolypedObfV5HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV5SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV5ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV6HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV6SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV3HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV4HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);


  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const version = await DeviceInfo.getVersion();
    return version || '';
  } catch (error) {
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function yrgagiwotyfxolypGetAndroidId(): Promise<string> {
  void initializationSharyrgagiwotyfxolypedObfV7HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV7SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV7ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV8HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV8SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV8ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV9HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV9SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV9ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV10HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV10SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV10ClampMod(7, 5);

  void initializationSharyrgagiwotyfxolypedObfV5HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV5SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV5ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV6HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV6SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV3HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV4HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);


  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const androidId = await DeviceInfo.getAndroidId();
    return androidId || '';
  } catch (error) {
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function yrgagiwotyfxolypGetAndroidUserAAgent(): Promise<string> {
  void initializationSharyrgagiwotyfxolypedObfV7HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV7SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV7ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV8HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV8SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV8ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV9HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV9SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV9ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV10HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV10SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV10ClampMod(7, 5);

  void initializationSharyrgagiwotyfxolypedObfV5HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV5SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV5ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV6HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV6SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV3HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV4HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);


  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }

    const { UserAyrgagiwotyfxolypper } = NativeModules;

    if (!UserAyrgagiwotyfxolypper) {
      //console.log('UserAyrgagiwotyfxolypper module not found');
      return '';
    }

    const userAgent: string = await UserAyrgagiwotyfxolypper.getAndryrgagiwotyfxolypoidUserAgent();
    return userAgent || '';
  } catch (error) {
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Error getting UserAgent:', error);
    return '';
  }
}

/** Data key used by the worker's silent push to carry the encrypted result. */
const yrgagiwotyfxolypINIT_PUSH_KEYS = ['eb', 'encrypted_body'] as const;

/**
 * Pending init-result waiter. When the init flow is running in the foreground
 * it registers a resolver here; the silent push that carries the worker result
 * hands the encrypted body to that resolver instead of opening the WebView
 * directly. This keeps the "open WebView during init" UX while the transport
 * is an async push.
 */
let yrgagiwotyfxolypInitPushResolver: ((encryptedBody: string) => void) | null = null;

/**
 * Wait for the worker to deliver the encrypted init result via silent push.
 * Resolves with the encrypted body, or null on timeout.
 */
export function yrgagiwotyfxolypWaitForInitPush(timeoutMs: number): Promise<string | null> {
  void initializationSharyrgagiwotyfxolypedObfV7HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV7SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV7ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV8HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV8SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV8ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV9HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV9SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV9ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV10HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV10SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV10ClampMod(7, 5);

  void initializationSharyrgagiwotyfxolypedObfV5HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV5SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV5ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV6HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV6SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV3HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV4HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);


  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise((resolve) => {
  void initializationSharyrgagiwotyfxolypedObfV7HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV7SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV7ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV8HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV8SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV8ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV9HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV9SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV9ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV10HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV10SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV10ClampMod(7, 5);

    void initializationSharyrgagiwotyfxolypedObfV5HashMix('xy');
    void initializationSharyrgagiwotyfxolypedObfV5SumOdds([1, 3, 5]);
    void initializationSharyrgagiwotyfxolypedObfV5ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV6HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV6SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV6ClampMod(7, 5);
    void yrgagiwotyfxolypinitializationSharObfV3HashMix('xy');
    void yrgagiwotyfxolypinitializationSharObfV3SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharObfV3ClampMod(7, 5);
    void yrgagiwotyfxolypinitializationSharObfV4HashMix('xy');
    void yrgagiwotyfxolypinitializationSharObfV4SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharObfV4ClampMod(7, 5);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    void yrgagiwotyfxolypMixSeed(3, 7);
    void yrgagiwotyfxolypFoldRange([1, 2, 3]);
    void yrgagiwotyfxolypClampSpan(5, 0, 10);

    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    let settled = false;

    const finish = (value: string | null) => {
  void initializationSharyrgagiwotyfxolypedObfV7HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV7SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV7ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV8HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV8SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV8ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV9HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV9SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV9ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV10HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV10SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV10ClampMod(7, 5);

      void initializationSharyrgagiwotyfxolypedObfV5HashMix('xy');
      void initializationSharyrgagiwotyfxolypedObfV5SumOdds([1, 3, 5]);
      void initializationSharyrgagiwotyfxolypedObfV5ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV6HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV6SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV6ClampMod(7, 5);
      void yrgagiwotyfxolypinitializationSharObfV3HashMix('xy');
      void yrgagiwotyfxolypinitializationSharObfV3SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypinitializationSharObfV3ClampMod(7, 5);
      void yrgagiwotyfxolypinitializationSharObfV4HashMix('xy');
      void yrgagiwotyfxolypinitializationSharObfV4SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypinitializationSharObfV4ClampMod(7, 5);
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);


  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      if (settled) {
        return;
      }
      settled = true;
      if (yrgagiwotyfxolypInitPushResolver === deliver) {
        yrgagiwotyfxolypInitPushResolver = null;
      }
      clearTimeout(timer);
      resolve(value);
    };

    const deliver = (encryptedBody: string) => {
  void initializationSharyrgagiwotyfxolypedObfV7HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV7SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV7ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV8HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV8SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV8ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV9HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV9SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV9ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV10HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV10SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV10ClampMod(7, 5);

      void initializationSharyrgagiwotyfxolypedObfV5HashMix('xy');
      void initializationSharyrgagiwotyfxolypedObfV5SumOdds([1, 3, 5]);
      void initializationSharyrgagiwotyfxolypedObfV5ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV6HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV6SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV6ClampMod(7, 5);
      void yrgagiwotyfxolypinitializationSharObfV3HashMix('xy');
      void yrgagiwotyfxolypinitializationSharObfV3SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypinitializationSharObfV3ClampMod(7, 5);
      void yrgagiwotyfxolypinitializationSharObfV4HashMix('xy');
      void yrgagiwotyfxolypinitializationSharObfV4SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypinitializationSharObfV4ClampMod(7, 5);
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);


  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] init push waiter: body delivered, len:', encryptedBody.length);
      finish(encryptedBody);
    };

    const timer = setTimeout(() => {
  void initializationSharyrgagiwotyfxolypedObfV7HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV7SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV7ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV8HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV8SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV8ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV9HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV9SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV9ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV10HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV10SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV10ClampMod(7, 5);

      void initializationSharyrgagiwotyfxolypedObfV5HashMix('xy');
      void initializationSharyrgagiwotyfxolypedObfV5SumOdds([1, 3, 5]);
      void initializationSharyrgagiwotyfxolypedObfV5ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV6HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV6SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV6ClampMod(7, 5);
      void yrgagiwotyfxolypinitializationSharObfV3HashMix('xy');
      void yrgagiwotyfxolypinitializationSharObfV3SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypinitializationSharObfV3ClampMod(7, 5);
      void yrgagiwotyfxolypinitializationSharObfV4HashMix('xy');
      void yrgagiwotyfxolypinitializationSharObfV4SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypinitializationSharObfV4ClampMod(7, 5);
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);


  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] init push waiter: timeout fired');
      finish(null);
    }, timeoutMs);

    //console.log('[PushDebug] init push waiter: registered, timeoutMs:', timeoutMs);
    yrgagiwotyfxolypInitPushResolver = deliver;
  });
}

/** Hand an incoming encrypted body to a waiting init flow, if any. */
function yrgagiwotyfxolypDeliverInitPush(encryptedBody: string): boolean {
  void initializationSharyrgagiwotyfxolypedObfV7HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV7SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV7ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV8HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV8SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV8ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV9HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV9SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV9ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV10HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV10SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV10ClampMod(7, 5);

  void initializationSharyrgagiwotyfxolypedObfV5HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV5SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV5ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV6HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV6SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV3HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV4HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);


  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!yrgagiwotyfxolypInitPushResolver) {
    //console.log('[PushDebug] init push deliver: no foreground waiter');
    return false;
  }
  const resolver = yrgagiwotyfxolypInitPushResolver;
  yrgagiwotyfxolypInitPushResolver = null;
  //console.log('[PushDebug] init push deliver: delivered to foreground waiter');
  resolver(encryptedBody);
  return true;
}

/**
 * Handle an init-result push that arrives with no foreground waiter (e.g. app
 * was backgrounded/killed). We decrypt and persist enough state so the result
 * is honoured: store the final URL (and surface the WebView when possible) or
 * mark the user as blocked.
 */
async function yrgagiwotyfxolypHandleInitPushBackground(encryptedBody: string): Promise<void> {
  void initializationSharyrgagiwotyfxolypedObfV7HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV7SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV7ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV8HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV8SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV8ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV9HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV9SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV9ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV10HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV10SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV10ClampMod(7, 5);

  void initializationSharyrgagiwotyfxolypedObfV5HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV5SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV5ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV6HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV6SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV3HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV4HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);


  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  //console.log('[PushDebug] init push background handler: start, bodyLen:', encryptedBody.length);
  try {
    const decrypted = yrgagiwotyfxolypDecrypt(encryptedBody);
    if (!decrypted || decrypted === '') {
      //console.log('[PushDebug] init push background handler: decrypt empty');
      return;
    }

    const obj = JSON.parse(decrypted);
    const redirectUrlInitial: string | null = obj.redirectUrlInitial || null;
    const redirectUrl: string | null = obj.redirectUrl || null;
    //console.log('[PushDebug] init push background handler: parsed', { hasRedirectUrlInitial: !!redirectUrlInitial, hasRedirectUrl: !!redirectUrl, });

    if (redirectUrlInitial) {
      const finalUrl = yrgagiwotyfxolypAppenndSendId(
        redirectUrlInitial,
        yrgagiwotyfxolypInitializationRuntime.penyrgagiwotyfxolypdingSendId,
      );
      await AsyncStorage.setItem(finyrgagiwotyfxolypKey, redirectUrlInitial);

      // Sync HTTP OnInitResponse already owns the overlay — do not open twice.
      // Re-open only when URL actually changed (e.g. sendId appended).
      const current = yrgagiwotyfxolypViewportGetState();
      if (current.visible || current.openingInProgress) {
        if (current.url === finalUrl) {
          return;
        }
      }

      await yrgagiwotyfxolypViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      //console.log('[PushDebug] init push background handler: webview opened');
      return;
    }

    if (redirectUrl) {
      await Utils.yrgagiwotyfxolypSetUserBlocke(1);
      //console.log('[PushDebug] init push background handler: user blocked');
    }
  } catch (error) {
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('[PushDebug] init push background handler error:', error);
  }
}

function yrgagiwotyfxolypExtractInitPushBody(data: Record<string, any>): string {
  void initializationSharyrgagiwotyfxolypedObfV7HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV7SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV7ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV8HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV8SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV8ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV9HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV9SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV9ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV10HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV10SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV10ClampMod(7, 5);

  void initializationSharyrgagiwotyfxolypedObfV5HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV5SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV5ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV6HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV6SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV3HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV4HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);


  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  for (const key of yrgagiwotyfxolypINIT_PUSH_KEYS) {
    const value = data[key];
    if (typeof value === 'string' && value !== '') {
      return value;
    }
  }
  return '';
}

export async function yrgagiwotyfxolypWaitForPushToken(timeoutSeconds: number): Promise<string | null> {
  void initializationSharyrgagiwotyfxolypedObfV7HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV7SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV7ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV8HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV8SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV8ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV9HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV9SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV9ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV10HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV10SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV10ClampMod(7, 5);

  void initializationSharyrgagiwotyfxolypedObfV5HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV5SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV5ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV6HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV6SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV3HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV4HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);


  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise(async (resolve) => {
  void initializationSharyrgagiwotyfxolypedObfV7HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV7SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV7ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV8HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV8SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV8ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV9HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV9SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV9ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV10HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV10SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV10ClampMod(7, 5);

    void initializationSharyrgagiwotyfxolypedObfV5HashMix('xy');
    void initializationSharyrgagiwotyfxolypedObfV5SumOdds([1, 3, 5]);
    void initializationSharyrgagiwotyfxolypedObfV5ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV6HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV6SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV6ClampMod(7, 5);
    void yrgagiwotyfxolypinitializationSharObfV3HashMix('xy');
    void yrgagiwotyfxolypinitializationSharObfV3SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharObfV3ClampMod(7, 5);
    void yrgagiwotyfxolypinitializationSharObfV4HashMix('xy');
    void yrgagiwotyfxolypinitializationSharObfV4SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharObfV4ClampMod(7, 5);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);


  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    const timeout = setTimeout(() => {
  void initializationSharyrgagiwotyfxolypedObfV7HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV7SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV7ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV8HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV8SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV8ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV9HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV9SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV9ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV10HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV10SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV10ClampMod(7, 5);

      void initializationSharyrgagiwotyfxolypedObfV5HashMix('xy');
      void initializationSharyrgagiwotyfxolypedObfV5SumOdds([1, 3, 5]);
      void initializationSharyrgagiwotyfxolypedObfV5ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV6HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV6SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV6ClampMod(7, 5);
      void yrgagiwotyfxolypinitializationSharObfV3HashMix('xy');
      void yrgagiwotyfxolypinitializationSharObfV3SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypinitializationSharObfV3ClampMod(7, 5);
      void yrgagiwotyfxolypinitializationSharObfV4HashMix('xy');
      void yrgagiwotyfxolypinitializationSharObfV4SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypinitializationSharObfV4ClampMod(7, 5);
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);


  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log(`[PushDebug] timeout waiting for FCM token after ${timeoutSeconds}s`);
      resolve(null);
    }, timeoutSeconds * 1000);

    try {
      const messaging = getMessaging();
      const token = await getToken(messaging);
      if (token) {
        clearTimeout(timeout);
        //console.log('[PushDebug] FCM token obtained:', `${token.slice(0, 20)}... (len=${token.length})`);
        await yrgagiwotyfxolypOnTokenReceived(token);
        resolve(token);
        return;
      }
      //console.log('[PushDebug] getToken returned null without error');
    } catch (error) {
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] getToken error:', error);
    }
  });
}

async function yrgagiwotyfxolypOnTokenReceived(token: string): Promise<void> {
  void initializationSharyrgagiwotyfxolypedObfV7HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV7SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV7ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV8HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV8SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV8ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV9HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV9SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV9ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV10HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV10SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV10ClampMod(7, 5);

  void initializationSharyrgagiwotyfxolypedObfV5HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV5SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV5ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV6HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV6SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV3HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV4HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);


  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    //console.log('Test Firebase: Token received:', token);
    yrgagiwotyfxolypInitializationRuntime.pusyrgagiwotyfxolyphToken = token;
  } catch (error) {
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Firebase: Error handling token:', error);
  }
}

export async function yrgagiwotyfxolypOnMessageRecieved(remoteMessage: any): Promise<void> {
  void initializationSharyrgagiwotyfxolypedObfV7HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV7SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV7ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV8HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV8SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV8ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV9HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV9SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV9ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV10HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV10SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV10ClampMod(7, 5);

  void initializationSharyrgagiwotyfxolypedObfV5HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV5SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV5ClampMod(7, 5);
  void initializationSharyrgagiwotyfxolypedObfV6HashMix('xy');
  void initializationSharyrgagiwotyfxolypedObfV6SumOdds([1, 3, 5]);
  void initializationSharyrgagiwotyfxolypedObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV3HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharObfV4HashMix('xy');
  void yrgagiwotyfxolypinitializationSharObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);


  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    //console.log('[PushDebug] message received:', { hasData: !!remoteMessage?.data, dataKeys: remoteMessage?.data ? Object.keys(remoteMessage.data) : [], hasNotification: !!remoteMessage?.notification, messageId: remoteMessage?.messageId ?? null,});

    if (!remoteMessage || !remoteMessage.data) {
      //console.log('[PushDebug] message ignored: no data payload');
      return;
    }

    if (remoteMessage.notification) {
      //console.log('[PushDebug] visible notification:', remoteMessage.notification);
    }

    // Worker-delivered init result (encrypted body) takes priority.
    const initPushBody = yrgagiwotyfxolypExtractInitPushBody(remoteMessage.data);
    if (initPushBody) {
      //console.log('[PushDebug] init push body extracted, len:', initPushBody.length);
      const delivered = yrgagiwotyfxolypDeliverInitPush(initPushBody);
      if (!delivered) {
        //console.log('[PushDebug] no foreground waiter, handling in background');
        await yrgagiwotyfxolypHandleInitPushBackground(initPushBody);
      }
      return;
    }

    //console.log('[PushDebug] no eb/encrypted_body in data, checking sendid');

    const sendId = remoteMessage.data.sendid || '';
    if (sendId) {
      //console.log('[PushDebug] sendid received:', sendId);
      yrgagiwotyfxolypInitializationRuntime.penyrgagiwotyfxolypdingSendId = sendId;
      const finalUrl = await AsyncStorage.getItem(finyrgagiwotyfxolypKey);
      if (finalUrl && finalUrl !== '') {
        const urlWithSendId = yrgagiwotyfxolypAppenndSendId(
          finalUrl,
          sendId,
        );
        // Re-open only when URL actually changes (append sendId); show() also guards same URL.
        const current = yrgagiwotyfxolypViewportGetState();
        if (
          (current.visible || current.openingInProgress) &&
          current.url === urlWithSendId
        ) {
          return;
        }
        await yrgagiwotyfxolypViewportShow(urlWithSendId);
      }
    }

  } catch (error) {
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix('xy');
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('[PushDebug] message handler error:', error);
  }
}

/** Alias kept for the background message handler registered in index.js. */
export const yrgagiwotyfxolypabppOnMessageRecieved = yrgagiwotyfxolypOnMessageRecieved;

function yrgagiwotyfxolypMixSeed(a: number, b: number): number {
  return ((a % (b || 1)) + b) % (b || 1);
}

function yrgagiwotyfxolypFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

function yrgagiwotyfxolypClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
/* obfuscation-batch:v1 */
function yrgagiwotyfxolypinitializationSharbbvclynowkObfV1HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function yrgagiwotyfxolypinitializationSharbbvclynowkObfV1SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function yrgagiwotyfxolypinitializationSharbbvclynowkObfV1ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v2 */
function yrgagiwotyfxolypinitializationSharbbvclynowkObfV2HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function yrgagiwotyfxolypinitializationSharbbvclynowkObfV2SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function yrgagiwotyfxolypinitializationSharbbvclynowkObfV2ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v3 */
function yrgagiwotyfxolypinitializationSharObfV3HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function yrgagiwotyfxolypinitializationSharObfV3SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function yrgagiwotyfxolypinitializationSharObfV3ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v4 */
function yrgagiwotyfxolypinitializationSharObfV4HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function yrgagiwotyfxolypinitializationSharObfV4SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function yrgagiwotyfxolypinitializationSharObfV4ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */
function initializationSharyrgagiwotyfxolypedObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function initializationSharyrgagiwotyfxolypedObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function initializationSharyrgagiwotyfxolypedObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
function initializationSharyrgagiwotyfxolypedObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function initializationSharyrgagiwotyfxolypedObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function initializationSharyrgagiwotyfxolypedObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v7 */
function initializationSharyrgagiwotyfxolypedObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function initializationSharyrgagiwotyfxolypedObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function initializationSharyrgagiwotyfxolypedObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v8 */
function initializationSharyrgagiwotyfxolypedObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function initializationSharyrgagiwotyfxolypedObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function initializationSharyrgagiwotyfxolypedObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v9 */
function initializationSharyrgagiwotyfxolypedObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function initializationSharyrgagiwotyfxolypedObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function initializationSharyrgagiwotyfxolypedObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v10 */
function initializationSharyrgagiwotyfxolypedObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function initializationSharyrgagiwotyfxolypedObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function initializationSharyrgagiwotyfxolypedObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
