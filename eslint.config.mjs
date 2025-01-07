import {getPresets} from 'eslint-config-molindo';

const presets = await getPresets('typescript', 'react', 'tailwind', 'jest');

export default {
  ...presets,
  rules: {
    ...presets.rules,
    // Adicione aqui as regras que você deseja ajustar
    // Exemplo: 'no-console': 'off' para desativar a regra de console.log
    'no-console': 'off',
    'no-unused-vars': 'warn' // Mudar para 'warn' para não exibir como erro
    // Adicione outras regras conforme necessário
  }
};
