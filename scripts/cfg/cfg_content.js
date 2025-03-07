/*
  ========================================
  Section: Definition
  ========================================
*/


  // Start: Import
    const frag_power = require("reind/frag/frag_power");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_corrosion = require("reind/mdl/mdl_corrosion");
    const mdl_flow = require("reind/mdl/mdl_flow");

    const db_block = require("reind/db/db_block");
    const db_stat = require("reind/db/db_stat");
    const db_unit = require("reind/db/db_unit");
  // End


  // Start: Methods
    const setup_content = function() {


      if(Vars.headless) return;


      /* ========================================
        Section: Definition
      ======================================== */


        // Preparation
        var li_itm = new Seq();
        Vars.content.items().each(itm => {if(mdl_content.isReind(itm)) li_itm.add(itm)});
        var li_liq = new Seq();
        Vars.content.liquids().each(liq => {if(mdl_content.isReind(liq)) li_liq.add(liq)});
        var li_blk = new Seq();
        var li_env = new Seq();
        Vars.content.blocks().each(blk => {
          var tp = mdl_content.getType_nm(blk.name);
          switch(tp) {
            case "build" :
              li_blk.add(blk);
              break;
            case "env" :
              li_env.add(blk);
              break;
          };
        });
        var li_utp = new Seq();
        Vars.content.units().each(utp => {if(mdl_content.isReind(utp)) li_utp.add(utp)});


      /* ========================================
        Section: Corrosion
      ======================================== */


        // Corrosion
        li_liq.each(liq => {
          var grp = mdl_corrosion.getGroup(liq);
          if(grp != null) {
            var cor = mdl_corrosion.getCorrosion(liq);
            if(cor > 0.0) liq.stats.add(db_stat.corrosion, Strings.fixed(cor * 100.0, 2) + "%");
          };
        });


        // Corrosion Resistence
        li_blk.each(blk => {
          if(blk.hasLiquids) {
            var matGrp = mdl_corrosion.getMaterialGroup(blk);
            if(matGrp != null) blk.stats.add(db_stat.corrosionResistence, mdl_corrosion.getCorrosionResistence(blk));
          };
        });


      /* ========================================
        Section: Faction
      ======================================== */


        // Block Faction
        li_blk.each(blk => {
          var factionVal = mdl_content.getFactionValue(blk);
          if(factionVal != null) blk.stats.add(db_stat.faction, factionVal);
        });


        // Unit Faction
        li_utp.each(utp => {
          var factionVal = mdl_content.getFactionValue(utp);
          if(factionVal != null) utp.stats.add(db_stat.faction, factionVal);
        });


      /* ========================================
        Section: Factory Family
      ======================================== */


        // Family
        li_blk.each(blk => {
          var famiVal = mdl_content.getFamilyValue(blk);
          if(famiVal != null) {
            blk.stats.add(db_stat.factoryFamily, famiVal);
            blk.stats.add(db_stat.familyMembers, StatValues.content(mdl_content.getFamilyMembers(blk)));
          };
        });


      /* ========================================
        Section: Pollution
      ======================================== */


        // Pollution
        var li_blockPollution = db_block.blockPollution;
        var cap = li_blockPollution.size - 1;
        for(let i = 0; i < cap; i++) {
          if(i % 2 != 0) continue;

          var blk = Vars.content.block(li_blockPollution.get(i));
          if(blk == null) continue;

          var pol = li_blockPollution.get(i + 1);
          if(pol > 0.0) {
            blk.stats.add(db_stat.pollution, pol, db_stat.perBlock);
          } else {
            blk.stats.add(db_stat.pollutionReduction, -pol, db_stat.perBlock);
          };
        };


      /* ========================================
        Section: Power
      ======================================== */


        // Voltage Tier
        li_blk.each(blk => {
          var tier = frag_power.getTier(blk);
          var val = null;
          if(tier != "none") switch(tier) {
            case "lv" :
              val = Core.bundle.get("term.reind-term-low-voltage.name");
              break;
            case "hv" :
              val = Core.bundle.get("term.reind-term-high-voltage.name");
              break;
            case "ehv" :
              val = Core.bundle.get("term.reind-term-extra-high-voltage.name");
              break;
          };

          if(val != null) blk.stats.add(db_stat.voltageTier, val);
        });


        // Short Circuit
        db_block.canShortCircuit.each(nm_blk => {
          var blk = Vars.content.block(nm_blk);
          if(blk != null) {
            blk.stats.add(db_stat.canShortCircuit, true);
          };
        });


      /* ========================================
        Section: Status
      ======================================== */


        // Robot-only
        var temp_nonRobots = new Seq();
        db_unit.nonRobots.each(nm_utp => {
          var utp = Vars.content.unit(nm_utp);
          if(utp != null) temp_nonRobots.add(utp);
        });
        db_unit.robotOnlyStatus.each(nm_sta => {
          var sta = Vars.content.statusEffect(nm_sta);
          if(sta != null) {
            sta.stats.add(db_stat.robotOnly, true);
            temp_nonRobots.each(utp => utp.immunities.addAll(sta));
          };
        });


        // Oceanic
        db_unit.oceanicStatus.each(nm_sta => {
          var sta = Vars.content.statusEffect(nm_sta);
          if(sta != null) Vars.content.units().each(utp => {if(utp.naval) utp.immunities.addAll(sta)});
        });


      /* ========================================
        Section: Flow
      ======================================== */


        // Viscosity
        li_liq.each(liq => {
          liq.viscosity = mdl_flow.getViscosity(liq);
        });


    };
    exports.setup_content = setup_content;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:cfg_content.js loaded.");
});
