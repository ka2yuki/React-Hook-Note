# Componentについて
```js
<Component components={components} />
```
Next.js-Contentlayer の上記コンポーネントを調べたメモ

```js
type MDXContentProps = {
  [props: string]: unknown
  components?: MDXComponents
}

export const test(): React.FC<MDXContentProps> => {...省略}
```
`<>`内の `MDXContentProps`は **Return** props**の**型。

```js
export const createComponents(a, b) => {
  React.useMemo(() => test(a, b), [a, b]);
}
```
Contentlayerでは `React.useMemo()`内でコールバック？で`test()`関数を呼び出しているみたいなので  
useMemo化された？useMemo内でコールバックされた 
- React.FCコンポーネントで
- propsは`<MDXContentProps>`となる  
  
と思われる。

[リソース：contentlayer/packages/../**.ts | github.com](https://github.com/contentlayerdev/contentlayer/blob/2f491c540e1d3667577f57fa368b150bff427aaf/packages/next-contentlayer/src/hooks/useMDXComponent.ts#L29)


# React Hooks の基礎から応用までの学習

- [useState](/readmes/useState.md)
- [useEffect](/readmes/useEffect.md)

---
📖[React リファレンス概要](https://ja.react.dev/reference/react)
