// Require clusters
require("cfg/cfg_hidden");
require("cfg/cfg_item");
require("cfg/cfg_sector");
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
  dialog.cont.add("@reind-welcome.details").row();
  dialog.cont.row();
  dialog.cont.add("\n\n").row();
  dialog.cont.row();

  // Button: OK
  dialog.cont.button("@ok", run(() => {
    Sounds.door.play();
    dialog.hide();
  })).size(100, 50);

  // Done
  dialog.show();
};


Events.run(ClientLoadEvent, () => {
  dialogSet_welcome();
});
