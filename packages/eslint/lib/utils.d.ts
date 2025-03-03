import { Linter, ESLint } from 'eslint';

interface CorePlugin {
    plugin?: Record<string, ESLint.Plugin>;
    rules?: Partial<Linter.RulesRecord>;
    settings?: Record<string, unknown>;
}
type FilesToParse = Linter.Config['files'];
type IgnoredFiles = Linter.Config['ignores'];
type Processor = Linter.Config['processor'];
type Settings = Linter.Config['settings'];
type ExtendableConfig = Record<string, unknown>;

export type { CorePlugin, ExtendableConfig, FilesToParse, IgnoredFiles, Processor, Settings };
