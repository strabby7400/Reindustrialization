/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const frag_heat = require("reind/frag/frag_heat");

    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_test = require("reind/mdl/mdl_test");
    const mdl_text = require("reind/mdl/mdl_text");

    const db_block = require("reind/db/db_block");
    const db_fluid = require("reind/db/db_fluid");
    const db_item = require("reind/db/db_item");
    const db_unit = require("reind/db/db_unit");
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


  // Part: Meta
    const _tp_nm = function(nm) {
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
        "reind-pay-",
        "reind-ildef-",
        "reind-ildis-",
        "reind-ileff-",
        "reind-ilfac-",
        "reind-ilbliq-",
        "reind-illog-",
        "reind-ilmin-",
        "reind-ilpow-",
        "reind-ilpay-",
        "reind-map-",
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
    exports._tp_nm = _tp_nm;


    const _ct_id = function(tp_ct, id) {
      if(id < 0) return;

      var ct = null;
      switch(tp_ct) {
        case "item" :
          ct = Vars.content.items().get(id);
          break;
        case "fluid" :
          ct = Vars.content.liquids().get(id);
          break;
        case "env" :
          ct = Vars.content.blocks().get(id);
          break;
        case "build" :
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
    exports._ct_id = _ct_id;


    const _ct_nm = function(nm) {
      if(nm == null || typeof nm != "string") return;

      var tp_ct = _tp_nm(nm);
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

      // NOTE: Use these at last to avoid some bugs. This is required for cross-mod reference.
      if(ct == null) ct = Vars.content.item(nm);
      if(ct == null) ct = Vars.content.liquid(nm);
      if(ct == null) ct = Vars.content.block(nm);
      if(ct == null) ct = Vars.content.unit(nm);
      if(ct == null) ct = Vars.content.statusEffect(nm);
      if(ct == null) ct = Vars.content.weather(nm);
      if(ct == null) ct = Vars.content.sector(nm);
      if(ct == null) ct = Vars.content.planet(nm);

      if(ct == null) mdl_test._w_contentNotFound(nm);

      return ct;
    };
    exports._ct_nm = _ct_nm;


    const _ct_gn = function(ct_gn) {
      if(ct_gn == null) return;

      var val = null;

      if(ct_gn instanceof UnlockableContent) val = ct_gn;
      if(typeof ct_gn == "string") val = _ct_nm(ct_gn);

      return val;
    };
    exports._ct_gn = _ct_gn;


    const _nmCt_gn = function(ct_gn) {
      if(ct_gn == null) return;

      var val = null;

      if(typeof ct_gn == "string") val = ct_gn;
      if(ct_gn instanceof UnlockableContent) val = ct_gn.name;

      return val;
    };
    exports._nmCt_gn = _nmCt_gn;
  // End


  // Part: Field
    const _reg = function(ct, suffix) {
      if(suffix == null) suffix = "";
      if(Vars.headless) return;

      return Core.atlas.find(ct.name + suffix);
    };
    exports._reg = _reg;


    const _buildReg = function(blk) {
      if(Vars.headless) return;

      return Core.atlas.find(blk.name + "-icon", Core.atlas.find(blk.name));
    };
    exports._buildReg = _buildReg;
  // End


  // Part: Setting
    const rsTagExc = {
      "p1": [],
      "p2": [],

      "accumulated": [],
      "dried": [],
      "roasted": [],
      "unannealed": [],
      "unbaked": [],

      "blend": [],
      "chunks": [],
      "concentrate": [],
      "dust": [
        "reind-item-was-dust",

        "reind-effc-effc-dust-recycling"
      ],

      "acidic": [],
      "basic": [],

      "clean": [],
      "conc": [],
      "fuming": [],
      "purified": [],
      "thickened": [],

      "slurry": [
        "reind-liq-was-waste-slurry",
      ],
      "solution": [],
      "suspension": [],
    };


    const rsTagInc = {

    };


    const _rsTag = function(ct) {
      if(ct == null || !isReind(ct)) return;

      var nm = ct.name;
      var arr = [];

      // Automatically add tags by name
      var keys = Object.keys(rsTagExc);
      var cap = keys.length;
      for(let i = 0; i < cap; i++) {
        var tag = keys[i];

        if(!rsTagExc[tag].includes(nm) && !arr.includes(tag)) {
          var cond = false;

          // This is horrible
          if(nm.includes(tag)) {
            if(new RegExp("-" + tag + "[^0-z]", "i").test(nm)) {cond = true} else {
              if(!(new RegExp("-" + tag + "\\w", "i").test(nm)) && new RegExp("-" + tag, "i").test(nm)) cond = true;
            };
          };

          if(cond) arr.push(tag);
        };
      };

      // Manually add tags
      var tags = rsTagInc[nm];
      if(tags != null) {
        var cap = tags.length;
        if(cap > 0) {
          for(let i = 0; i < cap; i++) {
            var tag = tags[i];

            if(!arr.includes(tag)) arr.push(tag);
          };
        };
      };

      return arr;
    };
    exports._rsTag = _rsTag;


    const _rsTagVal = function(ct, noColor) {
      if(noColor == null) noColor = false;
      if(ct == null || !isReind(ct)) return;

      var tags = _rsTag(ct);
      var val = "";

      tags.forEach(tag => val += "<" + tag + ">");

      return (val == "") ? null : (noColor ? val : ("[gray]" + val + "[]"));
    };
    exports._rsTagVal = _rsTagVal;


    const _faction = function(ct) {
      if(ct == null || !isReind(ct)) return;

      var nm = ct.name;
      var tp_ct = _tp_nm(nm);
      var faction = null;
      switch(tp_ct) {
        case "build" :
          faction = mdl_data.read_1n1v(db_block.db["map"]["faction"], nm);
          break;
        case "unit" :
          faction = mdl_data.read_1n1v(db_unit.db["map"]["faction"], nm);
          break;
      };

      if(faction == null) faction = "no-faction";

      return faction;
    };
    exports._faction = _faction;


    const _factionVal = function(ct) {
      if(ct == null) return;

      var faction = _faction(ct);
      return (Vars.headless || faction == null) ? null : mdl_text._term(faction);
    };
    exports._factionVal = _factionVal;


    const _factionMembers = function(faction, includeNoFaction) {
      var arr = [];

      if(faction instanceof Block || faction instanceof UnitType) faction = _faction(faction);
      if(includeNoFaction == null) includeNoFaction = false;
      if(faction == "no-faction" && !includeNoFaction) return arr;

      Vars.content.blocks().each(blk => {if(!isEnv(blk) && _faction(blk) == faction && !arr.includes(blk)) arr.push(blk)});
      Vars.content.units().each(utp => {if(_faction(utp) == faction && !arr.includes(utp)) arr.push(utp)});

      return arr;
    };
    exports._factionMembers = _factionMembers;


    const _fami = function(ct) {
      if(ct == null) return [];

      return isFactory(ct) ? mdl_data.readLi_1n1v(db_block.db["map"]["family"], ct.name) : [];
    };
    exports._fami = _fami;


    const _famiVal = function(ct) {
      if(Vars.headless || ct == null) return;

      return mdl_text._tagText(_fami(ct).map(i => mdl_text._term(i)));
    };
    exports._famiVal = _famiVal;


    const _famiMembers = function(fami) {
      var arr = (fami instanceof Block) ? _fami(fami) : [fami];
      var arr1 = [];

      Vars.content.blocks().each(blk => {
        if(isFactory(blk)) {
          var cond = false;
          var tmpFami = _fami(blk);
          arr.forEach(i => {if(tmpFami.includes(i) && !arr1.includes(i)) cond = true});

          if(cond) arr1.push(blk);
        };
      });

      return arr1;
    };
    exports._famiMembers = _famiMembers;


    const _consTg = function(ct) {
      if(ct == null) return [];

      return mdl_data.readLi_1n1v(db_item.db["map"]["consumable"], ct.name);
    };
    exports._consTg = _consTg;


    const _consTgVal = function(ct) {
      if(Vars.headless || ct == null) return;

      return mdl_text._tagText(_consTg(ct).map(i => mdl_text._term("fac-" + i)));
    };
    exports._consTgVal = _consTgVal;


    const _oreBlks = function(rs) {
      const li_blk = Vars.content.blocks();
      const blks = [];

      if(rs == null) return blks;
      if(rs instanceof Item) {
        li_blk.each(blk => {if(blk.itemDrop == rs) blks.push(blk)});
      } else if(rs instanceof Liquid) {
        li_blk.each(blk => {if(blk.liquidDrop == rs) blks.push(blk)});
      };

      return blks;
    };
    exports._oreBlks = _oreBlks;
  // End


  // Part: Cond
    const isReind = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return nmCt.includes("reind-");
    };
    exports.isReind = isReind;


    /* resource */


    const isEffc = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return mdl_text.includes_ex(
        nmCt,
        "reind-effc-",
        "reind-ileffc-",
      );
    };
    exports.isEffc = isEffc;


    const isNoCapEffc = function(ct_gn) {
      return db_fluid.db["efficiency"]["noCap"].includes(_nmCt_gn(ct_gn));
    };
    exports.isNoCapEffc = isNoCapEffc;


    const isVirt = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return mdl_text.includes_ex(
        nmCt,
        "reind-item-virt-",
        "reind-ilitem-virt-",
        "reind-ilmeta-",
      );
    };
    exports.isVirt = isVirt;


    const arr_bit = [
      "reind-item-virt-bit",
      "reind-item-virt-kilobit",
      "reind-item-virt-megabit",
      "reind-item-virt-gigabit",
    ];
    const isBit = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return arr_bit.includes(nmCt);
    };
    exports.isBit = isBit;


    const isLiq = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return mdl_text.includes_ex(
        nmCt,
        "reind-liq-",
        "reind-illiq-",
      );
    };
    exports.isLiq = isLiq;


    const isGas = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return mdl_text.includes_ex(
        nmCt,
        "reind-gas-",
        "reind-ilgas-",
      );
    };
    exports.isGas = isGas;


    const isIntermediate = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return mdl_text.includes_ex(
        nmCt,
        "reind-item-int-",
        "reind-liq-int-",
        "reind-gas-int-",
        "reind-ilitem-int-",
        "reind-illiq-int-",
        "reind-ilgas-int-",
      );
    };
    exports.isIntermediate = isIntermediate;


    const isWaste = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return mdl_text.includes_ex(
        nmCt,
        "reind-item-was-",
        "reind-liq-was-",
        "reind-ilitem-was-",
        "reind-illiq-was-",
      );
    };
    exports.isWaste = isWaste;


    const isOre = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return mdl_text.includes_ex(
        nmCt,
        "reind-item-ore-",
        "reind-liq-ore-",
        "reind-gas-ore-",
        "reind-ilitem-ore-",
        "reind-illiq-ore-",
        "reind-ilgas-ore-",
      );
    };
    exports.isOre = isOre;


    const isAqueous = function(ct_gn) {
      return db_fluid.db["group"]["aqueous"].includes(_nmCt_gn(ct_gn));
    };
    exports.isAqueous = isAqueous;


    const isConductive = function(ct_gn) {
      return db_fluid.db["group"]["conductive"].includes(_nmCt_gn(ct_gn));
    };
    exports.isConductive = isConductive;


    /* build */


    const isOreScanner = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return mdl_text.includes_ex(
        nmCt,
        "reind-min-scan-",
        "reind-ilmin-scan-",
      );
    };
    exports.isOreScanner = isOreScanner;


    const isExposed = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return db_block.db["param"]["exposed"].includes(nmCt);
    };
    exports.isExposed = isExposed;


    const isItemJunction = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return db_block.db["group"]["itemJunction"].includes(nmCt);
    };
    exports.isItemJunction = isItemJunction;


    const isCore = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return mdl_text.includes_ex(
        nmCt,
        "reind-eff-core-",
        "reind-ileff-core",
      );
    };
    exports.isCore = isCore;


    const isCond = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return mdl_text.includes_ex(
        nmCt,
        "reind-bliq-aux-",
        "reind-bliq-brd-",
        "reind-bliq-cond-",
        "reind-ilbliq-aux-",
        "reind-ilbliq-brd-",
        "reind-ilbliq-cond-",
      );
    };
    exports.isCond = isCond;


    const isTank = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return mdl_text.includes_ex(
        nmCt,
        "reind-bliq-stor-",
        "reind-ilbliq-stor-",
      );
    };
    exports.isTank = isTank;


    const cloggable = function(ct_gn) {
      return db_block.db["durability"]["cloggable"].includes(_nmCt_gn(ct_gn));
    };
    exports.cloggable = cloggable;


    const isHcond = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return mdl_text.includes_ex(
        nmCt,
        "reind-pow-hcond-",
        "reind-ilpow-hcond-",
      );
    };
    exports.isHcond = isHcond;


    const isEcond = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return mdl_text.includes_ex(
        nmCt,
        "reind-pow-econd-",
        "reind-ilpow-econd-",
      );
    };
    exports.isEcond = isEcond;


    const canShortCircuit = function(ct_gn) {
      return db_block.db["power"]["shortCircuit"].includes(_nmCt_gn(ct_gn));
    };
    exports.canShortCircuit = canShortCircuit;


    const isMagnetic = function(ct_gn) {
      return db_block.db["group"]["magnetic"].includes(_nmCt_gn(ct_gn));
    };
    exports.isMagnetic = isMagnetic;


    const isFactory = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return mdl_text.includes_ex(
        nmCt,
        "reind-fac-",
        "reind-ilfac-",
        "reind-map-fac-",
      );
    };
    exports.isFactory = isFactory;


    const isWall = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return mdl_text.includes_ex(
        nmCt,
        "reind-def-wall",
        "reind-ildef-wall",
        "reind-map-wall",
      );
    };
    exports.isWall = isWall;


    /* env */


    const isEnv = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return mdl_text.includes_ex(
        nmCt,
        "reind-env-",
      );
    };
    exports.isEnv = isEnv;


    const isMap = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return mdl_text.includes_ex(
        nmCt,
        "reind-map-",
      );
    };
    exports.isMap = isMap;


    const isTree = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return mdl_text.includes_ex(
        nmCt,
        "reind-env-tree-",
      );
    };
    exports.isTree = isTree;


    const isDepthOre = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return mdl_text.includes_ex(
        nmCt,
        "reind-env-ore-depth-",
      );
    };
    exports.isDepthOre = isDepthOre;


    /* unit */


    const isCoreUnit = function(ct_gn) {
      var nmCt = _nmCt_gn(ct_gn);

      return mdl_text.includes_ex(
        nmCt,
        "reind-unit-core-",
      );
    };
    exports.isCoreUnit = isCoreUnit;


    /* bullet */


    const isRemote = function(btp) {
      if(btp == null) return true;
      if(btp instanceof ContinuousBulletType) return true;
      if(btp instanceof LaserBulletType || btp instanceof ShrapnelBulletType) return true;
      if(btp instanceof PointBulletType || btp instanceof RailBulletType || btp instanceof PointLaserBulletType || btp instanceof SapBulletType) return true;
      if(btp instanceof InterceptorBulletType) return true;

      return false;
    };
    exports.isRemote = isRemote;


    /* entity */


    const canUpdate = function(e) {
      if(e == null) return false;
      if(Vars.state.isEditor()) return false;
      if(e.team == Team.derelict) return false;
      if(e instanceof Building && !e.enabled) return false;

      return true;
    };
    exports.canUpdate = canUpdate;


    const isEnemy = function(e, team) {
      if(e == null || team == null) return false;
      if(e.team == Team.derelict || e.team == team) return false;

      return true;
    };
    exports.isEnemy = isEnemy;


    const isAiReady = function(unit) {
      if(unit == null) return false;
      if(unit.dead || unit.isPlayer()) return false;

      return true;
    };
    exports.isAiReady = isAiReady;


    const isOnFloor = function(unit) {
      if(unit == null) return false;
      if(unit.flying) return false;
      if(unit.hovering && (unit instanceof Legsc)) return false;

      return true;
    };
    exports.isOnFloor = isOnFloor;


    const isHeatDamageable = function(unit) {
      if(unit == null) return false;
      if(!isOnFloor(unit)) return false;
      if(unit.type.naval) return false;

      return true;
    };
    exports.isHeatDamageable = isHeatDamageable;


    const isLowGround = function(unit) {
      if(unit == null) return false;
      if(unit.flying) return false;
      if(unit instanceof Legsc) return false;

      return true;
    };
    exports.isLowGround = isLowGround;


    const isHighAir = function(unit) {
      if(unit == null) return false;
      if(!unit.flying) return false;
      if(unit.lowAltitude) return false;

      return true;
    };
    exports.isHighAir = isHighAir;


    const isCoverable = function(unit, includeSize) {
      if(includeSize == null) includeSize = false;

      if(unit == null) return false;
      if(unit.flying || unit.type.groundLayer > 75.9999) return false;
      if(includeSize && unit.type.hitSize > 27.9999) return false;

      return true;
    };
    exports.isCoverable = isCoverable;


    const isMoving = function(unit) {
      if(unit == null) return false;

      return unit.vel.len() > 0.01;
    };
    exports.isMoving = isMoving;


    const isIdle = function(unit) {
      if(unit == null) return false;
      if(isMoving(unit)) return false;
      if(unit.mining() || unit.isBuilding()) return false;

      return true;
    };
    exports.isIdle = isIdle;


    const isHot = function(unit) {
      if(unit == null) return false;
      if(unit.hasEffect(StatusEffects.burning) || unit.hasEffect(StatusEffects.melting)) return true;
      if(frag_heat._meltTime(unit) > 0.0) return true;

      return false;
    };
    exports.isHot = isHot;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_content.js loaded.");
});
