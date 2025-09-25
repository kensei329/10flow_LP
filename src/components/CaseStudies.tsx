export default function CaseStudies() {
  const caseStudies = [
    {
      category: "歯科医院",
      clinicName: "●●歯科クリニック様",
      location: "東京都●●区",
      size: "チェア4台",
      challenge: "インプラント・セラミック治療の稼働率が低く、価格競争に巻き込まれがち",
      solution: [
        "周辺競合の価格分析と適正価格の再設定",
        "平日昼間の割引価格導入で稼働率向上",
        "メンテナンスサブスクリプションの導入"
      ],
      results: {
        revenue: "+42%",
        utilization: "+35%",
        retention: "+28%",
        satisfaction: "4.8/5.0"
      },
      period: "6ヶ月",
      status: "想定シナリオ"
    },
    {
      category: "美容皮膚科",
      clinicName: "●●美容クリニック様", 
      location: "大阪府●●市",
      size: "ベッド3台",
      challenge: "シミ取り・ピーリング治療の新規獲得コストが高い、リピート率が低い",
      solution: [
        "30日間保証制度の導入で初回障壁を軽減",
        "ポイント還元システムでリピート促進",
        "肌質改善プログラムのサブスク化"
      ],
      results: {
        revenue: "+38%",
        utilization: "+45%", 
        retention: "+52%",
        satisfaction: "4.7/5.0"
      },
      period: "4ヶ月",
      status: "想定シナリオ"
    },
    {
      category: "内科・予防医療",
      clinicName: "●●クリニック様",
      location: "神奈川県●●市",
      size: "診察室2室",
      challenge: "検診・ドックの価格設定に悩み、年間を通じた需要の変動が大きい",
      solution: [
        "AI価格提案による競争力のある料金設定",
        "年度末・年始の値上げ前キャンペーン実施",
        "健康管理サブスクリプションの新設"
      ],
      results: {
        revenue: "+33%",
        utilization: "+25%",
        retention: "+40%", 
        satisfaction: "4.6/5.0"
      },
      period: "8ヶ月",
      status: "想定シナリオ"
    }
  ]

  const metrics = [
    {
      metric: "平均売上向上",
      value: "37%",
      description: "導入後6ヶ月での平均的な売上向上率",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      metric: "稼働率改善",
      value: "35%",
      description: "価格最適化による稼働率の向上",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      metric: "リピート率向上",
      value: "40%",
      description: "保証・ポイントシステムによる継続率改善",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      metric: "患者満足度",
      value: "4.7/5.0",
      description: "導入医療機関での平均患者満足度",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-blue-600">導入事例</span>と<br />
            期待できる成果
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            様々な医療機関での想定導入シナリオと、<br />
            実現可能な改善指標をご紹介します
          </p>
        </div>

        {/* 全体の成果指標 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-6 text-center border border-slate-200">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {metric.value}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {metric.metric}
              </h3>
              <p className="text-sm text-slate-600">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* 事例詳細 */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
              <div className="p-8 lg:p-10">
                {/* ヘッダー情報 */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div className="mb-4 lg:mb-0">
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mr-3">
                        {study.category}
                      </span>
                      <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                        {study.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">
                      {study.clinicName}
                    </h3>
                    <p className="text-slate-600">
                      {study.location} • {study.size} • 導入期間: {study.period}
                    </p>
                  </div>
                  
                  {/* 成果指標 */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:ml-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">
                        {study.results.revenue}
                      </div>
                      <div className="text-xs text-slate-600">売上向上</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {study.results.utilization}
                      </div>
                      <div className="text-xs text-slate-600">稼働率改善</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        {study.results.retention}
                      </div>
                      <div className="text-xs text-slate-600">リピート向上</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        {study.results.satisfaction}
                      </div>
                      <div className="text-xs text-slate-600">患者満足度</div>
                    </div>
                  </div>
                </div>

                {/* 課題と解決策 */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl p-6 border border-slate-200">
                    <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      導入前の課題
                    </h4>
                    <p className="text-slate-700 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-slate-200">
                    <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      10flowによる解決策
                    </h4>
                    <ul className="space-y-2">
                      {study.solution.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-slate-700 text-sm">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 免責事項 */}
        <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                結果についての重要なお知らせ
              </h3>
              <p className="text-yellow-800 text-sm leading-relaxed">
                上記の事例は、10flowの機能を活用した場合の想定シナリオです。
                実際の結果は、医療機関の規模・立地・診療内容・地域特性・スタッフの取り組み状況等により大きく変動します。
                導入前に詳細な現状分析を行い、貴院に最適化された目標設定と施策をご提案いたします。
              </p>
            </div>
          </div>
        </div>

        {/* 導入検討のCTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            貴院でも同様の成果を実現しませんか？
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            現状の課題分析から最適化戦略の立案まで、
            専門コンサルタントが無料でご相談をお受けします
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#consultation"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              無料収益診断を申し込む
            </a>
            <a 
              href="#demo"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h6m2 5H7a2 2 0 01-2-2V9a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z" />
              </svg>
              デモを見る
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
