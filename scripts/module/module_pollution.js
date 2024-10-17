// Checked on 10-10-2024


const db_pollution = require("db/db_pollution");


// Polution points of a world
var worldPP = 0;


function getPollution(tx, ty) {
  if(Vars.world.tile(tx, ty) == null) return 0.0;
  var r = 5;
  var pollution = 0;

  // Some really laggy calculation
  for(let i = -r; i <= r; i++) {
    for(let j = -r; j <= r; j++) {
      var t = Vars.world.tile(tx, ty).nearby(i, j);
      if(t != null) {
        // Check Floor
        for(let k = 0; k < db_pollution.floor.size - 1; k++) {
          if(t.floor() != null && t.floor().name == db_pollution.floor.get(k)) {
            pollution += db_pollution.floor.get(k + 1);
          };
        };

        // Check Block
        for(let k = 0; k < db_pollution.block.size - 1; k++) {
          if(t.block() != null && t.block().name == db_pollution.block.get(k)) {
            pollution += db_pollution.block.get(k + 1);
          };
        };

        // Check Building
        for(let k = 0; k < db_pollution.build.size - 1; k++) {
          if(t.build != null && t.build.status().toString() == "active" && t.build.block.name == db_pollution.build.get(k)) {
            pollution += db_pollution.build.get(k + 1);
          };
        };
      };
    };
  };

  // Check Water
  var a;
  if(pollution >= 128.0) {
    a = 1
  } else {
    a = -1
  };
  for(let i = -r; i <= r; i++) {
    for(let j = -r; j <= r; j++) {
      var t = Vars.world.tile(tx, ty).nearby(i, j);
      if(t != null && t.block() == null) {
        for(let k = 0; k < db_pollution.water.size - 1; k++) {
          if(t.floor() != null && t.floor().name == db_pollution.water.get(k)) {
            pollution += db_pollution.water.get(k + 1) * a;
          };
        };
      };
    };
  };

  // No minus value for each check
  if(pollution < 0) {
    pollution = 0;
  };
  return pollution;
};


function update_worldPP() {
  if(Mathf.chance(Time.delta * 0.18)) {
    var tx = Vars.world.width() * Mathf.random();
    var ty = Vars.world.height() * Mathf.random();
    tx = Mathf.round(tx);
    ty = Mathf.round(ty);
    var pollution = getPollution(tx, ty) * (Mathf.random() * 0.75 + 0.25);
    worldPP += pollution;
  };
  if(Mathf.chance(Time.delta * 0.12)) {
    if(worldPP > 0) {
      worldPP *= 0.98;
    };
  };
};


Events.run(Trigger.update, () => {
    if(Vars.state.isPlaying()) {
      update_worldPP();
      exports.worldPP = worldPP;
      //print(worldPP);
    };
});


Events.run(WorldLoadEvent, () => {
  worldPP = 0;
})




Events.run(ClientLoadEvent, () => {
  Log.info("reind:module_pollution.js loaded.")
});
