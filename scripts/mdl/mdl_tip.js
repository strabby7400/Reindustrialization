/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Init
    const list_tips = new Seq();

    let i = 1;
    while(Core.bundle.has("info.reind-info-tip-" + i + ".name")) {
      list_tips.add(Core.bundle.get("info.reind-info-tip-" + i + ".name"));
      i++;
    };
  // End


  // Part: Methods
    const getTip_byId = function(id) {
      if(id > list_tips.size - 1) {
        return null;
      } else {
        return list_tips.get(id);
      };
    };
    exports.getTip_byId = getTip_byId;


    const getTip_random = function() {
      var id = Math.floor(Mathf.random(list_tips.size - 0.0001));
      return list_tips.get(id);
    };
    exports.getTip_random = getTip_random;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:mdl_tip.js loaded.");
});
