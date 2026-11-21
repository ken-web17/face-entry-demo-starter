# 顔認証入室管理システム（開発用スターター）

## 現在の内容
- `index.html`：端末選択画面
- `display.html`：表示機ページ（仮）
- `camera.html`：カメラ機ページ（仮）
- `admin.html`：管理者ページ（仮）
- `css/style.css`：共通スタイル
- `js/`：今後のJavaScript配置場所
- `models/`：今後の顔認証モデル配置場所

## GitHub Pages
1. ZIPを展開する
2. 中のファイルとフォルダをGitHubリポジトリの直下にアップロードする
3. GitHubリポジトリの Settings → Pages を開く
4. Deploy from a branch を選び、`main` / `/(root)` を指定して保存する

## 注意
これは画面構成の初期ひな形です。顔認証、Firebase接続、管理者認証はまだ実装していません。
実在する人物の顔データを扱う前に、本人の同意、利用目的・保存期間の説明、削除手段、アクセス制御を整えてください。
Firebaseの秘密鍵やサービスアカウントJSONは、このリポジトリにアップロードしないでください。
