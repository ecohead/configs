eslint +args:
	pnpm -F "@aureldvx/eslint" {{args}}

prettier +args:
	pnpm -F "@aureldvx/prettier" {{args}}

stylelint +args:
	pnpm -F "@aureldvx/stylelint" {{args}}

tsconfig +args:
	pnpm -F "@aureldvx/tsconfig" {{args}}

vite +args:
	pnpm -F "@apps/vite" {{args}}

vite-react +args:
	pnpm -F "@apps/vite-react" {{args}}

vite-react-ts +args:
	pnpm -F "@apps/vite-react-ts" {{args}}

astro +args:
	pnpm -F "@apps/astro" {{args}}

bump pkg version:
	cd packages/{{pkg}} && npm version {{version}}
	git add packages/{{pkg}}/package.json
	git commit -m "chore({{pkg}}): bump version to {{version}}"

publish pkg:
	cd packages/{{pkg}} && NPM_TOKEN=$NPM_TOKEN pnpm publish --access public

purge:
	rm -rf ./node_modules \
		apps/astro/node_modules \
		apps/vite/node_modules \
		apps/vite-react/node_modules \
		apps/vite-react-ts/node_modules \
		packages/eslint/node_modules \
		packages/prettier/node_modules \
		packages/stylelint/node_modules \
		packages/tsconfig/node_modules;
	pnpm install;
