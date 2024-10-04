const box = document.getElementById("box");
const cross = document.getElementById("cross");
const idols = document.querySelectorAll(".idol");
const bosses = document.querySelectorAll(".boss");
const merchants = document.querySelectorAll(".merchant");
const items = document.querySelectorAll(".item");
const infotag = document.getElementById("infotag");

const idolLocations = {
  dilapidatedTemple:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Dilapidated_Temple",
  ashinaOutskirts:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Ashina_Outskirts#Outskirts_Wall",
  outskirtGate:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Outskirts_Wall_-_Gate_Path",
  outskirtStairway:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Outskirts_Wall_-_Stairway",
  underBridgeValley:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Underbridge_Valley",
  ashinaGateFort:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Ashina_Castle_Gate_Fortress",
  ashinaGate:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Ashina_Castle_Gate",
  ashinaCastle:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Ashina_Castle",
  ashinaReservoir:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Ashina_Reservoir",
  secretPassage:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Near_Secret_Passage",
  abandonedDungeonEntrance:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Abandoned_Dungeon#Abandoned_Dungeon_Entrance",
  upperTowerAntechamber:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Upper_Tower_-_Antechamber",
  upperTowerDojo:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Upper_Tower_-_Ashina_Dojo",
  castleTowerLookout:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Castle_Tower_Lookout",
  kurosRoom:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Upper_Tower_-_Kuro%27s_Room",
  bellDemonTemple:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Senpou_Temple#Temple_Grounds",
  oldGrave: "https://sekiro-shadows-die-twice.fandom.com/wiki/Old_Grave",
  greatSerpentShrine:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Great_Serpent_Shrine",
  sunkenValley:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Sunken_Valley",
  undervalleyShrine:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Under-Shrine_Valley",
  gunfort: "https://sekiro-shadows-die-twice.fandom.com/wiki/Gun_Fort",
  rivenCave: "https://sekiro-shadows-die-twice.fandom.com/wiki/Riven_Cave",
  buddhaValley:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Bodhisattva_Valley",
  poisonPool: "https://sekiro-shadows-die-twice.fandom.com/wiki/Poison_Pool",
  apeWateringHole:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Guardian_Ape%27s_Watering_Hole",
  ashinaDepths:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Ashina_Depths",
  bottomlessHole:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Bottomless_Hole",
  undergroundWaterway:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Underground_Waterway",
  hiddenForest:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Hidden_Forest",
  shugendo: "https://sekiro-shadows-die-twice.fandom.com/wiki/Shugendo",
  senpouTemple:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Senpou_Temple",
  templeGrounds:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Temple_Grounds",
  templeHall: "https://sekiro-shadows-die-twice.fandom.com/wiki/Main_Hall",
  sunkenValleyCavern:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Sunken_Valley_Cavern",
  mibuVillage: "https://sekiro-shadows-die-twice.fandom.com/wiki/Mibu_Village",
  waterMill: "https://sekiro-shadows-die-twice.fandom.com/wiki/Water_Mill",
  weddingCave:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Wedding_Cave_Door",
  mibuManor: "https://sekiro-shadows-die-twice.fandom.com/wiki/Mibu_Manor",
  flowerViewingStage:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Flower_Viewing_Stage",
  nearPotNoble:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Near_Pot_Noble",
  palaceGrounds:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Palace_Grounds",
  vermillionBridge:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Vermilion_Bridge",
  fountainheadPalace:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Fountainhead_Palace",
  greatSakura: "https://sekiro-shadows-die-twice.fandom.com/wiki/Great_Sakura",
  feedingGrounds:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Feeding_Grounds",
  sanctuary: "https://sekiro-shadows-die-twice.fandom.com/wiki/Sanctuary",
  innerSanctum:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Inner_Sanctum",
  hiddenTemple:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Hirata_Estate_-_Hidden_Temple",
  audienceChamber:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Hirata_Audience_Chamber",
  mainHall:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Hirata_Estate_-_Main_Hall",
  bambooThicket:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Bamboo_Thicket_Slope",
  estatePath: "https://sekiro-shadows-die-twice.fandom.com/wiki/Estate_Path",
  dragonspringHirata:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Dragonspring_-_Hirata_Estate",
};

const bossLocations = {
  naomoriKawarada:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/General+Naomori+Kawarada",
  tenzenYamauchi:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/General+Tenzen+Yamauchi",
  chainedOgre: "https://sekiroshadowsdietwice.wiki.fextralife.com/Chained+Ogre",
  gluttonOutskirts:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Shigekichi+of+the+Red+Guard",
  demonOfHatred:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Demon+of+Hatred",
  gyoubu: "https://sekiroshadowsdietwice.wiki.fextralife.com/Gyoubu+Oniwa",
  genichiro_isshin:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Isshin,+the+Sword+Saint",
  emma_isshin:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Isshin+Ashina+(Boss)",
  genichiro:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Genichiro+Ashina",
  owl: "https://sekiroshadowsdietwice.wiki.fextralife.com/Great+Shinobi+Owl",
  guardianApe: "https://sekiroshadowsdietwice.wiki.fextralife.com/Guardian+Ape",
  dualApes: "https://sekiroshadowsdietwice.wiki.fextralife.com/Headless+Ape",
  corruptedMonk:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Corrupted+Monk",
  truemonk: "https://sekiroshadowsdietwice.wiki.fextralife.com/Corrupted+Monk",
  divinedragon:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Divine+Dragon",
  audienceHallOwl:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Owl+(Father)",
  butterflyLady:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Lady+Butterfly",
  monkeys:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Folding+Screen+Monkeys",
  flamebull: "https://sekiroshadowsdietwice.wiki.fextralife.com/Blazing+Bull",
  sakurabull:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Sakura+Bull+of+the+Palace",
  ogrecastle: "https://sekiroshadowsdietwice.wiki.fextralife.com/Chained+Ogre",
  kuranosukeMatsumoto:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/General+Kuranosuke+Matsumoto",
  resevoirSpear:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Seven+Ashina+Spears+-+Shikibu+Toshikatsu+Yamauchi",
  shumeMasaji:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Seven+Ashina+Spears+-+Shume+Masaji+Oniwa",
  estatePathSpear:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Shinobi+Hunter+Enshin+of+Misen",
  bambooThicketShadow:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Lone+Shadow+Masanaga+the+Spear-bearer",
  mainHallGlutton:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Juzou+the+Drunkard",
  mainHallBellGlutton:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Juzou+the+Drunkard",
  hiddenForestGlutton:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Tokujiro+the+Glutton",
  ashinaEliteIsshinRoom:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Elite+Ujinari+Mizuo",
  ashinaEliteDojo:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Ashina+Elite+-+Jinsuke+Saze",
  shadowDojo:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Lone+Shadow+Vilehand",
  serpentShrineShadow:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Lone+Shadow+Masanaga+the+Spear-bearer",
  headlessako: "https://sekiroshadowsdietwice.wiki.fextralife.com/Headless",
  headlessungo: "https://sekiroshadowsdietwice.wiki.fextralife.com/Headless",
  headlessgokan: "https://sekiroshadowsdietwice.wiki.fextralife.com/Headless",
  headlessgaichiin:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Headless",
  headlessyashi: "https://sekiroshadowsdietwice.wiki.fextralife.com/Headless",
  sunkenSniper:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Snake+Eyes+Shirafuji",
  sunkenCentipede:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Long-arm+Centipede+Giraffe",
  mainHallCentipede:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Long+Arm+Centipede+Sen-Un",
  bottomLessShadow:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Lone+Shadow+Longswordsman",
  bottomLessShichimen:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Shichimen+Warrior",
  poisonPoolSniper:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Snake+Eyes+Shirahagi",
  poisonPoolShichimen:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Shichimen+Warrior",
  palaceGroundsShichimen:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Shichimen+Warrior",
  noble: "https://sekiroshadowsdietwice.wiki.fextralife.com/Mist+Noble",
  orin: "https://sekiroshadowsdietwice.wiki.fextralife.com/O'Rin+of+the+Water",
  okami: "https://sekiroshadowsdietwice.wiki.fextralife.com/Okami+Leader+Shizu",
  knight: "https://sekiroshadowsdietwice.wiki.fextralife.com/Armored+Warrior",
};

const merchantLocations = {
  dilapidatedMerchant:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Fujioka+the+Info+Broker",
  anayamaMerchant:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Anayama+the+Peddler",
  battlefieldMerchant:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Battlefield+Memorial+Mob",
  crowsBedMerchant:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Crow's+Bed+Memorial+Mob",
  abandonedDungeonMerchant:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Dungeon+Memorial+Mob",
  shugendoMerchant:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Shugendo+Memorial+Mob",
  buddhaValleyMerchant:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Toxic+Memorial+Mob",
  mibuVillageMerchant:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Exiled+Memorial+Mob",
  oldGraveMerchant:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Blackhat+Badger",
};

const itemLocations = {
  templeMerchantGourd: "https://youtu.be/UNumOeKDNDM?si=bN3HW-awZIiRbq76&t=44",
  outskirtsStairwayGourd:
    "https://youtu.be/UNumOeKDNDM?si=bN3HW-awZIiRbq76&t=20",
  ashinaGateMerchantGourd:
    "https://youtu.be/UNumOeKDNDM?si=bN3HW-awZIiRbq76&t=32",
  sunkenValleyGourd: "https://youtu.be/UNumOeKDNDM?si=4aduZ1D4JdSZawRG&t=85",
  shugendoGourd: "https://youtu.be/UNumOeKDNDM?si=--WCSFiL2zCCLKO2&t=75",
  palaceGroundsGourd: "https://youtu.be/UNumOeKDNDM?si=BgZ9rC94Fd841lgc&t=115",
  ashinaCastleAntechamberGourd:
    "https://youtu.be/UNumOeKDNDM?si=WZGDdU9gg6NYHMLq&t=68",
  mibuVillageGourd: "https://youtu.be/UNumOeKDNDM?si=_yJgrZh_0uRp0ruw&t=103",
  shuriken: "https://youtu.be/diRad_sDCLc?si=RfMvtlt420xHTR6l&t=14",
  axe: "https://youtu.be/diRad_sDCLc?si=IuNGy7_Y98Xov5Yy&t=98",
  spear: "https://youtu.be/diRad_sDCLc?si=KTNvhH7UJeSTb8N4&t=170",
  firecracker: "https://youtu.be/diRad_sDCLc?si=hzjF31G3APSgzrL0&t=37",
  finger: "https://youtu.be/diRad_sDCLc?si=ELO1K1LxdjCqppnU&t=298",
  feather: "https://youtu.be/diRad_sDCLc?si=Q6SSVVBcjXFgyvrj&t=127",
  flamethrower: "https://youtu.be/diRad_sDCLc?si=OrB8p9D2MiWLo9Vo&t=62",
  featherfan: "https://youtu.be/diRad_sDCLc?si=Hv85JqwV4dY-NMCv&t=278",
  umbrella: "https://youtu.be/diRad_sDCLc?si=_3d1m-qnKVeWgiHD&t=243",
  sabimaru: "https://youtu.be/diRad_sDCLc?si=pSb8Wfs_5NRnSPJv&t=209",
  kunai:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Phantom+Kunai+(Upgrade)",
  dragonMaskLeft:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Mask+Fragment:+Left",
  dragonMaskRight:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Mask+Fragment:+Right",
  dragonMaskCenter:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Mask+Fragment:+Dragon",
  driedViscera:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Dried_Serpent_Viscera",
  freshViscera:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Fresh_Serpent_Viscera",
  gunfortLock:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Sunken+Valley#Return%20to%20the%20Surface",
  gunfortKey:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Gun+Fort+Shrine+Key",
  potNobleLapus:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Pot+Noble+Koremori",
  demonOfHatredLapus:
    "https://sekiroshadowsdietwice.wiki.fextralife.com/Demon+of+Hatred",
  ashinaEsotericText:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Ashina_Esoteric_Text",
  mushinEsotericText:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Mushin_Esoteric_Text",
  senpouEsotericText:
    "https://sekiro-shadows-die-twice.fandom.com/wiki/Senpou_Esoteric_Text",
  audienceChamberBead: "https://youtu.be/TfuiIJTFjg8?si=fv7YCwoUhweJ0yYp&t=117",
  ashinaGateBead: "https://youtu.be/TfuiIJTFjg8?si=tgJErmTSE4e4Wxkl&t=71",
  ashinaAntechamberBead:
    "https://youtu.be/TfuiIJTFjg8?si=v1w8t31IQhgs1e6-&t=182",
  abandonedDungeonMerchantBead:
    "https://youtu.be/TfuiIJTFjg8?si=rZISothwYP0_eKbt&t=213",
  underShrineValleyBead:
    "https://youtu.be/TfuiIJTFjg8?si=PzKfVkpbZim9Vrhm&t=236",
  gunfortBead: "https://youtu.be/TfuiIJTFjg8?si=J6DYzzJ4-4akGA6E&t=287",
  buddhaStatueBead: "https://youtu.be/TfuiIJTFjg8?si=vcv-GEyj6yPojwzS&t=322",
  mibuVillageBead: "https://youtu.be/TfuiIJTFjg8?si=0B3Os7KfyUNTkFVN&t=422",
  waterMillBead: "https://youtu.be/TfuiIJTFjg8?si=6kl76W48XXHLxjOC&t=399",
  greatSakuraBead: "https://youtu.be/TfuiIJTFjg8?si=LOy2HlXABOidPSbd&t=584",
  templeGroundBead: "https://youtu.be/TfuiIJTFjg8?si=yfUIGFXet1QC6gOz&t=451",
};

idols.forEach((idol) => {
  const key = idol.className.baseVal
    .split(" ")
    .find((cls) => cls in idolLocations);

  if (key) {
    const storedOpacity = localStorage.getItem(key);
    if (storedOpacity === "1") {
      idol.classList.remove("opacity-0");
      idol.classList.add("opacity-100");
    } else {
      idol.classList.remove("opacity-100");
      idol.classList.add("opacity-0");
    }
  }
  idol.addEventListener("click", () => {
    // Add the 'opacity-100' class to make the opacity stay after the click
    if (idol.classList.contains("opacity-100")) {
      idol.classList.remove("opacity-100");
      idol.classList.add("opacity-0");
      localStorage.setItem(key, "0");
    } else {
      idol.classList.remove("opacity-0");
      idol.classList.add("opacity-100");
      localStorage.setItem(key, "1");
    }
  });
  idol.addEventListener("mouseover", () => {
    // Switch the a tag to its respective idol link
    Object.keys(idolLocations).forEach((key) => {
      if (idol.classList.contains(key)) {
        infotag.textContent = idolLocations[key];
        infotag.href = idolLocations[key];
      }
    });
  });
});

bosses.forEach((boss) => {
  const key = boss.className.baseVal
    .split(" ")
    .find((cls) => cls in bossLocations);

    if (key) {
      const storedOpacity = localStorage.getItem(key);
      if (storedOpacity === "1") {
        boss.classList.remove("opacity-0");
        boss.classList.add("opacity-100");
      } else {
        boss.classList.remove("opacity-100");
        boss.classList.add("opacity-0");
      }
    }
  boss.addEventListener("click", () => {
    // Add the 'opacity-100' class to make the opacity stay after the click
    if (boss.classList.contains("opacity-100")) {
      boss.classList.remove("opacity-100");
      boss.classList.add("opacity-0");
      localStorage.setItem(key, "0");
    } else {
      boss.classList.remove("opacity-0");
      boss.classList.add("opacity-100");
      localStorage.setItem(key, "1");
    }
  });
  boss.addEventListener("mouseover", () => {
    // Switch the a tag to its respective boss link
    Object.keys(bossLocations).forEach((key) => {
      if (boss.classList.contains(key)) {
        infotag.textContent = bossLocations[key];
        infotag.href = bossLocations[key];
      }
    });
  });
});

merchants.forEach((merchant) => {
  const key = merchant.className.baseVal
    .split(" ")
    .find((cls) => cls in merchantLocations);

    if (key) {
      const storedOpacity = localStorage.getItem(key);
      if (storedOpacity === "1") {
        merchant.classList.remove("opacity-0");
        merchant.classList.add("opacity-100");
      } else {
        merchant.classList.remove("opacity-100");
        merchant.classList.add("opacity-0");
      }
    }
  merchant.addEventListener("click", () => {
    // Add the 'opacity-100' class to make the opacity stay after the click
    if (merchant.classList.contains("opacity-100")) {
      merchant.classList.remove("opacity-100");
      merchant.classList.add("opacity-0");
      localStorage.setItem(key, "0");
    } else {
      merchant.classList.remove("opacity-0");
      merchant.classList.add("opacity-100");
      localStorage.setItem(key, "1");
    }
  });
  merchant.addEventListener("mouseover", () => {
    // Switch the a tag to its respective merchant link
    Object.keys(merchantLocations).forEach((key) => {
      if (merchant.classList.contains(key)) {
        infotag.textContent = merchantLocations[key];
        infotag.href = merchantLocations[key];
      }
    });
  });
});

items.forEach((item) => {
  const key = item.className.baseVal
    .split(" ")
    .find((cls) => cls in itemLocations);

    if (key) {
      const storedOpacity = localStorage.getItem(key);
      if (storedOpacity === "1") {
        item.classList.remove("opacity-0");
        item.classList.add("opacity-100");
      } else {
        item.classList.remove("opacity-100");
        item.classList.add("opacity-0");
      }
    }
  item.addEventListener("click", () => {
    // Add the 'opacity-100' class to make the opacity stay after the click
    if (item.classList.contains("opacity-100")) {
      item.classList.remove("opacity-100");
      item.classList.add("opacity-0");
      localStorage.setItem(key, "0");
      // console.log(`removed opacity at ${key} and set in storage`);
    } else {
      item.classList.remove("opacity-0");
      item.classList.add("opacity-100");
      localStorage.setItem(key, "1");
      // console.log(`added opacity at ${key} and set in storage`);
    }
  });
  item.addEventListener("mouseover", () => {
    // Switch the a tag to its respective item link
    Object.keys(itemLocations).forEach((key) => {
      if (item.classList.contains(key)) {
        infotag.textContent = itemLocations[key];
        infotag.href = itemLocations[key];
      }
    });
  });
});
