'use client'

import { useState } from 'react'

export default function CTAForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clinicName: '',
    clinicType: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // ここで実際のフォーム送信処理を実装
    // 例: APIエンドポイントへの送信
    await new Promise(resolve => setTimeout(resolve, 1000)) // デモ用の遅延
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              お申し込みありがとうございます！
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              担当者より24時間以内にご連絡いたします。<br />
              今しばらくお待ちください。
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              新しいお申し込み
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-blue-600 py-20" id="consultation">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            今すぐ始める
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            無料収益診断で、あなたの医療機関の<br />
            収益向上の可能性を確認しましょう
          </p>
          
          {/* 保証バッジ */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold">30日間完全保証</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* お名前 */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="山田太郎"
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="example@clinic.com"
                />
              </div>

              {/* 電話番号 */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  電話番号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="03-1234-5678"
                />
              </div>

              {/* 医療機関名 */}
              <div>
                <label htmlFor="clinicName" className="block text-sm font-semibold text-slate-700 mb-2">
                  医療機関名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="clinicName"
                  name="clinicName"
                  value={formData.clinicName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="○○歯科医院"
                />
              </div>
            </div>

            {/* 診療科目 */}
            <div>
              <label htmlFor="clinicType" className="block text-sm font-semibold text-slate-700 mb-2">
                診療科目 <span className="text-red-500">*</span>
              </label>
              <select
                id="clinicType"
                name="clinicType"
                value={formData.clinicType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              >
                <option value="">選択してください</option>
                <option value="dental">歯科</option>
                <option value="internal">内科</option>
                <option value="dermatology">皮膚科・美容皮膚科</option>
                <option value="ophthalmology">眼科</option>
                <option value="psychiatry">心療内科・精神科</option>
                <option value="orthopedics">整形外科</option>
                <option value="other">その他</option>
              </select>
            </div>

            {/* ご質問・ご要望 */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                ご質問・ご要望
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                placeholder="現在の課題やご要望をお聞かせください"
              />
            </div>

            {/* 送信ボタン */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors duration-200 text-lg shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    送信中...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    無料収益診断を申し込む
                  </>
                )}
              </button>
              
              <p className="text-sm text-slate-500 mt-4">
                ※ お申し込みいただいた情報は、診断結果の提供以外の目的では使用いたしません。
              </p>
            </div>
          </form>
        </div>

        {/* 信頼性の表示 */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm">SSL暗号化通信</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">個人情報保護法準拠</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm">24時間以内にご連絡</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

