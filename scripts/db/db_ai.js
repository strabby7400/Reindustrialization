/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_unit = require("reind/mdl/mdl_unit");
  // End


  // Part: Support
    const __localMiner = function(utp) {
      utp.controller = () => extend(MinerAI, {
        isMining: true,
        itm_tg: null,
        t_ore: null,


        updateMovement() {
          var unit = this.unit;
          if(!unit.canMine()) return;
          var b = unit.building;
          if(b == null || b.items == null || (b.power != null && b.power.status) < 0.9999) return;
          var itm = this.itm_tg;

          if(!(unit.validMine(unit.mineTile))) unit.mineTile(null);

          if(this.isMining) {
            if(this.timer.get(this.timerTarget2, 240.0) || itm == null) {
              unit.type.mineItems.min(i => Vars.indexer.hasOre(i) && unit.canMine(i), i => b.items.get(i));
            };

            if(itm != null && b.acceptStack(itm, 1, unit) == 0) {
              unit.clearItem();
              unit.mineTile = null;
              return;
            };

            if(unit.stack.amount >= unit.type.itemCapacity || (itm != null && !unit.acceptsItem(itm))) {
              this.isMining = false;
            } else {
              if(this.timer.get(this.timerTarget3, 60.0) && itm != null) this.t_ore = Vars.indexer.findClosestOre(unit, itm);

              if(this.t_ore != null) {
                mdl_unit.moveTo(unit, t_ore, unit.type.minRange / 2.0);
                if(this.t_ore.block() == Blocks.air && unit.within(this.t_ore, unit.type.minRange)) unit.mineTile = this.t_ore;
                if(this.t_ore.block() != Blocks.air) this.isMining = false;
              };
            };
          } else {
            unit.mineTile = null;
            if(unit.stack.amount == 0) {
              this.isMining = true;
              return;
            };

            if(unit.within(b, unit.type.range)) {
              if(b.acceptStack(unit.stack.item, unit.stack.amount, unit) > 0) mdl_unit.putItem(b, unit, unit.item());
              unit.clearItem();
              this.isMining = true;
            };

            this.circle(b, unit.type.range / 1.8);
          };
        },


      });
    };
    exports.__localMiner = __localMiner;
  // End
