/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const frag_attack = require("reind/frag/frag_attack");

    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_effect = require("reind/mdl/mdl_effect");

    const db_effect = require("reind/db/db_effect");
    const db_fluid = require("reind/db/db_fluid");
    const db_item = require("reind/db/db_item");
  // End


  // Part: Getter
    const getReaction = function(ct1, ct2) {
      if(ct1 == null || ct2 == null) return null;

      var reac = null;
      var nm1 = ct1.name;
      var nm2 = ct2.name;

      reac = mdl_data.read_2n1v(db_item.itemReaction, nm1, nm2);
      if(reac == null) reac = mdl_data.read_2n1v(db_fluid.fluidReaction, nm1, nm2);
      if(reac == null) reac = mdl_data.read_2n1v(db_fluid.fluidReaction, nm2, nm1);

      return reac;
    };
    exports.getReaction = getReaction;
  // End


  // Part: Handler
    const handleReaction = function(b, ct1, ct2) {
      if(ct2 == null) ct2 = Vars.content.liquid("reind-gas-misc-air");
      if(b == null || ct1 == null) return;

      var reac = getReaction(ct1, ct2);
      if(reac == null) return;

      switch(reac) {
        case "denaturing" :
          if((b.block instanceof StorageBlock) && Mathf.chance(0.002)) {
            b.items.remove(ct1, 1);
            if(Mathf.chance(0.5)) {
              var ct_tg = Vars.content.item(mdl_data.read_1n1v(db_item.denatured, ct1.name));
              if(ct_tg != null) b.items.add(ct_tg, Math.max(Math.min(1, b.block.itemCapacity - b.items.get(ct_tg)), 0));
            };
          };
          break;
        case "evaporation" :
          if(Mathf.chance(0.06)) {
            b.damage(b.maxHealth * 0.025);
            mdl_effect.showAt(b, db_effect._heatSmog());
          };
          break;
        case "explosionI" :
          if(Mathf.chance(0.0002)) {
            frag_attack.attack_explosion(b, 32.0, Mathf.lerp(100.0, 300.0, ct1.explosiveness), 4.0);
          };
          break;
        case "explosionII" :
          if(Mathf.chance(0.001)) {
            frag_attack.attack_explosion(b, 48.0, Mathf.lerp(300.0, 900.0, ct1.explosiveness), 8.0);
          };
          break;
      };
    };
    exports.handleReaction = handleReaction;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:mdl_reaction.js loaded.");
});
