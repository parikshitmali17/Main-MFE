


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({

  plugins: [
    react(),
    federation({
      remotes: {
        music: "https://music-mfe.vercel.app/assets/remoteEntry.js",
        // add 5174/assets/remoteEntry.js
       // music@http://localhost:5174/assets/remoteEntry.js'
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^19.1.0",
          strictVersion: true,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: "^19.1.0",
          strictVersion: true,
        },
      },
       dev: true, // ✅ required for dynamic remote loading
    }),
  ],
  build: { target: 'esnext' ,
     rollupOptions: {
    output: {
      format: 'esm', // ✅ important: ES Module format
    },
  },
  },
  server: {
    port: 5173, // ✅ ensure host and remote run separately
  },
});
