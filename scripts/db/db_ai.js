// Checked on 11-2-2024


/*
    ==================================================
    Part: Definition
    ==================================================
*/


  // Start: Cargo AI (Fixed)
    /* Vanilla one does not work, idk why */
    const modifyAI_cargoAI = function(obj) {
      obj.controller = () => extend(CargoAI, {
        emptyWaitTime: 120.0,
        dropSpacing: 90.0,
        transferRange: 32.0,
        moveRange: 16.0,
        moveSmoothing: 36.0,

        // Override
        updateMovement() {
          var unit = this.unit;
          var build = this.unit.building;
          if(!(unit instanceof BuildingTetherc) || build == null) return;
          if(build.items == null) return;

          if(!unit.hasItem()) {
            this.moveTo(build, this.moveRange, this.moveSmoothing);
            if(build.items.any() && unit.within(build, this.transferRange)) {
              if(this.unloadTarget == null) {
                this.findAnyTarget(build);
              };
              if(this.unloadTarget != null) {
                Call.takeItems(
                  build,
                  this.itemTarget,
                  Math.min(unit.type.itemCapacity, build.items.get(this.itemTarget)),
                  unit,
                );
              };
            };
          } else {
            if(this.unloadTarget == null) {
              this.findDropTarget(unit.item(), 0, null);
              if(this.unloadTarget == null) {
                unit.clearItem();
              };
            } else {
              if(this.unloadTarget.item != this.itemTarget || this.unloadTarget.isPayload()) {
                this.unloadTarget = null;
                return;
              };

              this.moveTo(this.unloadTarget, this.moveRange, this.moveSmoothing);
              if(unit.within(this.unloadTarget, this.transferRange) && this.timer.get(this.timerTarget2, this.dropSpacing)) {
                var max = this.unloadTarget.acceptStack(unit.item(), unit.stack.amount, unit);
                if(max > 0) {
                  this.noDestTimer = 0.0
                  Call.transferItemTo(unit, unit.item(), max, unit.x, unit.y, this.unloadTarget);
                  if(!unit.hasItem()) {
                    this.targetIndex ++;
                  };
                } else if((this.noDestTimer += this.dropSpacing) >= this.emptyWaitTime) {
                  this.targetIndex = this.findDropTarget(unit.item(), this.targetIndex, this.unloadTarget) + 1;
                  if(this.unloadTarget == null) {
                    unit.clearItem();
                  };
                };
              };
            };
          };
        },
      });
    };
    exports.modifyAI_cargoAI = modifyAI_cargoAI;
  // End
