/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const lib_base = require("reind/lib/lib_base");
    const lib_tmi = lib_base.hasTmi ? require("reind/lib/lib_tmi") : null;

    const PARENT = require("reind/blk/blk_growthBlock");
    const VAR = require("reind/glb/glb_vars");

    const frag_faci = require("reind/frag/frag_faci");
    const frag_item = require("reind/frag/frag_item");

    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_table = require("reind/mdl/mdl_table");
    const mdl_text = require("reind/mdl/mdl_text");
    const mdl_ui = require("reind/mdl/mdl_ui");
    const mdl_unit = require("reind/mdl/mdl_unit");

    const db_block = require("reind/db/db_block");
    const db_effect = require("reind/db/db_effect");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Auxiliary
    function ax_buildStats(cropYield) {
      return function(tb) {
        tb.row();
        tb.table(Tex.whiteui, tb1 => {
          tb1.left().setColor(Pal.darkestGray);
          mdl_table.__margin(tb1);

          var arr = cropYield;
          var cap = arr.length;
          if(cap == 0) return;
          for(let i = 0; i < cap; i += 4) {
            var stage = arr[i];
            var backTo = arr[i + 1];
            var batch = arr[i + 2];

            tb1.add(mdl_text._statText(mdl_text._term("growth-stage"), stage)).left().row();
            tb1.add(mdl_text._statText(mdl_text._term("growth-back-to"), backTo)).left().tooltip(mdl_text._info("growth-back-to")).row();
            mdl_table.setBatchDisplay(tb1, batch);

            if(i != cap - 4) {
              mdl_table.__breakHalf(tb1);
              mdl_table.__bar(tb1);
              mdl_table.__breakHalf(tb1);
            };
          };
        }).row();
      };
    };
  // End


  // Part: Component
    function setStatsComp(blk) {
      frag_faci.setStats_flammable(blk);
      frag_faci.setStats_terrain(blk, blk.ter, "enable");
      frag_faci.setStats_restrict(blk);

      var tup = frag_faci._cropTuple(blk);
      if(tup != null) {
        blk.stats.add(db_stat.growTime, tup[0] / 60.0, StatUnit.seconds);
        blk.stats.add(db_stat.growStages, tup[1]);
        blk.stats.add(db_stat.cropYield, ax_buildStats(tup[2]));
      };
    };


    function updateTileComp(b) {
      frag_faci.updateTile_flammable(b);

      if(b.needCheck) {
        b.harvestEff = db_effect._plantCrack();

        b.growEffc = frag_faci.sumGrowthEffc(b.block, b.tile);

        var tup = frag_faci._cropTuple(b.block);
        b.growTime = tup[0];
        b.growStages = tup[1];
        b.cropYield = tup[2];
        b.stageScr = tup[3];

        b.needCheck = false;
      };

      if(b.timerCall.get(90.0)) {
        b.efficiency = b.growEffc;
        b.growProg = Mathf.clamp(b.growProg + b.edelta() / b.growTime * 90.0);
        b.growStage = Mathf.floor(b.growProg * (b.growStages - 1)) + 1;

        var cap = b.stageScr.length;
        if(cap > 0) {
          for(let i = 0; i < cap; i += 2) {
            var stage = b.stageScr[i];
            if(b.growStage != stage) continue;
            var scr = b.stageScr[i + 1];

            scr.call(b);
          };
        };
      };
    };


    function initComp(blk) {
      if(lib_base.hasTmi) {
        Events.run(MusicRegisterEvent, () => lib_tmi.register_crop(blk));
      };
    };


    function canPlaceOnComp(blk, t, team, rot, ter) {
      if(!frag_faci.canPlaceOn_terrain(blk, blk.ter, "enable", t, team, rot, 2)) return false;
      if(frag_faci.sumGrowthEffc(blk, t) < 0.0001) return false;
      if(!frag_faci.canPlaceOn_restrict(blk, t, team, rot)) return false;

      return true;
    };


    function buildConfigurationComp(b, tb) {
      var vec2 = new Vec2();

      mdl_table.setTrigger(tb, function() {
        if(Vars.state.paused) {
          mdl_ui.showInfoFade("invalid-paused");
        } else {
          var yieldTup = frag_faci._cropYieldTuple(b.cropYield, b.growStage);

          if(yieldTup != null) {
            Call.tileConfig(Vars.player, b, vec2.set(1, -2));
            b.deselect();
          } else {
            mdl_ui.showInfoFade("crop-not-matured");
          };
        };
      }, new TextureRegionDrawable(Core.atlas.find("reind-icon-harvest")), mdl_text._info("crop"), 36.0);
    };


    function configuredComp(b, builder, val) {
      if(val == null) return;

      var tup = mdl_data.handleConfigured(b, builder, val);

      if(tup[0] > -2) {
        var yieldTup = frag_faci._cropYieldTuple(b.cropYield, b.growStage);
        var backTo = yieldTup[0];
        var batch = yieldTup[1];
        var harvestScr = yieldTup[2];

        if(backTo < 1) {b.tile.setAir()} else {b.growProg = (backTo - 1) / b.growTime};
        b.growEffc = 0.0;

        b.needCheck = true;
        b.timerCall.reset(0, 90.0);

        harvestScr.call(b);

        mdl_effect.showAt(b, b.harvestEff, 0.0);
        mdl_effect.playAt(b, "se-step-grass", 1.0, 1.0, 0.1);

        var rad = VAR.crop_harvestRadius;

        var b_cont = mdl_game._container(b, b.team, rad);
        if(b_cont != null && frag_item.acceptItemBatch(b_cont, b, batch)) {
          frag_item.addItemBatch(b_cont, b, batch);
          mdl_effect.itemTransfer(b, b_cont)
        } else {
          var unit_cont = mdl_game._player(b, b.team, rad);
          if(unit_cont != null && mdl_unit.acceptItemBatch(unit_cont, batch)) {
            mdl_unit.addItemBatch(unit_cont, batch);
            mdl_effect.itemTransfer(b, unit_cont)
          } else {
            mdl_ui.showInfoFade("crop-wasted");
          };
        };
      };
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var t = Vars.world.tile(tx, ty);
      var growEffc = frag_faci.sumGrowthEffc(blk, t);
      mdl_draw.drawPlaceText(blk, t, valid, mdl_text._info("growth-efficiency") + " " + Strings.fixed(growEffc * 100.0, 0) + "%", 1);
    };


    function drawComp(b) {
      var reg = (b.growStage == b.growStages || b.growStage == 0) ? Core.atlas.find(b.block.name) : Core.atlas.find(b.block.name + "-" + Math.round(b.growStage - 1));

      var offSha = (b.growStage == 1) ? -0.5 : -1.5;
      var pos_sha = mdl_game._pos(b.tile, b.block.offset + offSha);
      var ang = (b.growStage == 1) ? 0.0 : Mathf.randomSeed(b.pos(), 0, 4) * 90.0;
      var wobbleScl = (b.growStage == b.growStages) ? 1.0 : ((b.growStage - 1) / b.growStages);
      var z = (b.growStage < 3 && b.growStage != 0) ? 12.2 : 72.102;
      var z_sha = z - 0.0005;

      mdl_draw.drawBlurredShadow(pos_sha, reg, ang, 1.0, 1.05, Color.white, z_sha);
      mdl_draw.drawWobbleRegion(b, reg, ang, 1.0, 1.0, Color.white, 1.0, 1.0, wobbleScl, wobbleScl, z);
    };


    function drawSelectComp(b) {
      if(b.growProg < 0.9999) {
        mdl_draw.drawProgressCircle(b, b.growProg, mdl_game._radSize(b.block.size));
      } else {
        mdl_draw.drawSelectText(b, true, mdl_text._info("crop-matured"), 1);
      };
    };
    exports.drawSelectComp = drawSelectComp;
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      PARENT.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      PARENT.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;


    const init = function(blk) {
      initComp(blk);
    };
    exports.init = init;


    const canPlaceOn = function(blk, t, team, rot) {
      if(!canPlaceOnComp(blk, t, team, rot)) return false;

      return true;
    };
    exports.canPlaceOn = canPlaceOn;


    const buildConfiguration = function(b, tb) {
      buildConfigurationComp(b, tb);
    };
    exports.buildConfiguration = buildConfiguration;


    const configured = function(b, builder, val) {
      configuredComp(b, builder, val);
    };
    exports.configured = configured;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      drawPlaceComp(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const draw = function(b) {
      drawComp(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_crop.js loaded.");
});
