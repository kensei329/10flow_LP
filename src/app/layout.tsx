import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: "10flow（テンフロー）- 自由診療で10歳若く健康的な日々を、正しく、収益的に",
  description: "自由診療を導入・強化したい医療機関（歯科・クリニック）向けの総合ソリューション。患者価値×収益性×倫理性を両立し、健康寿命の延伸と自然な美の追求をサポートします。AI価格戦略、決済システム、サブスクリプション等を統合。",
  keywords: "自由診療, 医療機関, クリニック, 歯科, 収益最適化, 患者価値, 健康寿命, アンチエイジング, AI価格戦略, 医療DX",
  authors: [{ name: "10flow Team" }],
  creator: "10flow",
  publisher: "10flow",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": 160,
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://10flow.com",
    siteName: "10flow（テンフロー）",
    title: "10flow（テンフロー）- 自由診療で10歳若く健康的な日々を",
    description: "自由診療を導入・強化したい医療機関向けの総合ソリューション。患者価値×収益性×倫理性を両立し、健康寿命の延伸と自然な美の追求をサポート。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "10flow（テンフロー）- 自由診療の価値創造プラットフォーム",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@10flow_official",
    creator: "@10flow_official",
    title: "10flow（テンフロー）- 自由診療で10歳若く健康的な日々を",
    description: "自由診療を導入・強化したい医療機関向けの総合ソリューション",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://10flow.com",
    languages: {
      "ja-JP": "https://10flow.com",
      "en-US": "https://10flow.com/en",
    },
  },
  category: "Healthcare Technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        {/* 構造化データ - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "10flow（テンフロー）",
              "alternateName": "10flow",
              "url": "https://10flow.com",
              "logo": "https://10flow.com/logo.png",
              "description": "自由診療を導入・強化したい医療機関向けの総合ソリューション。患者価値×収益性×倫理性を両立し、健康寿命の延伸と自然な美の追求をサポート。",
              "foundingDate": "2024",
              "industry": "Healthcare Technology",
              "numberOfEmployees": "10-50",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "JP",
                "addressRegion": "Tokyo"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+81-3-xxxx-xxxx",
                "email": "info@10flow.com",
                "contactType": "Customer Service",
                "availableLanguage": ["Japanese", "English"]
              },
              "sameAs": [
                "https://twitter.com/10flow_official",
                "https://linkedin.com/company/10flow"
              ]
            })
          }}
        />

        {/* 構造化データ - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "10flow自由診療ソリューション",
              "provider": {
                "@type": "Organization",
                "name": "10flow（テンフロー）"
              },
              "description": "医療機関向け自由診療の収益最適化・患者価値向上を実現する統合プラットフォーム",
              "serviceType": "Healthcare Technology Platform",
              "areaServed": {
                "@type": "Country",
                "name": "Japan"
              },
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": "https://10flow.com",
                "servicePhone": "+81-3-xxxx-xxxx"
              },
              "offers": {
                "@type": "Offer",
                "description": "自由診療収益最適化ソリューション",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "priceCurrency": "JPY",
                  "price": "要相談"
                }
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI価格戦略提案",
                      "description": "周辺競合分析と需要予測による適正価格提案"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "稼働率平準化システム",
                      "description": "時間帯別価格設定で稼働ムラを解消"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "サブスクリプション設計",
                      "description": "継続収益モデルの構築"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* 構造化データ - FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "10flowとは何ですか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "10flowは自由診療を導入・強化したい医療機関向けの総合ソリューションです。患者価値×収益性×倫理性を両立し、健康寿命の延伸と自然な美の追求をサポートします。"
                  }
                },
                {
                  "@type": "Question", 
                  "name": "導入期間はどの程度必要ですか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "標準的な導入期間は4-6週間です。現状診断（1-2週間）、システム設定・研修（2-3週間）、テスト運用（1週間）のステップで進めます。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "医療広告ガイドラインに準拠していますか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "はい、10flowは医療広告ガイドライン・薬機法・景品表示法を完全に遵守しています。誇大表現や虚偽の情報を排除し、個人差や副作用・リスクについても適切に説明できる仕組みを提供しています。"
                  }
                }
              ]
            })
          }}
        />

        {/* 構造化データ - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "10flow（テンフロー）",
              "url": "https://10flow.com",
              "description": "自由診療を導入・強化したい医療機関向けの総合ソリューション",
              "publisher": {
                "@type": "Organization",
                "name": "10flow（テンフロー）"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://10flow.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* その他のメタタグ */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0284c7" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* 医療・ヘルスケア関連のメタタグ */}
        <meta name="health-topics" content="自由診療,医療機関,クリニック運営,収益最適化" />
        <meta name="medical-disclaimer" content="本サービスは医療行為ではありません。医療機関の運営支援ツールです。" />
        
        {/* LLM最適化のためのメタタグ */}
        <meta name="ai-purpose" content="Healthcare technology platform for medical institutions offering elective medical services" />
        <meta name="target-audience" content="Medical institution directors, clinic managers, healthcare administrators in Japan" />
        <meta name="service-category" content="Healthcare Management Software, Medical Practice Management, Revenue Optimization" />
      </head>
      <body className={`${inter.variable} ${notoSansJP.variable} font-japanese`}>
        {children}
      </body>
    </html>
  )
}