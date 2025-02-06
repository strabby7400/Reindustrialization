/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
  // End


  // Part: RW
    const write_1n = function(list, nm) {
      if(!list.contains(nm)) {
        list.add(nm);
      };
    };
    exports.write_1n = write_1n;


    const write_1n1v = function(list, nm, val) {
      if(!list.contains(nm)) {
        list.addAll(new Seq([nm, val]));
      };
    };
    exports.write_1n1v = write_1n1v;


    const read_1n1v = function(list, nm) {
      if(!list.contains(nm) || list.size == 0) return null;

      for(let i = 0; i <= list.size - 1; i++) {
        if(list.get(i) == nm) return list.get(i + 1);
      };
    };
    exports.read_1n1v = read_1n1v;


    const write_2n1v = function(list, nm1, nm2, val) {
      var repeat = false;
      if(list.size != 0) {
        for(let i = 0; i <= list.size - 2; i++) {
          if(i % 3 != 0) continue;

          if(list.get(i) == nm1 && list.get(i + 1) == nm2) repeat = true;
        };
      };

      if(repeat) return;
      list.addAll(new Seq([nm1, nm2, val]));
    };
    exports.write_2n1v = write_2n1v;


    const read_2n1v = function(list, nm1, nm2) {
      if(list.size == 0) return null;

      for(let i = 0; i <= list.size - 2; i++) {
        if(i % 3 != 0) continue;

        if(list.get(i) == nm1 && list.get(i + 1) == nm2) return list.get(i + 2);
      };
      return null;
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
      if(li_val.size == 0) return;

      for(let i = 0; i <= li_val.size - 1; i++) {
        if(i % 2 != 0) continue;

        write_1n1v(li_tg, li_val.get(i), li_val.get(i + 1));
      };
    };
    exports.writeli_1n1v = writeli_1n1v;


    const readli_1n1v = function(li_tg, nm) {
      var li_val = new Seq();
      if(li_tg.size == 0) return li_val;

      for(let i = 0; i <= li_tg.size - 1; i++) {
        if(i % 2 != 0) continue;

        if(li_tg.get(i) == nm) li_val.add(li_tg.get(i + 1));
      };

      return li_val;
    };
    exports.readli_1n1v = readli_1n1v;


    const writeli_2n1v = function(li_tg, li_val) {
      if(li_val.size == 0) return;

      for(let i = 0; i <= li_val.size - 2; i++) {
        if(i % 3 != 0) continue;

        write_2n1v(li_tg, li_val.get(i), li_val.get(i + 1), li_val.get(i + 2));
      };
    };
    exports.writeli_2n1v = writeli_2n1v;


    const readli_2n1v = function(li_tg, nm1, nm2) {
      var li_val = new Seq();
      if(li_tg.size == 0) return li_val;

      for(let i = 0; i <= li_tg.size - 2; i++) {
        if(i % 3 != 0) continue;

        if(li_tg.get(i) == nm1 && li_tg.get(i + 1) == nm2) li_val.add(li_tg.get(i + 2));
      };

      return li_val;
    };
    exports.readli_1n1v = readli_1n1v;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:mdl_database.js loaded.");
});
