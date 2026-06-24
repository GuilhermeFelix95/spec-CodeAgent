# Release â€” checklist

Passos para publicar `@igoruehara/spec-driven` no npm. O GitHub jÃ¡ estÃ¡ publicado;
isto cobre o npm e a tag de versÃ£o.

## 0. PrÃ©-requisitos (uma vez)
- [ ] Conta npm cujo **username Ã© `igoruehara`** (o escopo `@igoruehara` precisa ser seu).
      Se for outro nome, ajuste `name` no `package.json` para `@<seu-user>/spec-driven`.

## 1. Login e verificaÃ§Ã£o
```bash
npm login            # usuÃ¡rio, senha e OTP (2FA)
npm whoami           # deve retornar: igoruehara
```

## 2. Conferir o que vai pro pacote
```bash
npm run pack:check   # = npm pack --dry-run  â†’ confere os ~42 arquivos (inclui template/.agent)
npm run test:kit # kita numa pasta de teste e valida a CLI
```

## 3. VersÃ£o (semver)
```bash
npm version patch    # 0.1.0 â†’ 0.1.1   (use minor/major conforme a mudanÃ§a)
```
> `npm version` cria o commit e a tag `vX.Y.Z` automaticamente.

## 4. Publicar
```bash
npm publish                 # access:public jÃ¡ estÃ¡ no package.json
# se o 2FA pedir cÃ³digo na hora:
npm publish --otp=123456
```
> O `prepublishOnly` roda um smoke test da CLI antes de publicar â€” se a CLI quebrar, o publish aborta.

## 5. Empurrar tag + release no GitHub
```bash
git push --follow-tags
gh release create v$(node -p "require('./package.json').version") --generate-notes
```

## 6. Confirmar
```bash
npm view @igoruehara/spec-driven version
npx @igoruehara/spec-driven --help   # ou rode num diretÃ³rio de teste
```

---

## Sem npm (alternativa)
O pacote roda direto do GitHub a qualquer momento:
```bash
npx github:igoruehara/spec-driven
```





