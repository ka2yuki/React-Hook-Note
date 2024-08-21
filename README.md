[my React Projects Repositories](https://github.com/ka2yuki?tab=repositories&q=react&type=&language=&sort=)  

# LEARN REACT
## [UI の記述](https://ja.react.dev/learn/describing-the-ui)  
各セクションの概要  
- React は、ユーザインターフェース（UI）を表示するための JavaScript ライブラリ
- HTMLをJSXに[コンバートしてくれるサイト](https://transform.tools/html-to-jsx)がある
- 波括弧で JavaScript を含める
- リスト各要素で`key`の必要性：> 通常データベースの ID を key として使うことになるでしょう。key は、リストが変更されても各アイテムのリスト内の位置を React が追跡できるようにするために必要です。| リストのレンダー
- React レンダーツリー: データの流れやレンダーパフォーマンスを理解する際に有用です。| UI をツリーとして理解する
![img](https://ja.react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fgeneric_render_tree.png&w=1080&q=75)
- モジュール依存関係ツリー: ビルドツールでよく使用されます。バンドルサイズが大きいと、React アプリのユーザ体験は悪化します。モジュール依存関係ツリーを理解することは、そのような問題をデバッグするのに役立ちます。| UI をツリーとして理解する
![img](https://ja.react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fgeneric_dependency_tree.png&w=1080&q=75)

## インタラクティビティの追加  
各セクションの概要  
[state：コンポーネントのメモリ](https://ja.react.dev/learn/adding-interactivity#state-a-components-memory)  
コードサンプル
- 次へ
- 表示/非表示
  
[レンダーとコミット](https://ja.react.dev/learn/adding-interactivity#render-and-commit)  
コンポーネントは 画面上に表示される前に React によってレンダーされる必要があります。  
- レンダーのトリガ（お客様の注文を厨房に伝える）
- コンポーネントのレンダー（厨房で注文の品を料理する）
- DOM へのコミット（テーブルに注文の品を提供する）




---

[コンポーネントを純粋に保つ: チャレンジ 3/3:の答えから](https://ja.react.dev/learn/keeping-components-pure#challenges)  
- 元の配列を書き換えてしまう：`[].``push、pop、reverse、sort` 
- 元の配列を書き換えず新しい配列を作成：`slice、filter、map` 
    
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
