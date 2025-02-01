/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_geometry = require("reind/mdl/mdl_geometry");
  // End


  // Part: Sum
    const getAttr_blk = function(blk, t, nm_attr) {
      var attr = blk.sumAttribute(Attribute.get(nm_attr), t.x, t.y);
      return attr;
    };
    exports.getAttr_blk = getAttr_blk;


    const getAttr_b = function(b, nm_attr) {
      var attr = getAttr_blk(b.block, b.tile, nm_attr);
      return attr;
    };
    exports.getAttr_b = getAttr_b;


    const getAttr_list = function(list_ot, nm_attr) {
      var attr = 0;
      list_ot.each(ot => {
        if(!ot.floor().isDeep()) attr += ot.floor().attributes.get(Attribute.get(nm_attr));
      });
      return attr;
    };
    exports.getAttr_list = getAttr_list;
  // End


  // Part: Condition
    const isEnough_blk = function(blk, t, nm_attr, val) {
      if(val == null) val = 1.0;

      var attr = getAttr_blk(blk, t, nm_attr);
      var limit = Math.pow(blk.size, 2) * val;

      return attr >= limit;
    };
    exports.isEnough_blk = isEnough_blk;
  // End


  // Part: Pair
    /*
      NOTE:
      The generic method to get the highest attribute value among a mapper list, within a list of tiles.
      An attribute pair is returned as an array of attribute name and sum value.
      Available mapper lists:
      {db_item.rockMap} ... For rock impact drills.
      {db_item.bushMap} ... For bush harvesters.
      {db_fluid.ventMap} ... For vent collectors.
    */
    const getAttrPair_list = function(map, list_ot) {
      if(map == null || map.size == 0) return;

      var nm_attr;
      var attr = 0.0;
      for(let i = 0; i < map.size; i++) {
        if(i % 2 != 0) continue;

        var temp_attr = getAttr_list(list_ot, map.get(i));
        if(temp_attr > attr) {
          nm_attr = map.get(i);
          attr = temp_attr;
        };
      };

      if(nm_attr != null) {
        return [nm_attr, attr];
      } else {
        return;
      };
    };
    exports.getAttrPair_list = getAttrPair_list;


    const getAttrPair_blk = function(map, blk, t) {
      if(blk == null || t == null) return;

      return getAttrPair_list(map, mdl_geometry.getTiles_size(t, blk.size));
    };
    exports.getAttrPair_blk = getAttrPair_blk;


    const getAttrPair_b = function(map, b) {
      if(b == null) return;

      return getAttrPair_list(map, mdl_geometry.getTiles_size(b.tile, b.block.size));
    };
    exports.getAttrPair_b = getAttrPair_b;
  // End


  // Part: List
    const getAttrList_list = function(map, list_ot) {
      if(map == null || map.size == 0) return new Seq();

      var list_attr = new Seq();
      for(let i = 0; i < map.size; i++) {
        if(i % 2 != 0) continue;

        var nm_attr = map.get(i);
        var attr = getAttr_list(list_ot, nm_attr);

        list_attr.add(nm_attr);
        list_attr.add(attr);
      };

      return list_attr;
    };
    exports.getAttrList_list = getAttrList_list;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:mdl_attr.js loaded.");
});
