class Banner {
    name;
    pity = 0;

    T3Drops = [SKYRIDER_SWORD, HARBINGER_OF_DAWN, FILLET_BLADE, DARK_IRON_SWORD, COOL_STEEL, WHITE_TASSEL, HALBERD, BLACK_TASSEL, WHITE_IRON_GREATSWORD, SKYRIDER_GREATSWORD, QUARTZ, FERROUS_SHADOW, DEBATE_CLUB, BLOODTAINTED_GREATSWORD, TWIN_NEPHRITE, THRILLING_TALES_OF_DRAGON_SLAYERS, OTHERWORLDLY_STORY, MAGIC_GUIDE, EMERALD_ORB, AMBER_CATALYST, SLINGSHOT, SHARPSHOOTERS_OATH, RECURVE_BOW, RAVEN_BOW, MESSENGER, EBONY_BOW];
    T4Drops = [NINGGUANG, SUCROSE, DIONA, RAZOR, NOELLE, LISA, AMBER, KAEYA, BARBARA, XIANGLING, BENNETT, FISCHL, CHONGYUN, BEIDOU, XINGQIU, XINYAN, FAVONIUS_WARBOW, FAVONIUS_GREATSWORD, DRAGONS_BANE, THE_FLUTE, THE_ALLEY_FLASH, SACRIFICIAL_SWORD, LIONS_ROAR, FAVONIUS_SWORD, LITHIC_SPEAR, FAVONIUS_LANCE, THE_BELL, SACRIFICIAL_GREATSWORD, RAINSLASHER, LITHIC_BLADE, WINE_AND_SONG, THE_WIDSITH, SACRIFICIAL_FRAGMENTS, FAVONIUS_CODEX, EYE_OF_PERCEPTION, THE_STRINGLESS, SACRIFICIAL_BOW, RUST, ALLEY_HUNTER];
    T5Drops = [DILUC, JEAN, KEQING, QIQI, MONA, SKYWARD_PRIDE, SKYWARD_BLADE, SKYWARD_ATLAS, SKYWARD_HARP, SKYWARD_SPINE, WOLFS_GRAVESTONE, LOST_PRAYER_TO_THE_SACRED_WINDS];
    T4Focus;
    T5Focus;
    constructor(name, T5Focus, T4Focus) {
        this.name = name;
        this.T4Focus = T4Focus;
        this.T5Focus = T5Focus;
    }
}

class Item {
    title;
    img;
    quality;
    constructor(title, quality, img) {
        this.title = title;
        this.img = img;
        this.quality = quality;
    }
}

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function wish(banner, amount) {
    roll = Math.random() * 100;
    var results = [];
    for (let i = 0; i < amount; i++) {
        if(i == 0 && amount == 10) {
            if(Math.random() > 0.5 && banner.T4Focus != null) {
                results.push(getRandom(banner.T4Focus));
            } else {
                results.push(getRandom(banner.T4Drops));
            }
        } else {
            if(banner.pity >= 90) {
                if(Math.random() > 0.5 && banner.T5Focus != null) {
                    results.push(getRandom(banner.T5Focus));
                } else {
                    results.push(getRandom(banner.T5Drops));
                }
            } else if(banner.pity >= 75) {
                if(roll <= 1.2) {
                    if(Math.random() > 0.5 && banner.T5Focus != null) {
                        results.push(getRandom(banner.T5Focus));
                    } else {
                        results.push(getRandom(banner.T5Drops));
                    }
                } else if(roll <= 6.3) {
                    if(Math.random() > 0.5 && banner.T4Focus != null) {
                        results.push(getRandom(banner.T4Focus));
                    } else {
                        results.push(getRandom(banner.T4Drops));
                    }
                } else {
                    results.push(getRandom(banner.T3Drops));
                }
            } else {
                if(roll <= 0.6) {
                    if(Math.random() > 0.5 && banner.T5Focus != null) {
                        results.push(getRandom(banner.T5Focus));
                    } else {
                        results.push(getRandom(banner.T5Drops));
                    }
                } else if(roll <= 5.7) {
                    if(Math.random() > 0.5 && banner.T4Focus != null) {
                        results.push(getRandom(banner.T4Focus));
                    } else {
                        results.push(getRandom(banner.T4Drops));
                    }
                } else {
                    results.push(getRandom(banner.T3Drops));
                }
            }
        }
        banner.pity++;
    }
    var wishQuality = 3;
    for (let i = 0; i < results.length; i++) {
        const element = results[i];
        if(element.quality == 5) { 
            banner.pity = 0;
        }
        if(element.quality > wishQuality) wishQuality = element.quality;
    }
    if(banner.pity > 90) banner.pity = 0;
    return results;
}

//Event 5* Characters
VENTI = new Item("Venti", 5, "img/chars/venti.png");
GANYU = new Item("Ganyu", 5, "img/chars/ganyu.png");
ALBEDO = new Item("Albedo", 5, "img/chars/albedo.png");
ZHONGLI = new Item("Zhongli", 5, "img/chars/venti.png");
XIAO = new Item("Xiao", 5, "img/chars/xiao.png");
HU_TAO = new Item("Hu Tao", 5, "img/chars/hu_tao.png");
KLEE = new Item("Klee", 5, "img/chars/klee.png");
CHILDE = new Item("Childe", 5, "img/chars/childe.png");

//Permanent 5* Characters
MONA = new Item("Mona", 5, "img/chars/mona.png");
KEQING = new Item("Keqing", 5, "img/chars/mona.png");
DILUC = new Item("Diluc", 5, "img/chars/diluc.png");
JEAN = new Item("Jean", 5, "img/chars/jean.png");
QIQI = new Item("Qiqi", 5, "img/chars/qiqi.png");

//4* Characters
NINGGUANG = new Item("Ningguang", 4, "img/chars/ningguang.png");
SUCROSE = new Item("Sucrose", 4, "img/chars/sucrose.png");
NOELLE = new Item("Noelle", 4, "img/chars/noelle.png");
RAZOR = new Item("Razor", 4, "img/chars/razor.png");
DIONA = new Item("Diona", 4, "img/chars/diona.png");
LISA = new Item("Lisa", 4, "img/chars/lisa.png");
AMBER = new Item("Amber", 4, "img/chars/amber.png");
KAEYA = new Item("Kaeya", 4, "img/chars/kaeya.png");
BARBARA = new Item("Barbara", 4, "img/chars/barbara.png");
XIANGLING = new Item("Xiangling", 4, "img/chars/xiangling.png");
BENNETT = new Item("Bennett", 4, "img/chars/bennett.png");
FISCHL = new Item("Fischl", 4, "img/chars/fischl.png");
CHONGYUN = new Item("Chongyun", 4, "img/chars/chongyun.png");
BEIDOU = new Item("Beidou", 4, "img/chars/beidou.png");
XINGQIU = new Item("Xingqiu", 4, "img/chars/xingqiu.png");
XINYAN = new Item("Xinyan", 4, "img/chars/xinyan.png");

//Event 5* Weapons
ELEGY_FOR_THE_END = new Item("Elegy for the End", 5, "img/weps/elegy_for_the_end.png");
PRIMORDIAL_JADE_CUTTER = new Item("Primordial Jade Cutter", 5, "img/weps/primordial_jade_cutter.png");
PRIMORDIAL_JADE_SPEAR = new Item("Primordial Jade Spear", 5, "img/weps/primordial_jade_spear.png");
SUMMIT_SHAPER = new Item("Summit Shaper", 5, "img/weps/summit_shaper.png");
AQUILA_FAVONIA = new Item("Aquila Favonia", 5, "img/weps/aquila_favonia.png");
VORTEX_VANQUISHER = new Item("Vortex Vanquisher", 5, "img/weps/vortex_vanquisher.png");
STAFF_OF_HOMA = new Item("Staff of Homa", 5, "img/weps/staff_of_homa.png");
THE_UNFORGED = new Item("The Unforged", 5, "img/weps/the_unforged.png");
MEMORY_OF_DUST = new Item("Memory of Dust", 5, "img/weps/memory_of_dust.png");
AMOS_BOW = new Item("Amos' Bow", 5, "img/weps/amos_bow.png");

//Permanent 5* Weapons
SKYWARD_BLADE = new Item("Skyward Blade", 5, "img/weps/skyward_blade.png");
SKYWARD_PRIDE = new Item("Skyward Pride", 5, "img/weps/skyward_pride.png");
SKYWARD_ATLAS = new Item("Skyward Atlas", 5, "img/weps/skyward_atlas.png");
SKYWARD_HARP = new Item("Skyward Harp", 5, "img/weps/skyward_harp.png");
SKYWARD_SPINE = new Item("Skyward Spine", 5, "img/weps/skyward_spine.png");
WOLFS_GRAVESTONE = new Item("Wolf's Gravestone", 5, "img/weps/wolfs_gravestone.png");
LOST_PRAYER_TO_THE_SACRED_WINDS = new Item("Lost Prayer to the Sacred Winds", 5, "img/weps/lost_prayer_to_the_sacred_winds.png");

//Event 4* Weapons

//Permanent 4* Weapons
FAVONIUS_WARBOW = new Item("Favonius Warbow", 4, "img/weps/favonius_warbow.png");
FAVONIUS_GREATSWORD = new Item("Favonius Greatsword", 4, "img/weps/favonius_greatsword.png");
DRAGONS_BANE = new Item("Dragon's Bane", 4, "img/weps/dragons_bane.png");
THE_FLUTE = new Item("The Flute", 4, "img/weps/the_flute.png");
THE_ALLEY_FLASH = new Item("The Alley Flash", 4, "img/weps/the_alley_flash.png");
SACRIFICIAL_SWORD = new Item("Sacrificial Sword", 4, "img/weps/sacrificial_sword.png");
LIONS_ROAR = new Item("Lion's Roar", 4, "img/weps/lions_roar.png");
FAVONIUS_SWORD = new Item("Favonius Sword", 4, "img/weps/favonius_sword.png");
LITHIC_SPEAR = new Item("Lithic Spear", 4, "img/weps/lithic_spear.png");
FAVONIUS_LANCE = new Item("Favonius Lance", 4, "img/weps/favonius_lance.png");
THE_BELL = new Item("The Bell", 4, "img/weps/the_bell.png");
SACRIFICIAL_GREATSWORD = new Item("Sacrificial Greatsword", 4, "img/weps/sacrificial_greatsword.png");
RAINSLASHER = new Item("Rainslasher", 4, "img/weps/rainslasher.png");
LITHIC_BLADE = new Item("Lithic Blade", 4, "img/weps/lithic_blade.png");
WINE_AND_SONG = new Item("Wine and Song", 4, "img/weps/wine_and_song.png");
THE_WIDSITH = new Item("The Widsith", 4, "img/weps/the_widsith.png");
SACRIFICIAL_FRAGMENTS = new Item("Sacrificial Fragments", 4, "img/weps/sacrificial_fragments.png");
FAVONIUS_CODEX = new Item("Favonius Codex", 4, "img/weps/favonius_codex.png");
EYE_OF_PERCEPTION = new Item("Eye of Perception", 4, "img/weps/eye_of_perception.png");
THE_STRINGLESS = new Item("The Stringless", 4, "img/weps/the_stringless.png");
SACRIFICIAL_BOW = new Item("Sacrificial Bow", 4, "img/weps/sacrificial_bow.png");
RUST = new Item("Rust", 4, "img/weps/rust.png");
ALLEY_HUNTER = new Item("Alley Hunter", 4, "img/weps/alley_hunter.png");

//3* Weapons
SKYRIDER_SWORD = new Item("Skyrider Sword", 3, "img/weps/skyrider_sword.png");
HARBINGER_OF_DAWN = new Item("Harbinger of Dawn", 3, "img/weps/harbinger_of_dawn.png");
FILLET_BLADE = new Item("Fillet Blade", 3, "img/weps/fillet_blade.png");
DARK_IRON_SWORD = new Item("Dark Iron Sword", 3, "img/weps/dark_iron_sword.png");
COOL_STEEL = new Item("Cool Steel", 3, "img/weps/cool_steel.png");
WHITE_TASSEL = new Item("White Tassel", 3, "img/weps/white_tassel.png");
HALBERD = new Item("Halberd", 3, "img/weps/halberd.png");
BLACK_TASSEL = new Item("Black Tassel", 3, "img/weps/black_tassel.png");
WHITE_IRON_GREATSWORD = new Item("White Iron Greatsword", 3, "img/weps/white_iron_greatsword.png");
SKYRIDER_GREATSWORD = new Item("Skyrider Greatsword", 3, "img/weps/skyrider_greatsword.png");
QUARTZ = new Item("Quartz", 3, "img/weps/quartz.png");
FERROUS_SHADOW = new Item("Ferrous Shadow", 3, "img/weps/ferrous_shadow.png");
DEBATE_CLUB = new Item("Debate Club", 3, "img/weps/debate_club.png");
BLOODTAINTED_GREATSWORD = new Item("Bloodtainted Greatsword", 3, "img/weps/bloodtainted_greatsword.png");
TWIN_NEPHRITE = new Item("Twin Nephrite", 3, "img/weps/twin_nephrite.png");
THRILLING_TALES_OF_DRAGON_SLAYERS = new Item("Thrilling Tales of Dragon Slayers", 3, "img/weps/thrilling_tales_of_dragon_slayers.png");
OTHERWORLDLY_STORY = new Item("Otherwordly Story", 3, "img/weps/otherworldly_story.png");
MAGIC_GUIDE = new Item("Magic Guide", 3, "img/weps/magic_guide.png");
EMERALD_ORB = new Item("Emerald Orb", 3, "img/weps/emerald_orb.png");
AMBER_CATALYST = new Item("Amber Catalyst", 3, "img/weps/amber_catalyst.png");
SLINGSHOT = new Item("Slingshot", 3, "img/weps/slingshot.png");
SHARPSHOOTERS_OATH = new Item("Sharpshooter's Oath", 3, "img/weps/sharpshooters_oath.png");
RECURVE_BOW = new Item("Recurve Bow", 3, "img/weps/recurve_bow.png");
RAVEN_BOW = new Item("Raven Bow", 3, "img/weps/raven_bow.png");
MESSENGER = new Item("Messenger", 3, "img/weps/messenger.png");
EBONY_BOW = new Item("Ebony Bow", 3, "img/weps/ebony_bow.png");


PermaBanner = new Banner("Wanderlust Invocation", null, null);
WeaponBanner = new Banner("Epitome Invocation", [SKYWARD_BLADE, ELEGY_FOR_THE_END], []);

VentiBanner = new Banner("Ballad in Goblets", [VENTI], [RAZOR, SUCROSE, NOELLE]);
GanyuBanner = new Banner("Adrift in the Harbor", [GANYU], [NOELLE, XINGQIU, XIANGLING]);
KleeBanner = new Banner("Sparkling Steps", [KLEE], [NOELLE, XINGQIU, SUCROSE]);
ChildeBanner = new Banner("Farewell of Sneznhaya", [CHILDE], [DIONA, NINGGUANG, BEIDOU]);
KeqingBanner = new Banner("Dance of Lanterns", [KEQING], [BARBARA, NINGGUANG, BENNETT]);
ZhongliBanner = new Banner("Gentry of Hermitage", [ZHONGLI], [CHONGYUN, XINYAN, RAZOR]);
AlbedoBanner = new Banner("Secretum Secretorum", [ALBEDO], [FISCHL, BENNETT, SUCROSE])
XiaoBanner = new Banner("Invitation to Mundane Life", [XIAO], [DIONA, BEIDOU, XINYAN]);
HuTaoBanner = new Banner("Moment of Bloom", [HU_TAO], [CHONGYUN, XINGQIU, XIANGLING]);

