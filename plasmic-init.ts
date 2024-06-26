import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "8yYnNwNGNrjac1tmGtKkiB",
      token: "UVQ9Hg6hBFiIzKGxRoRCmFRfjE2HT6p6yjfvPqrGBgnvrFHTgAo1A49gUO4SP8DhPY8icDykdmrhSfdDJTSDw",
    },
  ],
  host: "https://builder.yurekai.com",
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
