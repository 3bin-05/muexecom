import React from "react";

// ✅ Custom Discord Logo (no lucide issues)
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

// ✅ Official WhatsApp logo (speech bubble with phone)
const WhatsAppLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.52 3.48A11.85 11.85 0 0012.01.5C6.13.5 1.5 5.13 1.5 11c0 1.95.53 3.86 1.54 5.57L.5 23.5l6.17-1.62A11.45 11.45 0 0012 22.5c5.88 0 10.51-4.63 10.51-10.5 0-2.8-1.08-5.42-3.99-8.52zM12.01 20.5c-1.1 0-2.18-.28-3.12-.8l-.22-.12-3.66.96.98-3.57-.14-.24A8.87 8.87 0 013.13 11c0-4.95 4.02-8.99 8.88-8.99 2.37 0 4.6.92 6.28 2.6 1.69 1.69 2.62 3.96 2.62 6.39 0 4.96-4.02 8.99-8.88 8.99z" />
    <path d="M17.3 14.1c-.26-.13-1.53-.76-1.77-.84-.24-.08-.42-.13-.6.13-.18.26-.69.84-.85 1.01-.16.18-.32.2-.58.07-.26-.13-1.09-.4-2.07-1.28-.77-.69-1.28-1.55-1.42-1.81-.14-.26-.02-.4.11-.53.12-.12.26-.32.39-.48.13-.16.17-.26.26-.43.09-.18.04-.33-.02-.46-.06-.13-.6-1.44-.82-1.97-.22-.52-.45-.45-.62-.46-.16-.01-.34-.01-.52-.01-.18 0-.46.07-.7.33-.24.26-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.73.13.17 1.86 2.84 4.51 3.88 3.14 1.26 3.14.84 3.71.79.57-.05 1.86-.74 2.12-1.46.26-.72.26-1.34.18-1.46-.07-.13-.24-.18-.5-.31z" />
  </svg>
);


const DISCORD_URL = "https://discord.gg/3EAuzhfy7V"; // ⚠️ Update your Discord link
const WHATSAPP_URL = "https://whatsapp.com/channel/0029VbBv02ECsU9LjmgbJh0Q"; // ⚠️ Update your WhatsApp invite link
const heroImg = "/dis.jpg"; // ⚠️ Update image path if needed

const JoinCard = () => {
  return (
    <aside
      className="w-full max-w-md bg-white rounded-2xl border-2 border-blue-200 shadow-lg p-6 
                      flex flex-col items-center text-center"
    >
      {/* Accent bar */}
      <div className="w-full h-1 rounded-full mb-4 bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500" />

      <h3 className="text-2xl font-bold text-slate-800 mb-2">
        Join μLearn SBC Discord server!
      </h3>

      <p className="text-sm text-slate-600 mb-6 px-2">
        Join our campus community so you don’t miss out on updates and events.
      </p>

      {/* Buttons row: Discord + WhatsApp */}
      <div className="flex items-center gap-3">
        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white font-medium 
                   shadow hover:bg-blue-700 transition-all min-w-[130px] justify-center"
          aria-label="Join Discord"
        >
          <DiscordLogo className="w-5 h-5" />
          <span className="text-sm">Discord</span>
        </a>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-slate-800 font-medium 
                     border border-green-200 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all min-w-[130px] justify-center"
          aria-label="Join WhatsApp"
        >
          {/* WhatsApp button uses green icon and a subtle modern outline to keep it elegant */}
          <div className="w-5 h-5 text-green-600">
            <WhatsAppLogo className="w-5 h-5" />
          </div>
          <span className="text-sm">WhatsApp</span>
        </a>
      </div>

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
