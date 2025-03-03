import type { Linter, ESLint } from 'eslint';

export interface CorePlugin {
	plugin?: Record<string, ESLint.Plugin>;
	rules?: Partial<Linter.RulesRecord>;
	settings?: Record<string, unknown>;
}

export type FilesToParse = Linter.Config['files'];
export type IgnoredFiles = Linter.Config['ignores'];
export type Processor = Linter.Config['processor'];
export type Settings = Linter.Config['settings'];

export type ExtendableConfig = Record<string, unknown>;
