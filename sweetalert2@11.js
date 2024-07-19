(function() {
    // สร้างฟังก์ชันสำหรับทำให้หน้าเว็บมืดทั้งหน้าและแสดงข้อความแจ้งเตือน
    function darkOverlay() {
        var overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.95);
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 24px;
            text-align: center;
            flex-direction: column;
        `;
        overlay.innerHTML = '<div>คุณกำลังละเมิดทรัพย์สินทางปัญญา</div><div style="font-size: 18px; margin-top: 20px;">©️ครูอั๋น ใจดี</div>';
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden'; // ป้องกันการเลื่อนหน้า
    }

    // ตรวจสอบการเปลี่ยนแปลงของ DOM
    var observer = new MutationObserver(function(mutations) {
        if (!document.body.contains(banner) || !banner.textContent.includes('©️พัฒนาโดย ครูอั๋น ใจดี')) {
            observer.disconnect(); // หยุดการสังเกตการณ์
            darkOverlay(); // แสดงโอเวอร์เลย์สีดำทั้งหน้า
        }
    });
    observer.observe(document.body, {
        attributes: true,
        childList: true,
        subtree: true
    });

    // ป้องกันการใช้ Developer Tools และคีย์ลัด
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.onkeydown = function(e) {
        if (e.keyCode == 123) return false; // F12
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false; // Ctrl+Shift+I
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false; // Ctrl+Shift+C
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false; // Ctrl+Shift+J
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false; // Ctrl+U
    };

    // ป้องกันการใช้ inspect
    setInterval(function() {
        if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
            darkOverlay();
        }
    }, 1000);
})();
