// contact.html - Tailwind Configuration
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#137fec",
                "background-light": "#f6f7f8",
                "background-dark": "#101922",
            },
            fontFamily: {
                "display": ["Plus Jakarta Sans", "Noto Sans Thai", "sans-serif"],
                "sans": ["Plus Jakarta Sans", "Noto Sans Thai", "sans-serif"],
            },
            borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
        },
    },
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.md\\:hidden .material-symbols-outlined');
    const mobileMenuId = 'mobile-menu';
    
    // Create mobile menu if not exists
    if (menuButton && !document.getElementById(mobileMenuId)) {
        const header = document.querySelector('header');
        const mobileMenu = document.createElement('div');
        mobileMenu.id = mobileMenuId;
        mobileMenu.className = 'hidden md:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#1a202c] border-b border-[#f0f2f4] dark:border-gray-700 shadow-lg z-40';
        mobileMenu.innerHTML = `
            <div class="flex flex-col p-4 space-y-4">
                <a class="text-sm font-medium leading-normal hover:text-primary transition-colors py-2" href="index.html">หน้าแรก</a>
                <a class="text-sm font-medium leading-normal hover:text-primary transition-colors py-2" href="Searchcar.html">ค้นหารถ</a>
                <a class="text-sm font-medium leading-normal hover:text-primary transition-colors py-2" href="index.html#promotions">โปรโมชั่น</a>
                <a class="text-sm font-medium leading-normal hover:text-primary transition-colors py-2" href="tellcontact.html">ช่วยเหลือ</a>
                <div class="flex flex-col gap-2 pt-4 border-t border-[#f0f2f4] dark:border-gray-700">
                    <a href="login.html" class="flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
                        เข้าสู่ระบบ
                    </a>
                    <a href="register.html" class="flex items-center justify-center rounded-lg h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold hover:bg-gray-200 transition-colors">
                        ลงทะเบียน
                    </a>
                </div>
            </div>
        `;
        header.appendChild(mobileMenu);
        
        // Toggle menu
        menuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            menuButton.textContent = mobileMenu.classList.contains('hidden') ? 'menu' : 'close';
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!header.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                menuButton.textContent = 'menu';
            }
        });
    }
    
    // ...existing calendar code...
});
