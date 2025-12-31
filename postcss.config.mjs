const config = {
  plugins: {
    "@tailwindcss/postcss": {<div class="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white flex flex-col items-center justify-between py-12 px-6">},
  },
};

export default config;<h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-gold to-yellow-300 bg-clip-text text-transparent text-center">
  TIMEŒ OMNIA
</h1>
<p class="text-xl md:text-2xl mt-3 opacity-80 text-center font-light">
  Tempus Omnia Revelat
</p>
<div class="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md border border-purple-500/20 shadow-2xl">
<p class="text-lg opacity-70 text-center">Time Banked</p>
<p class="text-5xl md:text-6xl font-bold my-4 text-gold text-center">
  {timeBanked} units
</p>
<p class="text-sm opacity-60 text-center mb-8">
  Streak: {streak} days 🔥
</p>
<button class="w-full bg-gradient-to-r from-yellow-400 via-gold to-yellow-500 text-black font-bold text-2xl px-12 py-6 rounded-full shadow-2xl hover:from-yellow-500 hover:to-gold transform hover:scale-105 transition-all duration-300">
  Start 25min Focus → Earn $TIME
</button>
<p class="text-7xl md:text-8xl font-mono font-bold text-gold text-center">
  {formattedTimer}
</p>
<p class="text-lg mt-6 opacity-80 text-center">Focus in progress…</p>
 <div class="mt-12 text-center">
  <!-- TonConnectButton will appear here -->
  <p class="mt-4 text-green-400 font-semibold opacity-0 transition-opacity">Wallet connected!</p>
</div>
<p class="mt-12 text-sm opacity-60 text-center leading-relaxed">
  Invite friends → Both earn bonus rewards!<br/>
  Share your link:
  <span class="text-gold font-medium">https://t.me/TIMEŒBot/app?startapp=ref_you</span>
</p>
theme: {
  extend: {
    colors: {
      gold: '#FFD700',
      'gold-light': '#FFED4E',
    },
  },
}
