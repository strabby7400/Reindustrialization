/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const frag_attack = require("reind/frag/frag_attack");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_effect = require("reind/mdl/mdl_effect");

    const db_effect = require("reind/db/db_effect");
    const db_fluid = require("reind/db/db_fluid");
    const db_item = require("reind/db/db_item");
  // End


  // Part: Get
    const _reac = function(nm1, nm2) {
      if(nm1 == null || nm2 == null || nm1 == nm2) return null;

      var reac = null;

      if(reac == null) reac = mdl_data.read_2n1v(db_item.db["reaction"]["map"], nm1, nm2);
      if(reac == null && mdl_content.isAqueous(nm2)) reac = mdl_data.read_2n1v(db_item.db["reaction"]["map"], nm1, "ANY: water");

      if(reac == null) reac = mdl_data.read_2n1v(db_fluid.db["reaction"]["map"], nm1, nm2);
      if(reac == null && mdl_content.isAqueous(nm2)) reac = mdl_data.read_2n1v(db_fluid.db["reaction"]["map"], nm1, "ANY: water");

      if(reac == null) reac = mdl_data.read_2n1v(db_fluid.db["reaction"]["map"], nm2, nm1);
      if(reac == null && mdl_content.isAqueous(nm1)) reac = mdl_data.read_2n1v(db_fluid.db["reaction"]["map"], nm2, "ANY: water");

      return reac;
    };
    exports._reac = _reac;
  // End


  // Part: Handler
    const handleReaction = function(t_gn, ct_gn1, ct_gn2, pMtp) {
      if(t_gn == null || ct_gn1 == null) return;

      if(ct_gn2 == null) ct_gn2 = "reind-gas-misc-air";
      if(pMtp == null) pMtp = 1.0;

      var ct1 = mdl_content._ct_gn(ct_gn1);
      var ct2 = mdl_content._ct_gn(ct_gn2);
      if(ct1 == ct2) return;
      var nm1 = mdl_content._nmCt_gn(ct_gn1);
      var nm2 = mdl_content._nmCt_gn(ct_gn2);

      var reac = _reac(nm1, nm2);
      if(reac == null) return;
      var b = (t_gn instanceof Building) ? t_gn : null;

      switch(reac) {


        case "denaturing" :
          if(b != null && (b.block instanceof StorageBlock) && Mathf.chance(0.002 * pMtp)) {
            b.items.remove(ct1, 1);
            if(Mathf.chance(0.5)) {
              var ct_tg = Vars.content.item(mdl_data.read_1n1v(db_item.db["reaction"]["denaturing"], nm1));
              if(ct_tg != null) b.items.add(ct_tg, Mathf.clamp(b.block.itemCapacity - b.items.get(ct_tg), 0, 1));
            };
          };

          break;


        case "evaporation" :
          if(Mathf.chance(0.06 * pMtp)) {
            if(b != null) b.damage(b.maxHealth * 0.025);

            mdl_effect.showAt(t_gn, db_effect._heatSmog());
          };

          break;


        case "explosionI" :
          if(Mathf.chance(0.0002 * pMtp)) {
            frag_attack.atk_explosion(t_gn, 32.0, Mathf.lerp(100.0, 300.0, ct1.explosiveness), 4.0);
          };

          break;


        case "explosionII" :
          if(Mathf.chance(0.001 * pMtp)) {
            frag_attack.atk_explosion(t_gn, 48.0, Mathf.lerp(300.0, 900.0, ct1.explosiveness), 8.0);
          };

          break;


      };
    };
    exports.handleReaction = handleReaction;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_reaction.js loaded.");
});
