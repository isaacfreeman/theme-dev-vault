/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// main.ts
__export(exports, {
  default: () => themeDesignUtilities
});
var import_obsidian = __toModule(require("obsidian"));
var themeDesignUtilities = class extends import_obsidian.Plugin {
  onload() {
    return __async(this, null, function* () {
      const freezeDelaySecs = 4;
      console.log("Theme Design Utilities Plugin loaded.");
      this.addCommand({
        id: "freeze-obsidian",
        name: "Freeze Obsidian (triggered with " + freezeDelaySecs.toString() + "s delay)",
        callback: () => {
          new import_obsidian.Notice("Will freeze Obsidian in " + freezeDelaySecs.toString() + "s (if the console is open.)", 3e3);
          setTimeout(() => {
            debugger;
          }, freezeDelaySecs * 1e3);
        }
      });
      this.addCommand({
        id: "test-notice",
        name: "Test Notice",
        callback: () => new import_obsidian.Notice("I am a test notice. \u{1F44B} \n\nI will stay here until you click me.", 0)
      });
      this.addCommand({
        id: "toggle-emulate-mobile",
        name: "Toggle mobile emulation",
        callback: () => this.app.emulateMobile(!this.app.isMobile)
      });
      this.addCommand({
        id: "cheatsheet-css-classes",
        name: "Cheatsheet: Obsidian CSS Classes",
        callback: () => window.open("https://raw.githubusercontent.com/chrisgrieser/obsidian-theme-design-utilities/master/cheatsheets/css-classes.png")
      });
      this.addCommand({
        id: "toggle-dark-light-mode",
        name: "Toggle Dark/Light Mode",
        callback: () => {
          const isDarkMode = this.app.vault.getConfig("theme") === "obsidian";
          if (isDarkMode)
            this.useLightMode();
          else
            this.useDarkMode();
        }
      });
    });
  }
  onunload() {
    return __async(this, null, function* () {
      console.log("Theme Design Utilities Plugin unloaded.");
    });
  }
  useDarkMode() {
    this.app.setTheme("obsidian");
    this.app.vault.setConfig("theme", "obsidian");
    this.app.workspace.trigger("css-change");
  }
  useLightMode() {
    this.app.setTheme("moonstone");
    this.app.vault.setConfig("theme", "moonstone");
    this.app.workspace.trigger("css-change");
  }
};
