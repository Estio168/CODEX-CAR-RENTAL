// index.html - Tailwind Configuration
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#137fec",
                "primary-hover": "#0f66bd",
                "background-light": "#f6f7f8",
                "background-dark": "#101922",
            },
            fontFamily: {
                "display": ["Plus Jakarta Sans", "Noto Sans Thai", "sans-serif"],
                "body": ["Plus Jakarta Sans", "Noto Sans Thai", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
                "full": "9999px"
            },
        },
    },
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Google Places Autocomplete - Global callback function
function initGooglePlacesAutocomplete() {
    console.log('Google Maps API loaded successfully');
    
    // รอให้ DOM โหลดเสร็จก่อนเรียกใช้งาน
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupAutocomplete);
    } else {
        setupAutocomplete();
    }
}

function setupAutocomplete() {
    const pickupInput = document.getElementById('pickup-location');
    const dropoffInput = document.getElementById('dropoff-location');
    
    if (!pickupInput || !dropoffInput) {
        console.log('Input fields not found');
        return;
    }
    
    if (!window.google || !window.google.maps || !window.google.maps.places) {
        console.log('Google Maps Places API not loaded');
        return;
    }
    
    try {
        // ตั้งค่า options สำหรับ autocomplete
        const options = {
            componentRestrictions: { country: 'th' }, // จำกัดเฉพาะประเทศไทย
            fields: ['place_id', 'name', 'formatted_address', 'geometry']
        };
        
        // สร้าง autocomplete สำหรับช่องรับรถ
        const pickupAutocomplete = new google.maps.places.Autocomplete(pickupInput, options);
        pickupAutocomplete.addListener('place_changed', function() {
            const place = pickupAutocomplete.getPlace();
            if (place && place.name) {
                console.log('สถานที่รับรถ:', place.name, place.formatted_address);
            }
        });
        
        // สร้าง autocomplete สำหรับช่องคืนรถ
        const dropoffAutocomplete = new google.maps.places.Autocomplete(dropoffInput, options);
        dropoffAutocomplete.addListener('place_changed', function() {
            const place = dropoffAutocomplete.getPlace();
            if (place && place.name) {
                console.log('สถานที่คืนรถ:', place.name, place.formatted_address);
            }
        });
        
        console.log('Google Places Autocomplete พร้อมใช้งาน');
    } catch (error) {
        console.error('Error initializing autocomplete:', error);
    }
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('header button');
    const desktopMenu = document.querySelector('header .hidden.lg\\:flex');
    
    if (mobileMenuButton && desktopMenu) {
        // สร้าง Mobile Menu
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'hidden lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#101922] border-b border-gray-200 dark:border-gray-700 shadow-lg';
        mobileMenu.id = 'mobile-menu';
        mobileMenu.innerHTML = `
            <nav class="flex flex-col px-4 py-3">
                <a class="py-3 text-sm font-medium hover:text-primary transition-colors border-b border-gray-100 dark:border-gray-700" href="index.html">หน้าหลัก</a>
                <a class="py-3 text-sm font-medium hover:text-primary transition-colors border-b border-gray-100 dark:border-gray-700" href="Searchcar.html">รถเช่า</a>
                <a class="py-3 text-sm font-medium hover:text-primary transition-colors border-b border-gray-100 dark:border-gray-700" href="#promotions">โปรโมชั่น</a>
                <a class="py-3 text-sm font-medium hover:text-primary transition-colors border-b border-gray-100 dark:border-gray-700" href="contact.html">ติดต่อเรา</a>
                <div class="flex flex-col gap-2 pt-4">
                    <a href="login.html" class="w-full py-2.5 text-center bg-primary text-white text-sm font-bold rounded-lg">เข้าสู่ระบบ</a>
                    <a href="register.html" class="w-full py-2.5 text-center bg-gray-100 dark:bg-gray-700 text-[#111418] dark:text-white text-sm font-bold rounded-lg">ลงทะเบียน</a>
                </div>
            </nav>
        `;
        
        mobileMenuButton.parentElement.parentElement.appendChild(mobileMenu);
        
        // Toggle Menu
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuButton.querySelector('.material-symbols-outlined');
            icon.textContent = mobileMenu.classList.contains('hidden') ? 'menu' : 'close';
        });
    }
});

// ปุ่มค้นหารถ - ส่งข้อมูลไปหน้า Searchcar.html
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const pickupLocation = document.getElementById('pickup-location')?.value || '';
            const dropoffLocation = document.getElementById('dropoff-location')?.value || '';
            const pickupDate = document.getElementById('pickup-date')?.value || '';
            const returnDate = document.getElementById('return-date')?.value || '';
            
            // สร้าง URL parameters
            const params = new URLSearchParams();
            if (pickupLocation) params.set('pickup', pickupLocation);
            if (dropoffLocation) params.set('dropoff', dropoffLocation);
            if (pickupDate) params.set('pickupDate', pickupDate);
            if (returnDate) params.set('returnDate', returnDate);
            
            // ไปหน้า Searchcar.html พร้อมข้อมูล
            window.location.href = 'Searchcar.html?' + params.toString();
        });
    }
});
