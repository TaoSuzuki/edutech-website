# EduTech哲学塾 ウェブサイト

## 概要
生成AIを活用したサービスのウェブサイトです。生徒一人一人に合わせた最適な学習プランを提供します。

## サイト構成
1. トップページ（index.html）
   - キャッチコピー：「もっと自由に、もっと楽しく！探究心を育てる学び」
   - ファーストビュー
   - サービス概要
   - CTAボタン

2. サービス紹介（services.html）
   - AI×メンター式指導の詳細
   - 完全マンツーマン指導の特徴
   - 柔軟なスケジュール
   - 対象生徒像

3. 受講の流れ（flow.html）
   - 申し込みから授業開始までのステップ
   - 無料体験の流れ
   - スケジュール調整方法

4. 既存サービスとの違い（comparison.html）
   - 一般的な教育の課題
   - 当サービスの特徴
   - テクノロジー活用の利点

5. 運営者紹介（about.html）
   - プロフィール
   - 経歴
   - 事業への想い

6. お問い合わせ・申し込み（contact.html）
   - お問い合わせフォーム
   - 無料体験申し込み
   - SNSリンク

## 開発者向け情報

### インストール方法
1. リポジトリをクローン
```bash
git clone [repository-url]
```

2. 依存関係のインストール
```bash
npm install
```

3. 開発サーバーの起動
```bash
npm run dev
```

### 技術スタック
- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Google Forms API

### 開発ガイドライン
- コンポーネントベースの開発
- レスポンシブデザイン対応
- アクセシビリティ対応
- SEO対策

### GitHub Pagesでの公開方法

1. リポジトリの設定
   - GitHubにログインし、リポジトリページを開く
   - 上部メニューの「Settings」タブをクリック
   - 左サイドバーの「Pages」をクリック
   - 「Source」セクションで「Deploy from a branch」を選択
   - 「Branch」ドロップダウンで「main」を選択
   - 「Folder」ドロップダウンで「/(root)」を選択
   - 「Save」ボタンをクリック

2. サイトの公開
   - ローカルでの変更をコミット
   ```bash
   # 変更したファイルをステージング
   git add .
   
   # 変更内容をコミット
   git commit -m "Update website content"
   ```
   - リモートリポジトリにプッシュ
   ```bash
   git push origin main
   ```
   - GitHub Actionsのワークフローが自動的に実行され、サイトがビルド・デプロイされる
   - デプロイ状況は「Actions」タブで確認可能
   - デプロイ完了後、`https://[username].github.io/[repository-name]` でサイトにアクセス可能
     - 例：`https://tao.github.io/edutech-web`

<!-- カスタムドメインの設定は現在保留中です。詳細は以下のissueを参照してください：
https://github.com/TaoSuzuki/edutech-web/issues/1 -->

4. トラブルシューティング
   - デプロイが失敗した場合
     - 「Actions」タブでエラーログを確認
     - ビルドエラーの詳細を確認
     - 必要なファイルがすべてコミットされているか確認
   - サイトが表示されない場合
     - ブランチ名が正しいか確認（`main`または`master`）
     - ファイルパスが正しいか確認
     - GitHub Pagesの設定が正しいか確認

5. ローカルでのテスト
   ```bash
   # ローカルサーバーを起動
   python -m http.server 8000
   
   # ブラウザで確認
   open http://localhost:8000
   ```

6. 更新方法
   - ローカルでファイルを編集
   - 変更をコミットしてプッシュ
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```
   - GitHub Actionsで自動的にデプロイされる
   - 数分後に変更が反映される

assets/images/
├── hero-image.jpg        # トップページのメイン画像（子どもがAIと学ぶイメージ）
├── ai-mentor.jpg         # AI×メンター式指導の説明画像
├── one-on-one.jpg        # 完全マンツーマン指導の説明画像
├── schedule.jpg          # 柔軟なスケジュールの説明画像
├── profile.jpg           # 運営者紹介のプロフィール画像
├── step1.jpg            # 受講の流れ：申し込み
├── step2.jpg            # 受講の流れ：無料体験
├── step3.jpg            # 受講の流れ：スケジュール決定
├── step4.jpg            # 受講の流れ：学習スタート
└── step5.jpg            # 受講の流れ：フォローアップ
