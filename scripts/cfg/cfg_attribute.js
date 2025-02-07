/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Tree & Bush
    Attribute.add("reind-attr-tree");
    Attribute.add("reind-attr-tree-hard");
    Attribute.add("reind-attr-tree-latex");
    Attribute.add("reind-attr-fungi");
    Attribute.add("reind-attr-fungi-hard");
  // End


  // Part: Vent
    Attribute.add("reind-attr-vent-ammonia");
    Attribute.add("reind-attr-vent-sour-gas");
    Attribute.add("reind-attr-vent-steam");
    Attribute.add("reind-attr-vent-sulfur-dioxide");
    Attribute.add("reind-attr-underwater-vent-hydrogen-sulfide");
  // End


  // Part: Rock
    Attribute.add("reind-attr-rock-clastic");
    Attribute.add("reind-attr-rock-evaporite");
    Attribute.add("reind-attr-rock-hypabyssal");
    Attribute.add("reind-attr-rock-lava");
    Attribute.add("reind-attr-rock-metamorphic");
    Attribute.add("reind-attr-rock-plutonic");
    Attribute.add("reind-attr-rock-biological-sedimentary");
    Attribute.add("reind-attr-rock-clastic-sedimentary");
  // End


  // Part: Floor
    Attribute.add("reind-attr-flr-brine");
    Attribute.add("reind-attr-flr-water");
    Attribute.add("reind-attr-flr-sea-water");
    Attribute.add("reind-attr-flr-placer");
  // End


  // Part: Env
    Attribute.add("reind-attr-env-carnage");
    Attribute.add("reind-attr-env-growth");
    Attribute.add("reind-attr-env-heat");
    Attribute.add("reind-attr-env-rain");
    Attribute.add("reind-attr-env-tide");
    Attribute.add("reind-attr-env-wind");
  // End


  // Part: Specific
    Attribute.add("reind-attr-placeholder");
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:cfg_attribute.js loaded.");
});
