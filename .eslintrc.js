module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    parser: '@typescript-eslint/parser',
    overrides: [{
        // enable the rule specifically for TypeScript files
        "files": ['**/src/**/*.test.{ts, tsx}'],
        "rules": {
            "@typescript-eslint/explicit-function-return-type": 'off',
            //     [
            //     "error",
            //     {
            //         'allowExpressions': true
            //     },
            //
            // ],

            "i18next/no-literal-string": 'off'
        }
    }],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        "react-hooks",
        "johnk2280-plugin"
    ],
    rules: {
        'quotes': ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-double'],
        'indent': [2, 4],
        'react/jsx-indent': [2, 4],
        "react/jsx-indent-props": [2, 4],
        '@typescript-eslint/indent': [2, 4],
        'react/jsx-filename-extension': [2, {
            'extensions': ['.js', '.jsx', '.tsx']
        }],
        'import/no-unresolved': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'warn',
        // что-то связанное с импортом
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        "@typescript-eslint/no-unused-vars": "warn",
        'react/react-in-jsx-scope': 'off',
        "@typescript-eslint/explicit-function-return-type": ['error', {
            'allowExpressions': true
        }],
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/naming-convention': 'off',
        "i18next/no-literal-string": ['error', {
            markupOnly: true,
            ignoreAttribute: [
                'data-testid',
                'to',
                'target',
                'direction',
                'justify',
                'align',
                'gap',
                'role',
                'as',
                'border'
            ]
        }],
        "@typescript-eslint/consistent-type-assertions": "warn",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "no-undef": "off",
        "@typescript-eslint/member-delimiter-style": ["error", {
            "multiline": {
                "delimiter": "semi",
                "requireLast": true
            },
            "singleline": {
                "delimiter": "semi",
                "requireLast": false
            },
            "multilineDetection": "brackets"
        }],
        "semi": "off",
        "@typescript-eslint/semi": ["error", "always"],
        'object-curly-spacing': ['warn', 'always'],
        'react/jsx-curly-spacing': ['warn', {'when': 'always', children: true}],
        'johnk2280-plugin/path-checker': ['error', {alias: "@"}]
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true
    }
};