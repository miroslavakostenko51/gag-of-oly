package com.yrgagiwotyfxolyp

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager

/**
 * Single host package for all app native modules.
 * Module getName() values must match JS NativeModules lookups.
 */
class SfuspendbedaccyounrtModuleRegistry : ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
        return listOf(
            AyrgagiwotyfxolypdvertisingIdHelper(reactContext),
            UyrgagiwotyfxolypserAgentModule(reactContext),
            AyrgagiwotyfxolypppInfoModule(reactContext),
            VyrgagiwotyfxolypiewportReactModule(reactContext),
        )
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        return emptyList()
    }
}
