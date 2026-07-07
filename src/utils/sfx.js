// Web Audio API Sound Generator
export const playSfx = (type, enabled) => {
  if (!enabled) return
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    if (!AudioContext) return
    const ctx = new AudioContext()
    
    if (type === 'click') {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.type = 'sine'
      osc.frequency.setValueAtTime(450, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.08)
      gain.gain.setValueAtTime(0.06, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08)
      osc.start()
      osc.stop(ctx.currentTime + 0.08)
    } else if (type === 'correct') {
      const now = ctx.currentTime
      const playTone = (freq, start, duration) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.type = 'triangle'
        osc.frequency.setValueAtTime(freq, start)
        gain.gain.setValueAtTime(0, start)
        gain.gain.linearRampToValueAtTime(0.12, start + 0.02)
        gain.gain.exponentialRampToValueAtTime(0.001, start + duration)
        osc.start(start)
        osc.stop(start + duration)
      }
      playTone(523.25, now, 0.15) // C5
      playTone(659.25, now + 0.07, 0.15) // E5
      playTone(783.99, now + 0.14, 0.25) // G5
      playTone(1046.50, now + 0.22, 0.4) // C6
    } else if (type === 'incorrect') {
      const now = ctx.currentTime
      const playBuzz = (freq, start, duration) => {
        const osc1 = ctx.createOscillator()
        const osc2 = ctx.createOscillator()
        const gain = ctx.createGain()
        osc1.connect(gain)
        osc2.connect(gain)
        gain.connect(ctx.destination)
        
        osc1.type = 'sawtooth'
        osc2.type = 'triangle'
        osc1.frequency.setValueAtTime(freq, start)
        osc2.frequency.setValueAtTime(freq - 4, start)
        osc1.frequency.linearRampToValueAtTime(freq - 25, start + duration)
        
        gain.gain.setValueAtTime(0.08, start)
        gain.gain.exponentialRampToValueAtTime(0.001, start + duration)
        
        osc1.start(start)
        osc2.start(start)
        osc1.stop(start + duration)
        osc2.stop(start + duration)
      }
      playBuzz(140, now, 0.2)
      playBuzz(120, now + 0.1, 0.25)
    } else if (type === 'complete') {
      const now = ctx.currentTime
      const playTone = (freq, start, duration, type = 'sine') => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.type = type
        osc.frequency.setValueAtTime(freq, start)
        gain.gain.setValueAtTime(0, start)
        gain.gain.linearRampToValueAtTime(0.08, start + 0.05)
        gain.gain.exponentialRampToValueAtTime(0.001, start + duration)
        osc.start(start)
        osc.stop(start + duration)
      }
      playTone(261.63, now, 0.25, 'triangle') // C4
      playTone(329.63, now, 0.25, 'triangle') // E4
      playTone(392.00, now, 0.25, 'triangle') // G4
      
      playTone(329.63, now + 0.2, 0.25, 'triangle') // E4
      playTone(392.00, now + 0.2, 0.25, 'triangle') // G4
      playTone(523.25, now + 0.2, 0.25, 'triangle') // C5
      
      playTone(523.25, now + 0.4, 0.5, 'triangle') // C5
      playTone(659.25, now + 0.4, 0.5, 'triangle') // E5
      playTone(783.99, now + 0.4, 0.5, 'triangle') // G5
      playTone(1046.50, now + 0.4, 0.7, 'sine') // C6
    }
  } catch (e) {
    console.error("Audio error:", e)
  }
}
