// carrent.html - Tailwind Configuration
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

const carsData = {
    spark: { name: "Chevrolet Spark", price: 850, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzWSlUKCgiNFjsnFd1qousBUzgzA3-Hm19rqURUBQA-Vtv_Rg8EjAZ6jfKgp1Mx5Pa5I8-QC8uLo3FY59wVyombCyOMVjZt6Jlbmvv08-25LVRaoQJ3st6wZYUtupbMmQdoQXJ6j2vkGBici99-fvoER4V68qUlAB_wBLkmQxC3PuIRLt4ubndfVRFrCKLueFsadndq_4-PX7FFmTidcjC12f74leavgdCQ54LnFEHU2mQCT64UUB3LP-GQ8TSIoNvC38HneSpY1FV", category: "Eco Car" },
    vios: { name: "Toyota Vios", price: 1200, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmashxqV0Q-na1lqLMLSj4hdAruC4VCLKGcbswquWLf9STQb2bDc_u9RC1y1w7hyIs__49NPA8wwdKNVY5nV-Eb4SnhBW_gUcacVypXhnS4GmGs5j6h0whODBxOcnhEHt_YGhXS5vHlC1KsDiZlxbnb7OLyeuf1wDy-HWpeFYAalb93pLpQ53IKGKJHxYtY6A3sFVYQEkax-cRE5nrC_8i5o6iFKQGR8JCYj5oN1jAZ4VNX3KnhAPYOYym7Saw2FPywiVewXc8Nx6d", category: "Sedan" },
    hrv: { name: "Honda HR-V", price: 1850, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAppJiw5eBPqfWVMNnGHrBbroIt0filFFavNmM3-TLDw4sEEObGG_kcl6qQ-_Xr6ee5cm2_T_k2bBN50Lgooh1qSphMj0BO4IVHNlSexN3aULhGsVpAw2gK2gTb_Obx93RikYirBjIeRAHXulwG0x5Lz3lvCpqyv3BxL_PlxTOb4gjflA0ZOyE6ElbOgVtPL76_ZFUGpKnDtehYml0-6E0XMqMSlTBRLb8a1uU-8p9FPv3LjI9b8Z8Gqv8TaQsBB1YItZt4112wpY8j", category: "SUV" },
    bmw3: { name: "BMW Series 3", price: 4500, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCN8P6hV-zAo4BL7boEgRLUBun5X3VqyiZvdJiN-csblv9m98P8YfH-2xyng_riAXaB8bUUCVRxCzbg3UldC1EonNXXAYbDIAe8cq6UDuuEaNFo9y_DtLwN_mT_5y8dQeuo7JBvf_39oSL7O3mIBbPnYCWil-Fa6HEIkEm9b_If9mkPz9Jmmmn4KU-5v1Q0WC5ODvTAcg7KU109NetrB59h_PBGFULfJAIl_Bey9z2ljctbVyVv0g8HAlUb73vSrDP4UpCYkwhmAgTe", category: "Luxury Sedan" },
    tesla3: { name: "Tesla Model 3", price: 3200, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8hv5Wndbs5iFNYWFHVhklGN7XbAz_fgaMtc5zU00frSW3e8JVTVTGLX70hs6BwXsz67dA_jeQmvCcPH59-OnjzWbi_1RQ8-0ZuVyX8XO7-6hHA8d2AbOTiKsS2aBIZ_RElLFKun2golZifYEc_rpy4TSVY54qiUuMWfM7gh7FD4zLmo9srIk3X7iVdYvnVeo3tRmrHLX1-F6wEcZwvcjp4Mmi-XN5EdLNItIeB4HXIZ6qiDQiGpagmOHK66wNB7n8yIyZbzj9q0Jw", category: "Electric" },
    commuter: { name: "Toyota Commuter", price: 2500, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDW3EYNrPg_RCnLPj-W24qleiP2RWUMQhvfX_lUMqWIDsmeH2V117Irgatr99DSdxtXcAdnjX_bCspBYcJtWFiddFTNrxQXt40zr8eDYqc4Eg2HPqh6_CW1-yipr2jcud1ZvzUAN7I4HJUUrbVehl_lu-FW7rdcwzFw_Gk2uVE8hjDL4doA_AR3UKBWebril4z59lAf_bDYuLofRTJEnh75oJk8F6b7-X_qKDDHAQ869qGzoXb02Llj60S7n_wicXDKMq2BH8ZnBpcw", category: "Van" }
};

function getCarIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('car') || 'tesla3';
}

// ดึงข้อมูลสถานที่และวันที่จาก URL
function getBookingDataFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const pickup = urlParams.get('pickup') || '';
    return {
        pickup: pickup,
        dropoff: urlParams.get('dropoff') || pickup, // ถ้าไม่มี dropoff ใช้ค่าเดียวกับ pickup
        pickupDate: urlParams.get('pickupDate') || '',
        returnDate: urlParams.get('returnDate') || ''
    };
}

function updateCarRentDetails() {
    const carId = getCarIdFromURL();
    const car = carsData[carId];
    const bookingData = getBookingDataFromURL();
    
    if (!car) {
        console.log('ไม่พบข้อมูลรถ ID:', carId);
        return;
    }

    console.log('กำลังอัพเดทหน้า carrent สำหรับรถ:', car.name);
    console.log('ข้อมูลการจอง:', bookingData);

    // อัพเดทสถานที่รับรถ
    const pickupDisplay = document.getElementById('pickup-location-display');
    if (pickupDisplay && bookingData.pickup) {
        pickupDisplay.textContent = bookingData.pickup;
    }

    // อัพเดทสถานที่คืนรถ
    const dropoffDisplay = document.getElementById('dropoff-location-display');
    if (dropoffDisplay && bookingData.dropoff) {
        dropoffDisplay.textContent = bookingData.dropoff;
    }

    // คำนวณจำนวนวันจากวันที่เลือก
    let days = 3; // ค่าเริ่มต้น
    if (bookingData.pickupDate && bookingData.returnDate) {
        const pickup = new Date(bookingData.pickupDate);
        const returnD = new Date(bookingData.returnDate);
        const diffTime = Math.abs(returnD - pickup);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays > 0) {
            days = diffDays;
        }
    }

    const subtotal = car.price * days;
    const serviceFee = 0; // ค่าธรรมเนียมบริการ
    const discount = 500; // ส่วนลด
    const total = subtotal + serviceFee - discount;

    // อัพเดทชื่อรถในส่วน Summary Card
    const summaryCard = document.querySelector('.sticky.top-24');
    const carNameTitle = summaryCard ? summaryCard.querySelector('h3.text-xl.font-bold') : null;
    if (carNameTitle) {
        carNameTitle.textContent = car.name;
    }

    // อัพเดทหมวดหมู่รถ (เฉพาะใน Summary Card)
    const categoryText = summaryCard ? summaryCard.querySelector('.p-6 > .mb-4 > p') : null;
    if (categoryText && car.category) {
        categoryText.textContent = `หรือรถในระดับเดียวกัน - ${car.category}`;
    }

    // อัพเดทรูปรถในส่วน Summary Card - ใช้ img tag
    const carImageElement = document.querySelector('img[alt*="Tesla"], img[alt*="Model"], img[data-alt*="sedan"], img[data-alt*="car"]');
    if (carImageElement) {
        carImageElement.src = car.image;
        carImageElement.alt = car.name;
        carImageElement.setAttribute('data-alt', `${car.name} side view`);
    }

    // อัพเดทป้าย category บนรูป
    const categoryBadge = document.querySelector('.absolute.top-4.left-4');
    if (categoryBadge && car.category) {
        categoryBadge.textContent = car.category;
    }

    // อัพเดทราคาในสรุปยอด (THB)
    const summaryRows = document.querySelectorAll('.flex.justify-between.text-sm');
    summaryRows.forEach((row) => {
        const firstSpan = row.querySelector('span:first-child');
        const lastSpan = row.querySelector('span:last-child');
        
        if (firstSpan && lastSpan) {
            const text = firstSpan.textContent.toLowerCase();
            
            if (text.includes('rate') || text.includes('day')) {
                firstSpan.textContent = `฿${car.price.toLocaleString()} x ${days} วัน`;
                lastSpan.textContent = `฿${subtotal.toLocaleString()}`;
            } else if (text.includes('protection')) {
                firstSpan.textContent = 'ค่าธรรมเนียมบริการ';
                lastSpan.textContent = `฿${serviceFee.toLocaleString()}`;
            } else if (text.includes('tax') || text.includes('fee')) {
                firstSpan.textContent = 'ส่วนลดโปรโมชั่น';
                lastSpan.textContent = `-฿${discount.toLocaleString()}`;
                lastSpan.classList.add('text-green-600');
            }
        }
    });

    // อัพเดทยอดรวม (THB)
    const totalPriceElement = document.querySelector('.text-2xl.font-black.text-primary');
    if (totalPriceElement) {
        totalPriceElement.textContent = `฿${total.toLocaleString()}`;
    }

    // อัพเดท label TOTAL PRICE เป็นภาษาไทย
    const totalLabel = document.querySelector('.text-xs.font-bold.uppercase');
    if (totalLabel && totalLabel.textContent.includes('TOTAL')) {
        totalLabel.textContent = 'ยอดรวมสุทธิ';
    }

    // อัพเดท USD เป็น THB
    const currencyLabel = document.querySelector('.text-sm.text-\\[\\#617589\\]');
    if (currencyLabel && currencyLabel.textContent === 'USD') {
        currencyLabel.textContent = 'THB';
    }

    // อัพเดทลิงก์ไปหน้า confirm พร้อมส่งข้อมูลทั้งหมด
    const confirmLinks = document.querySelectorAll('a[href*="confirm"]');
    confirmLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // ดึงค่าเวลาจาก select
            const pickupTimeSelect = document.getElementById('pickup-time');
            const returnTimeSelect = document.getElementById('return-time');
            const pickupTime = pickupTimeSelect ? pickupTimeSelect.value : '10:00';
            const returnTime = returnTimeSelect ? returnTimeSelect.value : '18:00';
            
            // ใช้วันที่จาก calendar ถ้ามี หรือจาก URL
            const pickupDate = window.selectedPickupDate || bookingData.pickupDate;
            const returnDate = window.selectedReturnDate || bookingData.returnDate;
            
            const params = new URLSearchParams();
            params.set('car', carId);
            if (bookingData.pickup) params.set('pickup', bookingData.pickup);
            if (bookingData.dropoff) params.set('dropoff', bookingData.dropoff);
            if (pickupDate) params.set('pickupDate', pickupDate);
            if (returnDate) params.set('returnDate', returnDate);
            params.set('pickupTime', pickupTime);
            params.set('returnTime', returnTime);
            
            window.location.href = `confirm.html?${params.toString()}`;
        });
    });

    document.title = `การจอง - ${car.name} - CarRent`;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        updateCarRentDetails();
        initCalendar();
    });
} else {
    updateCarRentDetails();
    initCalendar();
}

// ==================== Dynamic Calendar ====================
const thaiMonths = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 
                    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];

// Calendar 1 (ซ้าย) - สำหรับวันรับรถ
let leftMonth = new Date().getMonth();
let leftYear = new Date().getFullYear();

// Calendar 2 (ขวา) - สำหรับวันคืนรถ
let rightMonth = new Date().getMonth() + 1;
let rightYear = new Date().getFullYear();
if (rightMonth > 11) {
    rightMonth = 0;
    rightYear++;
}

let selectedStartDate = null;
let selectedEndDate = null;

function initCalendar() {
    // ดึงวันที่จาก URL ถ้ามี
    const bookingData = getBookingDataFromURL();
    if (bookingData.pickupDate) {
        selectedStartDate = new Date(bookingData.pickupDate);
        leftMonth = selectedStartDate.getMonth();
        leftYear = selectedStartDate.getFullYear();
    }
    if (bookingData.returnDate) {
        selectedEndDate = new Date(bookingData.returnDate);
        rightMonth = selectedEndDate.getMonth();
        rightYear = selectedEndDate.getFullYear();
    }
    
    renderCalendars();
}

function renderCalendars() {
    const calendarContainer = document.getElementById('calendar-container');
    if (!calendarContainer) return;
    
    const thaiYearLeft = leftYear + 543;
    const thaiYearRight = rightYear + 543;
    
    // สร้าง text แสดงวันที่เลือก
    let selectedDatesText = '';
    if (selectedStartDate || selectedEndDate) {
        const formatDate = (date) => {
            if (!date) return '-';
            return `${date.getDate()} ${thaiMonths[date.getMonth()]} ${date.getFullYear() + 543}`;
        };
        selectedDatesText = `
            <div class="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-primary/30">
                <div class="flex flex-col sm:flex-row gap-4 text-sm">
                    <div class="flex-1">
                        <span class="text-gray-500 dark:text-gray-400">วันรับรถ:</span>
                        <span class="ml-2 font-bold text-primary">${selectedStartDate ? formatDate(selectedStartDate) : 'ยังไม่ได้เลือก'}</span>
                    </div>
                    <div class="flex-1">
                        <span class="text-gray-500 dark:text-gray-400">วันคืนรถ:</span>
                        <span class="ml-2 font-bold text-primary">${selectedEndDate ? formatDate(selectedEndDate) : 'ยังไม่ได้เลือก'}</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    calendarContainer.innerHTML = `
        <div class="flex flex-col lg:flex-row gap-8 overflow-x-auto pb-4">
            <!-- Month 1 (Left) - วันรับรถ -->
            <div class="flex-1 min-w-[280px]">
                <div class="flex items-center justify-between mb-4">
                    <button id="prev-month-left" class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                        <span class="material-symbols-outlined text-lg">chevron_left</span>
                    </button>
                    <span class="font-bold text-[#111418] dark:text-white">${thaiMonths[leftMonth]} ${thaiYearLeft}</span>
                    <button id="next-month-left" class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                        <span class="material-symbols-outlined text-lg">chevron_right</span>
                    </button>
                </div>
                <div id="month1-grid" class="grid grid-cols-7 gap-1 text-center">
                    ${renderDayHeaders()}
                    ${renderMonthDays(leftYear, leftMonth)}
                </div>
            </div>
            <!-- Month 2 (Right) - วันคืนรถ -->
            <div class="flex-1 min-w-[280px] border-l border-dashed border-gray-200 dark:border-gray-700 pl-0 lg:pl-8">
                <div class="flex items-center justify-between mb-4">
                    <button id="prev-month-right" class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                        <span class="material-symbols-outlined text-lg">chevron_left</span>
                    </button>
                    <span class="font-bold text-[#111418] dark:text-white">${thaiMonths[rightMonth]} ${thaiYearRight}</span>
                    <button id="next-month-right" class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                        <span class="material-symbols-outlined text-lg">chevron_right</span>
                    </button>
                </div>
                <div id="month2-grid" class="grid grid-cols-7 gap-1 text-center">
                    ${renderDayHeaders()}
                    ${renderMonthDays(rightYear, rightMonth)}
                </div>
            </div>
        </div>
        ${selectedDatesText}
    `;
    
    // ⭐ ต้องเรียก setupDayClickHandlers ทุกครั้งหลัง render
    setupDayClickHandlers();
    setupCalendarNavigation();
}

function renderDayHeaders() {
    const days = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'];
    return days.map(d => `<div class="text-xs font-bold text-[#617589] dark:text-gray-400 py-2">${d}</div>`).join('');
}

function renderMonthDays(year, month) {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let html = '';
    
    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
        html += '<div class="h-10"></div>';
    }
    
    // Days
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        date.setHours(0, 0, 0, 0);
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const isPast = date < today;
        
        // ตรวจสอบว่าเป็นวันที่เลือกหรือไม่
        const isStart = selectedStartDate && 
            date.getFullYear() === selectedStartDate.getFullYear() && 
            date.getMonth() === selectedStartDate.getMonth() && 
            date.getDate() === selectedStartDate.getDate();
        const isEnd = selectedEndDate && 
            date.getFullYear() === selectedEndDate.getFullYear() && 
            date.getMonth() === selectedEndDate.getMonth() && 
            date.getDate() === selectedEndDate.getDate();
        
        let buttonStyle = '';
        let buttonClass = 'h-10 w-10 flex items-center justify-center text-sm rounded-full transition-all ';
        
        if (isPast) {
            buttonClass += 'text-gray-300 dark:text-gray-600 cursor-not-allowed';
        } else if (isStart || isEnd) {
            // วันที่เลือก - สีฟ้า
            buttonStyle = 'background-color: #137fec !important; color: white !important;';
            buttonClass += 'font-bold cursor-pointer';
        } else {
            buttonClass += 'hover:bg-gray-100 dark:hover:bg-gray-700 text-[#111418] dark:text-white cursor-pointer';
        }
        
        html += `<button class="${buttonClass}" style="${buttonStyle}" data-date="${dateStr}" ${isPast ? 'disabled' : ''}>${day}</button>`;
    }
    
    return html;
}

function setupCalendarNavigation() {
    const today = new Date();
    
    // Left calendar navigation
    const prevLeftBtn = document.getElementById('prev-month-left');
    const nextLeftBtn = document.getElementById('next-month-left');
    
    if (prevLeftBtn) {
        prevLeftBtn.onclick = () => {
            if (leftYear > today.getFullYear() || (leftYear === today.getFullYear() && leftMonth > today.getMonth())) {
                leftMonth--;
                if (leftMonth < 0) {
                    leftMonth = 11;
                    leftYear--;
                }
                renderCalendars();
            }
        };
    }
    
    if (nextLeftBtn) {
        nextLeftBtn.onclick = () => {
            leftMonth++;
            if (leftMonth > 11) {
                leftMonth = 0;
                leftYear++;
            }
            renderCalendars();
        };
    }
    
    // Right calendar navigation
    const prevRightBtn = document.getElementById('prev-month-right');
    const nextRightBtn = document.getElementById('next-month-right');
    
    if (prevRightBtn) {
        prevRightBtn.onclick = () => {
            if (rightYear > today.getFullYear() || (rightYear === today.getFullYear() && rightMonth > today.getMonth())) {
                rightMonth--;
                if (rightMonth < 0) {
                    rightMonth = 11;
                    rightYear--;
                }
                renderCalendars();
            }
        };
    }
    
    if (nextRightBtn) {
        nextRightBtn.onclick = () => {
            rightMonth++;
            if (rightMonth > 11) {
                rightMonth = 0;
                rightYear++;
            }
            renderCalendars();
        };
    }
}

function setupDayClickHandlers() {
    const dayButtons = document.querySelectorAll('[data-date]:not([disabled])');
    console.log('Setting up handlers for', dayButtons.length, 'buttons');
    
    dayButtons.forEach(btn => {
        btn.onclick = (e) => {
            e.preventDefault();
            const dateStr = btn.getAttribute('data-date');
            const clickedDate = new Date(dateStr);
            console.log('Clicked date:', dateStr);
            
            if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
                // Start new selection
                selectedStartDate = clickedDate;
                selectedEndDate = null;
                console.log('Set start date:', selectedStartDate);
            } else if (clickedDate < selectedStartDate) {
                // Clicked before start, reset
                selectedStartDate = clickedDate;
                selectedEndDate = null;
            } else {
                // Set end date
                selectedEndDate = clickedDate;
                console.log('Set end date:', selectedEndDate);
            }
            
            renderCalendars();
            updateBookingDates();
        };
    });
}

function updateBookingDates() {
    if (selectedStartDate && selectedEndDate) {
        // คำนวณจำนวนวัน
        const diffTime = Math.abs(selectedEndDate - selectedStartDate);
        const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        // อัพเดทราคา
        const carId = getCarIdFromURL();
        const car = carsData[carId];
        if (car) {
            const subtotal = car.price * days;
            const discount = 500;
            const total = subtotal - discount;
            
            // อัพเดท summary
            const summaryRows = document.querySelectorAll('.flex.justify-between.text-sm');
            summaryRows.forEach((row) => {
                const firstSpan = row.querySelector('span:first-child');
                const lastSpan = row.querySelector('span:last-child');
                if (firstSpan && lastSpan && (firstSpan.textContent.includes('฿') || firstSpan.textContent.includes('วัน'))) {
                    firstSpan.textContent = `฿${car.price.toLocaleString()} x ${days} วัน`;
                    lastSpan.textContent = `฿${subtotal.toLocaleString()}`;
                }
            });
            
            const totalPriceElement = document.querySelector('.text-2xl.font-black.text-primary');
            if (totalPriceElement) {
                totalPriceElement.textContent = `฿${total.toLocaleString()}`;
            }
        }
        
        // อัพเดท URL parameters สำหรับส่งไปหน้าถัดไป
        const pickupDate = formatDateForURL(selectedStartDate);
        const returnDate = formatDateForURL(selectedEndDate);
        
        // เก็บไว้ใน global variable
        window.selectedPickupDate = pickupDate;
        window.selectedReturnDate = returnDate;
    }
}

function formatDateForURL(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
