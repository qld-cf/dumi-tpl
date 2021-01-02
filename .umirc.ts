import { defineConfig } from 'dumi';
import path from 'path';
const resolvePath = dir => path.join(__dirname, dir);

export default defineConfig({
  title: 'my-lib',
  theme: {
    '@primary-color': '#A14EFF',
    '@link-color': '#A14EFF',
    '@font-family': '"futura-pt", sans-serif',
    '@line-height-base': '1.3',
    '@border-radius-base': '6px',
  },
  define: {
    REACT_APP_MY_ENV: process.env.REACT_APP_MY_ENV,
  },
  alias: {
    '@components': resolvePath('src/components'),
    '@utils': resolvePath('src/utils'),
    '@image': resolvePath('src/assets/image'),
    '@config': resolvePath('src/config'),
    '@typings': resolvePath('typings'),
    '@pages': resolvePath('src/pages'),
    '@hooks': resolvePath('src/hooks'),
  },
});
