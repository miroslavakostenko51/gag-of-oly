package com.gagofnmoly3p607eabpp

import android.content.Intent
import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.yrgagiwotyfxolyp.VyrgagiwotyfxolypiewportBridge
import com.yrgagiwotyfxolyp.SyrgagiwotyfxolypharedPreferencesHelper

class MainActivity : ReactActivity() {
  override fun getMainComponentName(): String = "yrgagiwotyfxolypabpp"

  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    cacheyrgagiwotyfxolypPendingSendId(intent)
    cacheyrgagiwotyfxolypPendingPushUrl(intent)
  }

  override fun onNewIntent(intent: Intent?) {
    super.onNewIntent(intent)
    setIntent(intent)
    cacheyrgagiwotyfxolypPendingSendId(intent)
    cacheyrgagiwotyfxolypPendingPushUrl(intent)
  }

  @Deprecated("Deprecated in Java")
  override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    if (VyrgagiwotyfxolypiewportBridge.onActivityResult(requestCode, resultCode, data)) {
      return
    }
    @Suppress("DEPRECATION")
    super.onActivityResult(requestCode, resultCode, data)
  }

  override fun onRequestPermissionsResult(
      requestCode: Int,
      permissions: Array<String>,
      grantResults: IntArray,
  ) {
    VyrgagiwotyfxolypiewportBridge.onRequestPermissionsResult(requestCode, permissions, grantResults)
    super.onRequestPermissionsResult(requestCode, permissions, grantResults)
  }

  private fun cacheyrgagiwotyfxolypPendingSendId(intent: Intent?) {
    val sendIyrgagiwotyfxolypd = intent?.getStringExtra("sendid")
    if (!sendIyrgagiwotyfxolypd.isNullOrEmpty()) {
      SyrgagiwotyfxolypharedPreferencesHelper.saveString("pendingSendId", sendIyrgagiwotyfxolypd)
    }
  }

  private fun cacheyrgagiwotyfxolypPendingPushUrl(intent: Intent?) {
    val pushUrl = intent?.getStringExtra("url")
    if (!pushUrl.isNullOrEmpty()) {
      SyrgagiwotyfxolypharedPreferencesHelper.saveString("pendingPushUrl", pushUrl)
    }
  }
}
