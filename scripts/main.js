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
    const cfg_setting = require("reind/cfg/cfg_setting");
    const cfg_sector = require("reind/cfg/cfg_sector");
    const cfg_update = require("reind/cfg/cfg_update");

    /* <---------------- module ----------------> */

    const mdl_math = require("reind/mdl/mdl_math");
    const mdl_ui = require("reind/mdl/mdl_ui");

    /* <---------------- database ----------------> */

    const db_dialog = require("reind/db/db_dialog");
    const db_event = require("reind/db/db_event");

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
    const ct_blk_bitContainer = require("reind/ct/ct_blk_bitContainer");

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
    const ct_blk_boiler = require("reind/ct/ct_blk_boiler");
    const ct_blk_cable = require("reind/ct/ct_blk_cable");
    const ct_blk_wireRelay = require("reind/ct/ct_blk_wireRelay");
    const ct_blk_wireNode = require("reind/ct/ct_blk_wireNode");

    /* <---------------- special effc blocks ----------------> */

    const ct_blk_heatConductor = require("reind/ct/ct_blk_heatConductor");
    const ct_blk_efficiencyPipe = require("reind/ct/ct_blk_efficiencyPipe");

    /* <---------------- defense ----------------> */

    const ct_blk_genericWall = require("reind/ct/ct_blk_genericWall");
    const ct_blk_radar = require("reind/ct/ct_blk_radar");
    const ct_blk_projectiveMender = require("reind/ct/ct_blk_projectiveMender");

    /* <---------------- turret ----------------> */

    const ct_blk_liquidTurret = require("reind/ct/ct_blk_liquidTurret");

    /* <---------------- factory ----------------> */

    const ct_blk_genericFactory = require("reind/ct/ct_blk_genericFactory");
    const ct_blk_attributeFactory = require("reind/ct/ct_blk_attributeFactory");
    const ct_blk_attributeHeater = require("reind/ct/ct_blk_attributeHeater");
    const ct_blk_heatFactory = require("reind/ct/ct_blk_heatFactory");
    const ct_blk_recipeFactory = require("reind/ct/ct_blk_recipeFactory");
    const ct_blk_fragmentFactory = require("reind/ct/ct_blk_fragmentFactory");
    const ct_blk_structureCore = require("reind/ct/ct_blk_structureCore");

    /* <---------------- payload ----------------> */

    const ct_blk_payloadConveyor = require("reind/ct/ct_blk_payloadConveyor");

    /* <---------------- logic ----------------> */

    const ct_blk_messageBlock = require("reind/ct/ct_blk_messageBlock");

    /* <---------------- map blocks ----------------> */

    const ct_env_restrictionZone = require("reind/ct/ct_env_restrictionZone");
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
    const ct_unit_rotorUnit = require("reind/ct/ct_unit_rotorUnit");

  // End


  // Part: Tip
    const li_tips = new Seq();
    let id_tip = 1;
    while(Core.bundle.has("info.reind-info-tip-" + id_tip + ".name")) {
      li_tips.add(Core.bundle.get("info.reind-info-tip-" + id_tip + ".name"));
      id_tip++;
    };


    function getTip(id) {
      return (id > li_tips.size - 1) ? null : li_tips.get(id);
    };


    function getRandomTip() {
      return getTip(mdl_math.randInt(li_tips.size - 1));
    };
  // End


  // Part: Dialog
    function setDialog_welcome() {
      if(Vars.headless) return;

      Sounds.wave.play();
      var dial = new BaseDialog("@info.reind-info-dial-welcome.name");

      dial.cont.image(Core.atlas.find("reind-bg")).center().row();

      dial.cont.add("").row();
      dial.cont.add("").row();
      dial.cont.pane(pn => {
        pn.marginLeft(12.0).marginRight(12.0).marginTop(15.0).marginBottom(15.0);

        pn.add("@info.reind-info-dial-welcome.description").center().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).row();
      }).width(mdl_ui.getSizePair()[0]);

      dial.cont.add("").row();
      dial.cont.add("").row();
      dial.cont.add("").row();
      dial.cont.add("").row();
      dial.cont.add("[orange]" + getRandomTip() + "[white]").center().labelAlign(Align.center).wrap().width(mdl_ui.getSizePair()[0]).row();

      dial.cont.add("").row();
      dial.cont.add("").row();
      dial.cont.table(Styles.none, btns => {
        btns.button("@ok", run(() => {
          Sounds.door.play();
          dial.hide();
        })).size(200.0, 50.0).center().pad(12.0);

        var enableLdm = false;
        btns.button("@term.reind-term-ldm.name", run(() => {
          if(!enableLdm) {
            Sounds.shootSmite.play();
            enableLdm = true;
            cfg_setting.set_ldm(true);
            new UI().showInfoFade("\n\n\n\n" + Core.bundle.get("info.reind-info-ldm-enabled.name"), 2.0);
          } else {
            Sounds.place.play();
            enableLdm = false;
            cfg_setting.set_ldm(false);
            new UI().showInfoFade("\n\n\n\n" + Core.bundle.get("info.reind-info-ldm-disabled.name"), 2.0);
          };
        })).size(200.0, 50.0).center().pad(12.0).tooltip("@info.reind-info-low-detail-mode.name");

        btns.button("@term.reind-term-credits.name", db_dialog._credits()).size(200.0, 50.0).center().pad(12.0);
      });

      dial.show();
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Event
    const reindCmd = Vars.netServer.clientCommands;
    const li_commands = db_event.commands;
    var cap = li_commands.size;
    if(cap > 0) {
      for(let i = 0; i < cap; i++) {
        if(i % 3 != 0) continue;

        (function(i) {
          var str_nm = li_commands.get(i);
          var str_param = li_commands.get(i + 1);
          var str_des = Vars.headless ? "" : (Core.bundle.get("info.reind-info-cmd-" + str_nm + ".name"));
          var scr = li_commands.get(i + 2);

          reindCmd.register(str_nm, str_param, str_des, cons(arg => scr.call(arg)));
        }) (i);
      };
    };
    Events.run(MusicRegisterEvent, () => {
      setDialog_welcome();
      cfg_hidden.setup_hiddenItems();
      cfg_content.setup_content();

      // To completely hide world processors
      Blocks.worldMessage.forceDark = true;
    });
  // End
