/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import

    /* <---------------- config ----------------> */

    const cfg_attribute = require("reind/cfg/cfg_attribute");
    const cfg_content = require("reind/cfg/cfg_content");
    const cfg_hidden = require("reind/cfg/cfg_hidden");
    const cfg_ldm = require("reind/cfg/cfg_ldm");
    const cfg_sector = require("reind/cfg/cfg_sector");
    const cfg_update = require("reind/cfg/cfg_update");

    /* <---------------- module ----------------> */

    const mdl_tip = require("reind/mdl/mdl_tip");

    /* <---------------- global ----------------> */

    /* <---------------- item ----------------> */

    const ct_rs_genericItem = require("reind/ct/ct_rs_genericItem");
    const ct_rs_virtualItem = require("reind/ct/ct_rs_virtualItem");
    const ct_rs_consumableItem = require("reind/ct/ct_rs_consumableItem");
    const ct_rs_oreItem = require("reind/ct/ct_rs_oreItem");
    const ct_rs_wasteItem = require("reind/ct/ct_rs_wasteItem");
    const ct_rs_intermediateItem = require("reind/ct/ct_rs_intermediateItem");

    /* <---------------- fluid ----------------> */

    const ct_rs_genericFluid = require("reind/ct/ct_rs_genericFluid");
    const ct_rs_oreFluid = require("reind/ct/ct_rs_oreFluid");
    const ct_rs_wasteFluid = require("reind/ct/ct_rs_wasteFluid");
    const ct_rs_intermediateFluid = require("reind/ct/ct_rs_intermediateFluid");
    const ct_rs_efficiency = require("reind/ct/ct_rs_efficiency");

    /* <---------------- weather ----------------> */

    const ct_wea_ambientWeather = require("reind/ct/ct_wea_ambientWeather");
    const ct_wea_decorativeWeather = require("reind/ct/ct_wea_decorativeWeather");

    /* <---------------- miner ----------------> */

    const ct_blk_drill = require("reind/ct/ct_blk_drill");
    const ct_blk_wallDrill = require("reind/ct/ct_blk_wallDrill");
    const ct_blk_impactDrill = require("reind/ct/ct_blk_impactDrill");
    const ct_blk_oreScanner = require("reind/ct/ct_blk_oreScanner");
    const ct_blk_wallHarvester = require("reind/ct/ct_blk_wallHarvester");
    const ct_blk_rangeWallHarvester = require("reind/ct/ct_blk_rangeWallHarvester");
    const ct_blk_randomMiner = require("reind/ct/ct_blk_randomMiner");

    /* <---------------- distribution & item blocks ----------------> */

    const ct_blk_conveyor = require("reind/ct/ct_blk_conveyor");
    const ct_blk_conveyorBridge = require("reind/ct/ct_blk_conveyorBridge");
    const ct_blk_genericDistributionGate = require("reind/ct/ct_blk_genericDistributionGate");
    const ct_blk_incinerator = require("reind/ct/ct_blk_incinerator");
    const ct_blk_massDriver = require("reind/ct/ct_blk_massDriver");
    const ct_blk_genericCore = require("reind/ct/ct_blk_genericCore");
    const ct_blk_container = require("reind/ct/ct_blk_container");

    /* <---------------- liquid blocks ----------------> */

    const ct_blk_fluidPump = require("reind/ct/ct_blk_fluidPump");
    const ct_blk_fluidPipe = require("reind/ct/ct_blk_fluidPipe");
    const ct_blk_fluidPipeBridge = require("reind/ct/ct_blk_fluidPipeBridge");
    const ct_blk_fluidJunction = require("reind/ct/ct_blk_fluidJunction");
    const ct_blk_fluidUnloader = require("reind/ct/ct_blk_fluidUnloader");
    const ct_blk_liquidTank = require("reind/ct/ct_blk_liquidTank");
    const ct_blk_gasCylinder = require("reind/ct/ct_blk_gasCylinder");

    /* <---------------- power blocks ----------------> */

    const ct_blk_ventGenerator = require("reind/ct/ct_blk_ventGenerator");
    const ct_blk_consumeGenerator = require("reind/ct/ct_blk_consumeGenerator");
    const ct_blk_manualGenerator = require("reind/ct/ct_blk_manualGenerator");
    const ct_blk_windTurbine = require("reind/ct/ct_blk_windTurbine");
    const ct_blk_fieldGenerator = require("reind/ct/ct_blk_fieldGenerator");
    const ct_blk_cable = require("reind/ct/ct_blk_cable");
    const ct_blk_wireRelay = require("reind/ct/ct_blk_wireRelay");
    const ct_blk_wireNode = require("reind/ct/ct_blk_wireNode");

    /* <---------------- special effc blocks ----------------> */

    const ct_blk_heatConductor = require("reind/ct/ct_blk_heatConductor");
    const ct_blk_efficiencyPipe = require("reind/ct/ct_blk_efficiencyPipe");

    /* <---------------- defense ----------------> */

    const ct_blk_genericWall = require("reind/ct/ct_blk_genericWall");
    const ct_blk_radar = require("reind/ct/ct_blk_radar");


    /* <---------------- turret ----------------> */


    const ct_blk_liquidTurret = require("reind/ct/ct_blk_liquidTurret");


    /* <---------------- factory ----------------> */

    const ct_blk_genericFactory = require("reind/ct/ct_blk_genericFactory");
    const ct_blk_attributeFactory = require("reind/ct/ct_blk_attributeFactory");
    const ct_blk_attributeHeater = require("reind/ct/ct_blk_attributeHeater");
    const ct_blk_heatFactory = require("reind/ct/ct_blk_heatFactory");
    const ct_blk_multiCrafter = require("reind/ct/ct_blk_multiCrafter");
    const ct_blk_fragmentFactory = require("reind/ct/ct_blk_fragmentFactory");

    /* <---------------- logic ----------------> */

    const ct_blk_messageBlock = require("reind/ct/ct_blk_messageBlock");

    /* <---------------- map blocks ----------------> */

    const ct_env_nonBuildZone = require("reind/ct/ct_env_nonBuildZone");
    const ct_env_ruin = require("reind/ct/ct_env_ruin");

    /* <---------------- environment ----------------> */

    const ct_env_genericFloor = require("reind/ct/ct_env_genericFloor");
    const ct_env_genericLiquidFloor = require("reind/ct/ct_env_genericLiquidFloor");
    const ct_env_vent = require("reind/ct/ct_env_vent");
    const ct_env_genericWall = require("reind/ct/ct_env_genericWall");
    const ct_env_dump = require("reind/ct/ct_env_dump");
    const ct_env_groundOre = require("reind/ct/ct_env_groundOre");
    const ct_env_wallOre = require("reind/ct/ct_env_wallOre");
    const ct_env_depthOre = require("reind/ct/ct_env_depthOre");
    const ct_env_heapOre = require("reind/ct/ct_env_heapOre");
    const ct_env_grass = require("reind/ct/ct_env_grass");
    const ct_env_tree = require("reind/ct/ct_env_tree");

    /* <---------------- status effects ----------------> */

    const ct_sta_genericStatus = require("reind/ct/ct_sta_genericStatus");
    const ct_sta_liquidStatus = require("reind/ct/ct_sta_liquidStatus");

    /* <---------------- units ----------------> */

    const ct_unit_mechUnit = require("reind/ct/ct_unit_mechUnit");
    const ct_unit_legUnit = require("reind/ct/ct_unit_legUnit");

  // End


  // Part: Dialog
    function setup_dialog_welcome() {
      Sounds.wave.play();

      var dial = extend(BaseDialog, "@info.reind-info-welcome.name", {

      });

      // Contents
      dial.cont.row();
      dial.cont.add("\n").row();

      dial.cont.image(Core.atlas.find("reind-bg")).row();
      dial.cont.row();
      dial.cont.add("\n").row();

      dial.cont.add("@info.reind-info-welcome.description").row();
      dial.cont.row();
      dial.cont.add("\n").row();

      dial.cont.add("[grey]------------------------------------------------------------[]").row();
      dial.cont.row();
      dial.cont.add("\n").row();

      dial.cont.add("[orange]" + mdl_tip.getTip_random() + "[white]").row();
      dial.cont.row();
      dial.cont.add("\n").row();

      dial.cont.row();

      dial.cont.table(Styles.black, btns => {
        btns.button("@ok", run(() => {
          Sounds.door.play();
          dial.hide();
        })).size(200.0, 50.0).center().pad(12.0);

        var enableLdm = false;
        btns.button("@term.reind-term-ldm.name", run(() => {
          if(!enableLdm) {
            Sounds.shootSmite.play();
            enableLdm = true;
            cfg_ldm.setup_ldm(true);
            new UI().showInfoFade("\n\n\n\n" + Core.bundle.get("info.reind-info-ldm-enabled.name"), 2.0);
          } else {
            Sounds.place.play();
            enableLdm = false;
            cfg_ldm.setup_ldm(false);
            new UI().showInfoFade("\n\n\n\n" + Core.bundle.get("info.reind-info-ldm-disabled.name"), 2.0);
          };
        })).size(200.0, 50.0).center().pad(12.0).tooltip("@info.reind-info-low-detail-mode.name");
      });

      dial.cont.row();

      dial.show();
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Event
    Events.run(MusicRegisterEvent, () => {
      setup_dialog_welcome();
      cfg_hidden.setup_hiddenItems();
      cfg_content.setup_content();

      // To completely hide world processors
      Blocks.worldMessage.forceDark = true;
    });
  // End
