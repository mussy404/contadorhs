import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
const css$1 = {
  code: '.container.svelte-hl8fec{display:flex;flex-direction:column;align-items:center;text-align:center;background-color:var(--thirdColor);margin:1rem;padding:1rem;border-radius:2rem;border:solid 5px var(--accentColor2);box-shadow:var(--shadowsolid)}.title.svelte-hl8fec{margin:0;font:var(--h3);font-family:"Kanit"}.hs.svelte-hl8fec{margin:1rem 3rem;font:var(--h1);text-shadow:var(--secondaryColor) 2px 2px}.date.svelte-hl8fec{margin:0;font:var(--subtext);text-decoration:underline var(--primaryColor)}',
  map: '{"version":3,"file":"BoxHS.svelte","sources":["BoxHS.svelte"],"sourcesContent":["<script>\\r\\n    export let namePropHTML = \\"HS sem nome\\";\\r\\n    export let dateProp = \\"2024-07-15\\";\\r\\n    // Gambiarra pra não dar merda entre região do server e as datas. \\r\\n    let now_date = new Date();\\r\\n    let now_utc = Date.UTC(now_date.getUTCFullYear(), now_date.getUTCMonth(),\\r\\n        now_date.getUTCDate(), now_date.getUTCHours(),\\r\\n        now_date.getUTCMinutes(), now_date.getUTCSeconds());\\r\\n\\r\\n    let event_date = new Date(dateProp);\\r\\n    let event_utc = Date.UTC(event_date.getUTCFullYear(), event_date.getUTCMonth(),\\r\\n        event_date.getUTCDate(), event_date.getUTCHours(),\\r\\n        event_date.getUTCMinutes(), event_date.getUTCSeconds());\\r\\n    // Cálculo do HS\\r\\n    let hs = 0;\\r\\n    try {\\r\\n        hs = event_utc - now_utc;\\r\\n        hs = Math.ceil(hs / (1000 * 60 * 60 * 24)) // milisegundos pra dias\\r\\n        hs = hs > 0 ? hs : 0;\\r\\n    } catch (e) {\\r\\n        console.log(\\"=CavokHS= ERRO em Date.parse dentro de hsbox. Verifique os parâmetros ou a função.\\");\\r\\n        console.error(e);\\r\\n        hs = 0;\\r\\n    }\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"container\\">\\r\\n    <p class=\\"title\\">{@html namePropHTML}</p>\\r\\n    <p class=\\"hs\\">HS-{hs.toString()}</p>\\r\\n    <p class=\\"date\\">Data estimada: {dateProp.split(\\"-\\")[2]}/{dateProp.split(\\"-\\")[1]}/{dateProp.split(\\"-\\")[0]}</p>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n    .container {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        align-items: center;\\r\\n        text-align: center;\\r\\n        background-color: var(--thirdColor);\\r\\n        margin: 1rem;\\r\\n        padding: 1rem;\\r\\n        border-radius: 2rem;\\r\\n        border: solid 5px var(--accentColor2);\\r\\n        box-shadow: var(--shadowsolid);\\r\\n    }\\r\\n    .title {\\r\\n        margin: 0;\\r\\n        font: var(--h3);\\r\\n        font-family: \\"Kanit\\";\\r\\n    }\\r\\n    .hs {\\r\\n        margin: 1rem 3rem;\\r\\n        font: var(--h1);\\r\\n        text-shadow: var(--secondaryColor) 2px 2px;\\r\\n    }\\r\\n    .date {\\r\\n        margin: 0;\\r\\n        font: var(--subtext);\\r\\n        text-decoration: underline var(--primaryColor);\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAiCI,wBAAW,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MAAM,CAClB,gBAAgB,CAAE,IAAI,YAAY,CAAC,CACnC,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,KAAK,CAAC,GAAG,CAAC,IAAI,cAAc,CAAC,CACrC,UAAU,CAAE,IAAI,aAAa,CACjC,CACA,oBAAO,CACH,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,IAAI,IAAI,CAAC,CACf,WAAW,CAAE,OACjB,CACA,iBAAI,CACA,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,IAAI,CAAE,IAAI,IAAI,CAAC,CACf,WAAW,CAAE,IAAI,gBAAgB,CAAC,CAAC,GAAG,CAAC,GAC3C,CACA,mBAAM,CACF,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,IAAI,SAAS,CAAC,CACpB,eAAe,CAAE,SAAS,CAAC,IAAI,cAAc,CACjD"}'
};
const BoxHS = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { namePropHTML = "HS sem nome" } = $$props;
  let { dateProp = "2024-07-15" } = $$props;
  let now_date = /* @__PURE__ */ new Date();
  let now_utc = Date.UTC(now_date.getUTCFullYear(), now_date.getUTCMonth(), now_date.getUTCDate(), now_date.getUTCHours(), now_date.getUTCMinutes(), now_date.getUTCSeconds());
  let event_date = new Date(dateProp);
  let event_utc = Date.UTC(event_date.getUTCFullYear(), event_date.getUTCMonth(), event_date.getUTCDate(), event_date.getUTCHours(), event_date.getUTCMinutes(), event_date.getUTCSeconds());
  let hs = 0;
  try {
    hs = event_utc - now_utc;
    hs = Math.ceil(hs / (1e3 * 60 * 60 * 24));
    hs = hs > 0 ? hs : 0;
  } catch (e) {
    console.log("=CavokHS= ERRO em Date.parse dentro de hsbox. Verifique os parâmetros ou a função.");
    console.error(e);
    hs = 0;
  }
  if ($$props.namePropHTML === void 0 && $$bindings.namePropHTML && namePropHTML !== void 0) $$bindings.namePropHTML(namePropHTML);
  if ($$props.dateProp === void 0 && $$bindings.dateProp && dateProp !== void 0) $$bindings.dateProp(dateProp);
  $$result.css.add(css$1);
  return `<div class="container svelte-hl8fec"><p class="title svelte-hl8fec"><!-- HTML_TAG_START -->${namePropHTML}<!-- HTML_TAG_END --></p> <p class="hs svelte-hl8fec">HS-${escape(hs.toString())}</p> <p class="date svelte-hl8fec">Data estimada: ${escape(dateProp.split("-")[2])}/${escape(dateProp.split("-")[1])}/${escape(dateProp.split("-")[0])}</p> </div>`;
});
const css = {
  code: "section.svelte-14j203x{display:flex;flex-direction:column;margin:1rem auto}h1.svelte-14j203x{text-align:center;border-top:solid 5px var(--primaryColor);border-bottom:solid 5px var(--primaryColor);font:var(--h2);line-height:4rem;margin:1rem auto}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import BoxHS from \\"$lib/components/BoxHS.svelte\\";\\n<\/script>\\n\\n<section>\\n    <h1>Eventos Importantes</h1>\\n    <BoxHS namePropHTML={\\"Formatura EPCAR\\"} dateProp={\\"2024-12-13\\"} />\\n    \\n    <BoxHS namePropHTML={\\"Espadim\\"} dateProp={\\"2025-06-11\\"} />\\n    \\n    <BoxHS namePropHTML={\\"Aspirantado\\"} dateProp={\\"2028-12-08\\"} />\\n</section>\\n\\n<style>\\n    section {\\n        display: flex;\\n        flex-direction: column;\\n        margin: 1rem auto;\\n    }\\n    h1 {\\n        text-align: center;\\n        border-top: solid 5px var(--primaryColor);\\n        border-bottom: solid 5px var(--primaryColor);\\n        font: var(--h2);\\n        line-height: 4rem;\\n        margin: 1rem auto;\\n    }\\n</style>"],"names":[],"mappings":"AAcI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,IAAI,CAAC,IACjB,CACA,iBAAG,CACC,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,IAAI,cAAc,CAAC,CACzC,aAAa,CAAE,KAAK,CAAC,GAAG,CAAC,IAAI,cAAc,CAAC,CAC5C,IAAI,CAAE,IAAI,IAAI,CAAC,CACf,WAAW,CAAE,IAAI,CACjB,MAAM,CAAE,IAAI,CAAC,IACjB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="svelte-14j203x"><h1 class="svelte-14j203x" data-svelte-h="svelte-512i66">Eventos Importantes</h1> ${validate_component(BoxHS, "BoxHS").$$render(
    $$result,
    {
      namePropHTML: "Formatura EPCAR",
      dateProp: "2024-12-13"
    },
    {},
    {}
  )} ${validate_component(BoxHS, "BoxHS").$$render(
    $$result,
    {
      namePropHTML: "Espadim",
      dateProp: "2025-06-11"
    },
    {},
    {}
  )} ${validate_component(BoxHS, "BoxHS").$$render(
    $$result,
    {
      namePropHTML: "Aspirantado",
      dateProp: "2028-12-08"
    },
    {},
    {}
  )} </section>`;
});
export {
  Page as default
};
