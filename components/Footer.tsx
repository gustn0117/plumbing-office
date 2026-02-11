export default function Footer() {
  return (
    <footer className="bg-brand-950 py-10 px-5 text-center md:pb-10 pb-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-8 bg-brand-800 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <span className="text-white/60 font-bold">
            배관<span className="text-brand-400">사무소</span>
          </span>
        </div>

        <div className="text-white/30 text-sm leading-loose">
          <p>대표전화: 010-0000-0000 | 24시간 연중무휴</p>
          <p className="mt-2">&copy; 2026 배관사무소. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
