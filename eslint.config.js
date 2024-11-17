import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';

export default ts.config(
    js.configs.recommended,
    ...ts.configs.recommendedTypeChecked,
    ...ts.configs.stylisticTypeChecked,
    ...svelte.configs["flat/recommended"],
    {
        languageOptions: {
	  globals: {
	    ...globals.browser,
	    ...globals.node
	  }
        }
    },
    {
        files: ["**/*.svelte"],

        languageOptions: {
	  parserOptions: {
	    parser: ts.parser,
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
                extraFileExtensions: [".svelte"],
	  }
        },
        rules: {
            "svelte/indent": ["error", {
                "indent": 4,
            }]
        }
    },
    {
        files: ["**/*.ts", "*.ts", "**/*.js", "*.js"],
        languageOptions: {
            parser: ts.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
                extraFileExtensions: [".svelte"],
            },
        },
        rules: {
            "indent": ["error", 4],
        }
    },
    {
        rules: {
            "semi": ["error", "always"],
        }
    },
    {
        ignores: ["build/", ".svelte-kit/", "dist/"]
    },
    {
        files: ["**/*.js", "**/*.ts"],
        ignores: ["**/*/src/**/*"],
        ...ts.configs.disableTypeChecked,
    }
);
