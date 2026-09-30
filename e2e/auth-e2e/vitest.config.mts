import { defineConfig } from 'vitest/config';

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/e2e/auth-e2e',
  test: {
    name: 'auth-e2e',
    watch: false,
    globals: true,
    environment: 'node',
    include: ['src/**/*.spec.ts'],
    globalSetup: ['src/support/global-setup.ts'],
    setupFiles: ['src/support/test-setup.ts'],
    passWithNoTests: true,
    reporters: ['default'],
  },
}));
