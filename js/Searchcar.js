// Searchcar.html - Tailwind Configuration
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
                "display": ["Plus Jakarta Sans", "sans-serif"]
            },
            borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
        },
    },
}

// เก็บข้อมูลการค้นหา
let searchData = {
    pickup: '',
    dropoff: '',
    pickupDate: '',
    returnDate: ''
};

// โหลดข้อมูลจาก URL parameters เมื่อหน้าโหลดเสร็จ
document.addEventListener('DOMContentLoaded', function() {
    loadSearchParams();
    setupCarLinks();
});

function loadSearchParams() {
    const urlParams = new URLSearchParams(window.location.search);
    
    searchData.pickup = urlParams.get('pickup') || '';
    searchData.dropoff = urlParams.get('dropoff') || '';
    searchData.pickupDate = urlParams.get('pickupDate') || '';
    searchData.returnDate = urlParams.get('returnDate') || '';
    
    // ใส่ค่าลงใน input fields
    const pickupInput = document.getElementById('search-pickup-location');
    if (pickupInput && searchData.pickup) {
        pickupInput.value = searchData.pickup;
    }
    
    // วันรับรถ
    const pickupDateInput = document.getElementById('search-pickup-date');
    if (pickupDateInput && searchData.pickupDate) {
        pickupDateInput.value = searchData.pickupDate;
    }
    
    // วันคืนรถ
    const returnDateInput = document.getElementById('search-return-date');
    if (returnDateInput && searchData.returnDate) {
        returnDateInput.value = searchData.returnDate;
    }
    
    console.log('Search params loaded:', searchData);
}

// ตั้งค่าลิงก์รถให้ส่งข้อมูลไปด้วย
function setupCarLinks() {
    const carLinks = document.querySelectorAll('a[href^="detail.html"]');
    
    carLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // ดึงข้อมูลปัจจุบันจาก input
            const pickupInput = document.getElementById('search-pickup-location');
            const pickupDateInput = document.getElementById('search-pickup-date');
            const returnDateInput = document.getElementById('search-return-date');
            
            const pickup = pickupInput?.value || searchData.pickup;
            const dropoff = searchData.dropoff || pickup; // ใช้ค่า dropoff จาก URL หรือใช้ค่าเดียวกับ pickup
            const pickupDate = pickupDateInput?.value || searchData.pickupDate;
            const returnDate = returnDateInput?.value || searchData.returnDate;
            
            // สร้าง URL ใหม่พร้อมข้อมูล
            const originalUrl = new URL(this.href, window.location.origin);
            const params = new URLSearchParams(originalUrl.search);
            
            // เก็บ car parameter จาก URL เดิม
            const carId = params.get('car');
            
            if (carId) params.set('car', carId);
            if (pickup) params.set('pickup', pickup);
            if (dropoff) params.set('dropoff', dropoff);
            if (pickupDate) params.set('pickupDate', pickupDate);
            if (returnDate) params.set('returnDate', returnDate);
            
            console.log('Navigating to detail.html with params:', params.toString());
            window.location.href = originalUrl.pathname + '?' + params.toString();
        });
    });
}

// Google Places Autocomplete สำหรับหน้า Search
window.initSearchPageAutocomplete = function() {
    console.log('Google Maps API loaded on Search page');
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupSearchAutocomplete);
    } else {
        setupSearchAutocomplete();
    }
};

function setupSearchAutocomplete() {
    const pickupInput = document.getElementById('search-pickup-location');
    
    if (!pickupInput) {
        console.log('Pickup input not found');
        return;
    }
    
    if (!window.google || !window.google.maps || !window.google.maps.places) {
        console.log('Google Maps Places API not loaded');
        return;
    }
    
    try {
        const options = {
            componentRestrictions: { country: 'th' },
            fields: ['place_id', 'name', 'formatted_address', 'geometry']
        };
        
        const pickupAutocomplete = new google.maps.places.Autocomplete(pickupInput, options);
        pickupAutocomplete.addListener('place_changed', function() {
            const place = pickupAutocomplete.getPlace();
            if (place && place.name) {
                console.log('สถานที่รับรถ:', place.name, place.formatted_address);
            }
        });
        
        console.log('Google Places Autocomplete พร้อมใช้งานในหน้า Search');
    } catch (error) {
        console.error('Error initializing autocomplete:', error);
    }
}
// ==================== ระบบตัวกรอง ====================

// ตั้งค่าตัวกรองเมื่อหน้าโหลดเสร็จ
document.addEventListener('DOMContentLoaded', function() {
    setupFilters();
});

function setupFilters() {
    // ตัวกรองประเภทรถ
    const typeCheckboxes = document.querySelectorAll('.filter-type');
    typeCheckboxes.forEach(cb => {
        cb.addEventListener('change', applyFilters);
    });

    // ตัวกรองข้อมูลจำเพาะ
    const specCheckboxes = document.querySelectorAll('.filter-spec');
    specCheckboxes.forEach(cb => {
        cb.addEventListener('change', applyFilters);
    });

    // ตัวกรองราคา
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const priceRange = document.getElementById('price-range');

    if (minPriceInput) {
        minPriceInput.addEventListener('input', applyFilters);
    }
    if (maxPriceInput) {
        maxPriceInput.addEventListener('input', applyFilters);
    }
    if (priceRange) {
        priceRange.addEventListener('input', function() {
            if (maxPriceInput) {
                maxPriceInput.value = this.value;
            }
            applyFilters();
        });
    }

    // ปุ่มล้างตัวกรอง
    const clearBtn = document.getElementById('clear-filters');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearFilters);
    }

    // เรียงลำดับ
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', applyFilters);
    }

    console.log('ระบบตัวกรองพร้อมใช้งาน');
}

function applyFilters() {
    const carCards = document.querySelectorAll('.car-card');
    
    // รับค่าตัวกรองประเภทรถ
    const selectedTypes = [];
    document.querySelectorAll('.filter-type:checked').forEach(cb => {
        selectedTypes.push(cb.dataset.type);
    });

    // รับค่าตัวกรองข้อมูลจำเพาะ
    const selectedSpecs = [];
    document.querySelectorAll('.filter-spec:checked').forEach(cb => {
        selectedSpecs.push(cb.dataset.spec);
    });

    // รับค่าราคา
    const minPrice = parseInt(document.getElementById('min-price')?.value) || 500;
    const maxPrice = parseInt(document.getElementById('max-price')?.value) || 5000;

    let visibleCount = 0;
    const visibleCards = [];

    carCards.forEach(card => {
        const carType = card.dataset.type;
        const carPrice = parseInt(card.dataset.price);
        const carTransmission = card.dataset.transmission;
        const carFuel = card.dataset.fuel;

        let show = true;

        // กรองตามประเภทรถ (ถ้าเลือกอย่างน้อย 1 อัน)
        if (selectedTypes.length > 0 && !selectedTypes.includes(carType)) {
            show = false;
        }

        // กรองตามราคา
        if (carPrice < minPrice || carPrice > maxPrice) {
            show = false;
        }

        // กรองตามข้อมูลจำเพาะ
        if (selectedSpecs.length > 0) {
            let specMatch = false;
            
            if (selectedSpecs.includes('auto') && carTransmission === 'auto') {
                specMatch = true;
            }
            if (selectedSpecs.includes('manual') && carTransmission === 'manual') {
                specMatch = true;
            }
            if (selectedSpecs.includes('ev') && carFuel === 'ev') {
                specMatch = true;
            }
            
            if (!specMatch) {
                show = false;
            }
        }

        if (show) {
            card.style.display = '';
            visibleCount++;
            visibleCards.push(card);
        } else {
            card.style.display = 'none';
        }
    });

    // เรียงลำดับ
    sortCards(visibleCards);

    // อัพเดทจำนวนรถที่พบ
    const resultsCount = document.getElementById('results-count');
    if (resultsCount) {
        resultsCount.textContent = `พบรถว่าง ${visibleCount} คัน`;
    }

    console.log(`กรองแล้ว: ${visibleCount} คัน`);
}

function sortCards(cards) {
    const sortSelect = document.getElementById('sort-select');
    const sortValue = sortSelect?.value || 'price-asc';
    const grid = document.getElementById('car-grid');

    if (!grid) return;

    // เรียงลำดับการ์ด
    cards.sort((a, b) => {
        const priceA = parseInt(a.dataset.price);
        const priceB = parseInt(b.dataset.price);

        if (sortValue === 'price-asc') {
            return priceA - priceB;
        } else if (sortValue === 'price-desc') {
            return priceB - priceA;
        }
        return 0;
    });

    // ย้ายการ์ดตามลำดับใหม่
    cards.forEach(card => {
        grid.appendChild(card);
    });
}

function clearFilters() {
    // ล้าง checkbox ประเภทรถ
    document.querySelectorAll('.filter-type').forEach(cb => {
        cb.checked = false;
    });

    // ล้าง checkbox ข้อมูลจำเพาะ
    document.querySelectorAll('.filter-spec').forEach(cb => {
        cb.checked = false;
    });

    // รีเซ็ตราคา
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const priceRange = document.getElementById('price-range');

    if (minPriceInput) minPriceInput.value = 500;
    if (maxPriceInput) maxPriceInput.value = 5000;
    if (priceRange) priceRange.value = 5000;

    // รีเซ็ตการเรียงลำดับ
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) sortSelect.value = 'price-asc';

    // แสดงรถทั้งหมด
    applyFilters();

    console.log('ล้างตัวกรองแล้ว');
}