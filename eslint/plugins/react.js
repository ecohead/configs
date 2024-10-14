// +imports
import eslintReact from 'eslint-plugin-react';
// -imports

// +config
/** @see https://github.com/jsx-eslint/eslint-plugin-react */
const react = [
	eslintReact.configs.flat.recommended,
	eslintReact.configs.flat['jsx-runtime'],
];
// -config
