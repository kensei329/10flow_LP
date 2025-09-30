export default function Philosophy() {
  const targetServices = [
    {
      category: "眼科",
      services: ["屈折矯正（レーシック/オルソ）", "近視進行抑制プログラム", "ドライアイ先進ケア", "視覚トレーニング"]
    },
    {
      category: "毛髪治療",
      services: ["AGA治療（内服/外用）", "頭皮メソ/PRP", "生活習慣改善指導", "栄養療法"]
    },
    {
      category: "点滴・注射",
      services: ["高濃度ビタミンC", "マイヤーズ点滴", "疲労回復注射", "免疫力向上療法"]
    },
    {
      category: "予防医療",
      services: ["栄養解析・指導", "睡眠改善プログラム", "メディカルフィットネス", "腸活プログラム"]
    },
    {
      category: "検診・ドック",
      services: ["人間ドック", "高精度画像診断", "血管年齢測定", "遺伝リスク検査"]
    },
    {
      category: "心療内科",
      services: ["心理カウンセリング", "認知行動療法", "ストレスマネジメント", "マインドフルネス"]
    },
    {
      category: "皮膚科",
      services: ["シミ・色素沈着治療", "医療スキンケア", "ケミカルピーリング", "毛穴改善"]
    },
    {
      category: "歯科",
      services: ["矯正", "インプラント", "セラミック", "歯周再生"]
    }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-blue-600">Philosophy</span><br />
            私たちの理念と適用範囲
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            10flowは、医療機関の持続的な成長と患者様の真の価値創出を両立し、<br />
            収益性と倫理性を兼ね備えた自由診療をサポートします
          </p>
        </div>

        {/* 理念の説明 */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Flow = 流れ（フロー）
              </h3>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              「流れ」は、患者様の来院から治療、継続まで、スムーズで自然な流れを意味します。
            </p>
            <p className="text-slate-700 leading-relaxed">
              診療の流れを最適化し、患者様の満足度向上と医院の収益性向上を両立する仕組みを提供します。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                倫理性の重視
              </h3>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              患者様の真のニーズに基づいた適切な治療提案と、持続可能な収益モデルの構築を目指します。
            </p>
            <p className="text-slate-700 leading-relaxed">
              医療広告ガイドライン・薬機法を遵守し、エビデンスに基づいた正しい情報提供を徹底します。
            </p>
          </div>
        </div>

        {/* 対象範囲 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              対象となる自由診療メニュー
            </h3>
            <p className="text-slate-600 max-w-3xl mx-auto">
              医療機関の収益性向上と患者様の価値創出に適合する診療メニューを幅広くサポートします
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetServices.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold text-slate-900 mb-4 text-center">
                  {category.category}
                </h4>
                <ul className="space-y-2">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-slate-700">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>


        {/* 医療広告ガイドライン遵守 */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              医療広告ガイドライン・薬機法完全準拠
            </h3>
            <p className="text-blue-800 max-w-4xl mx-auto leading-relaxed">
              10flowは医療広告ガイドライン・薬機法・景品表示法を完全に遵守し、
              誇大表現や虚偽の情報を排除した、正確で信頼できる情報提供を徹底します。
              また、個人差や副作用・リスクについても適切に説明し、
              患者様が十分な理解のもとで治療選択できるよう支援します。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
