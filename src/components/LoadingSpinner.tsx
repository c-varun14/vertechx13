export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f131d]" style={{ imageRendering: 'pixelated' }}>
      <div className="flex flex-col items-center space-y-4 p-8 bg-[#111724] border-4 border-[#d4a72c]" style={{
        imageRendering: 'pixelated',
        boxShadow: '0 0 0 4px #111724, 0 0 0 8px #d4a72c'
      }}>
        {/* Pixel blocks animation */}
        <div className="flex space-x-2 mb-2">
          <div className="w-3 h-3 bg-[#fff4d4] animate-pulse"></div>
          <div className="w-3 h-3 bg-[#fff4d4] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-[#fff4d4] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>

        {/* Loading text with pixel font */}
        <div className="font-mono text-[#fff4d4] text-sm tracking-wider" style={{
          fontFamily: 'Courier New, monospace',
          textShadow: '2px 2px 0 #d4a72c',
          imageRendering: 'pixelated'
        }}>
          LOADING...
        </div>

        {/* Spinning pixel square */}
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 border-2 border-[#fff4d4] animate-spin" style={{
            animation: 'spin 2s linear infinite',
            imageRendering: 'pixelated'
          }}></div>
          <div className="absolute top-1 left-1 w-1 h-1 bg-[#fff4d4]"></div>
          <div className="absolute top-1 right-1 w-1 h-1 bg-[#fff4d4]"></div>
          <div className="absolute bottom-1 left-1 w-1 h-1 bg-[#fff4d4]"></div>
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-[#fff4d4]"></div>
        </div>
      </div>
    </div>
  );
}
