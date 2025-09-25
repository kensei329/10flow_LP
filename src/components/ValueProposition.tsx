export default function ValueProposition() {
  const values = [
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "様々な新規患者獲得導線",
      subtitle: "患者マーケティング仕組み化",
      description: "SEOや生成AI（LLMO）時代に対応した自由診療LPを自動生成。検索エンジンだけでなく生成AIの回答にも拾われやすく、貴クリニックが新規患者の第一候補に選ばれる導線を構築します。",
      benefits: [
        "SEO・LLMO対策済みコンテンツの自動生成",
        "治療前後のわかりやすい説明ページを提供",
        "エビデンスベースの安心感ある情報発信",
        "医療広告ガイドライン完全準拠"
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "競争力のある魅力的な価格をAIが提案",
      subtitle: "AI価格戦略×稼働率最適化",
      description: "周辺競合や需要動向を自動分析し、AIが最適な価格設定を提案。平日・休日・キャンペーンごとに柔軟に価格調整し、稼働率と収益性を両立させます。",
      benefits: [
        "競合価格の自動調査・分析",
        "需要に応じたダイナミックプライシング",
        "稼働率を平準化するアルゴリズム",
        "年次改定・キャンペーン最適化"
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "初回申込み率/継続率ともに向上",
      subtitle: "初期障壁低減×継続率向上",
      description: "30日間完全保証で初回申込みの不安を解消。さらにポイント還元やサブスク管理で継続率を高め、LTV向上と医院の安定収益を実現します。",
      benefits: [
        "30日間サービス完全保証",
        "診療ポイント還元システム",
        "サブスクリプション管理",
        "リピート率向上の仕組み"
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            10flowが実現する
            <span className="text-blue-600">3つの価値</span>
          </h2>
        </div>

        {/* 価値の3本柱 */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                {/* アイコン */}
                <div className="mb-6">
                  {value.icon}
                </div>
                
                {/* タイトル */}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {value.subtitle}
                </p>
                
                {/* 説明文 */}
                <p className="text-slate-700 mb-6 leading-relaxed">
                  {value.description}
                </p>
                
                {/* ベネフィットリスト */}
                <ul className="space-y-2">
                  {value.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-slate-600">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* 統計情報 */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              10flowで期待できる改善指標
            </h3>
            <p className="text-slate-600">
              ※ 結果は院の規模・地域・取り組み状況により変動します
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">25%</div>
              <div className="text-slate-700 font-medium">初回CV率向上</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">40%</div>
              <div className="text-slate-700 font-medium">稼働率改善</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
              <div className="text-slate-700 font-medium">リピート率向上</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">35%</div>
              <div className="text-slate-700 font-medium">売上増加</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
