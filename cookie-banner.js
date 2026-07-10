const KTV_COOKIE_KEY = 'kerniiTV_cookieConsent';

document.addEventListener('DOMContentLoaded', function() {
    const consent = getKtvCookieConsent();
    if (!consent) {
        showKtvCookieBanner();
    } else {
        applyKtvCookieConsent(consent);
    }
});

function showKtvCookieBanner() {
    setTimeout(() => {
        const banner = document.getElementById('ktvCookieBanner');
        if (banner) banner.classList.add('ktv-show');
    }, 500);
}

function hideKtvCookieBanner() {
    const banner = document.getElementById('ktvCookieBanner');
    if (banner) banner.classList.remove('ktv-show');
}

function acceptAllCookies() {
    const consent = { necessary: true, analytics: true, marketing: true, timestamp: new Date().toISOString() };
    saveKtvCookieConsent(consent);
    applyKtvCookieConsent(consent);
    hideKtvCookieBanner();
    closeCookieSettings();
}

function declineCookies() {
    const consent = { necessary: true, analytics: false, marketing: false, timestamp: new Date().toISOString() };
    saveKtvCookieConsent(consent);
    applyKtvCookieConsent(consent);
    hideKtvCookieBanner();
    closeCookieSettings();
}

function saveCookieSettings() {
    const consent = {
        necessary: true,
        analytics: document.getElementById('ktvAnalyticsCookies').checked,
        marketing: document.getElementById('ktvMarketingCookies').checked,
        timestamp: new Date().toISOString()
    };
    saveKtvCookieConsent(consent);
    applyKtvCookieConsent(consent);
    hideKtvCookieBanner();
    closeCookieSettings();
}

function openCookieSettings() {
    const modal = document.getElementById('ktvCookieSettings');
    if (modal) {
        modal.classList.add('ktv-show');
        const consent = getKtvCookieConsent();
        if (consent) {
            document.getElementById('ktvAnalyticsCookies').checked = consent.analytics;
            document.getElementById('ktvMarketingCookies').checked = consent.marketing;
        }
    }
}

function closeCookieSettings() {
    const modal = document.getElementById('ktvCookieSettings');
    if (modal) modal.classList.remove('ktv-show');
}

function saveKtvCookieConsent(consent) {
    localStorage.setItem(KTV_COOKIE_KEY, JSON.stringify(consent));
}

function getKtvCookieConsent() {
    const stored = localStorage.getItem(KTV_COOKIE_KEY);
    return stored ? JSON.parse(stored) : null;
}

function applyKtvCookieConsent(consent) {
    if (consent.analytics) console.log('📊 Analytics aktiviert');
    if (consent.marketing) console.log('📢 Marketing aktiviert');
}

function revokeCookieConsent() {
    localStorage.removeItem(KTV_COOKIE_KEY);
    location.reload();
}

document.addEventListener('click', function(event) {
    const modal = document.getElementById('ktvCookieSettings');
    if (event.target === modal) closeCookieSettings();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') closeCookieSettings();
});