import mods.create.MechanicalCrafterManager;
<recipetype:create:mechanical_crafting>.addJsonRecipe("gunpowder_singularity", {
  "type": "create:mechanical_crafting",
  "pattern": [
    " LLLLLLL ",
    "LLLAAALLL",
    "LLAAAAALL",
    "LAAAAAAAL",
    "LAAAAAAAL",
    "LAAAAAAAL",
    "LLAAAAALL",
    "LLLAAALLL",
    " LLLLLLL "
  ],
  "key": {
    "A": {
      "item": "minecraft:gunpowder"
    },
    "L": {
      "item": "minecraft:crying_obsidian"
    },
  },
  "result": {
    "type": "forge:nbt",
    "item": "extendedcrafting:singularity",
    "nbt": {
      "Id": "extendedcrafting:gunpowder"
   }, "count": 1
  },
  "acceptMirrored": false
}
);