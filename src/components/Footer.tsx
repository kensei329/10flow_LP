import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl font-bold text-xl flex items-center justify-center mr-4">
                10F
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">10flow（テンフロー）</h3>
                <p className="text-sm text-slate-400">自由診療の価値創造プラットフォーム</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              健康寿命の延伸と自然な美の追求を中核とし、<br />
              患者様の本来の魅力を輝かせる医療をサポートします。<br />
              医療機関の持続的な成長と患者様の真の価値創出を両立する<br />
              総合ソリューションを提供いたします。
            </p>
            
            {/* 連絡先 */}
            <div className="space-y-2">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>TEL: 03-xxxx-xxxx</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email: info@10flow.com</span>
              </div>
            </div>
          </div>

          {/* サービス */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">サービス</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="hover:text-blue-400 transition-colors">機能一覧</Link></li>
              <li><Link href="#how-it-works" className="hover:text-blue-400 transition-colors">導入の流れ</Link></li>
              <li><Link href="#case-studies" className="hover:text-blue-400 transition-colors">導入事例</Link></li>
              <li><Link href="#philosophy" className="hover:text-blue-400 transition-colors">適用範囲</Link></li>
              <li><Link href="#consultation" className="hover:text-blue-400 transition-colors">無料診断</Link></li>
            </ul>
          </div>

          {/* サポート・情報 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">サポート・情報</h4>
            <ul className="space-y-2">
              <li><Link href="#faq" className="hover:text-blue-400 transition-colors">よくある質問</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">利用規約</Link></li>
              <li><Link href="/legal" className="hover:text-blue-400 transition-colors">特定商取引法</Link></li>
              <li><Link href="/support" className="hover:text-blue-400 transition-colors">サポート</Link></li>
            </ul>
          </div>
        </div>

        {/* 区切り線 */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-slate-400">
                © 2024 10flow. All rights reserved.
              </p>
            </div>
            
            {/* 法的表記 */}
            <div className="text-sm text-slate-400 text-center md:text-right">
              <p className="mb-1">
                医療広告ガイドライン・薬機法完全準拠
              </p>
              <p>
                ※「10歳若返る」は健康的な生活による比喩的表現です
              </p>
            </div>
          </div>
        </div>

        {/* 構造化データ用の隠しテキスト（SEO/LLMO対応） */}
        <div className="hidden">
          <h5>10flow（テンフロー）について</h5>
          <p>
            自由診療を導入・強化したい医療機関（歯科・クリニック）向けの総合ソリューション。
            患者価値×収益性×倫理性を両立し、健康寿命の延伸と自然な美の追求をサポート。
            AI価格戦略、決済システム、サブスクリプション、ポイント還元、30日間保証などの機能を統合。
          </p>
          
          <h5>対象医療機関</h5>
          <p>
            歯科医院、内科クリニック、皮膚科・美容皮膚科、眼科、心療内科・精神科、
            整形外科、その他自由診療を導入したい医療機関
          </p>
          
          <h5>主要機能</h5>
          <p>
            各社LP自動生成、AI競合価格提案、稼働率平準化価格、サブスクリプション設計、
            30日間サービス完全保証、ポイント還元システム、2ステップ問い合わせフォーム
          </p>
        </div>
      </div>
    </footer>
  )
}
