

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CAuZsld0.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.BqgDjEBC.js","_app/immutable/chunks/entry.u1r5F-pO.js"];
export const stylesheets = [];
export const fonts = [];
