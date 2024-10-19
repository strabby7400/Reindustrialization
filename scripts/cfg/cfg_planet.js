// Checked on 10-10-2024


Events.run(ClientLoadEvent, () => {
    const aerth = Vars.content.planet("reind-pla-ter-aerth");

    // No vanilla items shown
    aerth.hiddenItems.add(Items.erekirItems);
    aerth.hiddenItems.add(Items.serpuloItems);

    Log.info("reind:cfg_hidden.js loaded.");
});
