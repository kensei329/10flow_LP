import Link from 'next/link'

export default function Features() {
  const features = [
    {
      id: "F1",
      title: "各社LP自動生成・Web公開",
      subtitle: "SEO/LLMO最適化",
      description: "登録医療機関ごとに専用LPを自動作成・公開。SEO/LLMO対応で検索エンジンや生成AIから情報取得されやすくし、新規患者の比較候補としての露出を拡大。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
        </svg>
      ),
      status: "近日公開",
      category: "集客・マーケティング"
    },
    {
      id: "F2",
      title: "2ステップ問い合わせフォーム",
      subtitle: "CV率最適化",
      description: "Step1で最低限情報を取得後、Step2で詳細をヒアリング。心理的負担を軽減し、コンバージョン率を向上させる設計。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      status: "利用可能",
      category: "集客・マーケティング"
    },
    {
      id: "F3",
      title: "AI競合価格提案",
      subtitle: "競争力のある価格設定",
      description: "周辺自由診療の価格を自動調査し、競争可能な適正価格を提案。市場動向を踏まえた戦略的価格設定をサポート。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      status: "利用可能",
      category: "価格戦略・収益化"
    },
    {
      id: "F4",
      title: "年度ごと値上げ提案",
      subtitle: "需要最大化キャンペーン",
      description: "年次改定の根拠提示とキャンペーン設計で駆け込み需要を創出。適切なタイミングでの価格改定をサポート。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      status: "利用可能",
      category: "価格戦略・収益化"
    },
    {
      id: "F5",
      title: "稼働率平準化価格",
      subtitle: "需要の時間分散",
      description: "平日日中/夕方/土日祝の価格最適化で稼働ムラを解消。時間帯別価格設定で収益性を向上。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      status: "利用可能",
      category: "価格戦略・収益化"
    },
    {
      id: "F6",
      title: "サブスクリプション設計",
      subtitle: "継続収益の構築",
      description: "メニュー設計・価格設定・毎月の自動支払いまで一気通貫。安定した継続収益モデルを構築。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      status: "利用可能",
      category: "価格戦略・収益化"
    },
    {
      id: "F7",
      title: "30日間サービス完全保証",
      subtitle: "初期障壁の除去",
      description: "初回の心理的障壁を軽減し初期CVを改善。患者様の安心感を提供し、新規患者獲得を促進。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      status: "利用可能",
      category: "患者体験・保証"
    },
    {
      id: "F8",
      title: "ポイント還元システム",
      subtitle: "LTV向上の仕組み",
      description: "診療支払いごとの還元で再訪導線とLTV向上。継続的な通院を促進し、患者様との長期的関係を構築。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      status: "利用可能",
      category: "患者体験・保証"
    }
  ]

  const categories = [
    { name: "集客・マーケティング", color: "bg-blue-100 text-blue-800" },
    { name: "価格戦略・収益化", color: "bg-emerald-100 text-emerald-800" },
    { name: "患者体験・保証", color: "bg-purple-100 text-purple-800" }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            包括的な
            <span className="text-blue-600">機能ラインナップ</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            自由診療の成功に必要なすべての要素を、
            一つのプラットフォームで統合的に提供します
          </p>
          
          {/* カテゴリフィルター */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <span 
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium ${category.color}`}
              >
                {category.name}
              </span>
            ))}
          </div>
        </div>

        {/* 機能カード一覧 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                {/* ヘッダー */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-slate-500 mb-1">
                        {feature.id}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <div className={`px-2 py-1 text-xs font-medium rounded-full ${
                    feature.status === '利用可能' 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {feature.status}
                  </div>
                </div>

                {/* サブタイトル */}
                <p className="text-blue-600 font-semibold text-sm mb-3">
                  {feature.subtitle}
                </p>

                {/* 説明文 */}
                <p className="text-slate-700 text-sm leading-relaxed mb-4 flex-1">
                  {feature.description}
                </p>

                {/* カテゴリ */}
                <div className="flex items-center justify-between mt-auto">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    categories.find(cat => cat.name === feature.category)?.color || 'bg-slate-100 text-slate-800'
                  }`}>
                    {feature.category}
                  </span>
                  
                  <Link 
                    href={`#${feature.id.toLowerCase()}`}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
                  >
                    詳細
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 統合メリット */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              すべての機能が連携して、<br />
              より大きな価値を創出
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
              個別の機能ではなく、統合されたプラットフォームだからこそ実現できる、
              シナジー効果をご体験ください
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">8+</div>
                <div className="text-blue-100">統合機能</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="text-blue-100">主要カテゴリ</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1</div>
                <div className="text-blue-100">プラットフォーム</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
