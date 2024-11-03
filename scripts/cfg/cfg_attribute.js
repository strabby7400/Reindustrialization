// Checked on 11-2-2024


Attribute.add("attr-env-heat");
Attribute.add("attr-env-oxygen");


Events.run(ClientLoadEvent, () => {
  Log.info("reind:cfg_attribute.js loaded.");
});
