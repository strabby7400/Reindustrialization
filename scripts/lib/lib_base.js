/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Cond
    // NOTE: Keep this on top!
    const hasTmi = (Vars.mods.locateMod("tmi") != null);
    exports.hasTmi = hasTmi;


    const hasAsthosus = (Vars.mods.locateMod("asthosus") != null);
    exports.hasAsthosus = hasAsthosus;


    const hasSubvoyage = (Vars.mods.locateMod("subvoyage") != null);
    exports.hasSubvoyage = hasSubvoyage;
  // End


  // Part: Methods
    const loadClass = function(path) {
      return Packages.rhino.NativeJavaClass(Vars.mods.scripts.scope, Vars.mods.mainLoader().loadClass(path));
    };
    exports.loadClass = loadClass;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: lib_base.js loaded.");
});
