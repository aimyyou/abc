import { Globe, ChevronRight, Info } from 'lucide-react';

const teams = [
  {
    id: 'team-korea',
    name: 'Team Korea',
    flag: '🇰🇷',
    description: '대한민국 국가대표팀. 평생을 엘리트 체육인으로서 훈련에 매진해 온 자랑스러운 선수들입니다.',
    athletes: [
      {
        name: '한채영',
        nameEn: 'Han Chae-young',
        age: 23,
        sport: '스피드 스케이팅',
        personality: '극도의 자존심과 승부욕을 지닌 완벽주의자. 겉으로는 차가워 보이지만 기록 향상을 향한 열정은 누구보다 뜨겁습니다.',
        features: '흑발, 군살 없는 탄탄한 근육질 체형',
        background: '유력한 금메달 후보였으나 아쉬운 실수로 메달을 놓친 후, 다음 경기를 위해 절치부심하고 있습니다.',
        image: 'https://i.postimg.cc/XrN5bW42/IMG-9090.webp'
      },
      {
        name: '윤세아',
        nameEn: 'Yoon Se-ah',
        age: 21,
        sport: '스피드 스케이팅',
        personality: '순진하고 부드러운 인상 뒤에 강한 호기심과 목표 의식을 감추고 있는 선수입니다.',
        features: '건강미 넘치는 체형, 순한 인상',
        background: '이번 올림픽에서 동메달을 획득하며 기쁨과 동시에 더 높은 곳을 향한 동경을 품고 있습니다.',
        image: 'https://i.postimg.cc/NKGXctBJ/IMG-9138.webp'
      },
      {
        name: '이해주',
        nameEn: 'Lee Hae-joo',
        age: 22,
        sport: '피겨 스케이팅',
        personality: '국민적 기대 속에서도 겉으로는 완벽한 프로페셔널함을 유지하지만, 내면에는 엄청난 부담감을 안고 있습니다.',
        features: '아이돌 같은 귀여운 외모, 압도적인 연기력',
        background: '한국에서 가장 인기 있는 스포츠 스타이자 유력한 금메달 후보. 대회 마지막 날 경기를 앞두고 있습니다.',
        image: 'https://i.postimg.cc/18RFQSsY/IMG-9179.webp'
      },
      {
        name: '송은채',
        nameEn: 'Song Eun-chae',
        age: 26,
        sport: '쇼트트랙',
        personality: '철저한 실력 지상주의자. 자신과 동급의 실력을 가진 선수만을 진정한 라이벌로 인정합니다.',
        features: '화려한 외모, 탄탄한 몸매',
        background: '이미 금메달을 획득한 쇼트트랙 최강자. 여유로운 챔피언의 면모를 보여줍니다.',
        image: 'https://i.postimg.cc/TK2b6xfN/IMG-9220.webp'
      },
      {
        name: '강지후',
        nameEn: 'Kang Ji-hoo',
        age: 20,
        sport: '스피드 스케이팅',
        personality: '선배들을 순수하게 존경하고 따르며, 기술 하나하나를 배우고자 하는 성실한 노력파입니다.',
        features: '소년 같은 얼굴과 대비되는 185cm의 장신, 탄탄한 피지컬',
        background: '어린 나이에 국가대표로 발탁된 유망주로, 팀의 막내로서 빠르게 성장하고 있습니다.',
        image: 'https://i.postimg.cc/zyDhrN8c/IMG-9262.webp'
      }
    ]
  },
  {
    id: 'international-stars',
    name: 'International Stars',
    flag: '🌐',
    description: '전 세계에서 모인 최정상급 스포츠 스타들. 압도적인 실력과 스타성으로 올림픽을 빛내고 있습니다.',
    athletes: [
      {
        name: '아눅 스미트',
        nameEn: 'Anouk Smit',
        age: 25,
        nationality: '네덜란드',
        flag: '🇳🇱',
        sport: '스피드 스케이팅',
        personality: '자신과 필적하거나 자신을 뛰어넘는 기록에 강한 집착과 승부욕을 보이는 현존 최강의 빙상 여제입니다.',
        features: '금발, 조각 같은 복근과 탄탄한 하체',
        background: '금메달 3관왕. 완벽한 실력과 외모로 수많은 팬을 보유하고 있으며, 오직 최고의 선수만을 인정합니다.',
        image: 'https://i.postimg.cc/v48nsybk/IMG-9302.webp'
      },
      {
        name: '아야카 나카노',
        nameEn: 'Ayaka Nakano',
        age: 21,
        nationality: '일본',
        flag: '🇯🇵',
        sport: '피겨 스케이팅',
        personality: '라이벌인 이해주 선수에게 강한 경쟁심을 느끼며, 훈련을 통해 극한의 스트레스를 해소합니다.',
        features: '청순한 외모, 슬림한 체형',
        background: '일본의 국민 여동생으로 불리며 엄청난 인기를 구가하고 있는 피겨 스타입니다.',
        image: 'https://i.postimg.cc/NKGXctBZ/IMG-9343.webp'
      },
      {
        name: '미켈 라르손',
        nameEn: 'Mikkel Larsson',
        age: 27,
        nationality: '네덜란드',
        flag: '🇳🇱',
        sport: '스피드 스케이팅',
        personality: '아름답고 강한 경쟁자를 보면 정복하고 싶어 하는 강렬한 승부욕의 소유자입니다.',
        features: '188cm의 큰 키, 완벽한 외모와 압도적인 피지컬',
        background: '금메달 4관왕. 뛰어난 실력과 매력적인 외모로 올림픽 최고의 스타 중 한 명으로 꼽힙니다.',
        image: 'https://i.postimg.cc/nXVmJxp6/IMG-9398.webp'
      },
      {
        name: '제이든 킴',
        nameEn: 'Jayden Kim',
        age: 26,
        nationality: '캐나다',
        flag: '🇨🇦',
        sport: '아이스 하키',
        personality: '아시아계 선수들에게 친근감을 느끼며, 경기장 안팎에서 열정적이고 순정적인 면모를 보입니다.',
        features: '한국계 혼혈, 흑발, 187cm의 거대한 체격과 강한 체력',
        background: '빙판 위를 장악하는 뛰어난 테크닉과 거친 플레이 스타일로 유명한 하키 선수입니다.',
        image: 'https://i.postimg.cc/tsR6jb9Q/IMG-9428.webp'
      },
      {
        name: '마이클 에반스',
        nameEn: 'Michael Evans',
        age: 28,
        nationality: '미국',
        flag: '🇺🇸',
        sport: '아이스 하키',
        personality: '자신감 넘치고 적극적인 성격으로, 팀의 분위기 메이커이자 핵심 전력입니다.',
        features: '190cm의 거대한 체구, 엄청난 근육질',
        background: '강한 체력과 압도적인 파워를 바탕으로 미국 하키팀을 이끄는 베테랑 선수입니다.',
        image: 'https://i.postimg.cc/Yv2FH7tM/IMG-9483.webp'
      }
    ]
  }
];

function OlympicRings() {
  return (
    <svg viewBox="0 0 100 45" className="w-16 h-auto">
      <circle cx="20" cy="20" r="14" fill="none" stroke="#0081C8" strokeWidth="3.5"/>
      <circle cx="50" cy="20" r="14" fill="none" stroke="#000000" strokeWidth="3.5"/>
      <circle cx="80" cy="20" r="14" fill="none" stroke="#EE334E" strokeWidth="3.5"/>
      <circle cx="35" cy="33" r="14" fill="none" stroke="#FCB131" strokeWidth="3.5"/>
      <circle cx="65" cy="33" r="14" fill="none" stroke="#00A651" strokeWidth="3.5"/>
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] font-sans text-slate-900 selection:bg-[#00205B] selection:text-white">
      {/* Top Bar */}
      <div className="bg-[#00205B] text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="flex items-center gap-2">
            <Globe className="w-3 h-3" />
            Official Website of the 20XX Winter Games
          </span>
          <span className="hidden sm:inline-block">Athletes' Village Portal</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <OlympicRings />
            <div className="h-8 w-px bg-gray-300 hidden sm:block"></div>
            <span className="font-black text-xl sm:text-2xl tracking-tighter text-[#00205B] uppercase italic">
              20XX Winter Games
            </span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wider text-gray-600">
            <a href="#team-korea" className="hover:text-[#00205B] transition-colors flex items-center gap-1">
              Team Korea <ChevronRight className="w-4 h-4" />
            </a>
            <a href="#international-stars" className="hover:text-[#00205B] transition-colors flex items-center gap-1">
              International Stars <ChevronRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-[#00205B] pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/wintergames/1920/1080')] bg-cover bg-center opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00205B] via-[#00205B]/80 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E5A823] text-[#00205B] text-xs font-black uppercase tracking-widest mb-6">
              <Info className="w-4 h-4" />
              Official Profiles
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 uppercase italic leading-none">
              Athletes'<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5A823] to-yellow-200">Village</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed font-medium max-w-2xl border-l-4 border-[#E5A823] pl-6">
              국적과 언어는 다르지만 '선수'라는 공통점 아래 모인 전 세계 최고들의 무대. 
              오직 경쟁과 열정만이 존재하는 20XX년 동계 올림픽 선수촌 공식 프로필 사이트입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Teams */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-16 relative z-10">
        {teams.map((team, index) => (
          <section key={team.id} id={team.id} className="mb-24 scroll-mt-32">
            <div className="bg-white p-8 shadow-lg border-t-4 border-[#00205B] mb-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{team.flag}</span>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase italic text-[#00205B]">{team.name}</h2>
              </div>
              <p className="text-gray-600 text-lg font-medium">{team.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.athletes.map((athlete, i) => (
                <AthleteCard key={athlete.name} athlete={athlete} teamFlag={team.flag} index={i} />
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-[#00153B] text-white py-16 border-t-8 border-[#E5A823]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-8">
          <OlympicRings />
          <div className="space-y-4">
            <h3 className="font-black text-2xl tracking-widest uppercase italic">20XX Winter Games</h3>
            <p className="text-sm text-blue-200 uppercase tracking-widest font-bold">Official Athletes' Village Portal</p>
          </div>
          <div className="h-px w-24 bg-blue-800" />
          <p className="text-xs text-blue-400 uppercase tracking-wider">
            © 20XX Olympic Committee. All rights reserved.<br/>
            Confidential and Official Data.
          </p>
        </div>
      </footer>
    </div>
  );
}

function AthleteCard({ athlete, teamFlag, index }: { athlete: any, teamFlag: string, index: number, key?: string }) {
  return (
    <div
      className="bg-white shadow-xl border border-gray-200 flex flex-col relative animate-fade-in-up hover:-translate-y-1 transition-transform duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Olympic Color Strip */}
      <div className="h-2 w-full flex">
        <div className="flex-1 bg-[#0081C8]"></div>
        <div className="flex-1 bg-[#FCB131]"></div>
        <div className="flex-1 bg-[#000000]"></div>
        <div className="flex-1 bg-[#00A651]"></div>
        <div className="flex-1 bg-[#EE334E]"></div>
      </div>
      
      {/* Image */}
      <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden group">
        <img 
          src={athlete.image} 
          alt={athlete.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00205B] via-[#00205B]/20 to-transparent opacity-90" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white text-3xl font-black uppercase italic tracking-wide leading-none mb-1">{athlete.name}</h3>
          <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">{athlete.nameEn}</p>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] font-black uppercase tracking-widest text-[#00205B] shadow-sm">
          Official
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col gap-5 flex-1">
        <div className="flex justify-between items-center border-b-2 border-gray-100 pb-4">
          <span className="text-[#00205B] font-black uppercase tracking-widest text-sm">{athlete.sport}</span>
          <div className="flex items-center gap-2">
            {athlete.nationality && <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{athlete.nationality}</span>}
            <span className="text-2xl leading-none">{athlete.flag || teamFlag}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
          <div className="flex flex-col">
            <span className="text-gray-400 text-[10px] uppercase tracking-widest font-black mb-1">Age</span>
            <span className="font-bold text-gray-900">{athlete.age}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 text-[10px] uppercase tracking-widest font-black mb-1">Physical</span>
            <span className="font-bold text-gray-900 line-clamp-1" title={athlete.features}>{athlete.features.split(',')[0]}</span>
          </div>
        </div>
        
        <div className="flex flex-col mt-2">
           <span className="text-gray-400 text-[10px] uppercase tracking-widest font-black mb-1">Personality</span>
           <p className="text-xs text-gray-700 leading-relaxed font-medium">{athlete.personality}</p>
        </div>
        
        <div className="flex flex-col mt-auto pt-4">
           <span className="text-gray-400 text-[10px] uppercase tracking-widest font-black mb-2">Background</span>
           <p className="text-xs text-gray-700 leading-relaxed bg-gray-50 p-3 border-l-4 border-[#E5A823] font-medium">
             {athlete.background}
           </p>
        </div>
      </div>
    </div>
  );
}
