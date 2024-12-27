require('esbuild').build({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    outfile: 'dist/bundle.js',
    loader: { '.tsx': 'tsx' },
  }).catch(() => process.exit(1))