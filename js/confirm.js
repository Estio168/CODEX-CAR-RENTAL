// confirm.html - Tailwind Configuration
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
                "body": ["Noto Sans Thai", "sans-serif"]
            },
            borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
        },
    },
}

// ฐานข้อมูลรถ (เหมือนกับใน detail.js)
const carsData = {
    spark: { name: "Chevrolet Spark", price: 850, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzWSlUKCgiNFjsnFd1qousBUzgzA3-Hm19rqURUBQA-Vtv_Rg8EjAZ6jfKgp1Mx5Pa5I8-QC8uLo3FY59wVyombCyOMVjZt6Jlbmvv08-25LVRaoQJ3st6wZYUtupbMmQdoQXJ6j2vkGBici99-fvoER4V68qUlAB_wBLkmQxC3PuIRLt4ubndfVRFrCKLueFsadndq_4-PX7FFmTidcjC12f74leavgdCQ54LnFEHU2mQCT64UUB3LP-GQ8TSIoNvC38HneSpY1FV", seats: "4 ที่นั่ง", transmission: "อัตโนมัติ", luggage: "2 ใบ" },
    vios: { name: "Toyota Vios", price: 1200, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmashxqV0Q-na1lqLMLSj4hdAruC4VCLKGcbswquWLf9STQb2bDc_u9RC1y1w7hyIs__49NPA8wwdKNVY5nV-Eb4SnhBW_gUcacVypXhnS4GmGs5j6h0whODBxOcnhEHt_YGhXS5vHlC1KsDiZlxbnb7OLyeuf1wDy-HWpeFYAalb93pLpQ53IKGKJHxYtY6A3sFVYQEkax-cRE5nrC_8i5o6iFKQGR8JCYj5oN1jAZ4VNX3KnhAPYOYym7Saw2FPywiVewXc8Nx6d", seats: "5 ที่นั่ง", transmission: "อัตโนมัติ", luggage: "2 ใบใหญ่" },
    hrv: { name: "Honda HR-V", price: 1850, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAppJiw5eBPqfWVMNnGHrBbroIt0filFFavNmM3-TLDw4sEEObGG_kcl6qQ-_Xr6ee5cm2_T_k2bBN50Lgooh1qSphMj0BO4IVHNlSexN3aULhGsVpAw2gK2gTb_Obx93RikYirBjIeRAHXulwG0x5Lz3lvCpqyv3BxL_PlxTOb4gjflA0ZOyE6ElbOgVtPL76_ZFUGpKnDtehYml0-6E0XMqMSlTBRLb8a1uU-8p9FPv3LjI9b8Z8Gqv8TaQsBB1YItZt4112wpY8j", seats: "5 ที่นั่ง", transmission: "อัตโนมัติ", luggage: "3 ใบ" },
    bmw3: { name: "BMW Series 3", price: 4500, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCN8P6hV-zAo4BL7boEgRLUBun5X3VqyiZvdJiN-csblv9m98P8YfH-2xyng_riAXaB8bUUCVRxCzbg3UldC1EonNXXAYbDIAe8cq6UDuuEaNFo9y_DtLwN_mT_5y8dQeuo7JBvf_39oSL7O3mIBbPnYCWil-Fa6HEIkEm9b_If9mkPz9Jmmmn4KU-5v1Q0WC5ODvTAcg7KU109NetrB59h_PBGFULfJAIl_Bey9z2ljctbVyVv0g8HAlUb73vSrDP4UpCYkwhmAgTe", seats: "5 ที่นั่ง", transmission: "อัตโนมัติ", luggage: "2 ใบใหญ่" },
    tesla3: { name: "Tesla Model 3", price: 3200, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8hv5Wndbs5iFNYWFHVhklGN7XbAz_fgaMtc5zU00frSW3e8JVTVTGLX70hs6BwXsz67dA_jeQmvCcPH59-OnjzWbi_1RQ8-0ZuVyX8XO7-6hHA8d2AbOTiKsS2aBIZ_RElLFKun2golZifYEc_rpy4TSVY54qiUuMWfM7gh7FD4zLmo9srIk3X7iVdYvnVeo3tRmrHLX1-F6wEcZwvcjp4Mmi-XN5EdLNItIeB4HXIZ6qiDQiGpagmOHK66wNB7n8yIyZbzj9q0Jw", seats: "5 ที่นั่ง", transmission: "อัตโนมัติ", luggage: "2 ใบ" },
    commuter: { name: "Toyota Commuter", price: 2500, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDW3EYNrPg_RCnLPj-W24qleiP2RWUMQhvfX_lUMqWIDsmeH2V117Irgatr99DSdxtXcAdnjX_bCspBYcJtWFiddFTNrxQXt40zr8eDYqc4Eg2HPqh6_CW1-yipr2jcud1ZvzUAN7I4HJUUrbVehl_lu-FW7rdcwzFw_Gk2uVE8hjDL4doA_AR3UKBWebril4z59lAf_bDYuLofRTJEnh75oJk8F6b7-X_qKDDHAQ869qGzoXb02Llj60S7n_wicXDKMq2BH8ZnBpcw", seats: "11 ที่นั่ง", transmission: "เกียร์ธรรมดา", luggage: "4 ใบใหญ่" }
};

function getCarIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('car') || 'vios';
}

function getBookingDataFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        pickup: urlParams.get('pickup') || 'สนามบินสุวรรณภูมิ',
        dropoff: urlParams.get('dropoff') || 'สนามบินสุวรรณภูมิ',
        pickupDate: urlParams.get('pickupDate') || '',
        returnDate: urlParams.get('returnDate') || '',
        pickupTime: urlParams.get('pickupTime') || '10:00',
        returnTime: urlParams.get('returnTime') || '18:00'
    };
}

function formatThaiDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const thaiMonths = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    const day = date.getDate();
    const month = thaiMonths[date.getMonth()];
    const year = date.getFullYear() + 543;
    return `${day} ${month} ${year}`;
}

function formatTime(timeString) {
    if (!timeString) return '';
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'น.' : 'น.';
    return `${timeString} ${ampm}`;
}

function updateConfirmDetails() {
    const carId = getCarIdFromURL();
    const car = carsData[carId];
    
    if (!car) {
        console.log('ไม่พบข้อมูลรถ ID:', carId);
        return;
    }

    console.log('กำลังอัพเดทหน้า confirm สำหรับรถ:', car.name);

    const days = 3;
    const subtotal = car.price * days;
    const tax = Math.round(subtotal * 0.07);
    const total = subtotal + tax;

    // อัพเดทชื่อรถ
    const carNameElement = document.querySelector('h4.text-xl.font-bold');
    if (carNameElement) {
        carNameElement.textContent = car.name;
    }

    // อัพเดทรูปรถ - ค้นหา div ที่มี background-image
    const carImageDiv = document.querySelector('.aspect-video.rounded-lg .bg-cover, .aspect-video .bg-cover');
    if (carImageDiv) {
        carImageDiv.style.backgroundImage = `url('${car.image}')`;
        carImageDiv.setAttribute('data-alt', car.name);
    }

    // ถ้าไม่เจอ ลองค้นหาแบบอื่น
    const carImageContainer = document.querySelector('.aspect-video.rounded-lg');
    if (carImageContainer && !carImageDiv) {
        const innerDiv = carImageContainer.querySelector('div');
        if (innerDiv) {
            innerDiv.style.backgroundImage = `url('${car.image}')`;
            innerDiv.setAttribute('data-alt', car.name);
        }
    }

    // อัพเดทข้อมูลสเปค
    const specs = document.querySelectorAll('.inline-flex.items-center.gap-1.px-3.py-1 span:last-child');
    if (specs.length >= 3) {
        specs[0].textContent = car.seats;
        specs[1].textContent = car.transmission;
        specs[2].textContent = car.luggage;
    }

    // อัพเดทราคาในสรุปยอด
    const priceRows = document.querySelectorAll('.space-y-3.pb-4 .flex.justify-between');
    if (priceRows.length >= 2) {
        const priceSpan = priceRows[0].querySelector('span:last-child');
        if (priceSpan) priceSpan.textContent = `฿${subtotal.toLocaleString()}`;
        
        const taxSpan = priceRows[1].querySelector('span:last-child');
        if (taxSpan) taxSpan.textContent = `฿${tax.toLocaleString()}`;
    }

    // อัพเดทยอดรวม
    const totalElement = document.querySelector('.text-2xl.font-black.text-primary');
    if (totalElement) {
        totalElement.textContent = `฿${total.toLocaleString()}`;
    }

    // อัพเดทข้อมูลสถานที่และวันที่จาก URL
    const bookingData = getBookingDataFromURL();
    
    const pickupLocationEl = document.getElementById('confirm-pickup-location');
    if (pickupLocationEl && bookingData.pickup) {
        pickupLocationEl.textContent = bookingData.pickup;
    }
    
    const dropoffLocationEl = document.getElementById('confirm-dropoff-location');
    if (dropoffLocationEl && bookingData.dropoff) {
        dropoffLocationEl.textContent = bookingData.dropoff;
    }
    
    const pickupDateEl = document.getElementById('confirm-pickup-date');
    if (pickupDateEl && bookingData.pickupDate) {
        const pickupDateStr = formatThaiDate(bookingData.pickupDate);
        const pickupTimeStr = bookingData.pickupTime || '10:00';
        pickupDateEl.textContent = `${pickupDateStr}, ${pickupTimeStr} น.`;
    }
    
    const dropoffDateEl = document.getElementById('confirm-dropoff-date');
    if (dropoffDateEl && bookingData.returnDate) {
        const dropoffDateStr = formatThaiDate(bookingData.returnDate);
        const returnTimeStr = bookingData.returnTime || '18:00';
        dropoffDateEl.textContent = `${dropoffDateStr}, ${returnTimeStr} น.`;
    }

    document.title = `การจองสำเร็จ - ${car.name} - CarRent`;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateConfirmDetails);
} else {
    updateConfirmDetails();
}
