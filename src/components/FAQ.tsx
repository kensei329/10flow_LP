'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqCategories = [
    {
      category: "法令・広告規制",
      color: "bg-red-100 text-red-800",
      faqs: [
        {
          question: "医療広告ガイドラインに準拠していますか？",
          answer: "はい、10flowは医療広告ガイドライン・薬機法・景品表示法を完全に遵守しています。誇大表現や虚偽の情報を排除し、個人差や副作用・リスクについても適切に説明できる仕組みを提供しています。また、定期的な法改正にも対応し、常に最新の規制に準拠したサービスを提供いたします。"
        },
        {
          question: "ビフォーアフター写真の掲載は可能ですか？",
          answer: "医療広告ガイドラインに則り、適切な条件下でのみ可能です。術前術後の写真掲載には、治療内容・費用・リスク・副作用の詳細説明、個人差の明記、医師の監修が必要です。10flowでは、これらの要件を満たすためのテンプレートと確認フローを提供し、コンプライアンスを確保します。"
        },
        {
          question: "「10歳若返る」という表現は問題ありませんか？",
          answer: "この表現は比喩であることを明確に注記しています。実際のサービスでは「健康的で活力に満ちた生活の実現」という意味での比喩表現であることを明示し、具体的な年齢の変化を保証するものではないことを明記しています。医療広告ガイドラインに準拠した適切な表現管理を行っています。"
        }
      ]
    },
    {
      category: "導入・運用",
      color: "bg-blue-100 text-blue-800", 
      faqs: [
        {
          question: "導入にはどの程度の期間が必要ですか？",
          answer: "標準的な導入期間は4-6週間です。現状診断（1-2週間）、システム設定・研修（2-3週間）、テスト運用（1週間）のステップで進めます。医院の規模や既存システムとの連携により期間は変動しますが、段階的な導入により業務への影響を最小化します。"
        },
        {
          question: "既存の電子カルテや予約システムとの連携は可能ですか？",
          answer: "主要な電子カルテ・予約システムとの連携が可能です。API連携またはデータエクスポート/インポートにより、既存の患者データや予約情報を活用できます。連携可能なシステムについては、導入前の診断時に詳細をご確認いたします。"
        },
        {
          question: "スタッフの研修やサポート体制はどうなっていますか？",
          answer: "包括的な研修プログラムを提供しています。導入時の初期研修、定期的なフォローアップ研修、オンライン教材の提供を行います。また、専任サポートチームによる技術サポート、月次の運用レビューにより継続的なサポートを実施します。"
        }
      ]
    },
    {
      category: "決済・料金",
      color: "bg-emerald-100 text-emerald-800",
      faqs: [
        {
          question: "対応している決済方法は何ですか？",
          answer: "クレジットカード（VISA、MasterCard、JCB、AMEX）、デビットカード、電子マネー、QRコード決済（PayPay、楽天Pay等）、銀行振込に対応しています。サブスクリプション支払いでは自動引き落としも可能です。セキュリティはPCI DSS準拠の決済システムを使用しています。"
        },
        {
          question: "10flowの利用料金体系を教えてください。",
          answer: "基本プランは月額利用料+成果連動型の料金体系です。初期導入費用、月額基本料、決済手数料、成果報酬で構成されます。医院の規模や利用機能により料金は変動しますので、詳細は無料相談時にお見積もりいたします。ROIを重視した透明性の高い料金設定です。"
        },
        {
          question: "契約期間や解約条件はありますか？",
          answer: "最低契約期間は6ヶ月です。その後は3ヶ月前の事前通知により解約可能です。導入支援の投資回収を考慮した設定ですが、成果が出ない場合の特別解約条項も設けています。解約時のデータ移行サポートも提供いたします。"
        }
      ]
    },
    {
      category: "保証・サポート",
      color: "bg-purple-100 text-purple-800",
      faqs: [
        {
          question: "30日間完全保証の内容を詳しく教えてください。",
          answer: "患者様が治療結果に満足されない場合、30日以内であれば治療費を全額返金する制度です。ただし、医学的に適切な治療が行われていることが前提で、患者様の自己都合や無理な要求には適用されません。保証適用の判断基準とプロセスを明確に定めており、医院のリスクを最小化しています。"
        },
        {
          question: "ポイント還元システムはどのように運用されますか？",
          answer: "診療費に応じて1-5%のポイントが自動付与され、次回の診療費に充当できます。ポイントの有効期限は1年間、最低利用ポイントは100ポイントからです。誕生日特典やリピート回数によるボーナスポイントも設定可能で、患者様のロイヤルティ向上を図ります。"
        },
        {
          question: "システム障害やトラブル時の対応はどうなりますか？",
          answer: "24時間365日の監視体制により、障害の早期発見・対応を行います。緊急時は1時間以内の初回対応、4時間以内の復旧を目標としています。また、オフライン時の代替運用手順も整備し、診療業務への影響を最小化します。月次の稼働率レポートも提供いたします。"
        }
      ]
    },
    {
      category: "データ・セキュリティ",
      color: "bg-orange-100 text-orange-800",
      faqs: [
        {
          question: "患者データの取り扱いやプライバシー保護はどうなっていますか？",
          answer: "個人情報保護法、医療法に完全準拠し、ISO27001認証取得レベルのセキュリティ管理を実施しています。データは暗号化して保存し、アクセス権限も厳格に管理しています。また、データの目的外利用は一切行わず、患者様の同意なく第三者に提供することはありません。"
        },
        {
          question: "データのバックアップや災害対策はありますか？",
          answer: "毎日自動バックアップを実施し、地理的に分散した複数のデータセンターにて冗長保存しています。災害時の事業継続計画（BCP）も策定済みで、最大24時間以内のサービス復旧を保証しています。データ復旧テストも定期的に実施し、確実な復旧を担保しています。"
        },
        {
          question: "他社サービスへのデータ移行は可能ですか？",
          answer: "はい、可能です。契約終了時には、標準的なフォーマットでのデータエクスポートを無償で提供いたします。患者データ、診療履歴、設定情報等の主要データを含みます。また、移行先システムに応じたデータ変換サポートも有償で提供可能です。"
        }
      ]
    }
  ]

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const index = categoryIndex * 1000 + faqIndex
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            よくある
            <span className="text-blue-600">ご質問</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            10flowの導入や運用に関するよくあるご質問にお答えします。<br />
            その他のご質問がございましたら、お気軽にお問い合わせください。
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              {/* カテゴリヘッダー */}
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-4 border-b border-slate-200">
                <div className="flex items-center">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full mr-3 ${category.color}`}>
                    {category.category}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {category.category}に関するご質問
                  </h3>
                </div>
              </div>

              {/* FAQ項目 */}
              <div className="divide-y divide-slate-200">
                {category.faqs.map((faq, faqIndex) => {
                  const index = categoryIndex * 1000 + faqIndex
                  const isOpen = openIndex === index
                  
                  return (
                    <div key={faqIndex}>
                      <button
                        className="w-full px-6 py-6 text-left hover:bg-slate-50 transition-colors"
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-slate-900 pr-4">
                            {faq.question}
                          </h4>
                          <svg 
                            className={`w-6 h-6 text-slate-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-blue-500">
                            <p className="text-slate-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* まだ解決しない場合のCTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            まだ疑問が解決しませんか？
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            専門スタッフが直接お答えいたします。<br />
            お気軽にお問い合わせください。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#consultation"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              無料相談を申し込む
            </a>
            <a 
              href="tel:03-xxxx-xxxx"
              className="inline-flex items-center px-8 py-4 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              電話で相談
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

