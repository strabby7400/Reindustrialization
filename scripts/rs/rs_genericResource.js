/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_table = require("reind/mdl/mdl_table");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Setting
    var showIconTag = true;
    const set_showIconTag = function(val) {
      showIconTag = val;
    };
    exports.set_showIconTag = set_showIconTag;


    var iconTagInterval = 120.0;
    const set_iconTagInterval = function(val) {
      iconTagInterval = val;
    };
    exports.set_iconTagInterval = set_iconTagInterval;
  // End


  // Part: Auxiliary
    function ax_buildStats(str) {
      return function(tb) {
        mdl_table.setNoteStat(tb, str, 4);
      };
    };
  // End


  // Part: Auxiliary
    function setStatsComp(ct) {
      var tagVal = mdl_content._rsTagVal(ct);
      if(tagVal != null) ct.stats.add(db_stat.resourceTag, ax_buildStats(tagVal));
    };


    function loadIconComp(ct) {
      var cap = ct.alters;
      if(cap == 0) return;

      const regs = [Core.atlas.find(ct.name + "-t0")];
      for(let i = 0; i < cap; i++) {
        regs.push(Core.atlas.find(ct.name + "-t" + (i + 1)));
      };

      function updateIcon() {
        if(!showIconTag) {
          ct.fullIcon.set(regs[0]);
          ct.uiIcon.set(regs[0]);
        } else {
          var index = Math.floor((Time.globalTime / iconTagInterval) % regs.length);
          ct.fullIcon.set(regs[index]);
          ct.uiIcon.set(regs[index]);
        };
      };

      Events.run(Trigger.update, () => {
        updateIcon();
      });
    };


    function createIconsComp(ct, packer) {
      var tags = mdl_content._rsTag(ct);
      var cap = tags.length;
      if(cap == 0) return;

      var res = Core.atlas.getPixmap(ct.name);
      var pixmap = mdl_draw._pix_stack(res);
      packer.add(MultiPacker.PageType.main, ct.name + "-t0", pixmap);
      pixmap.dispose();

      var alters = 0;
      for(let i = 0; i < cap; i++) {
        var str_ov = "reind-tag-" + tags[i];
        if(Core.atlas.has(str_ov)) {
          var ov = Core.atlas.getPixmap("reind-tag-" + tags[i]);

          var pixmap = mdl_draw._pix_stack(res, ov);
          packer.add(MultiPacker.PageType.main, ct.name + "-t" + (alters + 1), pixmap);
          pixmap.dispose();

          alters++;
        };
      };
      ct.alters = alters;
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(ct) {
      setStatsComp(ct);
    };
    exports.setStats = setStats;


    const loadIcon = function(ct) {
      loadIconComp(ct);
    };
    exports.loadIcon = loadIcon


    const createIcons = function(ct, packer) {
      createIconsComp(ct, packer);
    };
    exports.createIcons = createIcons;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: rs_genericResource.js loaded.");
});
