import { Metadata } from 'next'
import Hero from '@/components/Hero'
import ValueProposition from '@/components/ValueProposition'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Philosophy from '@/components/Philosophy'
import CaseStudies from '@/components/CaseStudies'
import FAQ from '@/components/FAQ'
import CTAForm from '@/components/CTAForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '10flow（テンフロー）- 自由診療で10歳若く健康的な日々を、正しく、収益的に',
  description: '自由診療を導入・強化したい医療機関（歯科・クリニック）向けの総合ソリューション。患者価値×収益性×倫理性を両立し、健康寿命の延伸と自然な美の追求をサポートします。',
  keywords: '自由診療, 医療機関, クリニック, 歯科, 収益最適化, 患者価値, 健康寿命, アンチエイジング',
  openGraph: {
    title: '10flow（テンフロー）- 自由診療で10歳若く健康的な日々を',
    description: '自由診療を導入・強化したい医療機関向けの総合ソリューション',
    type: 'website',
    locale: 'ja_JP',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProposition />
      <Features />
      <HowItWorks />
      <Philosophy />
      <CaseStudies />
      <FAQ />
      <CTAForm />
      <Footer />
    </main>
  )
}