import { atom } from 'jotai'


export const creatureFieldAtom = atom({
    creatureName: "",
    name: "",
    nameMultiple: "",
    nameDescription: "",
    gait: "",
    description: "",
    intelligent: null,
    canSpeak: null,
    canOpenDoors: null,
    canLearn: null,
    benign: null,
    evil: null,
    good: null,
    moods: null,
    trances: null,
    utterances: null,
    trapAvoid: null,
    bonecarn: null,
    carnivore: null,
    eats: true,
    drinks: true,
    fleequick: null,
    lockpicker: null,
    nocturnal: null,
    dinural: null,
    slowLearn: null,
    perfString: "",
    standard: ["STANDARD_MATERIALS", "STANDARD_TISSUES", "VERTEBRATE_TISSUE_LAYERS:SKIN:FAT:MUSCLE:BONE:CARTILAGE", "HEAD_HAIR_TISSUE_LAYERS"],
    isStandard: true,
    skin: null,
    scales: null,
    chitan: null,
    standardBody: "BODY:HUMANOID_NECK:2EYES:2EARS:NOSE:2LUNGS:HEART:GUTS:ORGANS:HUMANOID_JOINTS:THROAT:NECK:SPINE:BRAIN:SKULL:5FINGERS:5TOES:MOUTH:TONGUE:FACIAL_FEATURES:TEETH:RIBCAGE",
    isStandardBody: true,

})