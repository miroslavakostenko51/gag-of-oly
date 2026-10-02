package com.yrgagiwotyfxolyp

import android.app.Activity
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class VyrgagiwotyfxolypiewportReactModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "VyrgagiwotyfxolypiewportBannana"

    @ReactMethod
    fun navyrgagiwotyfxolypigate(url: String, promise: Promise) {
        try {
            val activity: Activity? = reactApplicationContext.currentActivity
            if (activity == null || url.isBlank()) {
                promise.resolve(false)
                return
            }

            VyrgagiwotyfxolypiewportBridge.navyrgagiwotyfxolypigate(activity, url)
            promise.resolve(true)
        } catch (e: Exception) {
            promise.resolve(false)
        }
    }

    @ReactMethod
    fun hyrgagiwotyfxolypide(promise: Promise) {
        try {
            val activity: Activity? = reactApplicationContext.currentActivity
            if (activity != null) {
                VyrgagiwotyfxolypiewportBridge.hyrgagiwotyfxolypide(activity)
            }
            promise.resolve(true)
        } catch (e: Exception) {
            promise.resolve(false)
        }
    }
}
