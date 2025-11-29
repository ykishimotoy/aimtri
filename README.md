# さっぽろすごいAIまつり - ランディングページ

2026年2月15日開催「さっぽろすごいAIまつり」の公式ランディングページです。

## 🔥 特徴

- **炎のモチーフ**: 炎のパーティクルアニメーション、グラデーション、カラーパレット
- **ダークテーマ**: モダンで洗練されたダークデザイン
- **プロフェッショナル**: ITコンサル的な信頼感とキャッチーさの両立
- **完全レスポンシブ**: モバイル、タブレット、デスクトップ全対応
- **インタラクティブ**: スクロールアニメーション、パララックス効果

## 📋 コンテンツ構成

### 3つのプログラム
1. **AIビジネスコンテスト** - 市民が挑戦するビジネスアイデアの発表
2. **AI芸術祭** - AIと共に創るアート・音楽・映像のライブショー
3. **AI展示・体験会** - 巨大展示ブースでのAI作品展示と体験会

### すごいAI道場（独立セクション）
3つのプログラムを支える基礎知識を提供する無償e-learningサイト。全国どこからでもアクセス可能で、AIをゼロから学べる体系的カリキュラムを提供。

## 📁 ファイル構成

```
/
├── index.html      # LP本体
├── style.css       # スタイルシート
├── script.js       # JavaScript（アニメーション、インタラクション）
├── requirements.md # プロジェクト要件定義
├── todo.md         # 作業履歴・チェックリスト
└── README.md       # このファイル
```

## 🚀 使い方

### ローカルで表示

1. ブラウザで `index.html` を開く

```bash
open index.html
```

または、ローカルサーバーを起動（推奨）：

```bash
# Python 3の場合
python3 -m http.server 8000

# Node.jsのhttp-serverを使う場合
npx http-server
```

その後、ブラウザで `http://localhost:8000` を開く

### デプロイ

静的サイトホスティングサービスにそのままデプロイ可能：

- **Netlify**: ドラッグ&ドロップでデプロイ
- **Vercel**: GitHubリポジトリと連携
- **GitHub Pages**: リポジトリの設定から有効化
- **Firebase Hosting**: `firebase deploy` コマンド

## 🖼️ 画像の差し替え

現在、全ての画像はプレースホルダーとして表示されています。実際の画像に差し替える手順：

1. 画像ファイルを `images/` フォルダに配置（フォルダがない場合は作成）
2. `index.html` 内の `.image-placeholder` 要素を `<img>` タグに置き換え

例：
```html
<!-- 置き換え前 -->
<div class="image-placeholder">
    <span class="placeholder-text">会場イメージ</span>
</div>

<!-- 置き換え後 -->
<img src="images/venue.jpg" alt="Deep Tech CORE SAPPORO 会場" class="section-image">
```

必要に応じて `style.css` に以下を追加：
```css
.section-image {
    width: 100%;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
}
```

## 🔗 設定されているリンク

- **すごいAI道場**: https://dojo.sugoiai.org/index.html
- **Discord招待**: https://example.com（本番環境では実際のDiscord招待URLに変更してください）
- **クラウドファンディング**: https://camp-fire.jp/projects/892256/view

## 🎨 カラーパレット

```css
--flame-red: #FF4500;
--flame-orange: #FF6B35;
--flame-yellow: #FFA500;
--flame-bright: #FFD700;
--dark-bg: #0a0a0a;
--dark-surface: #1a1a1a;
--dark-elevated: #2a2a2a;
```

## 📱 レスポンシブ対応

- **デスクトップ**: 1200px以上
- **タブレット**: 768px - 1024px
- **モバイル**: 768px以下

## ⚡ パフォーマンス最適化

実装済みの最適化：
- CSS Grid/Flexboxによる効率的なレイアウト
- Intersection Observerによる遅延アニメーション
- requestAnimationFrameによるスムーズなスクロール
- CSS transformsによるハードウェアアクセラレーション

## 🔧 カスタマイズ

### テキストの変更

`index.html` を編集して、各セクションのテキストを変更できます。

### スタイルの調整

`style.css` のCSS変数（`:root` セクション）を変更することで、カラーやスペーシングを簡単にカスタマイズできます。

### アニメーションの調整

`script.js` で以下の設定を変更可能：
- スクロールアニメーションのタイミング
- パララックス効果の強さ
- ホバーエフェクトの挙動

## 📋 チェックリスト

デプロイ前の最終確認：

- [ ] Discord招待リンクを実際のURLに変更
- [ ] 画像プレースホルダーを実際の画像に差し替え
- [ ] OGP画像の設定（`<meta property="og:image">`）
- [ ] ファビコンの追加
- [ ] Google Analytics等の設定（必要に応じて）
- [ ] 全リンクの動作確認
- [ ] モバイル/タブレット/デスクトップでの表示確認

## 📞 お問い合わせ

プロジェクトに関する問い合わせ：
- **主催**: 札幌すごいAI会
- **X (Twitter)**: @ykishimotoy
- **ハッシュタグ**: #さっぽろすごいAIまつり

---

**© 2026 札幌すごいAI会 All rights reserved.**
