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
        const params = new URLSearchParams();
        params.set('car', carId);
        if (bookingData.pickup) params.set('pickup', bookingData.pickup);
        if (bookingData.dropoff) params.set('dropoff', bookingData.dropoff);
        if (bookingData.pickupDate) params.set('pickupDate', bookingData.pickupDate);
        if (bookingData.returnDate) params.set('returnDate', bookingData.returnDate);
        link.href = `confirm.html?${params.toString()}`;
    });

    document.title = `การจอง - ${car.name} - CarRent`;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCarRentDetails);
} else {
    updateCarRentDetails();
}
