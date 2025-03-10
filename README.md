# 生成AIラボ個別指導 ウェブサイト

## 概要
生成AIを活用した個別指導サービスのウェブサイトです。生徒一人一人に合わせた最適な学習プランを提供します。

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
   - GitHubリポジトリの「Settings」タブを開く
   - 左サイドバーの「Pages」を選択
   - 「Source」セクションで「Deploy from a branch」を選択
   - 「Branch」で「main」を選択し、「/(root)」を選択
   - 「Save」をクリック

2. サイトの公開
   - ローカルでの変更をコミット
   ```bash
   git add .
   git commit -m "Update website content"
   ```
   - リモートリポジトリにプッシュ
   ```bash
   git push origin main
   ```
   - GitHub Actionsのワークフローが自動的に実行され、サイトがビルド・デプロイされる
   - デプロイ完了後、`https://[username].github.io/[repository-name]` でサイトにアクセス可能

3. カスタムドメインの設定（オプション）
   - リポジトリのルートに `CNAME` ファイルを作成
   - ドメイン名を記述（例：`www.example.com`）
   - DNSレコードの設定
     - タイプ：`CNAME`
     - ホスト：`www`
     - 値：`[username].github.io`
   - GitHub Pagesの設定で「Custom domain」にドメイン名を入力
   - 「Enforce HTTPS」にチェックを入れる

4. トラブルシューティング
   - デプロイが失敗した場合は、GitHub Actionsのログを確認
   - ブランチ名が正しいか確認（`main`または`master`）
   - ファイルパスが正しいか確認
   - 必要なファイルがすべてコミットされているか確認
