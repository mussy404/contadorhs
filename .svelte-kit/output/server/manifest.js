export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CmzWSVdR.js","app":"_app/immutable/entry/app.IaarbvvM.js","imports":["_app/immutable/entry/start.CmzWSVdR.js","_app/immutable/chunks/entry.u1r5F-pO.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/entry/app.IaarbvvM.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.BqgDjEBC.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
