//actual properties will be different based on balancing in future
//LIST_OF_PROPERTIES: 
export const LIST = ["hardness", "flexibility", "toughness"];
//LIST_OF_STANDARDIZED_PROPERTIES: 
export const LIST_STANDARDIZED = ["type", "element", "weight"]
//materials template: export const MATERIAL = [{properties of object}, [craftable: true/false]];
export const IRON = [{weight:"heavy", element:"metal", hardness: 4, flexibility: 1, type:"metal"}, [false]];
export const BAMBOO = [{weight: "light", element:"wood", flexibility: 6, toughness: 4, type:"wood"},[false]];
