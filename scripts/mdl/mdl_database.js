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


    const writeList_1n = function(list_tg, list_val) {
      if(list_val.size == 0) return;

      list_val.each(nm => {
        write_1n(list_tg, nm);
      });
    };
    exports.writeList_1n = writeList_1n;


    const writeList_1n1v = function(list_tg, list_val) {
      if(list_val.size == 0) return;

      for(let i = 0; i <= list_val.size - 1; i++) {
        if(i % 2 != 0) continue;

        write_1n1v(list_tg, list_val.get(i), list_val.get(i + 1));
      };
    };
    exports.writeList_1n1v = writeList_1n1v;


    const readList_1n1v = function(list_tg, nm) {
      var list_val = new Seq();
      if(list_tg.size == 0) return list_val;

      for(let i = 0; i <= list_tg.size - 1; i++) {
        if(i % 2 != 0) continue;

        if(list_tg.get(i) == nm) list_val.add(list_tg.get(i + 1));
      };

      return list_val;
    };
    exports.readList_1n1v = readList_1n1v;


    const writeList_2n1v = function(list_tg, list_val) {
      if(list_val.size == 0) return;

      for(let i = 0; i <= list_val.size - 2; i++) {
        if(i % 3 != 0) continue;

        write_2n1v(list_tg, list_val.get(i), list_val.get(i + 1), list_val.get(i + 2));
      };
    };
    exports.writeList_2n1v = writeList_2n1v;


    const readList_2n1v = function(list_tg, nm1, nm2) {
      var list_val = new Seq();
      if(list_tg.size == 0) return list_val;

      for(let i = 0; i <= list_tg.size - 2; i++) {
        if(i % 3 != 0) continue;

        if(list_tg.get(i) == nm1 && list_tg.get(i + 1) == nm2) list_val.add(list_tg.get(i + 2));
      };

      return list_val;
    };
    exports.readList_1n1v = readList_1n1v;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:mdl_database.js loaded.");
});
