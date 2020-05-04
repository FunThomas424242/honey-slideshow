import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'honey-slideshow',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'docs-json',
      file: 'src/components/honey-slideshow/custom-elements.json'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
