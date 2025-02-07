/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_text = require("reind/mdl/mdl_text");

    const db_block = require("reind/db/db_block");
    const db_fluid = require("reind/db/db_fluid");
  // End


  // Part: Call
    const caller = function(ct, scr) {
      scr.call(ct);
    };
    exports.caller = caller;


    const callInit = function(ct, scr) {
      ct.init(() => scr.call(ct));
    };
    exports.callInit = callInit;
  // End


  // Part: Get
    const getContentRegion = function(ct, suffix) {
      if(suffix == null) suffix = "";

      return Core.atlas.find(ct.name + suffix);
    };
    exports.getContentRegion = getContentRegion;


    const getContentType_nm = function(nm) {
      if(nm == null || typeof nm != "string") return;

      if(mdl_text.includes_ex(
        nm,
        "reind-item-",
        "reind-ilitem-",
      )) return "item";

      if(mdl_text.includes_ex(
        nm,
        "reind-liq-",
        "reind-gas-",
        "reind-effc-",
        "reind-illiq-",
        "reind-ilgas-",
        "reind-ileffc-",
      )) return "fluid";

      if(mdl_text.includes_ex(
        nm,
        "reind-env-",
        "reind-map-",
      )) return "env";

      if(mdl_text.includes_ex(
        nm,
        "reind-def-",
        "reind-dis-",
        "reind-eff-",
        "reind-fac-",
        "reind-bliq-",
        "reind-log-",
        "reind-min-",
        "reind-pow-",
        "reind-ildef-",
        "reind-ildis-",
        "reind-ileff-",
        "reind-ilfac-",
        "reind-ilbliq-",
        "reind-illog-",
        "reind-ilmin-",
        "reind-ilpow-",
      )) return "build";

      if(mdl_text.includes_ex(
        nm,
        "reind-unit-",
      )) return "unit";

      if(mdl_text.includes_ex(
        nm,
        "reind-sta-",
      )) return "status";

      if(mdl_text.includes_ex(
        nm,
        "reind-wea-",
      )) return "weather";

      if(mdl_text.includes_ex(
        nm,
        "reind-camp-",
      )) return "sector";

      if(mdl_text.includes_ex(
        nm,
        "reind-pla-",
      )) return "planet";
    };
    exports.getContentType_nm = getContentType_nm;


    /* NOTE: Gets a content with type and id. */
    const getContent_id = function(tp_ct, id) {
      var ct = null;
      switch(tp_ct) {
        case "item" :
          ct = Vars.content.items().get(id);
          break;
        case "fluid" :
          ct = Vars.content.liquids().get(id);
          break;
        case "block" :
          ct = Vars.content.blocks().get(id);
          break;
        case "unit" :
          ct = Vars.content.units().get(id);
          break;
        case "status" :
          ct = Vars.content.statusEffects().get(id);
          break;
        case "weather" :
          ct = Vars.content.weathers().get(id);
          break;
        case "sector" :
          ct = Vars.content.sectors().get(id);
          break;
        case "planet" :
          ct = Vars.content.planets().get(id);
          break;
      };

      return ct;
    };
    exports.getContent_id = getContent_id;


    /* NOTE: Maps arbitrary name to the content based on systematic naming. */
    const getContent_nm = function(nm) {
      if(nm == null || typeof nm != "string") return;

      var tp_ct = getContentType_nm(nm);
      var ct = null;
      switch(tp_ct) {
        case "item" :
          ct = Vars.content.item(nm);
          break;
        case "fluid" :
          ct = Vars.content.liquid(nm);
          break;
        case "env" :
          ct = Vars.content.block(nm);
          break;
        case "build" :
          ct = Vars.content.block(nm);
          break;
        case "unit" :
          ct = Vars.content.unit(nm);
          break;
        case "status" :
          ct = Vars.content.statusEffect(nm);
          break;
        case "weather" :
          ct = Vars.content.weather(nm);
          break;
        case "sector" :
          ct = Vars.content.sector(nm);
          break;
        case "planet" :
          ct = Vars.content.planet(nm);
          break;
      };

      return ct;
    };
    exports.getContent_nm = getContent_nm;
  // End


  // Part: Cond
    const isReind = function(ct) {
      return ct.name.includes("reind-");
    };
    exports.isReind = isReind;


    /* resource */


    const isEffc = function(ct) {
      return mdl_text.includes_ex(
        ct.name,
        "reind-effc-",
        "reind-ileffc-",
      );
    };
    exports.isEffc = isEffc;


    const isVirt = function(ct) {
      return mdl_text.includes_ex(
        ct.name,
        "reind-item-virt-",
        "reind-ilitem-virt-",
        "reind-ilmeta-",
      );
    };
    exports.isVirt = isVirt;


    const isLiq = function(ct) {
      return mdl_text.includes_ex(
        ct.name,
        "reind-liq-",
        "reind-illiq-",
      );
    };
    exports.isLiq = isLiq;


    const isGas = function(ct) {
      return mdl_text.includes_ex(
        ct.name,
        "reind-gas-",
        "reind-ilgas-",
      );
    };
    exports.isGas = isGas;


    const isIntermediate = function(ct) {
      return mdl_text.includes_ex(
        ct.name,
        "reind-item-int-",
        "reind-liq-int-",
        "reind-gas-int-",
        "reind-ilitem-int-",
        "reind-illiq-int-",
        "reind-ilgas-int-",
      );
    };
    exports.isIntermediate = isIntermediate;


    const isOre = function(ct) {
      return mdl_text.includes_ex(
        ct.name,
        "reind-item-ore-",
        "reind-liq-ore-",
        "reind-gas-ore-",
        "reind-ilitem-ore-",
        "reind-illiq-ore-",
        "reind-ilgas-ore-",
      );
    };
    exports.isOre = isOre;


    const isConductive = function(ct) {
      return db_fluid.grp_conductive.contains(ct.name);
    };
    exports.isConductive = isConductive;


    /* block */


    const isConduit = function(ct) {
      return mdl_text.includes_ex(
        ct.name,
        "reind-bliq-aux-",
        "reind-bliq-brd-",
        "reind-bliq-cond-",
        "reind-ilbliq-aux-",
        "reind-ilbliq-brd-",
        "reind-ilbliq-cond-",
      );
    };
    exports.isConduit = isConduit;


    const isTank = function(ct) {
      return mdl_text.includes_ex(
        ct.name,
        "reind-bliq-stor-",
        "reind-ilbliq-stor-",
      );
    };
    exports.isTank = isTank;


    const vulnerableToClogging = function(ct) {
      return db_block.vulnerableToClogging.contains(ct.name);
    };
    exports.vulnerableToClogging = vulnerableToClogging;


    const isHcond = function(ct) {
      return mdl_text.includes_ex(
        ct.name,
        "reind-pow-hcond-",
        "reind-ilpow-hcond-",
      );
    };
    exports.isHcond = isHcond;


    const isEcond = function(ct) {
      return mdl_text.includes_ex(
        ct.name,
        "reind-pow-econd-",
        "reind-ilpow-econd-",
      );
    };
    exports.isEcond = isEcond;


    const canShortCircuit = function(ct) {
      return db_block.canShortCircuit.contains(ct.name);
    };
    exports.canShortCircuit = canShortCircuit;


    /* entity */


    const isEnemy = function(e, team) {
      if(e == null || team == null) return false;
      if(e.team == null) return false;
      if(e.team == Team.derelict || e.team == team) return false;

      return true;
    };
    exports.isEnemy = isEnemy;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:mdl_content.js loaded.");
});
