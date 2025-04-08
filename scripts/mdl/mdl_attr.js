/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_game = require("reind/mdl/mdl_game");
  // End


  // Part: Base
    const _attr = function(attr_gn) {
      var val = null;

      if(typeof attr_gn == "string") val = attr_gn;
      if(attr_gn instanceof Attribute) val = attr_gn.toString();

      return val;
    };
    exports._attr = _attr;
  // End


  // Part: Stat
    /*
     * NOTE:
     *
     * Returns the localized name for attribute, used mainly for stats.
     * Attributes have no translation in vanilla game, since there's no need.
     */
    const _attrVal = function(attr_gn) {
      var nmAttr = _attr(attr_gn);

      return Core.bundle.get("attr." + nmAttr + ".name");
    };
    exports._attrVal = _attrVal;
  // End


  // Part: Sum
    const _sumAttr = function(blk, t, attr_gn) {
      var nmAttr = _attr(attr_gn);

      return blk.sumAttribute(Attribute.get(nmAttr), t.x, t.y);
    };
    exports._sumAttr = _sumAttr;


    const _sumAttr_ts = function(ts, attr_gn) {
      var attr = 0.0;
      var nmAttr = _attr(attr_gn);

      ts.forEach(ot => attr += ot.floor().attributes.get(Attribute.get(nmAttr)));

      return attr;
    };
    exports._sumAttr_ts = _sumAttr_ts;


    const _sumAttr_rect = function(blk, t, attr_gn, r) {
      if(r == null) r = 0;

      var nmAttr = _attr(attr_gn);

      return _sumAttr_ts(mdl_game._tsRect(t, r, blk.size), nmAttr);
    };
    exports._sumAttr_rect = _sumAttr_rect;
  // End


  // Part: Condition
    const _limit = function(blk, avLimit) {
      if(avLimit == null) avLimit = 1.0;

      return Math.pow(blk.size, 2) * avLimit;
    };
    exports._limit = _limit;
  // End


  // Part: Pair
    /*
     * NOTE:
     *
     * Gets the highest attribute sum in a mapper list, from a list of tiles.
     * Returns an attribute pair as {[nmAttr, attr]}.
     *
     * Available mapper lists:
     * {db_item.db["map"]["rock"]} ... attribute -> rock floor
     * {db_item.db["map"]["bush"]} ... attribute -> bush
     * {db_fluid.db["map"]["vent"]} ... attribute -> vent
     */
    const _attrPair = function(map, ts) {
      var attr = 0.0;
      var nmAttr = null;
      var cap = map.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var tmpNmAttr = map[i];
          var tmpAttr = _sumAttr_ts(ts, tmpNmAttr);
          if(tmpAttr > attr) {
            nmAttr = tmpNmAttr;
            attr = tmpAttr;
          };
        };
      };

      return (nmAttr == null) ? null : [nmAttr, attr];
    };
    exports._attrPair = _attrPair;
  // End


  // Part: List
    /*
     * NOTE:
     *
     * Gets attribute sum for each attribute in a mapper list.
     * Returns a list of {nmAttr} and {attr}.
     */
    const _attrMap = function(map, ts) {
      var arr = [];

      var cap = map.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var nmAttr = map[i];
          var attr = sumAttr_ts(ts, nmAttr);

          arr.push(nmAttr);
          arr.push(attr);
        };
      };

      return arr;
    };
    exports._attrMap = _attrMap;
  // End


  // Part: Special
    const _wind = function(t, scl) {
      if(scl == null) scl = 1.0;

      var attr = (1.0 - Math.pow(Math.sin(Time.time / 6400.0 / scl), 2) * 0.7) * Attribute.get("reind-attr-env-wind").env();
      if(t != null && attr > 0.0) attr += Mathf.randomSeed(t.pos(), -2, 2) * 0.1;

      if(attr < 0.0) attr = 0.0;
      return attr;
    };
    exports._wind = _wind;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_attr.js loaded.");
});
