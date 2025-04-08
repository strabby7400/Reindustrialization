/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
  // End


  // Part: RW
    const read_1n1v = function(arr, nm, ini) {
      var val = null;
      var cap = arr.length;
      if(cap == 0) return val;
      for(let i = 0; i < cap; i += 2) {
        if(arr[i] == nm) val = arr[i + 1];
      };

      if(val == null && ini != null) val = ini;
      return val;
    };
    exports.read_1n1v = read_1n1v;


    const read_2n1v = function(arr, nm1, nm2, ini) {
      var val = null;
      var cap = arr.length;
      if(cap == 0) return val;
      for(let i = 0; i < cap; i += 3) {
        if(arr[i] == nm1 && arr[i + 1] == nm2) val = arr[i + 2];
      };

      if(val == null && ini != null) val = ini;
      return val;
    };
    exports.read_2n1v = read_2n1v;


    /* list */


    const readLi_1n1v = function(arr, nm) {
      var arr0 = [];

      var cap = arr.length;
      if(cap == 0) return arr0;
      for(let i = 0; i < cap; i += 2) {
        if(arr[i] == nm) arr0.push(arr[i + 1]);
      };

      return arr0;
    };
    exports.readLi_1n1v = readLi_1n1v;


    const readLi_2n1v = function(arr, nm1, nm2) {
      var arr0 = []

      var cap = arr.length;
      if(cap == 0) return arr0;
      for(let i = 0; i < cap; i += 3) {
        if(arr[i] == nm1 && arr[i + 1] == nm2) arr0.push(arr[i + 2]);
      };

      return arr0;
    };
    exports.readLi_2n1v = readLi_2n1v;
  // End


  // Part: Config
    const _config = function(blk_gn, ini) {
      var cfg = null;
      if(blk_gn instanceof Block) cfg = blk_gn.lastConfig;
      if(blk_gn instanceof Building && blk_gn.config() != null) {
        if(blk_gn.config() == ini) {
          cfg = (blk_gn.modified ) ? ini : blk_gn.block.lastConfig;
        } else {
          cfg = blk_gn.config();
        };
      };

      return (cfg == null) ? ini : cfg;
    };
    exports._config = _config;


    const handleConfigured = function(b, builder, val) {
      if(builder != null && builder.isPlayer()) b.lastAccessed = builder.getPlayer().coloredName();
      var val_fi = 0.0;
      var param = 0.0;
      var param1 = 0.0;

      b.modified = true;

      if(val instanceof Vec2) {
        val_fi = val.x;
        param = val.y;

        return [val_fi, param, -2];
      };

      if(val instanceof Vec3) {
        val_fi = val.x;
        param = val.y;
        param1 = val.z;

        return [val_fi, param, param1];
      };

      if(val instanceof Building) {
        val_fi = val.config();

        if(val_fi != null && !(val_fi instanceof Building)) b.configured(builder, val_fi);
      };

      if(typeof val == "number") {
        return [val, -2, -2];
      };

      return [-2, -2, -2];
    };
    exports.handleConfigured = handleConfigured;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_data.js loaded.");
});
