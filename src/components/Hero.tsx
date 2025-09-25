import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-slate-100 py-20 lg:py-32">
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* ロゴプレースホルダー */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-2xl font-bold text-2xl mb-4">
              10F
            </div>
            <h1 className="text-blue-900 text-xl font-semibold">
              10flow（テンフロー）
            </h1>
          </div>
          
          {/* メインキャッチコピー */}
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            自由診療の
            <span className="text-blue-600">売上・利益・稼働率</span>
            を、<br />
            次のステージへ。
          </h2>
          
          {/* サブテキスト */}
          <p className="text-xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            自由診療を導入・強化したい医療機関（歯科・クリニック）の意思決定者様へ。<br />
            AI価格戦略×決済×サブスクで稼働率と単価を最適化し、持続的な収益成長を実現する総合ソリューションです。
          </p>
          
          {/* CTA ボタン */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="#demo"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h6m2 5H7a2 2 0 01-2-2V9a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z" />
              </svg>
              デモを見る
            </Link>
            <Link 
              href="#consultation"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200 text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              無料収益診断
            </Link>
          </div>
          
          {/* 信頼指標 */}
          <div className="mt-16">
            <p className="text-sm text-slate-600 mb-6">導入予定医療機関</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="bg-slate-200 h-12 w-32 rounded flex items-center justify-center text-slate-500 font-medium">
                歯科医院A
              </div>
              <div className="bg-slate-200 h-12 w-32 rounded flex items-center justify-center text-slate-500 font-medium">
                クリニックB
              </div>
              <div className="bg-slate-200 h-12 w-32 rounded flex items-center justify-center text-slate-500 font-medium">
                美容皮膚科C
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
