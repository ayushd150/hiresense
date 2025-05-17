"use client";
import { useUser } from "../../../../context/UserContext";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes"; // Assuming you're using next-themes for theme management

function Welcome() {
  const { user } = useUser();
  const { theme } = useTheme();
  
  return (
    <div className="my-8 mx-4 sm:mx-0 rounded-xl transition-all duration-300
      dark:bg-slate-800/70 bg-white
      shadow-lg hover:shadow-xl
      border border-slate-200 dark:border-slate-700">
      
      <div className="relative p-6 overflow-hidden">
        {/* Decorative accent */}
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500"></div>
        
        {/* Content wrapper with left padding to account for accent bar */}
        <div className="pl-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                Welcome to Hiresense,{" "}
                <span className="text-teal-600 dark:text-teal-400">
                  {user?.user_metadata?.name}
                </span>!
              </h1>
              <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm sm:text-base">
                Ready to start your hiring journey?
              </p>
            </div>
            
            {user?.user_metadata?.avatar_url && (
              <div className="relative rounded-full overflow-hidden w-12 h-12 sm:w-14 sm:h-14 ring-2 ring-teal-500 dark:ring-teal-400 ring-offset-2 ring-offset-white dark:ring-offset-slate-800">
                <Image
                  src={user?.user_metadata?.avatar_url}
                  alt="Profile Picture"
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
            )}
          </div>
          
          {/* Status indicators/quick stats (optional) */}
          <div className="mt-4 flex flex-wrap gap-3">
            <div className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-xs text-teal-700 dark:text-teal-300 flex items-center">
              <div className="w-2 h-2 rounded-full bg-teal-500 dark:bg-teal-400 mr-2"></div>
              Premium Account
            </div>
            <div className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700/50 text-xs text-slate-700 dark:text-slate-300 flex items-center">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Member since {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;