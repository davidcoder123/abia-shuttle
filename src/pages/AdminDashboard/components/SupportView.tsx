import React, { useState } from 'react';
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  Play, 
  MessageSquare, 
  Phone, 
  Mail, 
  ChevronRight, 
  FileText, 
  Video, 
  ExternalLink,
  Check,
  X,
  Radio
} from 'lucide-react';

export const SupportView: React.FC = () => {
  const [supportSearch, setSupportSearch] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'agent'; text: string; time: string }>>([
    { sender: 'agent', text: 'Telemetry operations control online. How can we assist with your interstate routing or terminal dispatcher setup today?', time: 'Just now' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setChatMessages(prev => [
      ...prev,
      { sender: 'user', text: userMsg, time: 'Just now' }
    ]);
    setChatInput('');

    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        {
          sender: 'agent',
          text: `Acknowledged ticket regarding "${userMsg.slice(0, 30)}...". Central dispatcher engineer has prioritized your terminal node request.`,
          time: 'Just now'
        }
      ]);
    }, 800);
  };

  const FAQS = [
    {
      q: 'How do I add a newly registered bus to an active route?',
      a: 'Navigate to the Fleet tab, click "+ Add New Bus" to register the vehicle specifications and plate number. Next, open the Routes tab and assign that vehicle to your preferred departure schedule.'
    },
    {
      q: 'How does live occupancy tracking calculate passenger loads?',
      a: 'Occupancy is computed automatically from confirmed ticket bookings and mobile scanner check-ins at terminal boarding gates, updated every 30 seconds.'
    },
    {
      q: 'Can I set custom pricing for festive or peak holiday rush periods?',
      a: 'Yes, edit any route in the Route & Scheduling tab and adjust the "Price Per Seat (₦)". Real-time booking channels will reflect the updated tariff instantly.'
    },
    {
      q: 'What should a driver do if a vehicle encounters a breakdown en route?',
      a: 'The terminal operator can mark the bus status as "Maintenance" or "Delayed", which triggers an automatic dispatch notification and alternative vehicle assignment.'
    }
  ];

  return (
    <div className="flex flex-col max-w-[1440px] mx-auto w-full space-y-8 animate-in fade-in duration-200">
      {/* Hero Search Section */}
      <div className="bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-orange-500/[0.05] border border-white/10 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
        <div className="max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-[11px] font-mono font-bold text-orange-400 mb-4 shadow-sm">
            <Radio className="w-3.5 h-3.5 animate-pulse text-orange-400" />
            <span>24/7 OPERATIONS DISPATCH & TELEMETRY DESK</span>
          </div>
          <h2 className="text-[28px] sm:text-[34px] font-bold tracking-tight leading-tight text-white">
            Operational Knowledge & Telemetry Docs
          </h2>
          <p className="text-[13px] text-slate-400 mt-2 mb-6 leading-relaxed">
            Search maintenance manuals, terminal standard operating procedures, dynamic pricing rules, and fleet diagnostic protocols.
          </p>

          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-3.5 text-slate-500" />
            <input
              type="text"
              value={supportSearch}
              onChange={(e) => setSupportSearch(e.target.value)}
              placeholder="Search guides (e.g. corridor dispatch, speed governors, ticket manifests)..."
              className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-[14px] text-white placeholder:text-slate-500 outline-none shadow-xl focus:border-orange-500/50 focus:bg-white/10 transition-all font-medium"
            />
          </div>
        </div>

        {/* Ambient subtle glow */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-orange-500/10 to-transparent pointer-events-none hidden md:block" />
      </div>

      {/* 4 Common Topic Bento Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: 'Fleet Onboarding',
            desc: 'Registering buses, models, capacity and telemetry devices',
            icon: BookOpen,
            articles: '12 guides'
          },
          {
            title: 'Route Scheduling',
            desc: 'Creating interstate timetables and price per seat rules',
            icon: FileText,
            articles: '18 guides'
          },
          {
            title: 'Passenger Bookings',
            desc: 'Ticket allocations, manifests and seat reservations',
            icon: Check,
            articles: '9 guides'
          },
          {
            title: 'Maintenance Bays',
            desc: 'Handling service tickets, mechanics logs and spare parts',
            icon: HelpCircle,
            articles: '14 guides'
          },
        ].map((topic, i) => {
          const Icon = topic.icon;
          return (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 shadow-xl hover:border-orange-500/40 hover:bg-white/[0.05] transition-all cursor-pointer group backdrop-blur-xl"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-orange-400 flex items-center justify-center mb-3 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-[15px] font-bold text-white tracking-tight">{topic.title}</h3>
              <p className="text-[12px] text-slate-400 mt-1 leading-relaxed">{topic.desc}</p>
              <span className="text-[11px] font-mono font-bold text-orange-400 mt-3.5 inline-flex items-center gap-1">
                {topic.articles} <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          );
        })}
      </div>

      {/* Lower Section: Video Tutorials & FAQs + Live Contact */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Video Tutorials & FAQ accordion */}
        <div className="lg:col-span-2 space-y-6">
          {/* Video Tutorials */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-xl">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-[18px] font-bold text-white tracking-tight">Operator Training Modules</h3>
                <p className="text-[12px] text-slate-400">Step-by-step visual training for dispatch teams</p>
              </div>
              <Video className="w-5 h-5 text-orange-400" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  title: 'Terminal Dispatch Masterclass',
                  duration: '04:30',
                  thumb: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&auto=format&fit=crop&q=60'
                },
                {
                  title: 'Corridor Dynamic Pricing & Yield',
                  duration: '06:15',
                  thumb: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&auto=format&fit=crop&q=60'
                },
                {
                  title: 'Telemetry Telemetry Diagnostics',
                  duration: '08:45',
                  thumb: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=500&auto=format&fit=crop&q=60'
                }
              ].map((vid, idx) => (
                <div
                  key={idx}
                  onClick={() => setPlayingVideo(vid.title)}
                  className="rounded-xl border border-white/10 overflow-hidden group cursor-pointer hover:border-orange-500/40 transition-all flex flex-col bg-white/[0.02]"
                >
                  <div className="relative h-28 bg-[#040608] overflow-hidden">
                    <img
                      src={vid.thumb}
                      alt={vid.title}
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-orange-500 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/80 text-[10px] font-mono text-orange-400 border border-white/10">
                      {vid.duration}
                    </span>
                  </div>
                  <div className="p-3 flex-1 flex flex-col justify-between">
                    <p className="text-[12px] font-bold text-white line-clamp-2 leading-tight">
                      {vid.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-xl">
            <h3 className="text-[18px] font-bold text-white tracking-tight mb-4">Operations Knowledge Base</h3>
            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-white/10 rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full text-left p-4 bg-white/[0.02] hover:bg-white/[0.05] flex items-center justify-between font-semibold text-[13px] text-white transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronRight
                        className={`w-4 h-4 text-slate-400 transition-transform ${
                          isOpen ? 'rotate-90 text-orange-400' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 bg-white/[0.01] text-[13px] text-slate-300 leading-relaxed border-t border-white/10 font-normal">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right 1 Col: Direct Support & Contact */}
        <div className="space-y-4">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-xl">
            <h3 className="text-[15px] font-bold text-white font-mono mb-1">OPERATIONS DISPATCH LINE</h3>
            <p className="text-[12px] text-slate-400 mb-4">
              Need urgent escalation resolving corridor collision, route deviation, or scanner sync error?
            </p>

            <div className="space-y-3 mb-5">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <Phone className="w-4 h-4 text-orange-400" />
                <div>
                  <p className="text-[10px] text-slate-400 font-mono font-bold uppercase">Operations Hotline</p>
                  <p className="text-[13px] font-mono font-bold text-white">+234 (0) 800-SHUTTLE</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <Mail className="w-4 h-4 text-orange-400" />
                <div>
                  <p className="text-[10px] text-slate-400 font-mono font-bold uppercase">Technical Email</p>
                  <p className="text-[13px] font-mono font-bold text-white">ops@shuttleadmin.com</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsLiveChatOpen(true)}
              className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-400 active:scale-98 text-black rounded-xl font-mono font-bold text-[12px] uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 stroke-[3]" />
              <span>LAUNCH LIVE DISPATCH CHAT</span>
            </button>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-2xl p-5 backdrop-blur-xl">
            <h4 className="text-[13px] font-mono font-bold text-orange-400 mb-1">SYSTEM OPERATIONAL STATUS</h4>
            <p className="text-[11px] text-slate-300 mb-2">All cloud API services, GPS pods and SMS gateways operational.</p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-orange-400">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse shadow-[0_0_8px_#FF6200]" />
              <span>100% Uptime across all 42 Nodes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {playingVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
          <div className="bg-[#0a0c10] border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl backdrop-blur-2xl">
            <div className="p-4 bg-white/[0.02] flex items-center justify-between text-white border-b border-white/10">
              <h3 className="text-[14px] font-mono font-bold">{playingVideo}</h3>
              <button onClick={() => setPlayingVideo(null)} className="text-slate-400 hover:text-white cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video bg-black/60 flex flex-col items-center justify-center p-8 text-center text-white">
              <Play className="w-16 h-16 text-orange-400 mb-3 animate-pulse" />
              <p className="text-[16px] font-bold mb-1">Interactive Training Simulation</p>
              <p className="text-[12px] text-slate-400 max-w-md">
                Tutorial preview running for {playingVideo}. Live high-definition video feeds are streamed from the enterprise CDN.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Live Chat Modal */}
      {isLiveChatOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="bg-[#0a0c10]/95 border border-white/10 rounded-2xl w-full max-w-md shadow-2xl flex flex-col h-[520px] overflow-hidden backdrop-blur-2xl">
            <div className="p-4 bg-white/[0.02] text-white flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse shadow-[0_0_8px_#FF6200]" />
                <div>
                  <h3 className="text-[14px] font-mono font-bold leading-none">Operations Dispatch Desk</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">Online - Avg reply latency: 45s</p>
                </div>
              </div>
              <button
                onClick={() => setIsLiveChatOpen(false)}
                className="text-slate-400 hover:text-white p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-black/20">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-orange-500 text-black font-semibold rounded-br-none shadow-md shadow-orange-500/20'
                        : 'bg-white/5 border border-white/10 text-slate-200 rounded-bl-none shadow-lg'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 mt-1 px-1">{msg.time}</span>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendChat} className="p-3.5 border-t border-white/10 bg-white/[0.02] flex items-center gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type dispatch query..."
                className="flex-1 px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[13px] text-white placeholder:text-slate-500 outline-none focus:border-orange-500/50"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-orange-500 hover:bg-orange-400 text-black font-mono font-bold text-[12px] rounded-xl transition-colors cursor-pointer shadow-lg shadow-orange-500/20"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
