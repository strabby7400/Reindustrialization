/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const lib_multicraft = require("reind/lib/lib_multicraft");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  /* {multicraft.MultiCrafter} is not extendable, I dunno how to modify those. */


  // Part: fac-furn
    const facFurn_kiln = new lib_multicraft.MultiCrafter("fac-furn-kiln");
    exports.facFurn_kiln = facFurn_kiln;

    const facFurn_colossalKiln = new lib_multicraft.MultiCrafter("fac-furn-colossal-kiln");
    exports.facFurn_colossalKiln = facFurn_colossalKiln;

    const facFurn_primitiveSinteringFurnace = new lib_multicraft.MultiCrafter("fac-furn-primitive-sintering-furnace");
    exports.facFurn_primitiveSinteringFurnace = facFurn_primitiveSinteringFurnace;

    const facFurn_bloomery = new lib_multicraft.MultiCrafter("fac-furn-bloomery");
    exports.facFurn_bloomery = facFurn_bloomery;

    const facFurn_carbonizationKiln = new lib_multicraft.MultiCrafter("fac-furn-carbonization-kiln");
    exports.facFurn_carbonizationKiln = facFurn_carbonizationKiln;

    const facFurn_primitiveBrickKiln = new lib_multicraft.MultiCrafter("fac-furn-primitive-brick-kiln");
    exports.facFurn_primitiveBrickKiln = facFurn_primitiveBrickKiln;

    const facFurn_primitiveCokeOven = new lib_multicraft.MultiCrafter("fac-furn-primitive-coke-oven");
    exports.facFurn_primitiveCokeOven = facFurn_primitiveCokeOven;
  // End


  // Part: fac-heat
    const facHeat_furnaceHeater = new lib_multicraft.MultiCrafter("fac-heat-furnace-heater");
    exports.facHeat_furnaceHeater = facHeat_furnaceHeater;

    const facHeat_temperatureControlUnit = new lib_multicraft.MultiCrafter("fac-heat-temperature-control-unit");
    exports.facHeat_temperatureControlUnit = facHeat_temperatureControlUnit;
  // End


  // Part: fac-mill
    const facMill_jawCrusher = new lib_multicraft.MultiCrafter("fac-mill-jaw-crusher");
    exports.facMill_jawCrusher = facMill_jawCrusher;

    const facMill_ballMill = new lib_multicraft.MultiCrafter("fac-mill-ball-mill");
    exports.facMill_ballMill = facMill_ballMill;
  // End


  // Part: fac-mix
    const facMix_vMixer = new lib_multicraft.MultiCrafter("fac-mix-v-mixer");
    exports.facMix_vMixer = facMix_vMixer;
  // End


  // Part: fac-proc
    const facProc_brickPress = new lib_multicraft.MultiCrafter("fac-proc-brick-press");
    exports.facProc_brickPress = facProc_brickPress;


    const facProc_charcoalRodMaker_m = new lib_multicraft.MultiCrafter("fac-proc-charcoal-rod-maker-m");
    exports.facProc_charcoalRodMaker_m = facProc_charcoalRodMaker_m;
  // End


  // Part: fac-sep
    const facSep_dryMagneticSeparator = new lib_multicraft.MultiCrafter("fac-sep-dry-magnetic-separator");
    exports.facSep_dryMagneticSeparator = facSep_dryMagneticSeparator;
  // End


  // Part: fac-misc
    /* NOTE: Keep this at the top! */
    const facMisc_genericInlet = new lib_multicraft.MultiCrafter("fac-misc-generic-inlet");
    exports.facMisc_genericInlet = facMisc_genericInlet;

    const facMisc_coreCrafter = new lib_multicraft.MultiCrafter("fac-misc-core-crafter");
    exports.facMisc_coreCrafter = facMisc_coreCrafter;
  // End


  // Part: ileff-misc
    const ileffMisc_bitBank = new lib_multicraft.MultiCrafter("ileff-misc-bit-bank");
    exports.ileffMisc_bitBank = ileffMisc_bitBank;
  // End



Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_clk_multiCrafter.js loaded.");
});
