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


    const getAttr_li = function(li_ot, nm_attr) {
      var attr = 0;
      li_ot.each(ot => {
        if(!ot.floor().isDeep()) attr += ot.floor().attributes.get(Attribute.get(nm_attr));
      });
      return attr;
    };
    exports.getAttr_li = getAttr_li;
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
    const getAttrPair_li = function(map, li_ot) {
      if(map == null || map.size == 0) return;

      var nm_attr;
      var attr = 0.0;
      for(let i = 0; i < map.size; i++) {
        if(i % 2 != 0) continue;

        var temp_attr = getAttr_li(li_ot, map.get(i));
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
    exports.getAttrPair_li = getAttrPair_li;
  // End


  // Part: List
    const getAttrli_li = function(map, li_ot) {
      if(map == null || map.size == 0) return new Seq();

      var li_attr = new Seq();
      for(let i = 0; i < map.size; i++) {
        if(i % 2 != 0) continue;

        var nm_attr = map.get(i);
        var attr = getAttr_li(li_ot, nm_attr);

        li_attr.add(nm_attr);
        li_attr.add(attr);
      };

      return li_attr;
    };
    exports.getAttrli_li = getAttrli_li;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:mdl_attr.js loaded.");
});
