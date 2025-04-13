/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_unit = require("reind/mdl/mdl_unit");
  // End


  // Part: Auxilliary
    function ax_setController(utp, ai) {
      utp.controller = () => ai;
    };
  // End


  // Part: Unit Command
    const ucmd_follow = new UnitCommand("follow", "players", null, unit => extend(CommandAI, {


      updateUnit() {
        this.super$updateUnit();

        if(this.targetPos == null && this.attackTarget == null) {
          var unit_pl = mdl_game._player(unit, unit.team);
          if(unit_pl != null) {
            var len = unit_pl.type.hitSize * 2.0;

            mdl_unit.moveTo(unit, unit_pl, len);
            if(Core.input.touched) {
              var t = mdl_game._tMouse();
              if(t != null) mdl_unit.lookAt(unit, t, true);
            } else if(!unit.within(unit_pl, len * 1.25)) {
              mdl_unit.lookAt(unit, unit_pl);
            };
          };
        };
      },


    }));
    ucmd_follow.switchToMove = true;
    ucmd_follow.resetTarget = false;
    ucmd_follow.exactArrival = false;
    ucmd_follow.drawTarget = true;
    exports.ucmd_follow = ucmd_follow;
  // End


  // Part: Support
    const __localMiner = function(utp) {
      const ai = extend(MinerAI, {});

      ax_setController(utp, ai);
    };
    exports.__localMiner = __localMiner;
  // End
