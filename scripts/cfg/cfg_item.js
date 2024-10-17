// Checked on 10-10-2024


const db_item = require("db/db_item");


const stat_allowedInConveyors = new Stat("reind-allowed-in-conveyors.name", StatCat.function);


function setStats_itemVirt(obj) {
  obj.stats.add(stat_allowedInConveyors, false);
};


Events.run(ClientLoadEvent, () => {
    const list_itemVirt = db_item.itemVirt;
    for(let i = 0; i < list_itemVirt.size; i++) {
      var target = Vars.content.item(list_itemVirt.get(i));
      if(target != null) {
        setStats_itemVirt(target);
      };
    };

    Log.info("reind:cfg_item.js loaded.");
});
