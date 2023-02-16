module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        "plugin:i18next/recommended"
    ],
    parser: '@typescript-eslint/parser',
    overrides: [
        // {
        //     // enable the rule specifically for TypeScript files
        //     "files": ["*.ts", "*.mts", "*.cts", "*.tsx"],
        //     "rules": {
        //         "@typescript-eslint/explicit-function-return-type": [
        //             "error",
        //             {
        //                 'allowExpressions': true
        //             },
        //         ]
        //     }
        // }
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next'
    ],
    rules: {
        'indent': [2, 4],
        'react/jsx-indent': [2, 4],
        "react/jsx-indent-props": [2, 4],
        '@typescript-eslint/indent': [2, 4],
        'react/jsx-filename-extension': [2, {'extensions': ['.js', '.jsx', '.tsx']}],
        'import/no-unresolved': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'warn',  // что-то связанное с импортом
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/react-in-jsx-scope': 'off',
        "@typescript-eslint/explicit-function-return-type": [
            'error',
            {
                'allowExpressions': true
            },
        ],
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'warn',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/naming-convention': 'off',
        "i18next/no-literal-string": ['error', {markupOnly: true}]
    },
    globals: {
        '__IS_DEV__': true
    }
}
