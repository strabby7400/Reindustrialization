/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Cond
    const hasTmi = (Vars.mods.locateMod("tmi") != null);
    exports.hasTmi = hasTmi;
  // End


  // Part: Methods
    const loadClass = function(path) {
      return Packages.rhino.NativeJavaClass(Vars.mods.scripts.scope, Vars.mods.mainLoader().loadClass(path));
    };
    exports.loadClass = loadClass;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:lib_base.js loaded.");
});
