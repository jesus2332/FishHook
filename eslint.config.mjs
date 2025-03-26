import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [

  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "**/.next/**",
      "**/node_modules/**",
      "**/dist/**",
      "**/components/ui/**/*",  // Ignora toda la carpeta ui
      "**/.*"  // Ignora dotfiles
    ]
  },
];


export default eslintConfig;
