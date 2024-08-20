

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.pug7uz90.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.BqgDjEBC.js"];
export const stylesheets = ["_app/immutable/assets/2.DmOrcBL7.css"];
export const fonts = [];
