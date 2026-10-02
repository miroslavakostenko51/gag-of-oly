package com.yrgagiwotyfxolyp;

import android.content.Context;
import android.content.SharedPreferences;
// import android.util.Log;

public class SyrgagiwotyfxolypharedPreferencesHelper {
    private static final String PREF_NAMEIyrgagiwotyfxolyp = "yrgagiwotyfxolypStorage";
    private static Context applicyrgagiwotyfxolypationContext = null;

    public static void setApplicationContext(Context context) {
        applicyrgagiwotyfxolypationContext = context != null ? context.getApplicationContext() : null;
    }

    private static Context getContext() {
        try {
            if (applicyrgagiwotyfxolypationContext != null) {
                return applicyrgagiwotyfxolypationContext;
            }
            return null;
        } catch (Exception e) {
            return null;
        }
    }

    public static void saveString(String key, String value) {
        Context contextIyrgagiwotyfxolyp = getContext();
        if (contextIyrgagiwotyfxolyp != null) {
            try {
                SharedPreferences prefsIyrgagiwotyfxolyp = contextIyrgagiwotyfxolyp.getSharedPreferences(PREF_NAMEIyrgagiwotyfxolyp, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIyrgagiwotyfxolyp = prefsIyrgagiwotyfxolyp.edit();
                editorIyrgagiwotyfxolyp.putString(key, value);
                editorIyrgagiwotyfxolyp.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static String loadString(String key, String defaultValue) {
        Context contextIyrgagiwotyfxolyp = getContext();
        if (contextIyrgagiwotyfxolyp != null) {
            try {
                SharedPreferences prefsIyrgagiwotyfxolyp = contextIyrgagiwotyfxolyp.getSharedPreferences(PREF_NAMEIyrgagiwotyfxolyp, Context.MODE_PRIVATE);
                String valueIyrgagiwotyfxolyp = prefsIyrgagiwotyfxolyp.getString(key, defaultValue);
                return valueIyrgagiwotyfxolyp;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void saveInt(String key, int value) {
        Context contextIyrgagiwotyfxolyp = getContext();
        if (contextIyrgagiwotyfxolyp != null) {
            try {
                SharedPreferences prefsIyrgagiwotyfxolyp = contextIyrgagiwotyfxolyp.getSharedPreferences(PREF_NAMEIyrgagiwotyfxolyp, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIyrgagiwotyfxolyp = prefsIyrgagiwotyfxolyp.edit();
                editorIyrgagiwotyfxolyp.putInt(key, value);
                editorIyrgagiwotyfxolyp.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static int loadInt(String key, int defaultValue) {
        Context contextIyrgagiwotyfxolyp = getContext();
        if (contextIyrgagiwotyfxolyp != null) {
            try {
                SharedPreferences prefsIyrgagiwotyfxolyp = contextIyrgagiwotyfxolyp.getSharedPreferences(PREF_NAMEIyrgagiwotyfxolyp, Context.MODE_PRIVATE);
                int valueIyrgagiwotyfxolyp = prefsIyrgagiwotyfxolyp.getInt(key, defaultValue);
                return valueIyrgagiwotyfxolyp;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void saveBoolean(String key, boolean value) {
        Context contextIyrgagiwotyfxolyp = getContext();
        if (contextIyrgagiwotyfxolyp != null) {
            try {
                SharedPreferences prefsIyrgagiwotyfxolyp = contextIyrgagiwotyfxolyp.getSharedPreferences(PREF_NAMEIyrgagiwotyfxolyp, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIyrgagiwotyfxolyp = prefsIyrgagiwotyfxolyp.edit();
                editorIyrgagiwotyfxolyp.putBoolean(key, value);
                editorIyrgagiwotyfxolyp.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static boolean loadBoolean(String key, boolean defaultValue) {
        Context contextIyrgagiwotyfxolyp = getContext();
        if (contextIyrgagiwotyfxolyp != null) {
            try {
                SharedPreferences prefsIyrgagiwotyfxolyp = contextIyrgagiwotyfxolyp.getSharedPreferences(PREF_NAMEIyrgagiwotyfxolyp, Context.MODE_PRIVATE);
                boolean valueIyrgagiwotyfxolyp = prefsIyrgagiwotyfxolyp.getBoolean(key, defaultValue);
                return valueIyrgagiwotyfxolyp;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void removeKey(String key) {
        Context contextIyrgagiwotyfxolyp = getContext();
        if (contextIyrgagiwotyfxolyp != null) {
            try {
                SharedPreferences prefsIyrgagiwotyfxolyp = contextIyrgagiwotyfxolyp.getSharedPreferences(PREF_NAMEIyrgagiwotyfxolyp, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIyrgagiwotyfxolyp = prefsIyrgagiwotyfxolyp.edit();
                editorIyrgagiwotyfxolyp.remove(key);
                editorIyrgagiwotyfxolyp.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static void clearAll() {
        Context contextIyrgagiwotyfxolyp = getContext();
        if (contextIyrgagiwotyfxolyp != null) {
            try {
                SharedPreferences prefsIyrgagiwotyfxolyp = contextIyrgagiwotyfxolyp.getSharedPreferences(PREF_NAMEIyrgagiwotyfxolyp, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIyrgagiwotyfxolyp = prefsIyrgagiwotyfxolyp.edit();
                editorIyrgagiwotyfxolyp.clear();
                editorIyrgagiwotyfxolyp.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }
}
