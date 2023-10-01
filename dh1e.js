import { dh1e } from "./module/config.js";
import DH1ItemSheet from "./module/sheets/DH1ItemSheet.js";

Hooks.once("init",function(){
    console.log("dh1e | Initializing Dark Heresy System");

    CONFIG.dh1e = dh1e;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("dh1e", DH1ItemSheet, { makeDefault: true});
});