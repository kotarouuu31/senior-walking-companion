import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Show our custom install prompt
      setShowPrompt(true);
    };

    const handleAppInstalled = () => {
      console.log('PWA was installed');
      setShowPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    // Clear the deferredPrompt for next time
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Don't clear deferredPrompt so user can still install later
  };

  if (!showPrompt || !deferredPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white rounded-3xl shadow-2xl border-2 border-purple-200 p-6 z-50">
      <div className="flex items-start gap-4">
        <div className="text-6xl" aria-hidden="true">📱</div>
        <div className="flex-1">
          <h3 className="text-senior-lg font-bold text-senior-contrast mb-2 leading-senior">
            ホーム画面に追加しませんか？
          </h3>
          <p className="text-senior-base text-gray-700 mb-4 leading-senior">
            「10000歩」アプリをホーム画面に追加すると、いつでも簡単にアクセスできます。
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleInstallClick}
              className="btn-senior gradient-accent flex-1"
              aria-label="アプリをホーム画面に追加する"
            >
              <span className="text-2xl mr-2" aria-hidden="true">⬇️</span>
              追加する
            </button>
            <button
              onClick={handleDismiss}
              className="btn-senior bg-gray-200 text-gray-700 hover:bg-gray-300 px-6"
              aria-label="インストール案内を閉じる"
            >
              後で
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
