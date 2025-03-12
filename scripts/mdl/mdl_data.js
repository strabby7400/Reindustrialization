/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
  // End


  // Part: RW
    const write_1n = function(li_tg, nm) {
      if(!li_tg.contains(nm)) {
        li_tg.add(nm);
      };
    };
    exports.write_1n = write_1n;


    const write_1n1v = function(li_tg, nm, val) {
      if(!li_tg.contains(nm)) {
        li_tg.add(nm, val);
      };
    };
    exports.write_1n1v = write_1n1v;


    const read_1n1v = function(li_tg, nm) {
      var val = null;
      var cap = li_tg.size;
      if(cap == 0) return val;
      for(let i = 0; i < cap; i++) {
        if(i % 2 != 0) continue;

        if(li_tg.get(i) == nm) val = li_tg.get(i + 1);
      };

      return val;
    };
    exports.read_1n1v = read_1n1v;


    const write_2n1v = function(li_tg, nm1, nm2, val) {
      var dup = false;
      var cap = li_tg.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i++) {
          if(i % 3 != 0) continue;

          if(li_tg.get(i) == nm1 && li_tg.get(i + 1) == nm2) dup = true;
        };
      };

      if(dup) return;
      li_tg.add(nm1, nm2, val);
    };
    exports.write_2n1v = write_2n1v;


    const read_2n1v = function(li_tg, nm1, nm2) {
      var val = null;
      var cap = li_tg.size;
      if(cap == 0) return val;
      for(let i = 0; i < cap; i++) {
        if(i % 3 != 0) continue;

        if(li_tg.get(i) == nm1 && li_tg.get(i + 1) == nm2) val = li_tg.get(i + 2);
      };
      return val;
    };
    exports.read_2n1v = read_2n1v;


    /* list */


    const writeli_1n = function(li_tg, li_val) {
      if(li_val.size == 0) return;

      li_val.each(nm => {
        write_1n(li_tg, nm);
      });
    };
    exports.writeli_1n = writeli_1n;


    const writeli_1n1v = function(li_tg, li_val) {
      var cap = li_val.size;
      if(cap == 0) return;
      for(let i = 0; i < cap; i++) {
        if(i % 2 != 0) continue;

        write_1n1v(li_tg, li_val.get(i), li_val.get(i + 1));
      };
    };
    exports.writeli_1n1v = writeli_1n1v;


    const li_95867122 = new Seq();
    const readli_1n1v = function(li_tg, nm) {
      var li = li_95867122.clear();

      var cap = li_tg.size;
      if(cap == 0) return li;
      for(let i = 0; i < cap; i++) {
        if(i % 2 != 0) continue;

        if(li_tg.get(i) == nm) li.add(li_tg.get(i + 1));
      };

      return li;
    };
    exports.readli_1n1v = readli_1n1v;


    const writeli_2n1v = function(li_tg, li_val) {
      if(li_val.size == 0) return;

      var cap = li_val.size;
      if(cap == 0) return;
      for(let i = 0; i < cap; i++) {
        if(i % 3 != 0) continue;

        write_2n1v(li_tg, li_val.get(i), li_val.get(i + 1), li_val.get(i + 2));
      };
    };
    exports.writeli_2n1v = writeli_2n1v;


    const li_48722097 = new Seq();
    const readli_2n1v = function(li_tg, nm1, nm2) {
      var li = li_48722097.clear();

      var cap = li_tg.size;
      if(cap == 0) return li;
      for(let i = 0; i < cap; i++) {
        if(i % 3 != 0) continue;

        if(li_tg.get(i) == nm1 && li_tg.get(i + 1) == nm2) li.add(li_tg.get(i + 2));
      };

      return li;
    };
    exports.readli_2n1v = readli_2n1v;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_data.js loaded.");
});
