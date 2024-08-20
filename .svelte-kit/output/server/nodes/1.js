

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DGX5O5RF.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.BqgDjEBC.js","_app/immutable/chunks/entry.foecWHxC.js"];
export const stylesheets = [];
export const fonts = [];
