# React Hooks の基礎から応用までの学習

# Rules

- トップレベルのみ使用. => 呼出順番が保証される.

  - 非トップレベル
    - ネスト関数
    - ループ・条件分岐

- 関数内のみ.

# useState

```ts
function useState<S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>];
// The above CODE is The same as below.
[S, Dispatch<SetStateAction<S>>] = function useState<S>(initialState: S | (() => S));
// therefore The below CODE also is same.
const [state, setState] = useState(initialState);
```

> **関数コンポーネント** で <u>**State**</u> を扱う. in CounterHook.js

- `this` は 関数コンポーネント に 存在しない ので、**簡潔** に書ける。

## 🚩 ループ内 で 使用。

[setState()](https://reactjs.org/docs/hooks-reference.html#functional-updates) で返される, `prevState` で扱う。

- prevState にするには, 無名関数 の 引数 にする。
- そのままでは, 以下のように, initialState (S) として返される。

```ts
function useState<S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>];
// ~~~~~~~~~~~~~~~
type SetStateAction<S> = S | ((prevState: S) => S);
```

## 🚩 初期値で <u>**_オブジェクト_**</u> を 扱う。

```ts
const [name, setName] = useState({ firstName: "", lastName: "" });
// ~~~~~~~~
onChange={(e) => setName({...name, firstName: e.target.value })}
/**
 * 値変更時に自動マージせず、そのままオブジェクトを置換してしまう. 為,
 *  スプレッド公文で連続展開し, 更新事に追加する.
 */
```

> Note
> Unlike the setState method found in class components, useState does not automatically merge update objects. You can replicate this behavior by combining the function updater form with object spread syntax:

```ts
setState((prevState) => {
  // Object.assign would also work
  return { ...prevState, ...updatedValues };
});
```

> Another option is useReducer, which is more suited for managing state objects that contain multiple sub-values. [link](https://reactjs.org/docs/hooks-reference.html#functional-updates)

# useEffect

第二引数 を 加える事 で条件を加えることができる。
