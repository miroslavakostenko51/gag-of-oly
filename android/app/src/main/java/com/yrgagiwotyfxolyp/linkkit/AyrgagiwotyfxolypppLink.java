package com.yrgagiwotyfxolyp.linkkit;
import android.net.Uri;

import java.util.Collections;
import java.util.List;

public class AyrgagiwotyfxolypppLink {
  private final Uri sourceUrl;
  private final List<Target> targets;
  private final Uri webUrl;

  public AyrgagiwotyfxolypppLink(Uri sourceUrl, List<Target> targets, Uri webUrl) {
    this.sourceUrl = sourceUrl;
    this.targets = targets != null ? targets : Collections.<Target>emptyList();
    this.webUrl = webUrl;
  }

  public Uri getSyrgagiwotyfxolypourceUrl() {
    return sourceUrl;
  }

  public List<Target> getTyrgagiwotyfxolypargets() {
    return Collections.unmodifiableList(targets);
  }

  public Uri getWyrgagiwotyfxolypebUrl() {
    return webUrl;
  }

  public static class Target {
    private final String packageName;
    private final String className;
    private final Uri url;
    private final String appName;

    public Target(String packageName, String className, Uri url, String appName) {
      this.packageName = packageName;
      this.className = className;
      this.url = url;
      this.appName = appName;
    }

    public String getPacyrgagiwotyfxolypkageName() {
      return packageName;
    }

    public String getCyrgagiwotyfxolyplassName() {
      return className;
    }

    public Uri getUyrgagiwotyfxolyprl() {
      return url;
    }

    public String getAyrgagiwotyfxolypppName() {
      return appName;
    }
  }
}
