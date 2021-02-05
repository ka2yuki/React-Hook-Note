- [🚪🔙： README](/README.md)
---
- [useState](#usestate)
  - [ファンクショナル コンポーネント の メリット](#ファンクショナル-コンポーネント-の-メリット)
- [ループ内 使用方法。](#ループ内-使用方法)
- [初期値で オブジェクト を 扱う。](#初期値で-オブジェクト-を-扱う)


# useState
- 引数A：1
- 戻り値：引数A、`Dispatch`

```ts
function useState<S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>];
```
```ts
const [state, setState] = useState(initialState);
```

## ファンクショナル コンポーネント の メリット

- `this` は 関数コンポーネント に 存在しない ので、**簡潔** に書ける。

# ループ内 使用方法。

1. `[state, setState]` の `setState`(内部は`Dispatch`) で使用。
2. `setState( (prevState) => {..} )`
   1. 無名関数を渡す。 `setState( 無名関数 )`。
   2. 無形関数の引数 が、`prevState`。

```ts
function useState<S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>];
```
`Dispatch`に, 下記が含まれている。
```ts
type SetStateAction<S> = S | ((prevState: S) => S);
```
上記の為、`prevState` にするには, 無名関数 に 引数 を渡す。

# 初期値で オブジェクト を 扱う。

```js
const [name, setName] = useState(
  { firstName: "", lastName: "" }
);
// ~~~~~~~~
  onChange={(e) => 
    setName(
      {...name, 
      firstName: e.target.value }
    )
  }
```
値変更時に自動マージせず、そのままオブジェクトを置換してしまう. 為,
 スプレッド公文で連続展開し, 更新事に追加する.    
  
> Note
> Unlike the setState method found in class components, useState does not automatically merge update objects. You can replicate this behavior by combining the function updater form with object spread syntax:

```ts
setState((prevState) => {
  // Object.assign would also work
  return { ...prevState, ...updatedValues };
});
```

> Another option is useReducer, which is more suited for managing state objects that contain multiple sub-values. [link](https://reactjs.org/docs/hooks-reference.html#functional-updates)


- [🚪🔙： README](/README.md)