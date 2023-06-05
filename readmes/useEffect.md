- [useEffect 注意点](#useeffect-注意点)
- [初回のみ反応させる。](#初回のみ反応させる)
- [登録関数をキャンセルする。](#登録関数をキャンセルする)
- [外部APIからデータ取得する。](#外部apiからデータ取得する)
  - [初回のみ実行。](#初回のみ実行)
  - [post Id の 変化毎 に実行。](#post-id-の-変化毎-に実行)
  - [!`useLayOutEffect`との違い。](#uselayouteffectとの違い)

# useEffect 注意点
`[ 空配列 ]`を、渡さないと、<u>永遠に反応</u> する。

# 初回のみ反応させる。
* 第２引数 に <u>空-配列</u> を渡す。
```js
useEffect(
  console.log('第2引数にから配列を渡すことで初回のみ実行')
  window.addEventListener('mousemove', somethingFunc)
, [空にする])
```
```js
  useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [監視State])
```

# 登録関数をキャンセルする。
* `return () => { }`内で will-unMount 時の処理は行う。
* `return`内で *remove*EventListener を実行し解除。登録した *Add*EventListenerを。
```js
useEffect(
  console.log('第2引数にから配列を渡すことで初回のみ実行')
  window.addEventListener('mousemove', somethingFunc)
  return () => {
    window.removeEventListener('mousemove', somethingFunc)
  }
, [])
```

# 外部APIからデータ取得する。
* 配列`[ 監視 ]`は監視する。指定した Stateを。
## 初回のみ実行。
```js
  // Save fetch data.
  // Show Loading when while fetching data.
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // fetching data function.
  const fetchData = async () => {
    const res = await fetch("https://api.randomuser.me/");
    const data = await res.json();
    const [item] = data.results;
    setUser(item);
    setLoading(false);
  };
  // 初回レンダー時のみ実行。
  useEffect(() => {
    fetchData();
  }, []);//空にして初回のみ.データ取得.
```
## post Id の 変化毎 に実行。
* Id の 変化毎 に実行したい為、`[id]`配列内に, `id`を加える。
```js
  const [post, setPost] = useState(null);
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    // post-id の度 に データを取得する為、取得するまでの間、初期値は true にセットする。
    setLoading(true);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    setPost(data);
    setLoading(false);
  };
  // 「id の変化」は 監視し、走られたい為、配列ないに id を入れる。
  useEffect(() => {
    fetchData();
  }, [id]);
```
## !`useLayOutEffect`との違い。
* ほぼ同じ動きをする。（useEffectと）
* 違う点：レンダリングをブロック処理する。
* <u>**useEffect**</u> 推奨：レンダリングのブロックが*必要ない場合*。