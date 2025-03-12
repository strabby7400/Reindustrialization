/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const frag_heat = require("reind/frag/frag_heat");
    const frag_unit = require("reind/frag/frag_unit");

    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_unit = require("reind/mdl/mdl_unit");

    const db_stat = require("reind/db/db_stat");
    const db_unit = require("reind/db/db_unit");
  // End


  // Part: Setting
    var p3dShadow = true;
    const set_p3dShadow = function(bool) {
      p3dShadow = bool;
    };
    exports.set_p3dShadow = set_p3dShadow;
  // End


  // Part: Auxilliary
    const aux_legOffset = new Vec2();
  // End


  // Part: Component
    function setStatsComp(utp) {
      utp.stats.remove(Stat.mineTier);

      if(db_unit.nonRobots.contains(utp.name)) utp.stats.add(db_stat.notRobot, true);

      var polTol = mdl_data.read_1n1v(db_unit.pollutionTolerance, utp.name);
      if(polTol != null) utp.stats.add(db_stat.pollutionTolerance, polTol, db_stat.pollutionUnit);
    };


    function updateComp(utp, unit) {
      frag_heat.update_unitHeat(utp, unit);
      frag_unit.update_surrounding(utp, unit);
      frag_unit.update_mouse(utp, unit);
    };


    function killedComp(utp, unit) {
      mdl_effect.remainsAt(unit, unit);
    };


    function drawComp(utp, unit) {
      if(unit.inFogTo(Vars.player.team())) return;

      var isPayload = !unit.isAdded();
      var z = isPayload ? Draw.z() : (unit.elevation > 0.5 ? 90.0 : utp.groundLayer) + Mathf.clamp(utp.hitSize / 4000.0, 0, 0.01);                 // V8 PENDING: Set {90.0} to {utp.flyingLayer}.

      // Building
      try {unit.drawBuilding()} catch(err) {};

      // Mining
      if(unit.mining()) mdl_draw.drawMiningBeam(mdl_game._pos(1, unit), mdl_game._pos(2, unit.mineTile), unit.rotation, utp.hitSize / 2.0);

      // Control
      var ctrl = null;
      try {ctrl = unit.controller()} catch(err) {try {ctrl = unit.controller} catch(err) {ctrl = null}};
      if(ctrl != null && ctrl.isBeingControlled(Vars.player.unit())) utp.drawControl(unit);

      // Shadow
      if(!isPayload && (unit.isFlying() || utp.shadowElevation > 0.0)) {
        Draw.z(Math.min(Layer.darkness, z - 1.0));
        utp.drawShadow(unit);
      };

      Draw.z(z - 0.02);

      // Mech
      if(unit instanceof Mechc) {
        utp.drawMech(unit);

        aux_legOffset.trns(unit.baseRotation, 0.0, Mathf.lerp(Mathf.sin(unit.walkExtend(true), 2.0 / Mathf.PI, 1.0) * utp.mechSideSway, 0.0, unit.elevation));
        aux_legOffset.add(Tmp.v1.trns(unit.baseRotation + 90.0, 0.0, Mathf.lerp(Mathf.sin(unit.walkExtend(true), 1.0 / Mathf.PI, 1.0) * utp.mechFrontSway, 0.0, unit.elevation)));
        unit.trns(aux_legOffset.x, aux_legOffset.y);
      };

      // Tank
      if(unit instanceof Tankc) {
        utp.drawTank(unit);
      };

      // Leg
      if(unit instanceof Legsc && !isPayload) {
        utp.drawLegs(unit);
      };

      Draw.z(Math.min(z - 0.01, Layer.bullet - 1.0));

      // Payload
      if(unit instanceof Payloadc) {
        utp.drawPayload(unit);
      };

      // Soft Shadow
      utp.drawSoftShadow(unit);

      Draw.z(z);

      // Crawl
      if(unit instanceof Crawlc) {
        drawCrawl(unit);
      };

      // Main Outline
      if(utp.drawBody) utp.drawOutline(unit);

      // Weapon Outline
      utp.drawWeaponOutlines(unit);

      if(utp.engineLayer > 0.0) Draw.z(utp.engineLayer);

      // Trail
      if(utp.trailLength > 0.0 && !utp.naval && (unit.isFlying() || !utp.useEngineElevation)) utp.drawTrail(unit);

      // Engine
      if(utp.engines.size > 0) utp.drawEngines(unit);

      Draw.z(z);

      // Body
      if(utp.drawBody) {
        utp.applyColor(unit);
        Draw.rect(utp.region, unit.x, unit.y, unit.rotation - 90.0);
        Draw.reset();
      };

      // Cell
      if(utp.drawCell) {
        utp.applyColor(unit);
        Draw.color(utp.cellColor(unit));
        Draw.rect(utp.cellRegion, unit.x, unit.y, unit.rotation - 90.0);
        Draw.reset();
      };

      // Weapon
      utp.drawWeapons(unit);

      // Item
      if(utp.drawItems) {
        utp.applyColor(unit);
        if(unit.item() != null && unit.itemTime > 0.01) {
          var param1 = Mathf.absin(Time.time, 5.0, 1.0);
          var param2 = (Vars.itemSize + param1) * unit.itemTime;
          var param3 = ((param1 + 3.0) * unit.itemTime + 0.5) * 2.0;

          Draw.mixcol(Pal.accent, param1 * 0.1);
          Draw.rect(
            unit.item().fullIcon,
            unit.x + Angles.trnsx(unit.rotation + 180.0, 3.0),
            unit.y + Angles.trnsy(unit.rotation + 180.0, 3.0),
            param2,
            param2,
            unit.rotation,
          );
          Draw.mixcol();

          Draw.color(Pal.techBlue);
          Draw.rect(
            utp.itemCircleRegion,
            unit.x + Angles.trnsx(unit.rotation + 180.0, 3.0),
            unit.y + Angles.trnsy(unit.rotation + 180.0, 3.0),
            param3,
            param3,
          );

          if(unit.isLocal() && !Vars.renderer.pixelate) {
            Fonts.outline.draw(
              unit.stack.amount + " ",
              unit.x + Angles.trnsx(unit.rotation + 180.0, 3.0),
              unit.y + Angles.trnsy(unit.rotation + 180.0, 3.0) - 3.0,
              Pal.techBlue,
              unit.itemTime * 0.25 / Scl.scl(1.0),
              false,
              Align.center,
            );
          };

          Draw.reset();
        };
      };

      // Light
      if(!isPayload) utp.drawLight(unit);

      // Shield
      if(unit.shieldAlpha > 0.0 && utp.drawShields) utp.drawShield(unit);

      // Parts
      var li = utp.parts;
      var cap = li.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i++) {
          var part = li.get(i);
          var mount = (unit.mounts.length > part.weaponIndex) ? unit.mounts[part.weaponIndex] : null;

          if(mount != null) {
            DrawPart.params.set(
              mount.warmup,
              mount.reload / mount.weapon.reload,
              mount.smoothReload,
              mount.heat,
              mount.recoil,
              mount.charge,
              unit.x,
              unit.y,
              unit.rotation,
            );
          } else {
            DrawPart.params.set(
              0.0,
              0.0,
              0.0,
              0.0,
              0.0,
              0.0,
              unit.x,
              unit.y,
              unit.rotation,
            );
          };

          if(unit instanceof Scaled) DrawPart.params.life = unit.fin();

          utp.applyColor(unit);
          part.draw(DrawPart.params);
        };
      };

      // Abilities
      if(!isPayload) {
        var li = unit.abilities;
        var cap = utp.abilities.size;
        if(cap > 0) {
          for(let i = 0; i < cap; i++) {
            var abi = li[i];

            Draw.reset();
            abi.draw(unit);
          };
        };
      };

      if(unit instanceof Mechc) unit.trns(-aux_legOffset.x, -aux_legOffset.y);

      Draw.reset();
    };


    function drawShadowComp(utp, unit) {
      if(!p3dShadow) {
        utp.super$drawShadow(unit);

        return;
      };

      var elev = mdl_unit.getElevation(unit);
      if(!utp.lowAltitude && unit.flying) elev *= 1.5;

      mdl_draw.drawPseudo3dShadow(mdl_game._pos(1, unit), utp.region, elev, unit.rotation - 90.0);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(utp) {
      setStatsComp(utp);
    };
    exports.setStats = setStats;


    const update = function(utp, unit) {
      updateComp(utp, unit);
    };
    exports.update = update;


    const killed = function(utp, unit) {
      killedComp(utp, unit);
    };
    exports.killed = killed;


    const draw = function(utp, unit) {
      drawComp(utp, unit);
    };
    exports.draw = draw;


    const drawShadow = function(utp, unit) {
      drawShadowComp(utp, unit);
    };
    exports.drawShadow = drawShadow;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: unit_genericUnit.js loaded.");
});
