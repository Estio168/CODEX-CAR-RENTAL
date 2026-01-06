// Mobile Menu Toggle Script
document.addEventListener('DOMContentLoaded', function() {
    // หา menu button ทั้ง button และ span
    const menuButton = document.querySelector('.lg\\:hidden button, .md\\:hidden button, .lg\\:hidden .material-symbols-outlined, .md\\:hidden .material-symbols-outlined');
    const mobileMenuId = 'mobile-menu';
    
    // Create mobile menu if not exists
    if (menuButton && !document.getElementById(mobileMenuId)) {
        const header = document.querySelector('header');
        const mobileMenu = document.createElement('div');
        mobileMenu.id = mobileMenuId;
        mobileMenu.className = 'hidden lg:hidden md:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#1a202c] border-b border-[#f0f2f4] dark:border-gray-700 shadow-lg z-40';
        mobileMenu.innerHTML = `
            <div class="flex flex-col p-4 space-y-4">
                <a class="text-sm font-medium leading-normal hover:text-primary transition-colors py-2 dark:text-white" href="index.html">หน้าหลัก</a>
                <a class="text-sm font-medium leading-normal hover:text-primary transition-colors py-2 dark:text-white" href="Searchcar.html">ค้นหารถ</a>
                <a class="text-sm font-medium leading-normal hover:text-primary transition-colors py-2 dark:text-white" href="index.html#promotions">โปรโมชั่น</a>
                <a class="text-sm font-medium leading-normal hover:text-primary transition-colors py-2 dark:text-white" href="contact.html">เกี่ยวกับเรา</a>
                <a class="text-sm font-medium leading-normal hover:text-primary transition-colors py-2 dark:text-white" href="tellcontact.html">ช่วยเหลือ</a>
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
        
        // Toggle menu - รองรับทั้ง button และ span
        menuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
            
            // หา icon element (อาจเป็น button หรือ span)
            const iconElement = menuButton.tagName === 'BUTTON' 
                ? menuButton.querySelector('.material-symbols-outlined') 
                : menuButton;
            
            if (iconElement) {
                iconElement.textContent = mobileMenu.classList.contains('hidden') ? 'menu' : 'close';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!header.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                
                const iconElement = menuButton.tagName === 'BUTTON' 
                    ? menuButton.querySelector('.material-symbols-outlined') 
                    : menuButton;
                
                if (iconElement) {
                    iconElement.textContent = 'menu';
                }
            }
        });
        
        // Close menu when clicking on links
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                
                const iconElement = menuButton.tagName === 'BUTTON' 
                    ? menuButton.querySelector('.material-symbols-outlined') 
                    : menuButton;
                
                if (iconElement) {
                    iconElement.textContent = 'menu';
                }
            });
        });
    }
});
