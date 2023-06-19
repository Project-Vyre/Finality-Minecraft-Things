// priority: 0

console.info('Registering Finality items...')

// thank ChiefArug
const MODID = modid => (one, two, three, four, five, six) => { // this first arrow defies the outside function. that returns the inside function, which is what the second arrow is
    let out = modid + ':' // this is the string that will be used to construct the id. start it with the modid and a colon
    let args = [one, two, three, four, five, six]; // this is a list of the input parameters for ease of looping
    for (let arg in args) { // loop through each parameter
      let current = args[arg] // current parameter in the loop
      let next = arg == args.length - 1 ? undefined : args[arg + 1] // the next one, or if we are at the end, undefined
      if (current != undefined) out += current // if the current arg is defined as something, add it to the id
      if (next != undefined) out += '_' // if the next arg is undefined, then add an underscore to seperate them
    }
    return out // return the completed itd
}
// components
// modid shortcuts 1
const FIN = MODID('finality')
const CR = MODID('create') // CR gets set to the function that MODID returns, so (one,two,three,four,five,six) => { ... }
// state components 2
const INC = 'incomplete'
const DRMT = 'dormant'
const AWK = 'awakened'
// materials 3
const CONC = 'concrete'
// minecraft materials
const COBBL = 'cobblestone'
const CRSDT = 'coarse_dirt'
// nature materials
const SND = 'sand'
const BLU_ICE = 'blue_ice'
// create materials
const ANDT = 'andesite'
const ZI = 'zinc'
const CU = 'copper'
const BRSS = 'brass'
const RQRTZ = 'rose_quartz'
const F_GLSS = 'framed_glass'
const PRECISION = 'precision_mechanism'
const STURDY = 'sturdy_sheet'
// color 4
const BLCK = 'black'
const GRAY = 'gray'
const LGRY = 'light_gray'
const WHTE = 'white'
const BRWN = 'brown'
const PINK = 'pink'
const CYAN = 'cyan'
const BLUE = 'blue'
const LIME = 'lime'
const GREN = 'green'
const YLLW = 'yellow'
const PPRL = 'purple'
const MGNT = 'magenta'
const ORNG = 'orange'
const RED = 'red'
const LBLU = 'light_blue'
// item type 4

// console.log(CR(INC, YLLW, 'flower'))
// outputs create:incomplete_yellow_flower
// supports up to 6 args
// thank ChiefArug

// concrete
// let concr_col = ['black', 'gray', 'light_gray', 'white', 'brown', 'pink', 'cyan', 'blue', 'lime', 'green', 'yellow', 'purple', 'magenta', 'orange', 'red', 'light_blue']
// nature
//let nature = ['blue_ice', 'coarse_dirt', 'sand']
onEvent('item.registry', event => { // Register new items here event.create('example_item').displayName('Example Item')
	// minecraft core forgot what was supposed to be here
	// singularity related
	event.create('finality:dormant_singularity_core').texture('finality:item/dormant_singularity_core').maxStackSize(16)
	/*
	INCOMPLETE SINGULARITY CORES
	*/
	event.create(FIN(INC, BLU_ICE, 'singularity_core'))
	/*
	INCOMPLETE SINGULARITIES SECTION
	for use for making a singularity. dormant core to incomplete core to singularity
	follow format .displayName().texture().maxStackSize(1)
	*/
	// incomplete minecraft singularity cores
	event.create(FIN(INC, BLU_ICE, 'singularity')).texture('finality:item/incomplete_nature/incomplete_blue_ice').maxStackSize(1)
	event.create(FIN(INC, CRSDT, 'singularity')).texture('finality:item/incomplete_nature/incomplete_coarse_dirt').maxStackSize(1)
	event.create(FIN(INC, SND, 'singularity')).texture('finality:item/incomplete_nature/incomplete_sand').maxStackSize(1)
	event.create(FIN(INC, COBBL, 'singularity')).texture('finality:item/incomplete_nature/incomplete_cobblestone').maxStackSize(1)
	// incomplete create singularity cores
	event.create(FIN(INC, ANDT, 'singularity')).texture('finality:item/incomplete_andesite_core').maxStackSize(1)
	event.create(FIN(INC, CU, 'singularity')).texture('finality:item/incomplete_copper_core').maxStackSize(1)
	event.create(FIN(INC, ZI, 'singularity')).texture('finality:item/incomplete_zinc_core').maxStackSize(1)
	event.create(FIN(INC, BRSS, 'singularity')).texture('finality:item/incomplete_brass_core').maxStackSize(1)
	event.create(FIN(INC, RQRTZ, 'singularity')).texture('finality:item/incomplete_roseq_core').maxStackSize(1)
	event.create(FIN(INC, F_GLSS, 'singularity')).texture('finality:item/incomplete_framed_glass').maxStackSize(1)
	event.create(FIN(INC, PRECISION, 'singularity')).texture().maxStackSize(1)
	event.create(FIN(INC, STURDY, 'singularity')).texture().maxStackSize(1)
	// incomplete alloy singularity cores
	event.create(FIN('incomplete_steel_singularity')).texture('finality:item/incomplete_steel_core').maxStackSize(1)
	event.create(FIN('incomplete_bronze_singularity')).texture('finality:item/incomplete_bronze_core').maxStackSize(1)
	// incomplete concrete singularity cores
	event.create(FIN(INC, CONC, BLCK, 'singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_black').maxStackSize(1)
	event.create(FIN(INC, CONC, WHTE, 'singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_white').maxStackSize(1)
	event.create(FIN(INC, CONC, PINK, 'singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_pink').maxStackSize(1)
	event.create(FIN(INC, CONC, ORNG, 'singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_orange').maxStackSize(1)
	event.create(FIN(INC, CONC, RED, 'singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_red').maxStackSize(1)
	event.create(FIN(INC, CONC, GRAY, 'singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_gray').maxStackSize(1)
	event.create(FIN(INC, CONC, BRWN, 'singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_brown').maxStackSize(1)
	event.create(FIN(INC, CONC, CYAN, 'singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_cyan').maxStackSize(1)
	event.create(FIN(INC, CONC, GREN, 'singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_green').maxStackSize(1)
	event.create(FIN(INC, CONC, LGRY, 'singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_light_gray').maxStackSize(1)
	event.create(FIN(INC, CONC, LBLU, 'singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_light_blue').maxStackSize(1)
	event.create(FIN(INC, CONC, LIME, 'singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_lime').maxStackSize(1)
	event.create(FIN(INC, CONC, YLLW, 'singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_yellow').maxStackSize(1)
	event.create(FIN(INC, CONC, BLUE, 'singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_blue').maxStackSize(1)
	event.create(FIN(INC, CONC, MGNT, 'singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_magenta').maxStackSize(1)
	event.create(FIN(INC, CONC, PPRL, 'singularity')).texture('finality:item/incomplete_concrete/incomplete_concrete_purple').maxStackSize(1)
	/*
	ACTIVATED SINGULARITY CORES
	follow format .displayName().texture().maxStackSize(1)
	*/
	// activated singularity cores
	// work in progressevent.create('finality:andesite_singularity_core').displayName('Andesite Singularity Core').texture('finality:item/andesite_core').maxStackSize(8)
	// tools
	event.create('finality:final_pickaxe', 'pickaxe').tier('final_items').displayName('Particula Eversorem').texture('finality:item/final_pickaxe').maxStackSize(1).group('tools')
	event.create('finality:final_axe', 'axe').tier('final_items').displayName('Natura Exitium').texture('finality:item/final_axe').maxStackSize(1).group('tools')
	event.create('finality:final_shovel', 'shovel').tier('final_items').displayName('Terra Confractus').texture('finality:item/final_shovel').maxStackSize(1).group('tools')
	event.create('finality:final_hoe', 'hoe').tier('final_items').displayName('Agricola Manus').texture('finality:item/final_hoe').maxStackSize(1).group('tools')
	// weapons
	event.create('finality:final_sword', 'sword').tier('final_items').displayName('Corevis Ultimatum').texture('finality:item/final_sword').maxStackSize(1).group('combat')
	// armor
	event.create('finality:final_helmet', 'helmet').tier('final_armor').displayName('Conscientia Oculi').texture('finality:item/final_helmet').maxStackSize(1).group('combat')
	event.create('finality:final_chestplate', 'chestplate').tier('final_armor').displayName('Vitale Cordis').texture('finality:item/final_chestplate').maxStackSize(1).group('combat')
	event.create('finality:final_leggings', 'leggings').tier('final_armor').displayName('Universum Motus').texture('finality:item/final_leggings').maxStackSize(1).group('combat')
	event.create('finality:final_boots', 'boots').tier('final_armor').displayName('Gravitas Anchoram').texture('finality:item/final_boots').maxStackSize(1).group('combat')
})

onEvent('block.registry', event => { // Register new blocks here event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
	// incomplete thermal machines
	event.create('finality:incomplete_thermal_energy_cell').material('metal').hardness(50.0).displayName('Incomplete Thermal Energy Cell Frame').textureAll('finality:block/incomplete_energy_cell').requiresTool(true)
	event.create('finality:incomplete_machine_furnace').material('metal').hardness(50.0).displayName('Incomplete Redstone Furnace').texture('front', 'texturepath').texture('side', 'texturepath')
	/*
	event.create('finality:incomplete_').material('metal').hardness(50.0).displayName('Incomplete ').texture('front', 'texturepath').texture('side', 'texturepath')
	event.create('finality:incomplete_').material('metal').hardness(50.0).displayName('Incomplete ').texture('front', 'texturepath').texture('side', 'texturepath')
	event.create('finality:incomplete_').material('metal').hardness(50.0).displayName('Incomplete ').texture('front', 'texturepath').texture('side', 'texturepath')
	event.create('finality:incomplete_').material('metal').hardness(50.0).displayName('Incomplete ').texture('front', 'texturepath').texture('side', 'texturepath')
	event.create('finality:incomplete_').material('metal').hardness(50.0).displayName('Incomplete ').texture('front', 'texturepath').texture('side', 'texturepath')
	event.create('finality:incomplete_').material('metal').hardness(50.0).displayName('Incomplete ').texture('front', 'texturepath').texture('side', 'texturepath')
	event.create('finality:incomplete_').material('metal').hardness(50.0).displayName('Incomplete ').texture('front', 'texturepath').texture('side', 'texturepath')
	event.create('finality:incomplete_').material('metal').hardness(50.0).displayName('Incomplete ').texture('front', 'texturepath').texture('side', 'texturepath')
	*/
})
onEvent('fluid.registry', event => {
	event.create('finality:condensed_universal_entropy').thickTexture(0x7800FF).noBucket() // work in progress .stillTexture('finality:block/still_entropy').flowingTexture('finality:block/flowing_entropy')
})

// tiers
onEvent('item.registry.tool_tiers', event => {
	event.add('final_items', tier => {
		tier.uses = -1 
		tier.speed = 255.0
		tier.attackDamageBonus = 65.0
		tier.level = 5
		tier.enchantmentValue = 30
	})
})
onEvent('item.registry.armor_tiers', event => {
	event.add('final_armor', tier => {
	  	tier.durabilityMultiplier = -1 // Each slot will be multiplied with [13, 15, 16, 11]
	  	tier.slotProtections = [8, 24, 16, 8] // Slot indicies are [FEET, LEGS, BODY, HEAD]
	  	tier.enchantmentValue = 30
	  	tier.equipSound = 'minecraft:item.armor.equip_netherite'
	  	tier.toughness = 5.0 // diamond has 2.0, netherite 3.0
	  	tier.knockbackResistance = 3.0
	})
})