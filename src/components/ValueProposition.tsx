export default function ValueProposition() {
  const values = [
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "患者教育の仕組み化",
      subtitle: "正しい価値を伝える",
      description: "自然な美と健康寿命の意義を患者様に正しく理解していただける教育システム。エビデンスに基づいた情報提供で、患者様の不安を解消し、適切な治療選択をサポートします。",
      benefits: [
        "医療広告ガイドライン完全準拠",
        "患者様向け教育コンテンツ自動生成",
        "治療前後の丁寧な説明サポート",
        "エビデンスベースの情報提供"
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "AI価格戦略×稼働率最適化",
      subtitle: "収益性の最大化",
      description: "周辺競合分析と需要予測により、適正価格を自動提案。平日・土日の価格差設定や年次改定により稼働率を平準化し、売上の最適化を実現します。",
      benefits: [
        "競合価格の自動調査・分析",
        "需要に応じた動的価格設定",
        "稼働率平準化アルゴリズム",
        "年次改定とキャンペーン最適化"
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "初期障壁低減×継続率向上",
      subtitle: "患者様の安心と継続",
      description: "30日間完全保証とポイント還元システムで初回来院の心理的ハードルを下げ、継続的な通院を促進。患者様のLTV向上と医院の安定収益を両立します。",
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
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            患者様の真の価値と医院の持続的成長を両立する、
            包括的なソリューションをご提供します
          </p>
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
