/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_game = require("reind/mdl/mdl_game");

    const glb_vars = require("reind/glb/glb_vars");
  // End


  // Part: LDM
    var ldm = false;
    const setup_ldm = function(bool) {
      ldm = bool;
    };
    exports.setup_ldm = setup_ldm;
  // End


  // Part: Chance
    const getP_frac = function(p_base, frac) {
      return Math.min(p_base * frac, glb_vars.effect_chanceCap);
    };
    exports.getP_frac = getP_frac;
  // End


  // Part: Sound
    /* NOTE: Plays a sound at given position, skips if the asset is not loaded to avoid crash. */
    const playAt = function(pos_gn, path) {
      if(pos_gn == null || path == null) return false;

      var path_fi = "sounds/" + path + ".ogg";
      var pos = mdl_game.poser_gn(pos_gn);
      var x = pos.x;
      var y = pos.y;

      if(Core.assets.isLoaded(path_fi)) {
        Core.assets.get(path_fi).at(x, y);
        return true;
      } else return false;
    };
    exports.playAt = playAt;
  // End


  // Part: Effect
    /* NOTE: Shows a effect at given position, rotation is random in default. */
    const showAt = function(pos_gn, eff, rot) {
      if(rot == null) rot = Mathf.random(360.0);
      if(pos_gn == null || eff == null) return false;

      var pos = mdl_game.poser_gn(pos_gn);
      if(pos == null) return false;
      var x = pos.x;
      var y = pos.y;

      eff.at(x, y, rot);

      return true;
    };
    exports.showAt = showAt;


    const showAt_ldm = function(pos_gn, eff, rot) {
      if(ldm) return false;

      return showAt(pos_gn, eff, rot);
    };
    exports.showAt_ldm = showAt_ldm;


    /* NOTE: Chance given to create the effect. */
    const showAtP = function(p, pos_gn, eff, rot) {
      if(!Mathf.chance(p)) return false;

      return showAt(pos_gn, eff, rot);
    };
    exports.showAtP = showAtP;


    const showAtP_ldm = function(p, pos_gn, eff, rot) {
      if(!Mathf.chance(p) || ldm) return false;

      return showAt(pos_gn, eff, rot);
    };
    exports.showAtP_ldm = showAtP_ldm;
  // End


  // Part: Special
    /* NOTE: Shakes the screen. */
    const shakeAt = function(pos_gn, pow, dur) {
      if(pow == null) pow = 4.0;
      if(dur == null) dur = 60.0;
      if(pos_gn == null || pow < 0.0001 || dur < 0.0001) return false;

      var pos = mdl_game.poser_gn(pos_gn);
      if(pos == null) return false;
      var x = pos.x;
      var y = pos.y;

      Effect.shake(pow, dur, x, y);

      return true;
    };
    exports.shakeAt = shakeAt;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:mdl_effect.js loaded.");
});
