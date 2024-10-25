// Require clusters
require("cfg/cfg_item");
require("cfg/cfg_planet");
const cfg_sector = require("cfg/cfg_sector");
require("blk/blk_boiler");
require("blk/blk_distribution");
require("blk/blk_heatBlock");
require("blk/blk_liquidBlock");
require("blk/blk_manualGenerator");
require("blk/blk_pollutionCrafter");
require("blk/blk_powerBlock");
require("blk/blk_storage");
require("blk/blk_tree");
require("ct/ct_effc");
require("ct/ct_fluid");
require("ct/ct_status");
require("ct/ct_unit");
require("ct/ct_weather");
require("module/module_pollution");


function dialogSet_welcome() {
  Sounds.wave.play();

  var dialog = new BaseDialog("@reind-welcome.name");

  // Adding contents
  dialog.cont.add("@reind-welcome.description").row();
  dialog.cont.row();
  dialog.cont.add("\n\n").row();
  dialog.cont.row();

  // Button: OK
  dialog.cont.button("@ok", run(() => {
    Sounds.door.play();
    cfg_sector.wp_ldm(false);
    dialog.hide();
  })).size(150, 50);
  dialog.cont.row();

  // Button: No Particles
  dialog.cont.button("@reind-no-particles.name", run(() => {
    Sounds.shootSmite.play();
    cfg_sector.wp_ldm(true);
    dialog.hide();
  })).size(150, 50);
  dialog.cont.row();

  // Done
  dialog.show();
};


Events.run(MusicRegisterEvent, () => {
  dialogSet_welcome();
});
