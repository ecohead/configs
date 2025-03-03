import { Config } from 'stylelint';

interface ConfigOptions {
    scss?: boolean;
}
declare function defineConfig(options?: ConfigOptions): Config;

export { defineConfig };
