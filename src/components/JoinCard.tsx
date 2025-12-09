import React from "react";
import dis from "/public/dis.jpg";
const DiscordLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.249a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.249.077.077 0 00-.079-.037 19.736 19.736 0 00-4.885 1.515.07.07 0 00-.032.027C2.02 7.89 1.373 11.393 1.666 14.847a.082.082 0 00.031.056 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.027 13.9 13.9 0 001.2-1.958.076.076 0 00-.041-.108 13.1 13.1 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 01.077-.01 12.44 12.44 0 0011.174 0 .074.074 0 01.078.009c.12.099.246.198.372.292a.077.077 0 01-.006.128 12.25 12.25 0 01-1.873.891.076.076 0 00-.04.109 13.36 13.36 0 001.199 1.957.076.076 0 00.084.028 19.9 19.9 0 005.994-3.03.077.077 0 00.03-.055c.5-5.177-.838-8.65-3.548-12.452a.061.061 0 00-.031-.03zM8.02 14.641c-1.182 0-2.155-1.086-2.155-2.419 0-1.333.956-2.419 2.155-2.419 1.21 0 2.174 1.096 2.155 2.419 0 1.333-.956 2.419-2.155 2.419zm7.974 0c-1.182 0-2.155-1.086-2.155-2.419 0-1.333.956-2.419 2.155-2.419 1.21 0 2.174 1.096 2.155 2.419 0 1.333-.945 2.419-2.155 2.419z" />
  </svg>
);

const DISCORD_URL = "https://discord.gg/RzmuY3FaWe"; // ⚠️ Update your Discord link
const heroImg = dis; // ⚠️ Update image path

const JoinCard = () => {
  return (
    <aside className="w-full max-w-md bg-white rounded-2xl border-2 border-blue-200 shadow-lg p-6 
                      flex flex-col items-center text-center">
      
      {/* Accent bar */}
      <div className="w-full h-1 rounded-full mb-4 bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500" />

      <h3 className="text-2xl font-bold text-slate-800 mb-2">
        Join μLearn SBC Discord server!
      </h3>

      <p className="text-sm text-slate-600 mb-6 px-2">
        Join our campus community so you don’t miss out on updates and events.
      </p>

      {/* Discord Button */}
      <a
        href={DISCORD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium 
                   shadow hover:bg-blue-700 transition-all"
      >
        <DiscordLogo className="w-5 h-5" />
        Join Discord
      </a>

      {/* Image */}
      <div className="w-full flex justify-center mt-6">
        <img
          src={heroImg}
          alt="μLearn illustration"
          className="w-full max-w-xs object-contain rounded-lg"
        />
      </div>

      <p className="text-xs text-slate-400 mt-4">
        Stay connected with the community!
      </p>
    </aside>
  );
};

export default JoinCard;
