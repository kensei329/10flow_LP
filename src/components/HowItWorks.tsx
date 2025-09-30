export default function HowItWorks() {
  const steps = [
    {
      step: "STEP 01",
      title: "導入診断",
      subtitle: "現状把握と最適化ポイントの特定",
      description: "貴院の現在の自由診療状況、患者層、収益構造を詳細に分析。専門コンサルタントが訪問またはオンラインで現状診断を実施し、最適化ポイントを特定します。",
      details: [
        "現在の自由診療メニューと価格帯の分析",
        "患者層・来院パターンの把握", 
        "周辺競合の価格・サービス調査",
        "収益構造と改善余地の特定",
        "院長・スタッフ様のご要望ヒアリング"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      duration: "1-2週間",
      color: "from-blue-400 to-blue-600"
    },
    {
      step: "STEP 02", 
      title: "設定・導入",
      subtitle: "メニュー・価格・決済システムの最適化",
      description: "診断結果を基に、最適なメニュー構成・価格設定・決済フローを設計。10flowプラットフォームの導入と各種設定を完了し、運用開始の準備を整えます。",
      details: [
        "最適価格・メニュー構成の設計",
        "サブスクリプション・ポイントシステム設定",
        "決済システムの統合・テスト",
        "スタッフ様向け操作研修の実施",
        "患者様向け説明資料の準備"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      duration: "2-3週間",
      color: "from-emerald-400 to-emerald-600"
    },
    {
      step: "STEP 03",
      title: "運用・最適化",
      subtitle: "継続的な改善と成果の最大化",
      description: "運用開始後は、データ分析による継続的な最適化を実施。月次レポートによる成果確認と、さらなる改善施策の提案で持続的な成長をサポートします。",
      details: [
        "患者動向・収益データの自動分析",
        "価格・キャンペーン戦略の最適化",
        "月次成果レポートの提供",
        "季節要因・トレンドに応じた調整",
        "継続的な機能アップデートの提供"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      duration: "継続",
      color: "from-purple-400 to-purple-600"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-blue-600">3つのステップ</span>で<br />
            確実な成果を実現
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            貴院の状況に合わせたオーダーメイドの導入プロセスで、
            リスクを最小化しながら最大の効果を実現します
          </p>
        </div>

        {/* ステップ表示 */}
        <div className="relative">
          {/* 接続線 */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between">
              <div className="w-8 h-8"></div>
              <div className="flex-1 h-1 bg-gradient-to-r from-blue-200 via-emerald-200 to-purple-200 mt-4"></div>
              <div className="w-8 h-8"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* ステップカード */}
                <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl transition-all duration-300 h-full">
                  {/* ステップ番号とアイコン */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} text-white rounded-2xl flex items-center justify-center relative z-10`}>
                      {step.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-slate-500">
                        {step.step}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        期間: {step.duration}
                      </div>
                    </div>
                  </div>

                  {/* タイトル */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {step.subtitle}
                  </p>

                  {/* 説明文 */}
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* 詳細リスト */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">
                      主要な実施内容:
                    </h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <svg className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-slate-600">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* サポート体制 */}
        <div className="mt-20 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              充実のサポート体制
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              導入から運用まで、専任チームが貴院の成功を全力でサポートします
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900 mb-1">専任コンサルタント</h4>
              <p className="text-sm text-slate-600">医療業界に精通した専門家が担当</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900 mb-1">技術サポート</h4>
              <p className="text-sm text-slate-600">システムトラブル時の迅速対応</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900 mb-1">研修・教育</h4>
              <p className="text-sm text-slate-600">スタッフ様向け継続研修プログラム</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900 mb-1">月次レポート</h4>
              <p className="text-sm text-slate-600">詳細な分析と改善提案</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

