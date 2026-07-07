import React from 'react'

export default function LogoutConfirmDialog({ onConfirm, onCancel, soundEnabled, playSfx }) {
  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full border border-slate-100 shadow-2xl relative animate-slide-up text-center">
        {/* Warning Icon */}
        <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        {/* Title */}
        <h3 className="text-lg font-black text-slate-800">Confirm Logout</h3>

        {/* Message */}
        <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-2 leading-relaxed">
          Are you sure you want to log out? You will need to sign in again to access your account.
        </p>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <button
            onClick={() => {
              if (playSfx) playSfx('click', soundEnabled)
              onCancel()
            }}
            className="w-full py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-800 text-xs font-bold uppercase transition-all duration-200 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (playSfx) playSfx('click', soundEnabled)
              onConfirm()
            }}
            className="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-real-white text-xs font-bold uppercase transition-all duration-200 cursor-pointer shadow-md shadow-rose-500/15 hover:shadow-rose-500/25 active:scale-95"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
