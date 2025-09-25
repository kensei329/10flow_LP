'use client'

import { useState } from 'react'

export default function CTAForm() {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <section id="consultation" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* メインCTA */}
        <div className="text-center text-white mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            今すぐ始めませんか？
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            無料収益診断で、貴院の自由診療における<br />
            具体的な改善ポイントと収益向上の可能性を明確にします
          </p>
          
          {/* 特典 */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-12">
            <svg className="w-6 h-6 text-yellow-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-white font-semibold">
              今なら診断結果レポート（通常5万円相当）を無料プレゼント
            </span>
          </div>
        </div>

        {/* 2ステップフォーム */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* ステップインジケーター */}
          <div className="bg-slate-50 px-8 py-6">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-4">
                <div className={`flex items-center ${currentStep >= 1 ? 'text-blue-600' : 'text-slate-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold border-2 
                    ${currentStep >= 1 ? 'bg-blue-600 text-white border-blue-600' : 'border-slate-300'}`}>
                    1
                  </div>
                  <span className="ml-2 font-medium">基本情報</span>
                </div>
                <div className="w-8 h-1 bg-slate-300 rounded-full">
                  <div className={`h-full bg-blue-600 rounded-full transition-all duration-300 
                    ${currentStep >= 2 ? 'w-full' : 'w-0'}`}></div>
                </div>
                <div className={`flex items-center ${currentStep >= 2 ? 'text-blue-600' : 'text-slate-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold border-2 
                    ${currentStep >= 2 ? 'bg-blue-600 text-white border-blue-600' : 'border-slate-300'}`}>
                    2
                  </div>
                  <span className="ml-2 font-medium">詳細・送信</span>
                </div>
              </div>
            </div>
          </div>

          {/* フォーム内容 */}
          <div className="p-8 lg:p-12">
            {currentStep === 1 ? (
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">
                  まずは基本情報をお聞かせください
                </h3>
                <p className="text-slate-600 text-center mb-8">
                  簡単な情報で診断を開始できます（約30秒）
                </p>

                <form className="space-y-6 max-w-2xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        医院名 <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="例：○○歯科クリニック"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        診療科目 <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                        <option value="">選択してください</option>
                        <option value="dental">歯科</option>
                        <option value="medical">内科・総合診療</option>
                        <option value="dermatology">皮膚科・美容皮膚科</option>
                        <option value="ophthalmology">眼科</option>
                        <option value="psychiatry">心療内科・精神科</option>
                        <option value="orthopedics">整形外科</option>
                        <option value="other">その他</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="例：田中 太郎"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        役職 <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                        <option value="">選択してください</option>
                        <option value="director">理事長・院長</option>
                        <option value="manager">事務長・マネージャー</option>
                        <option value="doctor">医師・歯科医師</option>
                        <option value="staff">スタッフ</option>
                        <option value="other">その他</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="例：tanaka@clinic.com"
                      required
                    />
                  </div>

                  <button 
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="w-full bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors text-lg"
                  >
                    次へ進む（詳細情報の入力）
                    <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">
                  より具体的な診断のために
                </h3>
                <p className="text-slate-600 text-center mb-8">
                  詳細な情報で、より精密な診断結果をお届けします
                </p>

                {/* Googleフォーム埋め込みエリア */}
                <div className="bg-slate-50 rounded-xl p-8 text-center">
                  <div className="mb-6">
                    <svg className="w-16 h-16 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      詳細診断フォーム
                    </h4>
                    <p className="text-slate-600 mb-6">
                      以下のフォームで、現在の課題や目標についてお聞かせください
                    </p>
                  </div>

                  {/* Googleフォーム埋め込み予定エリア */}
                  <div className="bg-white rounded-lg p-6 border-2 border-dashed border-slate-300 text-slate-500">
                    <p className="mb-4">
                      ここにGoogleフォームを埋め込みます
                    </p>
                    <p className="text-sm">
                      実際の実装時に、以下の内容を含むGoogleフォームを作成・埋め込み：<br />
                      • 現在の自由診療メニューと価格<br />
                      • 月間患者数・売上規模<br />
                      • 主な課題・困りごと<br />
                      • 目標・期待する成果<br />
                      • 希望連絡方法・時間帯
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <button 
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="flex-1 bg-slate-200 text-slate-700 font-semibold py-3 px-6 rounded-lg hover:bg-slate-300 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      戻る
                    </button>
                    <button 
                      type="button"
                      className="flex-1 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                      onClick={() => {
                        // 実際の実装時はGoogleフォームへのリダイレクト
                        alert('Googleフォームページに移動します（実装時）')
                      }}
                    >
                      詳細フォームを開く
                      <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 安心要素 */}
        <div className="mt-12 text-center text-blue-100">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              SSL暗号化通信で安全
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              営業電話は一切なし
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              24時間以内にご返答
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
