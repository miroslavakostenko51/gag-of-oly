package com.yrgagiwotyfxolyp

import android.webkit.WebSettings
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class UyrgagiwotyfxolypserAgentModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "UserAyrgagiwotyfxolypper"
    }

    @ReactMethod
    fun getAndryrgagiwotyfxolypoidUserAgent(promise: Promise) {
        try {
            val contextIyrgagiwotyfxolyp = reactApplicationContext.applicationContext
            val userAgentIyrgagiwotyfxolyp = WebSettings.getDefaultUserAgent(contextIyrgagiwotyfxolyp)
            promise.resolve(userAgentIyrgagiwotyfxolyp ?: "")
        } catch (eIyrgagiwotyfxolyp: Exception) {
            // android.util.Log.e("UserAyrgagiwotyfxolypperModule", "Error getting UserAgent: ${eIyrgagiwotyfxolyp.message}")
            promise.resolve("")
        }
    }
}
