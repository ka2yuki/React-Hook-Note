[my React Projects Repositories](https://github.com/ka2yuki?tab=repositories&q=react&type=&language=&sort=)  

# LEARN REACT
    
[コンポーネントを純粋に保つ: チャレンジ 3/3:の答えから](https://ja.react.dev/learn/keeping-components-pure#challenges)  
`push、pop、reverse、sort` は元の配列を書き換えてしまいますが  
`slice、filter、map` は新しい配列を作成  
    
[UI をツリーとして理解する](https://ja.react.dev/learn/understanding-your-ui-as-a-tree#recap)
- ツリー構造とは、何らかの物どうしの関係性を表現する際の一般的な方法である。UI をモデル化するために多用される。...レンダーパフォーマンスの理解とデバッグに役立つ。
- 依存関係ツリーは、ペイントまでの時間を遅らせるバンドルサイズの問題をデバッグしたり、どのコードをバンドル対象とするか最適化するきっかけとなることに役立つ。


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
  - [Add React to an Existing Project](https://react.dev/learn/add-react-to-an-existing-project)
