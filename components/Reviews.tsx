"use client";

import AnimateIn from "./AnimateIn";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "김O희",
    location: "서울 강남구",
    initial: "김",
    color: "from-blue-500 to-blue-600",
    text: "처음 겪는 경우라 가격이나 비용 등 막막했는데, 배관사무소에서 상담받고 빠르게 해결됐습니다. 친절하고 꼼꼼한 서비스에 감동했어요.",
  },
  {
    name: "이O준",
    location: "경기 수원시",
    initial: "이",
    color: "from-emerald-500 to-emerald-600",
    text: "기사님 빠르게 해결해주시고 저희가 바꿨어야 하던 수전까지 무료로 해주셔서 너무 감사했어요. 만족해서 기쁩니다!",
  },
  {
    name: "박O수",
    location: "인천 부평구",
    initial: "박",
    color: "from-violet-500 to-violet-600",
    text: "대형 식당인데도 불구하고 차분하게 작업해주시고, 비용과 서비스 너무 만족합니다. 문제가 생기면 또 바로 연락하겠습니다.",
  },
  {
    name: "정O민",
    location: "부산 해운대구",
    initial: "정",
    color: "from-orange-500 to-orange-600",
    text: "아내가 기사님 친절하고 잘 뚫어주신다고 하네요. 주변에도 소개 많이 해야겠어요. 감사합니다!",
  },
];

export default function Reviews() {
  return (
    <section className="section-padding bg-gray-50" id="reviews">
      <div className="max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-14">
          <span className="inline-block bg-brand-50 text-brand-500 px-5 py-2 rounded-full text-sm font-semibold mb-5">
            고객님들이 직접 작성하신 생생후기!
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-900 tracking-tight">
            고객님들의 <span className="text-brand-500">리얼후기</span>
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-5">
          {reviews.map((r, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-500 group">
                {/* Quote icon */}
                <Quote className="absolute top-5 right-5 w-8 h-8 text-brand-100 group-hover:text-brand-200 transition-colors" />

                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${r.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  >
                    {r.initial}
                  </div>
                  <div>
                    <p className="font-bold text-brand-800">{r.name} 고객님</p>
                    <p className="text-gray-400 text-sm">{r.location}</p>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed text-[15px]">{r.text}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Chat style testimonials */}
        <AnimateIn delay={0.2} className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-brand-900 tracking-tight">
              이용해보신 고객님들은 다~ 알아요!
              <br />
              <span className="text-brand-500">고객님들의 이유 있는 선택!!</span>
            </h3>
          </div>

          <div className="max-w-lg mx-auto space-y-4">
            <AnimateIn delay={0.3} direction="left">
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-5 py-4 max-w-[85%] shadow-sm">
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    덕분에 싱크대 사용할 때 걱정 없겠어요.. 앞으로도 더 번창하세요
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.4} direction="right">
              <div className="flex justify-end">
                <div className="bg-brand-500 rounded-2xl rounded-br-md px-5 py-4 max-w-[85%] shadow-lg shadow-brand-500/20">
                  <p className="text-white text-[15px] leading-relaxed">
                    너무 다행입니다^^ 그럴일은 없겠지만 혹시라도 재발하거나 다른 문제
                    생기시면 언제든 편히 연락주세요 &#128522;
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.5} direction="left">
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-5 py-4 max-w-[85%] shadow-sm">
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    감사합니다. 아내가 기사님 친절하고 잘 뚫어주신다고 하네요.
                    주변에도 소개 많이 해야겠어요. &#127942;
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
