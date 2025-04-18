/*
  ========================================
  Section: Definition
  ========================================
*/


  // Start: Import
    const frag_power = require("reind/frag/frag_power");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_corrosion = require("reind/mdl/mdl_corrosion");
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_flow = require("reind/mdl/mdl_flow");
    const mdl_table = require("reind/mdl/mdl_table");
    const mdl_text = require("reind/mdl/mdl_text");

    const db_block = require("reind/db/db_block");
    const db_dialog = require("reind/db/db_dialog");
    const db_stat = require("reind/db/db_stat");
    const db_unit = require("reind/db/db_unit");
  // End


  // Part: Auxiliary
    function ax_buildStats_contentRowDisplay(cts) {
      return function(tb) {
        mdl_table.setContentRowDisplay(tb, cts);
      };
    };


    function ax_buildStats_faction(faction, factionVal) {
      return function(tb) {
        tb.row();
        tb.table(Tex.whiteui, tb1 => {
          tb1.center().setColor(Pal.darkestGray);
          mdl_table.__margin(tb1);

          var btn = tb1.button(new TextureRegionDrawable(Core.atlas.find("reind-faction-" + faction)), db_dialog._contentList(mdl_content._factionMembers(faction, true), factionVal)).padLeft(-4.0).padRight(24.0).get();
          tb1.add(factionVal).fontScale(1.1);

          btn.margin(2.0);
          var btnStyle = btn.getStyle();
          btnStyle.up = Styles.none;
          btnStyle.down = Styles.none;
          btnStyle.over = Styles.flatOver;
        }).padTop(8.0).padBottom(8.0).growX().row();
      };
    };
  // End


  // Start: Methods
    const setup_content = function() {




      /* ========================================
        Section: Definition
      ======================================== */


        // Preparation
        var itms = [];
        var liqs = [];
        var blks = [];
        var envs = [];
        var utps = [];
        var secs = [];

        Vars.content.items().each(itm => {if(mdl_content.isReind(itm)) itms.push(itm)});
        Vars.content.liquids().each(liq => {if(mdl_content.isReind(liq)) liqs.push(liq)});

        Vars.content.blocks().each(blk => {
          var tp = mdl_content._tp_nm(blk.name);
          switch(tp) {
            case "build" :
              blks.push(blk);
              break;
            case "env" :
              envs.push(blk);
              break;
          };
        });

        Vars.content.units().each(utp => {if(mdl_content.isReind(utp)) utps.push(utp)});
        Vars.content.sectors().each(sec => {if(mdl_content.isReind(sec)) secs.push(sec)});


      /* ========================================
        Section: Corrosion
      ======================================== */


        // Corrosion stat
        if(!Vars.headless) {
          liqs.forEach(liq => {
            var grp = mdl_corrosion._fGrp(liq);
            if(grp != null) {
              var cor = mdl_corrosion._cor(liq);
              if(cor > 0.0) liq.stats.add(db_stat.corrosion, Strings.fixed(cor * 100.0, 2) + "%");
            };
          });
        };


        // Corrosion resistence stat
        if(!Vars.headless) {
          blks.forEach(blk => {
            if(blk.hasLiquids) {
              var matGrp = mdl_corrosion._matGrp(blk);
              if(matGrp != null) blk.stats.add(db_stat.corrosionResistence, mdl_corrosion._corRes(blk));
            };
          });
        };


      /* ========================================
        Section: Faction
      ======================================== */


        // Block faction stat
        if(!Vars.headless) {
          blks.forEach(blk => {
            var faction = mdl_content._faction(blk);
            var factionVal = mdl_content._factionVal(blk);
            if(faction != null && factionVal != null) blk.stats.add(db_stat.faction, ax_buildStats_faction(faction, factionVal));
          });
        };


        // Unit faction stat
        if(!Vars.headless) {
          utps.forEach(utp => {
            var faction = mdl_content._faction(utp);
            var factionVal = mdl_content._factionVal(utp);
            if(faction != null && factionVal != null) utp.stats.add(db_stat.faction, ax_buildStats_faction(faction, factionVal));
          });
        };


      /* ========================================
        Section: Factory Family
      ======================================== */


        // Family stat
        if(!Vars.headless) {
          blks.forEach(blk => {
            var famiVal = mdl_content._famiVal(blk);
            if(famiVal != null) {
              blk.stats.add(db_stat.factoryFamily, famiVal);
              blk.stats.add(db_stat.familyMembers, ax_buildStats_contentRowDisplay(mdl_content._famiMembers(blk)));
            };
          });
        };


      /* ========================================
        Section: Pollution
      ======================================== */


        // Pollution stat
        if(!Vars.headless) {
          var arr = db_block.db["pollution"]["value"];
          var cap = arr.length;
          for(let i = 0; i < cap; i += 2) {
            var blk = Vars.content.block(arr[i]);
            if(blk == null) continue;
            var pol = arr[i + 1];

            if(pol > 0.0) {
              blk.stats.add(db_stat.pollution, pol, db_stat.perBlock);
            } else {
              blk.stats.add(db_stat.pollutionReduction, -pol, db_stat.perBlock);
            };
          };
        };


      /* ========================================
        Section: Power
      ======================================== */


        // Power transmission stat
        if(!Vars.headless) {
          blks.forEach(blk => {
            if(blk.hasPower) {
              if(blk.conductivePower) blk.stats.add(db_stat.conductsPower, true);
              if(!blk.connectedPower) blk.stats.add(db_stat.connectable, false);
            };
          });
        };


        // Short circuit stat
        if(!Vars.headless) {
          db_block.db["power"]["shortCircuit"].forEach(nm_blk => {
            var blk = Vars.content.block(nm_blk);
            if(blk != null) {
              blk.stats.add(db_stat.canShortCircuit, true);
            };
          });
        };


        // Voltage tier stat
        if(!Vars.headless) {
          blks.forEach(blk => {
            var val = null;
            var tier = frag_power._voltTier(blk);
            if(tier != "none") switch(tier) {
              case "lv" :
                val = mdl_text._term("low-voltage");
                break;
              case "hv" :
                val = mdl_text._term("high-voltage");
                break;
              case "ehv" :
                val = mdl_text._term("extra-high-voltage");
                break;
            };

            if(val != null) blk.stats.add(db_stat.voltageTier, val);
          });
        };


      /* ========================================
        Section: Heat
      ======================================== */


      // Heat
      if(!Vars.headless) {
        blks.forEach(blk => {
          var wHeat = mdl_data.read_1n1v(db_block.db["heat"]["wHeat"], blk.name);
          if(wHeat != null) blk.stats.add(db_stat.workingHeat, wHeat);
        });
      };


      /* ========================================
        Section: Magnetic
      ======================================== */


        // Magnetic
        if(!Vars.headless) {
          blks.forEach(blk => {
            if(mdl_content.isMagnetic(blk)) blk.stats.add(db_stat.magneticDisturbance, true);
          });
        };


      /* ========================================
        Section: Status
      ======================================== */


        // Robot-only
        var tmpNonRobots = [];
        db_unit.db["type"]["nonRobot"].forEach(nm_utp => {
          var utp = Vars.content.unit(nm_utp);
          if(utp != null) tmpNonRobots.push(utp);
        });
        db_unit.db["status"]["robotOnly"].forEach(nm_sta => {
          var sta = Vars.content.statusEffect(nm_sta);
          if(sta != null) {
            if(!Vars.headless) sta.stats.add(db_stat.robotOnly, true);
            tmpNonRobots.forEach(utp => utp.immunities.addAll(sta));
          };
        });


        // Oceanic
        db_unit.db["status"]["oceanic"].forEach(nm_sta => {
          var sta = Vars.content.statusEffect(nm_sta);
          if(sta != null) Vars.content.units().each(utp => {if(utp.naval) utp.immunities.addAll(sta)});
        });


      /* ========================================
        Section: Flow
      ======================================== */


        // Temperature
        liqs.forEach(liq => {
          liq.temperature = mdl_flow._temp(liq);
        });


        // Viscosity
        liqs.forEach(liq => {
          liq.viscosity = mdl_flow._visc(liq);
        });


      /* ========================================
        Section: Sector
      ======================================== */


        // Sector Icon
        secs.forEach(sec => {
          var icon = Core.atlas.find(sec.name + "-icon", Core.atlas.find("reind-icon-sector"));

          sec.fullIcon = icon;
          sec.uiIcon = icon;
        });


    };
    exports.setup_content = setup_content;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: cfg_content.js loaded.");
});
