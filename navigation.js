/* ========================================
   NAVIGATION - Zentral verwaltet
   KerniiTV_97
   ======================================== */

const navigationHTML = `
<header class="glass-nav">
    <div class="logo"><a href="index.html">KerniiTV_97</a></div>
    <nav>
        <a href="index.html">Willkommen</a>
        
        <!-- Dropdown Herzblut Kollektiv -->
        <div class="dropdown">
            <a href="herzblut-kollektiv.html" class="dropdown-toggle">
                Herzblut Kollektiv <span class="dropdown-arrow">▾</span>
            </a>
            <div class="dropdown-menu glass-dropdown">
                <a href="streamer.html">🎮 Streamer</a>
                <a href="mitglieder.html">🏆 Mitglieder</a>
                <a href="mitglied-werden.html">✨ Mitglied werden</a>
            </div>
        </div>
        
        <!-- Dropdown Diamond Painting -->
        <div class="dropdown">
            <a href="diamond.html" class="dropdown-toggle">
                Diamond Painting <span class="dropdown-arrow">▾</span>
            </a>
            <div class="dropdown-menu glass-dropdown">
                <a href="diamond-werke.html">🖼️ Meine Werke</a>
                <a href="diamond-auftrag.html">📧 Auftragsarbeit</a>
                <a href="diamond-kunden.html">🎨 Kunden-Werke</a>
            </div>
        </div>
        
        <!-- Dropdown Epoxidharz Gießen -->
        <div class="dropdown">
            <a href="epoxid.html" class="dropdown-toggle">
                Epoxidharz Gießen <span class="dropdown-arrow">▾</span>
            </a>
            <div class="dropdown-menu glass-dropdown">
                <a href="epoxid-werke.html">🖼️ Meine Werke</a>
                <a href="epoxid-auftrag.html">📧 Auftragsarbeit</a>
                <a href="epoxid-shop.html">🛒 Shop / Zu verkaufen</a>
            </div>
        </div>
    </nav>
</header>
`;

document.addEventListener('DOMContentLoaded', function() {
    const navPlaceholder = document.getElementById('navigation-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navigationHTML;
    }
});