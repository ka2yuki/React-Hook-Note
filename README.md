- [my React Projects Repositories](https://github.com/ka2yuki?tab=repositories&q=react&type=&language=&sort=)
  
# Componentについて
### Next.js-Contentlayer のコンポーネントを調べたメモ

```js
<Component components={components} />
```
⬆️これ⬆️

```js
type MDXContentProps = {
  [props: string]: unknown
  components?: MDXComponents
}

export const test(...etc): React.FC<MDXContentProps> => {...省略}
```
`React.FC`の`<>`内の `MDXContentProps`は **Return** propsの型。

```js
export const createComponents(a, b) => {
  React.useMemo(() => test(a, b), [a, b]);
}
```
Contentlayerでは `React.useMemo()`内でコールバック？で`test()`関数を呼び出しているみたいなので  
useMemo化された？useMemo内でコールバックされた 
- React.FCコンポーネント
- propsは`<MDXContentProps>`
  
となると思われる。

[リソース：contentlayer/packages/../**.ts | github.com](https://github.com/contentlayerdev/contentlayer/blob/2f491c540e1d3667577f57fa368b150bff427aaf/packages/next-contentlayer/src/hooks/useMDXComponent.ts#L29)


# React Hooks の基礎から応用までの学習

- [useState](/readmes/useState.md)
- [useEffect](/readmes/useEffect.md)

---
📘[React.dev](https://ja.react.dev/)

